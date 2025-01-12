const express =require('express')
const router= express.Router()
const contentController = require('../Controller/contentController')

router.get('/dev', contentController.contentdev)
router.post('/content',contentController.contentpost )
router.get('/content' , contentController.contentget)
router.get('/content/:id', contentController.contentgetid)
router.patch('/content/:id', contentController.contentupdate)
router.delete('/content/:id', contentController.contentdelete)



module.exports = router;