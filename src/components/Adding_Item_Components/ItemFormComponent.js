import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ItemFormComponent (props){
    return(
        <div className = 'mt-4 container' style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
        <h1 className = 'text-center display-1'> Enter Match Information </h1>
            <Form onSubmit = {props.handleSubmit} className = 'mt-4'>
                <Form.Group controlId="exampleForm.ControlInput1">
                    
                <Form.Row>
                {/* Drop down for win/loss? */}
                    <div className = 'col'>
                        <Form.Control 
                            as='input' 
                            type= 'text' 
                            name = 'win'   
                            placeholder="Win/Loss?" 
                            onChange = {props.onChange} 
                            value = {props.data.win}/>
                    </div>
                    <div className = 'col'>
                        <Form.Control 
                            as = 'input' 
                            type='text' 
                            name = 'kda' 
                            value = {props.data.kda}
                            onChange = {props.onChange}
                            placeholder="KDA?" 
                            />
                    </div>
                </Form.Row>
                
                <Form.Control
                    className = 'mt-3'
                    as = 'input'
                    type = 'text'
                    name = 'team_score'
                    value = {props.data.team_score}
                    onChange = {props.onChange}
                    placeholder = 'Enter score ex.`13-11`'
                />

                <Form.Control 
                        className = 'mt-3'
                        as = 'input' 
                        type='number' 
                        name = 'score' 
                        min = '0' 
                        placeholder="Individual Score?" 
                        onChange = {props.onChange}
                        value = {props.data.score}/>
                    
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                        
                        {/* Add images of map w popup */}
                        <Form.Control 
                            as="select" 
                            name = 'map' 
                            onChange = {props.onChange}
                            value = {props.data.map}>
                                <option>Select Map</option>
                                <option>Bind</option>
                                <option>Haven</option>
                                <option>Split</option>
                        </Form.Control>

                        <Form.Control 
                            className = 'mt-3'
                            as = "select" 
                            name = 'agent' 
                            onChange = {props.onChange}
                            value = {props.data.agent}>
                                <option>Select Agent</option>
                                <option>Breach</option>
                                <option>Brimstone</option>
                                <option>Cypher</option>
                                <option>Jett</option>
                                <option>Omen</option>
                                <option>Phoenix</option>
                                <option>Raze</option>
                                <option>Sage</option>
                                <option>Viper</option>
                        </Form.Control>

                        <Form.Control
                        className = 'mt-3'
                        as = 'select'
                        name = 'gamemode'
                        onChange = {props.onChange}
                        value = {props.data.gamemode}>
                            <option>Select Gamemode</option>
                            <option>Casual</option>
                            <option>Competitive</option>
                            <option>Custom</option>
                        </Form.Control>


                </Form.Group>
                
                

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>   
    )
}

export default ItemFormComponent