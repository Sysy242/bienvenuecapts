const Discord = require('discord.js');
    
const client = new Discord.Client();

var prefix = "C!"

client.login(process.env.TOKEN);

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("Faire un message de bienvenue")

});

client.on('guildMemberAdd', member => {
    const welcomechannel = member.guild.channels.find((x) => x.id === '537700430579367951');
    let embed = new Discord.RichEmbed()
    .setColor('0xffffff')
    .setDescription(`hey <@${member.user.id}> il vien de rejoindre ${member.guild.name} le serveur officiel du bot Captcha bot !! `);
    return welcomechannel.send(embed);
});

client.on('guildMemberRemove', member => {
    const welcomechannel = member.guild.channels.find((x) => x.id === '537701815395811338');
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`non <@${member.user.id}> il vien de partir ${member.guild.name} le serveur officiel du bot Captcha bot !! `);
    return welcomechannel.send(embed);
});
