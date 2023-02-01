const express = require('express')
const app = express()
const router = express.Router()
const Verify = require('../middleware/verifytoken')

const {conversation, getAllconversation, getsingleconversation} = require('../controllers/conversation')

router.post('/conversation',Verify, conversation )
router.get('/find/:userId',Verify, getAllconversation )
router.get('/:convoId',Verify, getsingleconversation )

module.exports = router