const express=require('express')
const router=express.Router()
const twiliocontroller=require('../Controller/twiliocontroller')


router.post('/sms',twiliocontroller.sms)
router.post('/call',twiliocontroller.call)
router.post('/whatsapp',twiliocontroller.whatsappsms)
module.exports=router