import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import agents from '../../images/agents'


function  MatchHistory(props){
        return(
            <div className = 'col-xs-12 col-sm-6 col-md-4 mt-4'>
            <Card>
            <Card.Img variant = 'top' src = {agents[props.match.agent]}/>
            <Card.Body>
                <h1 className = 'text-center display-5'>{props.match.win}</h1>
            </Card.Body>
              <ListGroup className = 'list-group'>
                <ListGroup.Item>Team Score: {props.match.team_score}</ListGroup.Item>
                <ListGroup.Item>KDA- {`${props.match.kill}/${props.match.death}/${props.match.assist}`}</ListGroup.Item>
                <ListGroup.Item>Score- {props.match.score}</ListGroup.Item>
                <ListGroup.Item>Map-{props.match.map}</ListGroup.Item>
                <ListGroup.Item>Gamemode- {props.match.gamemode}</ListGroup.Item>
             </ListGroup>  
            </Card>
        </div>
        )
}

export default MatchHistory