import React from 'react'
import ImageSlider from './Dashboard_Components/ImageSlider'
import MatchHistory from './Dashboard_Components/MatchHistory'
import axios from 'axios'


class Dashboard extends React.Component{
    constructor(){
        super()
        this.state = {
            matches: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/match/')
            .then(response => {
                this.setState ({matches: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    matchList (){
           return this.state.matches.map(currentMatch => {
                return(<MatchHistory match = {currentMatch} key = {currentMatch._id}/>)
           })
    }

    render(){
    return(
        <div>
        <div className = 'container'>
            <h1 className = 'mb-5 mt-5 text-center display-1'>Match History</h1>
            <ImageSlider/>
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