const { hans } = require("../Hanstz/hans");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

hans({ nomCom: "owner", categorie: "General", reaction: "✌️" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number\n* :
- 😎 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

hans({ nomCom: "dev", categorie: "hansinfo", reaction: "✨" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "hanstz😎", numero: "255760774888" },
      { nom: "hans teach", numero: "255756530143" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "👋🤓 𝗵𝗲𝗹𝗹𝗼𝘄 𝘄𝗲𝗹𝗰𝗼𝗺𝗲🤝 To ✨𝗛𝗔𝗡𝗦-𝗠𝗗✨  𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗱𝗲𝘃 :\n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

const commandDetails = {
  nomCom: "hanscast",
  aliases: ["bc", "cast"],
  reaction: "🚀",
  categorie: "General"
};

// Command function
hans(commandDetails, async (client, message, args) => {
  const constants = {
    adminError: "You need administrative rights to perform this command.",
    inputError: "After the command *broadcast*, type your message to be sent to all groups you are in.",
    restrictedError: "🖕hey you!! I can't broadcast your message🖕😡 but sorry 😔",
    broadcastMessage: "*HANS-MD is sending this message to all groups you are in*...",
    messageTemplate: "‼️⚠️HANS-𝐌𝐃 BROADCAST⚠️️‼️\n\n❗*message* : {message}\n\n️🌟 *Author*: {author}",
    broadcastImage: "https://files.catbox.moe/ozic76.jpeg"
  };

  const { ms, repondre, arg, nomAuteurMessage, superUser } = args;

  // Combine arguments into a message
  const broadcastMessage = arg.join(" ");

  // Validate input
  if (!broadcastMessage) {
    repondre(constants.inputError);
    return;
  }

  // Check for admin rights
  if (!superUser) {
    repondre(constants.restrictedError);
    return;
  }

  // Fetch all participating groups
  const groupData = await message.groupFetchAllParticipating();
  const groupIds = Object.values(groupData).map(group => group.id);

  // Notify user of broadcast start
  await repondre(constants.broadcastMessage);

  // Send broadcast message to all groups
  for (const groupId of groupIds) {
    const finalMessage = constants.messageTemplate
      .replace("{message}", broadcastMessage)
      .replace("{author}", nomAuteurMessage);

    await message.sendMessage(groupId, {
      image: { url: constants.broadcastImage },
      caption: finalMessage
    });
  }
});


hans({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("\n\nhttps://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31")
  await zsendMessage(auteurMessage,{text :`https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31`},{quoted :ms})

})

hans({ nomCom: "developer", categorie: "General", reaction: "✌️" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "HI✌️AM HANS😎TZ", numero: "255760774888" },
      { nom: "hans teach", numero: "255756530143" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = " HI👋 *Welcome to hans md * here is the developer numbers:\n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});
    
