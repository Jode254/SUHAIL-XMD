const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "crazy-clea-areshaze-49b260de.koyeb.app/"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="sigmawolf150@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";
//═══════[false=disable and true=enable]═══════\\
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story





//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_24_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI3LFxuICAgICAgICAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICA0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMSxcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIklTbWJFcGZYcnU4d3RPNy8zVllOTnZuV1B1K2ZacHQySmNsTEcrZW8yNWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndWbzdDeTR6U0ttUUpGcS1ZUmh5ZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDFjMWEwZTMtM2NkZi00MDcyLTkzZWYtYjZlMzcwMzI3NmRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDEsXG4gICAgICAxMDMsXG4gICAgICAyMjksXG4gICAgICA5NCxcbiAgICAgIDksXG4gICAgICA5MyxcbiAgICAgIDkwLFxuICAgICAgODcsXG4gICAgICAxOTQsXG4gICAgICAxOTYsXG4gICAgICAyMjQsXG4gICAgICA4NCxcbiAgICAgIDEyNyxcbiAgICAgIDUsXG4gICAgICA4MCxcbiAgICAgIDcyLFxuICAgICAgODEsXG4gICAgICA5OSxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDE2NSxcbiAgICAgIDE3MyxcbiAgICAgIDEzOCxcbiAgICAgIDE5NixcbiAgICAgIDIyNSxcbiAgICAgIDE5MixcbiAgICAgIDExNSxcbiAgICAgIDE2NSxcbiAgICAgIDE1NyxcbiAgICAgIDI2LFxuICAgICAgMTgyLFxuICAgICAgMjM4LFxuICAgICAgMTAzLFxuICAgICAgMTkxLFxuICAgICAgMjQsXG4gICAgICA2MCxcbiAgICAgIDY0LFxuICAgICAgMTcxLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdNWFJRQVlLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjcyOTM2NTI6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5NTU0OTMzODgzODE6MzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3o3MGN3RUVQK045N2tHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjdmY2RWNoNGkrSlF3Z0tWeGNhaENmUVFhOUlJZ2JEOTNSKzVBbk5KM1ZNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJqWEJLSUNRMTNtZVFlM0c3dGRKWXUreG00Z2EySWRnZ0QxcTU3Sjh3VkRMZmJ0RVhueGpjQ0luMWpaVXhHN25Hd0h6Y1FsSk1melpjZHZrSUVnaUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBweUw4TFlvdEx5SU9kNTNjcWJqVzM4MU11c1pnbFhiSjZBRHRWV3lqKzdNQ1dzTkFEZHYzekJJVXNad3VwOHUwdWxBSG5KY0lBL0JJZVYyaUVQZGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNzI5MzY1MjozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIxMDE4OTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBdjdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF2Ny5qc29uIjogIntcImtleURhdGFcIjpcIlU1YmkvdUpaWnFRSmJ1ZVJGZlQyeWlEV0xSNklqdUxwZGt4TE9HYXhrMHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzNDQ2ODI2NixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjA0MTU5NDA0M1wifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
