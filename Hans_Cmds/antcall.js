const util = require('util');
const fs = require('fs-extra');
const { hans } = require(__dirname + "/../Hanstz/hans");
const { format } = require(__dirname + "/../Hanstz/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

// List of bot image URLs
const botImages = [
    "https://files.catbox.moe/tor0sr.jpg",
    "https://files.catbox.moe/cm30ib.jpg",
    "https://files.catbox.moe/wg503t.jpg",
    "https://files.catbox.moe/lk8o54.jpg",
    "https://files.catbox.moe/lcwa1d.webp",
    "https://files.catbox.moe/ydsxr0.jpg",
    "https://files.catbox.moe/asr5dv.jpg",
    "https://files.catbox.moe/vx5nb3.jpg",
    "https://files.catbox.moe/7jzrae.jpg",
    "https://files.catbox.moe/cqckkq.jpg",
    "https://files.catbox.moe/sjbwgz.jpg",
    "https://files.catbox.moe/glr5zi.jpg"
];

// Track the previously selected image index
let lastImageIndex = -1;

// Function to get a random image URL without repetition
function getRandomBotImage() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * botImages.length);
    } while (randomIndex === lastImageIndex);  // Ensure it is not the same as the last image

    lastImageIndex = randomIndex;  // Update the last selected image index
    return botImages[randomIndex];
}

hans({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic, pushname } = commandeOptions;
    let { cm } = require(__dirname + "/../Hanstz/hans");
    var coms = {};
    var mode = "public";

    if ((s.MODE).toLocaleLowerCase() !== "yes") {
        mode = "private";
    }

    cm.map(async (com) => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    // Set timezone
    moment.tz.setDefault("Africa/Dar_es_Salaam");
    const temps = moment().format("HH:mm:ss");
    const date = moment().format("DD/MM/YYYY");
    const hour = moment().hour();

    // Determine greeting and emoji
    let greeting = `${nomAuteurMessage}`;
    let emoji = "🌟";
    if (hour >= 5 && hour < 12) {
        greeting = `Good Morning ${nomAuteurMessage}`;
        emoji = "☀️";
    } else if (hour >= 12 && hour < 18) {
        greeting = `Good Afternoon ${nomAuteurMessage}`;
        emoji = "🌤️";
    } else if (hour >= 18 && hour < 21) {
        greeting = `Good Evening ${nomAuteurMessage}`;
        emoji = "🌙";
    } else {
        greeting = `Good Night ${nomAuteurMessage}`;
        emoji = "🌌";
    }

    // Info and menu message
    let infoMsg = `
╭─────𝐇𝐀𝐍𝐒-𝐌𝐃──────✯
│       ${emoji} DEV 𝐇𝐀𝐍𝐒 TZ TECH ${emoji}
│────────────────|
│✦│ *𝑶𝑾𝑵𝑬𝑹*: ${s.OWNER_NAME}
│✦│ *𝑴𝑶𝑫𝑬*: ${mode === "𝚙𝚞𝚋𝚕𝚒𝚌" ? "🌐 𝚙𝚞𝚋𝚕𝚒𝚌" : "🔒 𝚙𝚛𝚒𝚟𝚊𝚝𝚎"}
│✦│ *𝐃𝐀𝐓𝐄*: ${date}
│✦│ *𝐑𝐀𝐌 𝐔𝐒𝐄𝐆𝐄*: ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│✦│ *𝐔𝐒𝐄𝐑*: ${nomAuteurMessage}
╰─────────────────✯
`;

    let menuMsg = ` 
╭─────────────────────✯
│   🌟 *𝐇𝐀𝐍𝐒 𝐌𝐃 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔* ${emoji}
│─────────────────────✯
│ᴍᴀᴅᴇ ʙʏ ʜᴀɴs ᴛᴢ ᴛᴇᴄʜ ғʀᴏᴍ ᴛᴀɴᴢᴀɴɪᴀ ${emoji}
`;

    for (const cat in coms) {
        menuMsg += `│──────────✯\n`;
        menuMsg += `│✦│ *${cat.toUpperCase()}✦\n`;
        for (const cmd of coms[cat]) {
            menuMsg += `│✦│ ${cmd}\n`;
        }
        menuMsg += `│──────────✯\n`;
    }

    menuMsg += `
✯────────────────✯
   │${emoji} 𝑴𝑨𝑫𝑬 𝑩𝒀 *𝐇𝐀𝐍𝐒 TZ* ${emoji}│
✯────────────────✯`;

    const finalMessage = `${emoji} ${greeting} ${emoji}\n\n${infoMsg}${menuMsg}`;

    try {
        // Pre-fetch the image URL
        const botImageUrl = getRandomBotImage();

        // Send message with text and audio in parallel
        await Promise.all([
            zk.sendMessage(dest, {
                text: finalMessage,
                contextInfo: {
                    mentionedJid: [nomAuteurMessage],
                    externalAdReply: {
                        title: "𝐇𝐀𝐍𝐒 MD WHATSAPP BOT",
                        body: "MADE 𝑩𝒀 𝐇𝐀𝐍𝐒 TZ",
                        thumbnailUrl: botImageUrl, // Use random image URL without repetition
                        sourceUrl: "https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: ms }),

            // Send audio message concurrently
            zk.sendMessage(dest, {
                audio: { url: "https://files.catbox.moe/se3xn2.mp3" },
                mimetype: "audio/mpeg",
                ptt: false
            }, { quoted: ms })
        ]);
    } catch (error) {
        console.error("Error sending menu:", error.message);
        repondre(`Error sending menu: ${error.message}`);
    }
});
