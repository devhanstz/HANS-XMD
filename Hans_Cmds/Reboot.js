const {hans}=require("../Hanstz/hans")







hans({nomCom:"restart",categorie:"Mods",reaction:"Ⓜ️"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("HANS-MD bot Restarting ⚽");

  exec("pm2 restart all");
  

  



})
