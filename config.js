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


global.SESSION_ID = process.env.SESSION_ID  || "
SUHAIL_08_32_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3LFxuICAgICAgICA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpcl

wiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3LFxuICAgICAgICA3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICA5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcwLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxu

ICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDY2LFxuICAgICAgICAzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2L

FxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1x

uICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUExKUHVZUEtoVXM4MEp1bWF0OVR1NUpyTlJLblRLSXg3eGwyWFhTMndxcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4d

FByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOTE2MUdScjdRYlM2NWptQmJlcm1nQVwiLFxuICBcInBob25lSWRcIjogXCI2NzYyOTJkOS01ZmJjLTQzOGEtYmIzMy1iOGUxZmUzN2Q5YjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAxMDksXG4gICAgICAxNDUsXG4gICAgICAxODIsXG4gICAgICAzOCxcbiAgICAgIDIwMSxcbiAgICAgIDIyNCxcbiAgICAgIDIyMyxcbiAgICAgIDY3LFxuICAgICAgNDIsXG4gICAgICAzMSxcbiAgICAgIDI0LFxuICAgICAgNDEsXG4gICAgICAyMDYsXG4gICAgICA1NCxcbiAgICAgIDIwOSxcbiAgICAgIDUzLFxuICAgICAgNTMsXG4gICAgICAzNSxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDIyMixcbiAgICAgIDE2NixcbiAgICAgIDkyLFxuICAgICAgMzIsXG4gICAgICAyMjMsXG4gICAgICAxMjAsXG4gICAgICA0LFxuICAgICAgMTAxLFxuICAgICAgMjM1LFxuICAgICAgMTMwLFxuICAgICAgMjE5LFxuICAgICAgMTc1LFxuICAgICAgMjAzLFxuICAgICAgNTcsXG4gICAgICAyMzAsXG4gICAgICA1MixcbiAgICAgIDEzNCxcbiAgICAgIDE0NSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tuNzBjd0VFSTZhOGJrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY3ZmNkVjaDRpK0pRd2dLVnhjYWhDZlFRYTlJSWdiRDkzUis1QW5OSjNWTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEYmVrUmp1bXFZSEFnbCtnN2tOUEp

wa0hzRVlPUU5ZeWd6RVh6OWw5REE3YlJ5WitiQ2xYYWs3Q1NFNVpuWGpmV1EzeXJoZ2paYUh5N2Fmei9KdmVCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBaHF1MW0rZGtUTllFem50cnBsYVJNamQ3eHQ5M1lDQTk3OVI3d0tQSXU2by9ocTJvbTZEY1hpUlFyN1F0QWtMdUdqVWpxemoxYS9YMDgwVjAwOC9ndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyNzI5MzY1MjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODk1NTQ5MzM4ODM4MToyNkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNzI5MzY1MjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsX

G4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIwMDUxMzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBdnRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF2dC5qc29uIjogIntcImtleURhdGFcIjpcInN2SGpFUE1XYXUvWVRMV0YvR0ljSkpyZlZaWEdvZy9GUVhkdDlJYnBFTzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzNDQ2ODI2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXZ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieitORVdTYkdaVC80cFZsSWdVS1d5ck5BQ1V4aGtza1VNVUdZV1pwN1owQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjM0NDY4MjY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyMDAwNjc4MTgxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXZ2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRHR3dVFiMWVyaS8wczg5bU5XK29pS0FWUmNOSnZrcjh1REZFM3h0R1dIVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjM0NDY4MjY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBdncuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiK2x2SmloUkJaQmw1NWhJNE14Y0xSc0lOS1A5dUhkS25RdVVFMTN4R2NrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzQ0NjgyNjUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMjAwMTg2ODg4MlwifSIKfQ==
"  // PUT your SESSION_ID 


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
