const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/zaidbscs/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dqV1E3N.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ²²¹-ᴍᴅ" 


global.devs = "923357433862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923207932590";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_40_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgNjksXG4gICAgICAgIDY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDU2LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYUE4Z0NBZ0FYRUlwRDBTeURReVQvL01vU2xucWZPQ0t1dVl5NTBydUlMYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMDc5MzI1OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJBOEI4QzFCMTRCNjVBNkY2MjM4QTM1QzBGRjg5MDhFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzEyODA0OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHWElQT0c4S1REbVBhZ0JnX0JJYmxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjExN2NkMDMxLWYzYWQtNDZjYi05ODM1LTQxNmI5ZTU4N2JmZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICA5NCxcbiAgICAgIDUzLFxuICAgICAgMTY5LFxuICAgICAgMjE0LFxuICAgICAgNjIsXG4gICAgICA3MCxcbiAgICAgIDYwLFxuICAgICAgMjMsXG4gICAgICAxNzMsXG4gICAgICAyOSxcbiAgICAgIDI1MixcbiAgICAgIDIsXG4gICAgICAyMzAsXG4gICAgICA0OCxcbiAgICAgIDIzMyxcbiAgICAgIDU2LFxuICAgICAgMjM2LFxuICAgICAgOTQsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAyMjQsXG4gICAgICAxODAsXG4gICAgICAxNjksXG4gICAgICA4NyxcbiAgICAgIDEzOSxcbiAgICAgIDExNSxcbiAgICAgIDEyMCxcbiAgICAgIDM4LFxuICAgICAgMjEzLFxuICAgICAgMTI4LFxuICAgICAgOTEsXG4gICAgICAxNzgsXG4gICAgICAyMzIsXG4gICAgICAxMzcsXG4gICAgICAxMDQsXG4gICAgICAxMDYsXG4gICAgICAzNCxcbiAgICAgIDM1LFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhQWEU5NEU3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyMDc5MzI1OTA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjQ3NTEwNzc5ODY0MDY6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcXZ1L29GRU9xeDA3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFUUlVjOWh3aFdoK0RzTms1SGxZMzJSSWNPLzUxakxoU1hsMlFhVy9aSDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2xnMTlQb05HZHJiL0UvVWc3WEM4ME4rVlV5WUxQQUNaQSt0Wldob1FmVXJEaGc5ckhvVFlDVUV3UUg4YldpK3ExN29KdGFZbXpCVmtzeTlVbUVuREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWHB1L2ZGQlZQSm1Oalh6ck1tdk1XeFZKR00zZ0lFdHRzOUozQVprQnVETWJEbktPR2c1N251OUVIbTNQQWNibU9GOUpjdjFGV0pQRlJQaFpUMncwaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjA3OTMyNTkwOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzEyODA0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURkRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGRELmpzb24iOiAie1wia2V5RGF0YVwiOlwiQTJGV25jT0Z5MmNaWEJyaXE2QnYraXFYNlJnQ3ZzTGJzWHFjb1BOQkpiTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTk5MDAyNTU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMxMjgwNDY5OTBcIn0iCn0="  // PUT your SESSION_ID 



module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ-ᴍᴅ 』```","),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "zᴀɪᴅ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ali Myo",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ZAID"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
