/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/628116646665
   * Recode : Naze & YangJunMing12
*/


const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '8f897ab8c7',
}

// Other
global.owner = ['089670952904']
global.ownernomer = "089670952904"
global.premium = ['089670952904']
global.packname = 'Sticker By'
global.author = '𝙄 𝙆 𝙔 - 𝙓 𝘿'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '𝙳𝙾𝙽𝙴 √',
    admin: '𝙵𝚒𝚝𝚞𝚛 𝙺𝚑𝚞𝚜𝚞𝚜 𝙰𝚍𝚖𝚒𝚗 𝙶𝚛𝚘𝚞𝚙!',
    botAdmin: '𝙱𝚘𝚝 𝙷𝚊𝚛𝚞𝚜 𝙼𝚎𝚗𝚓𝚊𝚍𝚒 𝙰𝚍𝚖𝚒𝚗 𝚃𝚎𝚛𝚕𝚎𝚋𝚒𝚑 𝙳𝚊𝚑𝚞𝚕𝚞!',
    premime: '𝙵𝚒𝚝𝚞𝚛 𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝙺𝚊𝚕𝚘 𝙼𝚊𝚞 𝙳𝚊𝚏𝚝𝚊𝚛 𝙺𝚎𝚝𝚒𝚔 𝚂𝚎𝚠𝚊 / 𝙲𝚑𝚊𝚝 𝙾𝚠𝚗𝚎𝚛',
    owner: '𝙵𝚒𝚝𝚞𝚛 𝙺𝚑𝚞𝚜𝚞𝚜 𝙾𝚠𝚗𝚎𝚛 𝙱𝚘𝚝',
    group: '𝙵𝚒𝚝𝚞𝚛 𝙷𝚊𝚗𝚢𝚊 𝙳𝚊𝚙𝚊𝚝 𝙳𝚒𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝙳𝚒𝙶𝚛𝚘𝚞𝚙!',
    private: '𝙵𝚒𝚝𝚞𝚛 𝙷𝚊𝚗𝚢𝚊 𝙳𝚊𝚙𝚊𝚝 𝙳𝚒𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝙳𝚒𝙿𝚛𝚒𝚟𝚊𝚝𝚎 𝙲𝚑𝚊𝚝!',
    bot: '𝙵𝚒𝚝𝚞𝚛 𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚎𝚗𝚐𝚐𝚞𝚗𝚊 𝙽𝚘𝚖𝚘𝚛 𝙱𝚘𝚝!',
    wait: '𝘓𝘰𝘢𝘥𝘪𝘯𝘨......',
    error: '𝙀𝙧𝙧𝙤𝙧!',
    errapi: '𝑬𝒓𝒓𝒐𝒓 𝑴𝒖𝒏𝒈𝒌𝒊𝒏 𝑨𝒑𝒊𝒌𝒆𝒚 𝑻𝒊𝒅𝒂𝒌 𝑽𝒂𝒍𝒊𝒅!',
    errmor: '𝑬𝒓𝒓𝒐𝒓 𝑲𝒆𝒔𝒂𝒍𝒂𝒉𝒂𝒏 𝑺𝒊𝒔𝒕𝒆𝒎 𝑩𝒐𝒕!',
    endLimit: '𝑳𝒊𝒎𝒊𝒕 𝑯𝒂𝒓𝒊𝒂𝒏 𝑨𝒏𝒅𝒂 𝑻𝒆𝒍𝒂𝒉 𝑯𝒂𝒃𝒊𝒔, 𝑳𝒊𝒎𝒊𝒕 𝑨𝒌𝒂𝒏 𝑫𝒊𝒓𝒆𝒔𝒆𝒕 𝑺𝒆𝒕𝒊𝒂𝒑 𝑱𝒂𝒎 12',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')

// Url
global.mygit = 'https://github.com/Dicky-XD'
global.myyt = 'Yt kamu'
global.myytv = 'Yt video kamu'
global.mygc = "https://chat.whatsapp.com/FXpdkVqPUkE0UVecLHzp2u"

// Engak Ngaruh, Belum Kepasang
global.botname = 'Iky-Botz᭄ོ'
global.akulaku = '𝑩𝒐𝒕 𝑩𝒚 𝑰𝒌𝒚-𝑩𝒐𝒕𝒛'
global.ytname = 'Nama yt kamu' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
