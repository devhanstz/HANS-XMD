"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { hans } = require("../Hanstz/hans");

hans(
  { nomCom: "alive2", reaction: "🌟", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // URLs and configurations
    const fullImageUrl = " https://files.catbox.moe/9mcdru.jpg.jpg"; // Full image URL
    const smallThumbnailUrl = " https://files.catbox.moe/9mcdru.jpg.jpg"; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/qmpij0.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `♦️ Always Active ♦️\n\n📱 Contact: ${contactName}\n🔗 [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
          externalAdReply: {
            title: `📱 Message from: ${contactName}\n♦️ Always Active ♦️`, // Your contact in WhatsApp status format
            body: "Bot Active ♦️ Tap here",
            thumbnailUrl: smallThumbnailUrl, // Small thumbnail displayed below
            mediaType: 1, // Indicate this is an image
            renderLargerThumbnail: true, // Ensure thumbnail is displayed in full
            sourceUrl: sourceUrl, // Channel link
            showAdAttribution: true, // Attribution for the channel
          },
          forwardingScore: -1, // Prevent message forwarding
        }
      });

      console.log("Alive message sent successfully with customized layout.");
    } catch (error) {
      console.error("Error sending Alive message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready!");

hans(
  { nomCom: "test2", reaction: "🌟", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Test command triggered!");

    // URLs and configurations
    const fullImageUrl = " https://files.catbox.moe/9mcdru.jpg.jpg"; // Full image URL
    const smallThumbnailUrl = " https://files.catbox.moe/9mcdru.jpg.jpg"; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/qmpij0.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `♦️ Always Active ♦️\n\n📱 Contact: ${contactName}\n🔗 [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
          externalAdReply: {
            title: `📱 Message from: ${contactName}\n♦️ Always Active ♦️`, // Your contact in WhatsApp status format
            body: "Bot Active ♦️ Tap here",
            thumbnailUrl: smallThumbnailUrl, // Small thumbnail displayed below
            mediaType: 1, // Indicate this is an image
            renderLargerThumbnail: true, // Ensure thumbnail is displayed in full
            sourceUrl: sourceUrl, // Channel link
            showAdAttribution: true, // Attribution for the channel
          },
          forwardingScore: -1, // Prevent message forwarding
        }
      });

      console.log("Test message sent successfully with customized layout.");
    } catch (error) {
      console.error("Error sending Test message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready!");
