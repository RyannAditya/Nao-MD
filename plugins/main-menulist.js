import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
/*
%dash

%m3

%m1 *T O D A Y*
%m2 *%ucpn*
%m2 *Days:* %week %weton
%m2 *Date:* %date
%m2 *Islamic Date:* %dateIslamic
%m2 *Time:* %wib
%m3

%m1 *I N F O*
%m2 *Bot Name:* %me
%m2 *Mode:* 
%m2 *Platform:*
%m2 *Type:* 
%m2 *Baileys:* Multi Device
%m2 *Prefix:* 
%m2 *Uptime:*
%m2 *Database:* 
%m3

%m1 *I N F O  C M D* 
%m4 *Ⓟ* = Premium
%m4 *Ⓛ* = Limit
%m3
*/
const defaultMenu = {
before: ` `.trimStart(),
header: '┏━━━━━⫹⫺ *%category* ',
body: `┃⏣ %cmd %isPremium %islimit`,
footer: `┗━━━━━⫹⫺\n`,
after: ` `,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tags
let emot = `${pickRandom(['⎔', '◈▻', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'ai', 'anime', 'update', 'stress', 'stalk', 'menfess', 'maker', 'berita', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'textpro', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database","quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'main': 'Main',
'ai': 'Ai feature',
'stress': 'Stress',
'menfess': 'Menfess',
'game': 'Game',
'rpg': 'RPG Games',
'textpro': 'Make text logo',
'xp': 'Exp & Limit',
'sticker': 'Sticker',
'kerang': 'Kerang Ajaib',
'quotes': 'Quotes',
'fun': 'Fun',
'anime': 'Anime',
'admin': 'Admin',
'group': 'Group',
'vote': 'Voting',
'absen': 'Absen',
'premium': 'Premium',
'stalk': 'Stalk',
'internet': 'Internet',
'downloader': 'Downloader',
'tools': 'Tools',
'nulis': 'MagerNulis & Logo',
'audio': 'Audio',
'maker': 'Maker',
'berita': 'Berita',
'database': 'Database',
'quran': 'Al Qur\'an',
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced',
'info': 'Info',
'': 'No Category',
}
if (teks == 'stress') tags = {
'stress': 'Stress'
}
if (teks == 'ai') tags = {
'ai': 'Ai feature'
}
if (teks == 'menfess') tags = {
'menfess': 'Menfess'
}
if (teks == 'game') tags = {
'game': 'Game'
}
if (teks == 'anime') tags = {
'anime': 'Anime'
}
if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'rpg') tags = {
'rpg': 'Rpg'
}
if (teks == 'edukasi') tags = {
'edukasi': 'Edukasi'
}
if (teks == 'news') tags = {
'news': 'News'
}
if (teks == 'random') tags = {
'random': 'Random'
}
if (teks == 'xp') tags = {
'xp': 'Exp & Limit'
}
if (teks == 'stiker') tags = {
'sticker': 'Stiker'
}
if (teks == 'textpro') tags = {
      'textpro': 'Textpro'
      }
if (teks == 'kerangajaib') tags = {
'kerang': 'Kerang Ajaib'
}
if (teks == 'quotes') tags = {
'quotes': 'Quotes'
}
if (teks == 'berita') tags = {
'berita': 'Berita'
}
if (teks == 'admin') tags = {
'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
'group': 'Grup'
}
if (teks == 'group') tags = {
'group': 'Group'
}
if (teks == 'premium') tags = {
'premium': 'Premium'
}
if (teks == 'internet') tags = {
'internet': 'Internet'
}
if (teks == 'stalk') tags = {
'stalk': 'Stalk'
}
if (teks == 'nulis') tags = {
'nulis': 'Nulis',
'maker': 'Maker'
}
if (teks == 'downloader') tags = {
'downloader': 'Downloader'
}
if (teks == 'tools') tags = {
'tools': 'Tools'
}
if (teks == 'fun') tags = {
'fun': 'Fun'
}
if (teks == 'database') tags = {
'database': 'Database'
}
if (teks == 'vote') tags = {
'vote': 'Voting',
}
if (teks == 'absen') tags = {
'absen': 'Absen'
}
if (teks == 'quran') tags = {
'quran': 'Al-Qur\'an',
'islamic': 'Islamic'
}
if (teks == 'audio') tags = {
'audio': 'Audio'
}
if (teks == 'jadibot') tags = {
'jadibot': 'Jadi Bot'
}
if (teks == 'info') tags = {
'info': 'Info'
}
if (teks == 'owner') tags = {
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced'
}
 if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'nocategory') tags = {
'': 'No Category'
}
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2

// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua

// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`

let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
const sections = [{
title: `${htki} MAIN ${htka}`,
rows: [
{title: `╿⚡╿ SPEED BOT`, rowId: ".speed", description: "Menampilkan kecepatan respon BOT"},
{title: `╿💌╿ OWNER BOT`, rowId: ".owner", description: "Menampilkan List owner BOT"},
]
},{
title: `${htki} SUPPORT ${htka}`,
rows: [
{title: `╿🔖╿ SEWA`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
{title: `╿🌟╿ BUY PREMIUM`, rowId: ".premium", description: "Menampilkan list harga premium"},
{title: `╿💹╿ DONASI`, rowId: ".owner kontak", description: 'Support BOT agar lebih fast respon'},
]
},{
title: `${htki} MENU ${htka}`,
rows: [
{title: `╿🗂╿ All`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
{title: `╿🖥╿ Ai`, rowId: ".? ai", description: "All AI features"},
{title: `╿👻╿ Stress`, rowId: ".? Stress", description: "Kali aja kamu halu"},
{title: `╿💝╿ Menfess`, rowId: ".? menfess", description: "Mengirim pesan secara anonim"},
{title: `╿🎋╿ Rpg`, rowId: ".? rpg", description: "Game Epic Rpg!"},
{title: `╿🏵️╿ Exp`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
{title: `╿🎮╿ Game`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
{title: `╿🎲╿ Fun`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
{title: `╿✒️╿ Text Pro`, rowId: ".? textpro", description: "Buat text dari logo"},
{title: `╿🐚╿ Kerang`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
{title: `╿📜╿ Quotes`, rowId: ".? quotes", description: "Random Inspirasi"},
{title: `╿🐤╿ Anime`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
{title: `╿🔞╿ Nsfw`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
{title: `╿🧧╿ Premium`, rowId: ".? premium", description: "Only premium Users"},
{title: `╿🔍╿ Stalk`, rowId: ".? stalk", description: "Kepoin akun seseorang"},
{title: `╿☪️╿ Al-Quran`, rowId: ".? quran", description: "Tobat yuk kak"},
{title: `╿🌐╿ Internet`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
{title: `╿🗞️╿ Berita`, rowId: ".? berita", description: "Cari berita terupdate"},
{title: `╿📥╿ Downloaders`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
{title: `╿🎐╿ Stikers`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
{title: `╿📝╿ Nulis`, rowId: ".? nulis", description: "Nulis kok males kak?"},
{title: `╿🎼╿ Audio`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
{title: `╿🎧╿ Sound Menu`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
{title: `╿👥╿ Group`, rowId: ".? group", description: "Only Groups"},
{title: `╿💫╿ Admin`, rowId: ".? admin", description: "Only Admin Group"},
{title: `╿🗂️╿ Database`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
{title: `╿🛠️╿ Tools`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
{title: `╿📄╿ Info`, rowId: ".? info", description: "Info info BOT"},
{title: `╿👨🏻‍💻╿ Owner`, rowId: ".? owner", description: "Owner Only!"},
{title: `\n No Category`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
] },
]
let psan = 'bagaimana kabarmu?'
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let tek = `*${ucapan()} @${m.sender.split`@`[0]}*
╔═══════❏ 
╠════ *Info User*
╠〆 *Nama:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
╠〆 *Tag:* @${m.sender.split`@`[0]}
╠〆 *Premium:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
╠〆 *Status:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
╚═════════════════════❏

╔═══════❏ 
╠════ *Status Info*
╠〆 *Uptime:* ${mpt}
╠〆 *Time:* ${moment.tz('Asia/Jakarta').format('HH')}:${moment.tz('Asia/Jakarta').format('mm')} WIB
╠〆 *Users:* ${Object.keys(global.db.data.users).length}
╠〆 *Limit:* ${usrs.limit}
╠〆 *Level:* ${usrs.level}
╠〆 *Role:* ${usrs.role}${usrs.premiumTime > 1 ? `
╚═════════════════════❏

*Expired Premium:*
${clockStringP(usrs.premiumTime - new Date())}` : ''}
`
const listMessage = {
text: tek,
footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
mentions: await conn.parseMention(tek),
title: `${htki} *LIST MENU* ${htka}`,
buttonText: `CLICK HERE ⎙`, 
sections
}
if (teks == '404') {
return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
      let vn = './media/yntkts'
//-----------TIME---------
let ucpn = `${ucapan()}`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset0 is0.00
// Offset420 is7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
//---------------------

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})
let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
.replace(/%islimit/g, menu.limit ? llim : '')
.replace(/%isPremium/g, menu.premium ? lprem : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

//----------------- FAKE
let ftoko = {
key: {
fromMe: false,
participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
remoteJid: 'status@broadcast',
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
},
"title": `${ucapan()}`,
"description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
"currencyCode": "US",
"priceAmount1000": "100",
"retailerId": wm,
"productImageCount": 999
},
"businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
}
}
}
let fgif = {
key: {
remoteJid: 'status@broadcast',
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Nekohime`,
'duration': '99999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': thumb
 }
}
 }
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')

//------------------< MENU >----------------

//------------------ SIMPLE
/*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
externalAdReply: {
title: `${htjava} ${namebot}`,
body: titlebot,
description: titlebot,
mediaType: 2,
thumbnail: await(await fetch(thumb2)).buffer(),
 mediaUrl: sig
}
 }
})*/
/*let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'www.instagram.com/hyuura-official',
    mediaType: 2, 
    description: 'www.instagram.com/hyuura-official',
    title: "Now Playing...",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer(),
    sourceUrl: 'www.instagram.com/hyuura-official'
 	  /*   sourceUrl: sig,
           title: '◄⟬ ●━━━ ⧏ ⧎ ⧐ ━━━● ⟭►',  
            body: 'Now Playing...', 
           thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer()
}
     }
    })
}

handler.help = ['
handler.tags = ['sound']
handler.command = /^(mangkane25|mangkane26|mangkane27|mangkane28|mangkane29|mangkane30|mangkane31|mangkane32|mangkane33|mangkane34|mangkane35|mangkane36|mangkane37|mangkane38|mangkane39|mangkane40|mangkane41|mangkane42|mangkane43|mangkane44|mangkane45|mangkane46|mangkane47|mangkane48|mangkane49|mangkane50|mangkane51|mangkane52|mangkane53|mangkane54)$/i*/

 	  /*   sourceUrl: sig,
           title: '◄⟬ ●━━━ ⧏ ⧎ ⧐ ━━━● ⟭►',  
            body: 'Now Playing...', 
           thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer()*/

//------------------ DOCUMENT
const _0xcdd4a4=_0x4f24;(function(_0x2bcefa,_0x4d88ce){const _0x5c4dba=_0x4f24,_0x205702=_0x2bcefa();while(!![]){try{const _0x33e7d8=-parseInt(_0x5c4dba(0x19c))/0x1+parseInt(_0x5c4dba(0x1a4))/0x2+-parseInt(_0x5c4dba(0x196))/0x3*(parseInt(_0x5c4dba(0x190))/0x4)+parseInt(_0x5c4dba(0x19e))/0x5+parseInt(_0x5c4dba(0x1a1))/0x6+-parseInt(_0x5c4dba(0x18f))/0x7+-parseInt(_0x5c4dba(0x18e))/0x8*(-parseInt(_0x5c4dba(0x19a))/0x9);if(_0x33e7d8===_0x4d88ce)break;else _0x205702['push'](_0x205702['shift']());}catch(_0xf8bf85){_0x205702['push'](_0x205702['shift']());}}}(_0x428b,0x217e1));function _0x4f24(_0xa43523,_0x129aaa){const _0x428b53=_0x428b();return _0x4f24=function(_0x4f24c5,_0x1efd25){_0x4f24c5=_0x4f24c5-0x188;let _0x40aa2e=_0x428b53[_0x4f24c5];return _0x40aa2e;},_0x4f24(_0xa43523,_0x129aaa);}let almenu=_0xcdd4a4(0x1a9)+global['namebot']+_0xcdd4a4(0x1ab)+mode+_0xcdd4a4(0x1aa)+platform+'\x0a╠\x20〆\x20*Type:*\x20Node.Js\x0a╠\x20〆\x20*Baileys:*\x20Multi\x20Device\x0a╠\x20〆\x20*Prefix:*\x20[\x20*'+_p+_0xcdd4a4(0x19f)+muptime+'\x0a╠\x20〆\x20*Database:*\x20'+rtotalreg+_0xcdd4a4(0x1ad)+totalreg+_0xcdd4a4(0x18b)+name+_0xcdd4a4(0x19d)+tag+_0xcdd4a4(0x1a6)+prems+_0xcdd4a4(0x18c)+money+_0xcdd4a4(0x193)+limit+_0xcdd4a4(0x188)+level+_0xcdd4a4(0x1ae)+exp+_0xcdd4a4(0x1a5)+role+_0xcdd4a4(0x192)+readMore,nomorwa='0',nomorowm1=_0xcdd4a4(0x18d),d1=_0xcdd4a4(0x197),d2='application/vnd.openxmlformats-officedocument.wordprocessingml.document',d3='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',d4=_0xcdd4a4(0x199),d5=_0xcdd4a4(0x1a7),td=''+pickRandom([d1,d2,d3,d4,d5]),ᴛᴇs='Powered\x20By\x20⬝\x20@'+nomorwa[_0xcdd4a4(0x1a8)]`@`[0x0]+_0xcdd4a4(0x189)+nomorown1[_0xcdd4a4(0x1a8)]`@`[0x0]+_0xcdd4a4(0x1a2)+week+'\x20'+date+_0xcdd4a4(0x1a3)+wktuwib,thummb=fs[_0xcdd4a4(0x18a)](_0xcdd4a4(0x195)),menuunya=_0xcdd4a4(0x194);function _0x428b(){const _0xbcaee4=['Owner','\x0a╚══════❏\x0a','\x0a╠〆Limit\x20:\x20','halo','./media/dash.jpg','90183FRcCVL','application/vnd.openxmlformats-officedocument.presentationml.presentation','\x0aKakek\x20Gᴡ\x20Sugiono','application/pdf','315lplKwu','.owner','213337iqdLzF','\x0a╠〆 Tag\x20:\x20','700670GwRSVE','*\x20]\x0a╠\x20〆\x20*Uptime:*\x20','huuu','1041330sEhSga','\x0a⫹⫺\x20Date:\x20','\x0a⫹⫺\x20Time:\x20','33032nQbsHg','\x0a╠〆 Role\x20\x20\x20:\x20','\x0a╠〆 Status\x20:\x20','text/rtf','split','╔═══════❏ \x20❲\x20*Info\x20Bot*\x20❳\x0a╠━─〆⟨\x20','\x0a╠\x20〆\x20*Platfrom:*\x20','\x20⟩〆\x0a╠\x20〆\x20*Owner:*\x20RyanZx\x20Botz\x0a╠\x20〆\x20*Project:*\x2022\x20Agustus\x202022\x0a╠\x20〆\x20*Mode:*\x20','send3ButtonLoc','\x20dari\x20','\x0a╠〆 Exp\x20\x20\x20:\x20','\x0a╠〆 Level\x20:\x20','\x0aCreator\x20Bot\x20⬝\x20@','readFileSync','\x0a╠〆\x0a╠━━◩\x0a〆\x0a╠〆📝Script\x20:\x20https://github.com/RyannAditya/Nao-MD\x0a╠〆\x0a╔═════❏\x20*Profile*\x0a┆Name\x20:\x20','\x0a┆Money\x20:\x20','62822522851432','12272ASXMpa','23184uOucBR','4hHdPhr'];_0x428b=function(){return _0xbcaee4;};return _0x428b();}conn[_0xcdd4a4(0x1ac)](m['chat'],thummb,almenu,readMore+text+(''+ᴛᴇs)+readMore,'SewaBot','.sewa',_0xcdd4a4(0x191),_0xcdd4a4(0x19b),_0xcdd4a4(0x198),_0xcdd4a4(0x1a0),m);

//------------------- BUTTON VID
/*conn.sendButton(m.chat, text, wm, 'https://youtu.be/3ONnszQtwz0', [['Ping', '.speed'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})*/

} catch (e) {
conn.reply(m.chat, 'Maaf, menu sedang error', m)
throw e
}
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(tesm|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
if (time >= 4) {
res = "Pagi Kak 🌄"
}
if (time >= 10) {
res = "Selamat Siang Kak ☀️"
}
if (time >= 15) {
res = "Selamat Sore Kak 🌇"
}
if (time >= 18) {
res = "Malam Kak 🌙"
}
return res
}
