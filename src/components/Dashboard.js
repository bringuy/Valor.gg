import React from 'react'
import ImageSlider from './Dashboard_Components/ImageSlider'
import AGENTS from '../AGENTS'
import MatchHistory from './Dashboard_Components/MatchHistory'
import Graph from './Dashboard_Components/Graph'
import axios from 'axios'


class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            matches: [],
            AGENTS : AGENTS
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/match/')
            .then(response => {
                this.setState ({
                    matches: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    matchList (){
           return this.state.matches.slice(0).reverse().map(currentMatch => {
                return(<MatchHistory match = {currentMatch} key = {currentMatch._id}/>)
           })
    }

    carouselList (){
    
    let kda = 0;
    let wins = 0;
    let losses = 0;
    let winrate = 0;
    let score = 0;
    
    
     
    /* Model of Agent Object (for reference)
    Breach: {
        wins: 0,
        losses: 0,
        kda: 0,
        winrate: 0,  
        matchesPlayed: 0,
        score: 0
    }
    */
        
    var i = 0;
    var a = ''
    var b = false

    for( i; i < this.state.matches.length; i++){ //loops through all matches
        
        kda += (this.state.matches[i].kill + (this.state.matches[i].assist/2))/this.state.matches[i].death //accumulates all kda's (assists are worth 1/2 kill)
        score += this.state.matches[i].score
        this.state.AGENTS['Sage'].score += this.state.matches[i].score
        this.state.AGENTS['Sage'].kda += (this.state.matches[i].kill + (this.state.matches[i].assist/2))/this.state.matches[i].death //same thing here but for each individual agent

        if(this.state.matches[i].win === 'WIN'){ 
            //accumulates win by one if user wins
            wins ++ 
            this.state.AGENTS[this.state.matches[i].agent].wins ++
            
        }
        else{
            //accumulates loss by one if user loses
            losses ++
            this.state.AGENTS[this.state.matches[i].agent].losses ++
            
        }
        //counts total matches played per agent
        this.state.AGENTS[this.state.matches[i].agent].matchesPlayed ++
    }

        
        winrate = wins/(wins + losses) //calculates total winrate
        kda /= this.state.matches.length //average kda
        score /= this.state.matches.length //calculates total score
        const agents = Object.keys(this.state.AGENTS) //gets array with all agents' names

        //loops through every agent to calculate avg KDA, WR, Score
        for(i=0 ; i<agents.length; i++){
            this.state.AGENTS[agents[i]].kda /= this.state.AGENTS[agents[i]].matchesPlayed
            this.state.AGENTS[agents[i]].score /= this.state.AGENTS[agents[i]].matchesPlayed
            this.state.AGENTS[agents[i]].winrate = this.state.AGENTS[agents[i]].wins/(this.state.AGENTS[agents[i]].wins + this.state.AGENTS[agents[i]].losses)
        }

        const stats = {
            winrate : winrate,
            kda: kda,
            score: score,
            AGENTS : this.state.AGENTS
        }

        //after everything is calculated, send it to frontend so it can do more calculations
        return (<ImageSlider data = {stats.AGENTS}/>)
    } 


    render(){
    return(
        <div>
        <div className = 'container'>
            <h1 className = 'mb-5 mt-5 text-center display-1'>Match History</h1>
            <div className = 'col-xs-12 col-sm-6 col-md-6 mt-4'>
                {this.carouselList()}
            </div>
            <div className = 'col-xs-12 col-sm-6 col-md-6 mt-4'>
            </div>
        </div>
            <div className = 'mt-5 container-fluid'>
                <div className = 'row padding'>
                      {this.matchList()}
                </div>
            </div>
        </div>
    )}

}

export default Dashboard