const {hans} =require("../Hanstz/hans");
const axios =require("axios");


hans({ nomCom: "lyrics",
        reaction: "✨",
        categorie: "Search" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions;  
        
   try {

    if (!arg || arg.length === 0) return repondre("Where is the name of musique");

    let  result  = await axios.get(`https://api.davidcyriltech.my.id/lyrics?t=${arg.join(' ')}`);

    let lyrics = result.data.data;

    if (lyrics.error) return repondre("no lyrics found");

    let msg = `HANS-MD LYRICS FUNDER--------

* *Artist :* ${lyrics.artist}


* *Title :* ${lyrics.title}


${lyrics.lyrics}`

    zk.sendMessage(dest,{image : { url : './media/lyrics-img.jpg'} , caption : msg}, { quoted : ms });
    
   } catch (err) {
       repondre('Error')
   }
        })
