const { Client, Collection } = require("discord.js");
const client = (global.client = new Client());
const settings = require("./src/configs/settings.json");
client.commands = new Collection();
client.aliases = new Collection();
client.invites = new Collection();
client.cooldown = new Map();
client.ranks = [
  { role: "827908645613731941", coin: 2000 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "827908645806669834", coin: 2500 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "827908645593022535", coin: 3000 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "807750559531532298", coin: 4000 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "827906577440702484", coin: 5500 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "827197827347120178", coin: 7000 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "827197825158086706", coin: 9000 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "807750563609444365", coin: 10500 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "807750561733935155", coin: 12500 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "807750562308554804", coin: 15000 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "807750558744051712", coin: 17000 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "807750558064574524", coin: 23000 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "807750557438967818", coin: 29000 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "807750556205842462", coin: 37000 },//rol idleri, yetkiye gelmek için istenilen puan 
  { role: "807750555724152862", coin: 50000 } //rol idleri, yetkiye gelmek için istenilen puan 
];
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");


client.on("ready", async() => {
  client.user.setPresence({activity: {name: "Patavatsız ❤️ Haise"}, status: "idle"})
  let vc = client.channels.cache.get(settings.ses)
  if(vc) vc.join();
});


client
  .login(settings.token)
  .then(() => console.log("[BOT] Bot connected!"))
  .catch(() => console.log("[BOT] Bot can't connected!"));
