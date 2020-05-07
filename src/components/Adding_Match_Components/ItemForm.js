import React from 'react'
import ItemFormComponent from './ItemFormComponent'
import axios from 'axios'


class ItemForm extends React.Component {
    
    constructor(){
        super()

        this.state = {
            win: '',
            team_score: '',
            kill: '',
            death: '',
            assist: '',
            score: '',
            map: '',
            agent: '',
            gamemode: '',
            user: 'hydrobox'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    

    handleSubmit(event){
         
        event.preventDefault()
                
        const match = {
            win: this.state.win,
            team_score: this.state.team_score,
            kill: this.state.kill,
            death: this.state.death,
            assist: this.state.assist,
            score: this.state.score,
            map: this.state.map,
            agent: this.state.agent,
            gamemode: this.state.gamemode,
            user: 'hydrobox' /* Change later */
        }

        axios.post('http://localhost:3000/match/add' , match)
        .then(res => alert(res.data))
        .catch(err => alert(err));

        this.setState({
            win: '',
            team_score: '',
            kda: '',
            score: '',
            map: '',
            agent: '',
            gamemode: '',
            user: 'hydrobox'
        })

        alert('Successfully Added!')
    }
    
    onChange(event){

        const {name, value} = event.target
        this.setState  ({
            [name] : value
        })

    }

    
    render(){
    return(
        <ItemFormComponent onChange = {this.onChange} handleSubmit = {this.handleSubmit} data = {this.state}/>
    )
    }

}

export default ItemForm