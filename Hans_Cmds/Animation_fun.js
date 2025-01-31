
const { hans } = require('../Hanstz/hans');

hans({
  nomCom: "happy",
  categorie: "fun",
  reaction: "📽️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "✊🏻 *STARTED...* 💦" });
    const animations =  ['😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊'];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
hans({
  nomCom: "hrt",
  aliases: ["moyo", "heart"],
  categorie: "fun",
  reaction: "📽️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "✊🏻 *STARTED...* 💦" });
    const animations =  ['💖', '💗', '💕', '❤️', '💛', '💚', '🫀', '💙', '💜', '🖤', '♥️', '🤍', '🤎', '💗', '💞', '💓', '💘', '💝', '♥️', '💟', '🫀', '❤️'];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
hans({
  nomCom: "angry",
  categorie: "fun",
  reaction: "📽️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "✊🏻 *STARTED...* 💦" });
    const animations =   ['😡', '😠', '🤬', '😤', '😾', '😡', '😠', '🤬', '😤', '😾'];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
hans({
  nomCom: "sad",
  aliases: ["heartbroken", "hrtbroken"],
  categorie: "fun",
  reaction: "📽️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "✊🏻 *STARTED...* 💦" });
    const animations =  ['🥺', '😟', '😕', '😖', '😫', '🙁', '😩', '😥', '😓', '😪', '😢', '😔', '😞', '😭', '💔', '😭', '😿'];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
hans({
  nomCom: "shy",
  aliases: ["shyoff", "shyy"],
  categorie: "fun",
  reaction: "📽️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "✊🏻 *STARTED...* 💦" });
    const animations =  ['😳', '😊', '😶', '🙈', '🙊', '😳', '😊', '😶', '🙈', '🙊'];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
hans({
  nomCom: "moon",
  aliases: ["mon", "crescent"],
  categorie: "fun",
  reaction: "📽️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "✊🏻 *STARTED...* 💦" });
    const animations =   ['🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', "🌚🌝"];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});

hans({
  nomCom: "nikal",
  categorie: "fun",
  reaction: "📽️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "✊🏻 *STARTED...* 💦" });
    const animations = ["   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏          ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   hans   ⡇\n ⣟⣿⡭     ⢱        ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄   __        ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏          ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Lavde   ⡇\n ⣟⣿⡭     ⢱        ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄  |__|     ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸   hansmd   ⡇\n ⣟⣿⡭     ⢱       ⣿  ⢹            ⡇\n  ⠙⢿⣯⠄  (P)       ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  hanstz  ⡇\n ⣟⣿⡭     ⢱         ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄   __        ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Meeee   ⡇\n ⣟⣿⡭     ⢱         ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄  |__|      ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸           ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲   ⣿  ⣸   hans   ⡇\n ⣟⣿⡭     ⢱        ⣿  ⢹            ⡇\n  ⠙⢿⣯⠄  hanstz     ⡿  ⡇       ⡼\n   ⠹⣶⠆       ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸ "];

    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});

hans({
  nomCom: "hand",
  categorie: "fun",
  reaction: "📽️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "✊🏻 *STARTED...* 💦" });
    const animations = [
      '8👊===D', '8=👊==D', '8==👊=D', '8===👊D', '8==👊=D', '8=👊==D', 
      '8👊===D', '8=👊==D', '8==👊=D', '8===👊D', '8==👊=D', '8=👊==D', 
      '8👊===D', '8=👊==D', '8==👊=D', '8===👊D', '8==👊=D', '8=👊==D', 
      '8👊===D', '8=👊==D', '8==👊=D', '8===👊D 💦', '8==👊=D💦 💦', '8=👊==D 💦💦 💦'
    ];

    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});

