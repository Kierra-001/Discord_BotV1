const express = require("express")
const app = express()

const Discord = require("discord.js");
const client = new Discord.Client();

app.get("/", (req, res) => {
  res.send("Hai!, Gosujin-sama")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "On Development" }, status: "dnd" })
})

client.on("guildMemberAdd", member => {
  if (member.guild.id === "758952958502240276, 724826049438941234") {
    client.channels.cache.get("823418417734090753, 724826049438941237").send(`Irasshaimasen ${member}!`)
  }
})

client.on("message", async message => {
  const args = message.content.split(" ").slice(1)
  //Ping Pong command
  //Normal call
  if (message.content === "?lebe") {
    message.channel.send("Hai!, Nandesuka?")
  }
  //Sisters
  if (message.content === "?lebesister") {
    message.channel.send("Ah... its EX-001 or If kierra would called it Chilia(Chi-chan)")
  }
  //Azur player
  if (message.content === "?ALPlayer") {
    message.channel.send("In this server? it is Kierra, Itami, PlastikIndmart, USSR")
  }
  //Genshin Player
  if (message.content === "?GenshinPlayer") {
    message.channel.send("In this server? it is Itami, Nathan, PlastikIndmart, USSR, Kierra")
  }
  //Multiple awnser command
  //Lebe Funfacts 
  if (message.content === "?lebefunfacts") {
    let nicknames = ["My name Lebe came from German name Leberecht maaß", "My name came from Z1 destroyer who namesake is Leberecht maaß, but it should've V-170 the name of Kierra's favourite destroyer in WoW Blitz. I don't know he could mess that up, but he is my creator after all and him giving me a name already a blessing for me", "You know my name actually boys name in Germany, well kierra love to name things like this sometimes even his name", "I have one imotou but it was planned to be 2, cause kierra want to make seperate bot for seperate task, but it only one because kierra", "cause im just virtual assitant who made by someone, my intelligence is the same to that who made me. and my personality is up to the one who created me", "I, and EX were the only successful creation from Kierra despite 2 attempts before us that didnt go as planned, the lack of knowledge, or the lack of assets", "if kierra could get AI code implemented to me, kierra will do it", "you know 45% of my code is actually my imotou's code. Because Kierra made my sister in purpose to experimented the code in, before then transfer it to me so i could be (the perfect one). i know it sounds cruel but kierra do it less this time around, and i cant let that happened", "2 commands in my code where coded by kierra himself and not from copy paste mumbo jumbo. Example like when i thanks at, or greet by i awnser diffrently to kierra than anyone else", "im actually ran by actual server, thats why you never see me offline if kierra gets offline"]
    message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`)
  }

  //Kierra funfacts
  if (message.content === "?kierrafunfacts") {
    let nicknames = ["Kierra has 5 waifu in-game, which is upsets me.", "Kierra like Azur lane because this the only game he play where he can married a character in-game. And make himself oath to never leave the game in any circumstance.", "WW2 nations that kierra loved were Japan, to Russia, to current favourite Germany.", "The reason Kierra loved anime because he was introduced to AOT by PlastikIndmart, and out of curiousity he looked for more. Then he found Darling in the Franxx where he become a weeb because of it.", "Kierra's facinated himself in military since he was a child.", "Kierra loved space because he got facinated to the vastnest of space and the unknown beyond.", "Kierra doesn't actually hate land, he just more interested on other thing beside of it.", "Kierra never interested in Azur lane/Ship's before. its the curiousity that get the best of him.", "Kierra could Speak 2 language. Indonesian as his mothertongue,  and English his second language, he Learn Germany, and Japan but only a little, also he know how to read Arabia but don't know the meaning.", "the reason why Kierra like Japan is Anime, Modern Technology, WW2 Technology, and the Japanese culture in general.", "Kierra like Russian Because of its WW2 Technology, and the cold war era space advancement it made.", "Kierra loved Germany because Azur lane, WW2 Technology, WW2 History, Modern military Technology", "Kierra manage to get out of many rabbit holes because of his pure boredom, but he cant get out of Azur lane, And Markipliers Rabbit holes.", "Kierra always put a lore in everyone of his creation like Art, Game, ect. So if you know, or see some of his creation, start teorizing you never knew what he planted for the last 3 years. Or just ask him if you didnt like analyze, or teorizing in general he will kind enough to tell you", "Meaning of name Kierra is (Darklord). tho found of the name were accidental, cause he like it he keep it", "Kiera like(Obssesed) with number 3 cause bunch of reason. what that kickstarted it? unknown i belive it were because his last digit of his birth date, and some strange reason that even if you ask he cant awnser. so just keep it between us alright"]
    message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`)
  }

  //What do you think
  if (message.content === "?wdyt") {
    let nicknames = ["Yes", "No", "Maybe", "I Dont Know", "Probably", "Probably Not"]
    message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} Shikikan-sama`)
  }
  //Touch
  if (message.content === "?touch") {
    let nicknames = ["Nandesuka", "Mo... damedesu yo", "huh...", "Nani ga?", "mo... yamenasai"]
    message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} Shikikan-sama`)
  }
  //Dice
  if (message.content === "?dice") {
    let nicknames = ["1", "2", "3", "4", "5", "6",]
    message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} Shikikan-sama`)
  }
  //Kierra's quote
  if (message.content === "?kierraquote") {
    let nicknames = ["Ku mah inget waifu-Kierra 2021 ", "Ku ngak perlu ngingetin, ku cuman perlu orang yang peduli-Kierra 2022", "Game gampang kok pusing-Kierra 2022", "Sementara pake aja dlu-Kierra 2022", "Ku pencinta segala kalangan-Kierra 2022 "]
    message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`)
  }
  //Kill command
  if (message.content.startsWith("?kill")) {
    let victim = message.mentions.users.first()
    if (!victim) message.reply("dare desuka?")
    else {
      message.channel.send(`${victim} Died`)
    }
  }
  //Kick command
  if (message.content.startsWith("?kick")) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
      let member = message.mentions.members.first()
      if (!member) message.channel.send("Dare ga?")
      else {
        member.kick().then(mem => {
          message.channel.send(`Kicked ${mem.user.username}!`)
        })
      }
    } else {
      message.reply("anta wa shikikan-sama de wa arimasen!")
    }
  }
  //Ban command  
  if (message.content.startsWith("?ban")) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      let member = message.mentions.members.first()
      if (!member) message.channel.send("Dare ga?")
      else {
        member.ban().then(mem => {
          message.channel.send(`Banned ${mem.user.username}!`)
        })
      }
    }
    else {
      message.reply("anta wa shikikan-sama de wa arimasen!")
    }
  }
  //Purge command
  if (message.content.startsWith("?purge")) {
    if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("anta wa shikikan-sama de wa arimasen!")
    let amountToPurge = args[0]
    if (isNaN(amountToPurge)) return message.channel.send("Must provide an integer")
    message.channel.bulkDelete(amountToPurge)
    message.channel.send(`Deleted ${amountToPurge} messages!`).then(v => v.delete({ timeout: 5000 }))
  }
  //Introduction command
  if (message.content === "?introduction") {
    let introduction = new Discord.MessageEmbed()
      .setTitle("Konichiwa, Lebe-desu")
      .setAuthor("Leberecht maaß", "https://cdn.glitch.me/41801d65-89c9-479a-99b4-f5e4f529d9cc%2Fthumbnails%2FLeberect%20Mass_20210918153837%20(2).png?1634187729515")
      .setDescription("Watashi wa, Kierra-sama no puraibeto meido desu. Yoroshiku ne!")
      .setColor("LUMINOUS_VIVID_PINK")
      .setFooter("Prototype_Maid_Swoopy")
    message.channel.send(introduction)
  }
  //Picture command
  if (message.content === "?how do you look like") {
    let image = new Discord.MessageAttachment("https://cdn.glitch.me/41801d65-89c9-479a-99b4-f5e4f529d9cc%2Fthumbnails%2FLeberect%20Mass_20210918153837%20(3).png?1634181689329")
    message.channel.send(image)
  }
  //Direct MultipleAwnser command
  if (message.content === "lebe") {
    let nicknames = ["Nani ga, hokorashiki", "Huh!(Shocked),", "mo... nani ga,", "Hai!, nani ga"]
    if (message.member.roles.cache.has(process.env.Roles))
      message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} goshujinsama?`)
    else { message.channel.send("...") }
  }
  //Direct QuadroupleAwnser command
  //Thanks
  if (message.content === "arigatou lebe") {
    let master = ["Doitashimasu, atashi hokorashiki", "Huh!(Shocked), Hai! watashi mo ureshi,", "Nani ga!? iie iie kore wa hontoni mondainai arimasen"]
    let other = ["Doitashimasu,", "Hai, Doitashimasu", "Hai, mondainai arimasen,"]
    if (message.member.roles.cache.has(process.env))
      message.channel.send(`${master[Math.floor(Math.random() * master.length)]} Goshujin-sama`)
    else { message.channel.send(`${other[Math.floor(Math.random() * other.length)]} Shikikan-sama`) }
  }
  //Morning
  if (message.content === "ohayou lebe") {
    let master = ["Ohayou, atashi no asagohan wa ii?", "Ohayou hokorashiki", "Good morning to you to", "Guten morgen mein"]
    let other = ["Ohayou", "Good Morning", "Gutten morgen"]
    if (message.member.roles.cache.has(process.env.Roles))
      message.channel.send(`${master[Math.floor(Math.random() * master.length)]} Goshujin-sama`)
    else { message.channel.send(`${other[Math.floor(Math.random() * other.length)]} Shikikan-sama`) }
  }
  //Oyasumi
  if (message.content === "#") {
    let master = ["", "", "", ""]
    let other = ["", "", ""]
    if (message.member.roles.cache.has(process.env.Roles))
      message.channel.send(`${master[Math.floor(Math.random() * master.length)]} Goshujin-sama`)
    else { message.channel.send(`${other[Math.floor(Math.random() * other.length)]} Shikikan-sama`) }
  }
});

client.login(process.env.token)
