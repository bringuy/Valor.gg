import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import agents from '../../images/agents'

class ImageSlider extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            index: 1,
            stats: props.data,
            best: {
                kda: 0,
                matchesPlayed: 0,
                winrate: 0,
                agent: {
                    kda: '',
                    matchesPlayed:'',
                    winrate: '' 
                }
            }
        }

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(selectedIndex,event){
        this.setState({
            index: selectedIndex
        })
    }

    componentDidMount(){
        //chooses agent with best kda, winrate and matches played
        let best = {
            kda: 0,
            matchesPlayed: 0,
            winrate: 0,
            agent: {
                kda: '',
                matchesPlayed:'',
                winrate: '' 
            }
        }

        best = this.findBest(best,'kda')
        best = this.findBest(best,'matchesPlayed')
        best = this.findBest(best,'winrate')

        this.setState({
            best: best
        })
    }

    findBest(best, comp){

        const agents = Object.keys(this.state.stats)
        best[comp] = this.state.stats[agents[0]][comp]
        agents[0] = best.agent[comp]

        for(var i=1; i<agents.length; i++){
            if(best[comp] < this.state.stats[agents[i]][comp]){
                best[comp] = this.state.stats[agents[i]][comp]
                best.agent[comp] = agents[i]
            }
        }

        return best
    }

    render(){
        return(
            <Carousel interval = {null} activeIndex = {this.state.index} onSelect = {this.handleSelect}>
                {/* Best KDA Agent */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src = 'https://cdn.mos.cms.futurecdn.net/YHdtAs36hSJUL56Lq2nxFi.jpg'   
                    alt="First slide"
                    />
                <Carousel.Caption>
                    <h1>Best KDA Agent</h1>
                </Carousel.Caption>
                </Carousel.Item>
                
                {/* Most Played Agent */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src = {agents[this.state.best.agent.matchesPlayed]}
                    alt = "Second slide"
                    />
                <Carousel.Caption>
                    <h3>Most Played Agent</h3>
                </Carousel.Caption>
                </Carousel.Item>
                

                {/* Best winrate (might be too hard) */}
                <Carousel.Item>
                    <img
                    src = {agents[this.state.best.agent.winrate]}
                    className="d-block w-100"
                    alt="Third slide"
                    />                
                <Carousel.Caption>
                    <h3>Best Winrate Agent</h3>
                </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        )
    }

}
export default ImageSlider