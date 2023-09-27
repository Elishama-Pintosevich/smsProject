require("dotenv").config()

const server = require("express")()
const port = process.env.EXPRESS_PORT || 3002

server.get("/test", async(req, res)=>{
    res.send("hello from express")
})

server.listen(port, ()=>{
    console.log(`listhening on port ${port}`);
})

const from = process.env.PHONE_NUMBER
const to = process.env.MY_NUMBER

const twilio = require("twilio")(
    process.env.TOKEN_SID,
    process.env.TOKEN_SECRET,
    {
        accountSid: process.env.ACCOUNT_SID
    }
)
function sendSms(){
    twilio.messages.create({
        from ,
        to ,
        body: "hello from mac"
    })
    .then(message => {console.log(`message sent with sid ${message.sid}`);})
    .catch(error => {console.error(error);})
}