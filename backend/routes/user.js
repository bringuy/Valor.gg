const router = require('express').Router()

let User = require ('../models/user.model')

//Gets all users
router.get('/', function(req,res) {
        User.find().then(function(user){
            res.send(user)
        })
        .catch(function(){
            res.status(500).send({
                message: 'something went wrong'
            })
        })
})

//Adding new player
router.post('/add',function (req,res){

    const username = req.body.username
    
    if(username != null){
        const user = new User({
            username          
        })
    }

    user.save.then(function(){
        res.send(user)
    })
    .catch (function(e) {
        console.log(e)
        res.status(500).send({
            message: 'something went wrong'
        })
    })
})

module.exports = router