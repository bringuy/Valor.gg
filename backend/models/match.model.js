const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WIN = ['WIN','LOSS']

const MAP = ['Bind','Haven','Split']

const AGENT = ['Breach','Brimstone','Cypher','Jett','Omen','Phoenix','Raze','Sage','Sova','Viper']

const GAMEMODE = ['Casual', 'Competitive', 'Custom']

const MatchSchema = new Schema({

    win: {
        type : String,
        required : true,
        enum : WIN 
        },
    team_score : {
        type: String,
        required : true,
    },
    kda : {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required : true
    },
    map: {
        type: String,
        required: true,
        enum : MAP
    },
    agent: {
        type : String,
        required: true,
        enum : AGENT
    },
    gamemode: {
        type : String,
        required: true,
        enum : GAMEMODE
    },
    user : {
        type: String,
        required: true
    }
})

const Match = mongoose.model ('Match', MatchSchema)

module.exports = {Match, WIN, MAP, AGENT, GAMEMODE}