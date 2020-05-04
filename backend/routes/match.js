const router = require('express').Router()

const {Match, WIN, MAP, AGENT, GAMEMODE} = require ('../models/match.model')

//query?

//Gets all matches
router.get('/', function(req,res) {
        Match.find().then(function(match){
            res.send(match)
        })
        .catch(function(){
            res.status(500).send({
                message: 'something went wrong: getting all match'
            })
        })
})

//Adding new match
router.post('/add',function (req,res){

    const win = req.body.win
    const team_score = req.body.team_score
    const map = req.body.map
    const agent = req.body.agent
    const gamemode = req.body.gamemode
    const user = 'hydrobox' //change later
    
    const match = new Match ({
        win,
        team_score,
        map,
        agent,
        gamemode,
        user
    })

    match.save.then(function(){
        res.send(match)
    })
    .catch (function(e) {
        console.log(e)
        res.status(500).send({
            message: 'something went wrong adding new match'
        })
    })
})

module.exports = router