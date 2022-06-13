const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILD_SCHEDULED_EVENTS"] }
)

client.login(OTg0Mzg0MDE3NTQzNjA2Mjcy.Gvfywc.b3qRLPaRCJg5sjInpbuFkMUqPoRIIdnE8fNYsY)

client.on("ready", () => {
    console.log("Bot ONLINE")
})

const { DisTube } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
const { SoundCloudPlugin } = require("@distube/soundcloud")

const distube = new DisTube(client, {
            youtubeDL: false,
            plugins: [new  SpotifyPlugin(), new SoundCloudPlugin()],
            leaveOnEmpty: true,
            leaveOnStop: true 
})

client.on("messageCreate", message => {
       if(message.content.startsWith("play")) {
        const voiceChannel = message.member.voice.channel
        if(!voiceChannel) {
            return message.channel.send("Devi essere in un canale vocale") 
       }

       const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
        return message.channel.send("Qualcun'altro sta gia ascoltando della musica") 
    }
    
       let args = message.content.split(/\s+/)
       let query = args.slice(1).join(" ")

       if (!query) {
        return message.channel.send("Inserisci la canzone che vuoi ascoltare")
    }    

    distube.play(voiceChannelBot || voiceChannel, query, {
        member: message.member,
        textChannel: message.channel,
        message: message
    })
   }
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

    }

    if (message.content == "")

    if (message.content == "!ip") {
        console.log("Command eb Success from Client")
        var embed = new Discord.MessageEmbed()
            .setTitle("Eldian")
            .setDescription("IP: mc.eldian.it")
            .setThumbnail("https://cdn.discordapp.com/attachments/825804924055060480/983051751584333854/Eldian.png")

        message.channel.send({ embeds: [embed] })
        console.log("Command !instagram Success Server")
    } 
})
