const accountSid=process.env.TWILIO_ACCOUNT_SID
const authToken=process.env.TWILIO_AUTH_TOKEN
const twilioPhoneNumber=process.env.TWILIO_PHONE_NUMBER
const twilio=require('twilio')(accountSid,authToken)
exports.sms=(req,res)=>{
    try{
      const to=req.body.phonenumber
        twilio.messages.create({
            body:'hello,this is a test message',
            from :twilioPhoneNumber,
            to:to


        })
        console.log('msg sent')
        res.status(200).json({message:'sms sent successfully'})
    } catch (error) {
    console.error(error);
    
    res.status(500).json({ error: 'An error occurred on the server' });
  }
};


exports.call=async (req, res) => {
  try {
    const to = req.body.phonenumber;

    // Send a call using Twilio
    const call =await twilio.calls.create({
      url: 'http://demo.twilio.com/docs/voice.xml', // Replace with a TwiML URL or a TwiML document
      from: twilioPhoneNumber,
      to:to,
    });

    // Respond with success status
    res.status(200).json({ message: 'Call initiated successfully', callId: call.sid });
  } catch (error) {
    console.error(error);
    // Respond with an error status
    res.status(500).json({ error: 'An error occurred on the server' });
  }
};




exports.whatsappsms=async (req, res) => {
  try {
 const to=req.body.phonenumber
    // Send a WhatsApp message using Twilio
    const message=await twilio.messages.create({
      body: 'Hello, this is a test WhatsApp message!',
      from:`whatsapp:+14155238886`, // Use the WhatsApp-enabled Twilio number
      to:`whatsapp:${to}`
    });

    // Respond with success status
    res.status(200).json({ message: 'WhatsApp message sent successfully', messageId: message.sid });
  } catch (error) {
    console.error(error);
    // Respond with an error status
    res.status(500).json({ error: 'An error occurred on the server' });
  }
};
