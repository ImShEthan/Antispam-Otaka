const Discord = require('discord.js');
const antispam = require('better-discord-antispam'); 
const client = new Discord.Client();

client.on('ready', () => {
    
    
     antispam(client, {
          limitUntilWarn: 6, 
          limitUntilMuted: 10, 
          interval: 2000, 
          warningMessage: "Attention ! Si tu n'arrete pas de spam tu va être punie.", 
          muteMessage: "c'est fait mute. Nous n'aimons pas les spammeurs.", 
          maxDuplicatesWarning: 7,
          maxDuplicatesMute: 10, 
          ignoredRoles: ["Staff pixa", "Modo pixa", "Admin pixa", "Déesse Pixa"], 
          ignoredMembers: ["Ethan.#1337"], 
          mutedRole: "muted", 
          timeMuted: 1000 * 600, 
          logChannel: "𝓛ogsツ" 
        });
        console.log("bot allumé")
  });
   
  client.on('message', msg => {
    client.emit('checkMessage', msg); 
  
  })

client.login('token');