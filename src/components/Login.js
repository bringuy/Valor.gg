import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class Login extends React.Component{
    constructor(){
        super()

        this.state = {
            username: '',
            login: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(event){
        
        const {name, value} = event.target

        this.setState({
            [name] : value
        })
    }

    onSubmit(event){
        {/* This is where I implement the get request */}
        event.preventDefault()
        
        const user = {
            username : this.state.username
        }
        
        axios.get ( 'http://localhost:3000/users/',user)
            .then(function(res){ 
                console.log(res.data)
                })
            .catch(function(err){
                console.log('Login error' + err)
            })
        
        this.setState({
            username : ''
        })

            
    }

    render(){
        return(
            <div className = 'container'>
                <Form onSubmit = {this.onSubmit}>
                    <Form.Control 
                        as = 'input' 
                        type =' text' 
                        name = 'username'
                        value = {this.state.username} 
                        onChange = {this.onChange}
                        placeholder="Username" 
                        />
                    <Button variant="primary" type="submit" className = 'text-center'>
                        Login
                    </Button>
                </Form>

            </div>
        )
    }

}

export default Login