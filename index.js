const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILD_SCHEDULED_EVENTS"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot ONLINE")
})

client.on("messageCreate", (message) => {
    if (message.content == "!instagram") {
        console.log("Command !instagram Success Client")
        message.channel.send("Instagram ufficiale: https://instagram.com/eldianmc?igshid=YmMyMTA2M2Y=")
        console.log("Command !instagram Success Server")
   }


    if (message.content == "!tiktok") {
        console.log("Command !instagram Success Client")
        message.channel.send("TikTok ufficiale: https://www.tiktok.com/@eldianmc")
        console.log("Command !instagram Success Server")
    }

    if (message.content == "eb") {
    console.log("Command eb Success from Client")
        message.channel.send("Come posso aiutarti?")
    console.log("Command eb Success from Server")
    
    }

    if (message.content == "eb come stai?") {
        console.log("Command eb Success from Client")
        message.channel.send("Bene e tu?")
        console.log("Command !instagram Success Server")


        message.channel.send({ embeds: [embed] })
        console.log("Command !instagram Success Server")
    } 
)
