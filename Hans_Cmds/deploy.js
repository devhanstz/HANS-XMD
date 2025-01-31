const util = require('util');
const fs = require('fs-extra');
const { hans } = require(__dirname + "/../Hanstz/hans");
const { format } = require(__dirname + "/../Hanstz/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

hans({ nomCom: "deploy", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../Hanstz//hans");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
Hello ${nomAuteurMessage},,
     *HANS MD DEPLOYMENT STEPS* 
╭───────────────────☆
★When you want to deploy any whatsapp bot check on its repo and check on its deployment procedure and make sure you have the deployment site e.g;  heroku.com , render.com , Koyeb.com and many more:
✔First type the sc ,repo or script command and you will get HANS-MD repository 
✔From there you are required to get your *Session id* but how,??..
         𝐇𝐎𝐖 𝐓𝐎 𝐆𝐄𝐓 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃
✞ Open this link 👉 😅 then tap on pair code.
✞ Enter your whatsapp number with the country code e.g;  255756530143 then tap submit 
✞ HANS-MD owner , *HANS* ,will send you the code immediately.Copy the code and whatsapp will bring a notification 
✞Tap on the notification and paste the code that HANS md owner sent you.
✞ After a successful login HANS-MD owner 😂 HANS will send you a *session id* .some will wonder where the hell is that session ,,,...It is just right at your inbox /dm {your own number for whatsappp} 😂
✞Copy the Session id {the one with unreadable codes and long copy it and send it to your deployer or deploy
     𝐇𝐎𝐖 𝐓𝐎 𝐃𝐄𝐏𝐋𝐎𝐘 𝐇𝐀𝐍𝐒 𝐌𝐃
✔ Now check on HANS-MD  repository in github fork and give a star to this repository before doing anything 🌟or else HANS-MD owner won't allow you to deploy his bot💀.
✔Tap on heroku deploy tab  given there. First thing you should do is getting your *Heroku Api Key* insert it to the required space .
✔Enter the valid *heroku app name* and again repeat it to the blank space asking for app name accordingly.Fill everything and press on the below tab Deploy
✔In some heroku apps the buld logs might not show but it will eventually deploy 
✔Now click on this devs number and give HANS-MD owner credits https://wa.me/+255756530143
╰────────────────────☆`;
let menuMsg = `
     𝐑𝐞𝐠𝐚𝐫𝐝𝐬 𝐇𝐀𝐍𝐒`;
   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *hans*, déveloper HANS hans" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *hans*, déveloper HANS hans" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
