

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6285161478147']
global.ownernomer = "6285161478147"
global.premium = ['6285161478147']
global.packname = 'sticker'
global.author = 'rick qsyaa'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'dah siap',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus yg pnya Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk pribadi chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'bentar...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/ahmadqsyaa'
global.myyt = 'https://youtube.com/c/rick qusyaerick'
global.myytv = 'https://youtube.com/channel/UCCxhgzFUudAEBMeVAPGhZSw'
global.mygc = "https://chat.whatsapp.com/GGay1UGMlVf6nNIDJmSncG"
global.botname = 'bot-rick'
global.akulaku = 'Bot By erik'
global.pesanpanggil = 'ya, ada apa?'
global.ytname = 'IG : erck_qsyarck'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
