const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, color) => {
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`:SiriCoinLogo: You can setup Metamask Wallet As SiriCoin Wallet steps are shown in the docs website Just go to ==> **https://docs.siricoin.tech/**`)
        .setFooter(client.user.username, client.user.avatarURL())
        .setTimestamp()
        .setColor(color.yellow)

    message.channel.send(embed);
}

module.exports.config = {
    name: "setupwallet",
    aliases: [],
    category: "general",
    desc: "Shows the Steps to Setup the extention wallet",
    usage: ""
}
