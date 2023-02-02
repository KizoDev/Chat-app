const express = require('express')
const app = express()
const router = express.Router()
const Verify = require('../middleware/verifytoken')

const {conversation, getAllconversation, getsingleconversation} = require('../controllers/conversation')

router.post('/conversation',Verify, conversation )
router.get('/conversation/find/:id',Verify, getAllconversation )
router.get('/conversation/:convoId',Verify, getsingleconversation )

module.exports = router