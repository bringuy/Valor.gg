import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class ImageSlider extends React.Component{

    constructor(){
        super()
        this.state = {
            index: 1
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(selectedIndex,event){
        this.setState({
            index: selectedIndex
        })
    }

    render(){
        return(
            <Carousel activeIndex = {this.state.index} onSelect = {this.handleSelect}>
                {/* Most Recent Agent */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.dailyesports.gg/wp-content/uploads/2020/04/Jett-2-800x400.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                
            
                {/* Most Played Agent */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://3.bp.blogspot.com/-LlnGHzLTWgo/Xo36A--psJI/AAAAAAAAXH8/az4E3dWcC3gNDXx_nGCTtcET8Ob9vbGyQCLcBGAsYHQ/w914-h514-p-k-no-nu/sage-valorant-art-uhdpaper.com-4K-7.1709-wp.thumbnail.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
               

                {/* Best winrate (might be too hard) */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://static2.thegamerimages.com/wordpress/wp-content/uploads/2020/04/valorantbrim-gs.jpg"
                    alt="Third slide"
                    />                
                </Carousel.Item>
                
            </Carousel>
        )
    }

}
export default ImageSlider