const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : 237025306968"";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_48_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA5MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4LFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc5LFxuICAgICAgICA4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdXWDlWcXNvL2NJaFRCb29KTm0vcVd0SCtVZGxHVk1JOXpDYjkzQzhoTUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhQYm56THdZU2Nlbk9kZmJRUThYWlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWE5YWZkMWYtMmNkMS00ZDkxLWI3ZmItOTRhNWEyMzYxZWZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDIxMSxcbiAgICAgIDYxLFxuICAgICAgMTQ4LFxuICAgICAgODQsXG4gICAgICAzNCxcbiAgICAgIDQ4LFxuICAgICAgMjI1LFxuICAgICAgMTMzLFxuICAgICAgMjM4LFxuICAgICAgMjIxLFxuICAgICAgNTksXG4gICAgICA3OSxcbiAgICAgIDE2NyxcbiAgICAgIDE4MCxcbiAgICAgIDIwMyxcbiAgICAgIDEzMSxcbiAgICAgIDIwMyxcbiAgICAgIDI0OCxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgMzQsXG4gICAgICAxNjEsXG4gICAgICAyNTEsXG4gICAgICAxMDEsXG4gICAgICAzLFxuICAgICAgNixcbiAgICAgIDI0MixcbiAgICAgIDYyLFxuICAgICAgMjUzLFxuICAgICAgMjQyLFxuICAgICAgOTMsXG4gICAgICAzMSxcbiAgICAgIDgzLFxuICAgICAgMjM1LFxuICAgICAgMTExLFxuICAgICAgMjEyLFxuICAgICAgMTcsXG4gICAgICAyNDAsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZTQzNElGRU1mNmxMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInF5eTd2NDc1d2tJTjdxY2UycmVPTUR2NmRmbGYzSWZ4Wi93Y3BlZE5kMEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwici9yV2FaRXRkai9nT0pVb1ZmOVMwR1dpQmlHbjYzaDlFUzV4Q1IwVUJtUkNkUk1jSlVQMktYVmZuQUZBN2Q1RXE2Nml1RitlQ1UzaVUrQjlWZFhTQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYnNDWkkyVUxPN293ekQ1K1NYaXF3L0hEN1ErWVRDRG8rbWw0NExWeC9vdy8yUlJmQWpMbCtpbmZwbnZUSGRHbnc2bkt6RFdSN2tIV1hJNjlkOUZGaFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1MzA2OTY4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY3MzI4Mzc3MTEwNjEwOjVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI1MzA2OTY4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDY4ODA3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURpNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGk1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYkcwdUVidnJ4UEh2RHIwTC92Y2dmclc5N0FQMkc0TUdzeUZiMUw0NnhqYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzQ3OTM1MjcxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ2ODgwNzg1ODdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
