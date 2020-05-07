import React from 'react'
import Modal from 'react-bootstrap/Modal'

class ItemModal extends React.Component {

    constructor(){
        super()
        this.state = {
            show : false
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange (event) {
        let display = !this.state.show;
    
        this.setState({
            show :  display
        })    
    } 


    render(){
        return(
            <div>
            <button variant = 'primary' onClick = {this.handleChange}>
                Launch demo modal
            </button>

            <Modal show = {this.state.show} onHide = {this.handleChange}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={this.handleChange}>
                    Close
                    </button>
                    <button variant="primary" onClick={this.handleChange}>
                    Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
            </div>
        )
        }

}

export default ItemModal