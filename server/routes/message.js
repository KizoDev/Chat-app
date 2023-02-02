const express = require('express')
const app = express()
const router = express.Router()
const Verify = require('../middleware/verifytoken')


const {message, getAlllMessage } = require('../controllers/message')

router.post('/message',Verify, message )

router.get('/gatMessages', Verify, getAlllMessage)
