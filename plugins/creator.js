import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `Not Famous`, `ryannalwaysjb@gmail.com`, `🇮🇩 Indonesia`, `📍 https://github.com/RyannAditya`, `👤 Owner RyanZx-Bot`],
    [`${nomorown1}`, `${await conn.getName(nomorown1+'@s.whatsapp.net')}`, `💌 Developer Bot 2`, `Not Famous`, `zeexmodz.official.mail@gmail.com`, `🇮🇩 Indonesia, Banjarmasin`, `🌱 Ferdy`, `👤 Owner BOT`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 Whatsapp Bot`, `📵 Dont Spam 😢`, `Nothing`, `🇮🇩 Indonesia`, `📍 https://github.com/RyannAditya/Nao-MD`, `Hanya bot biasa yang kadang error ☺`]
  ], fkontak)
  await m.reply(`Hello @${m.sender.split(`@`)[0]} Thats my owner, dont spam or i will block u`)
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler