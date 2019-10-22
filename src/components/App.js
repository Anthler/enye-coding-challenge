import React,{Component} from 'react';
import '../App.css';
import {Button, Container, Row,Form, Col, Table} from 'react-bootstrap';
import { DatePicker } from "antd"

class App extends Component{

  state = {
    userId:0,
    firstname:'',
    lastname: '', 
    hobby:'',
    date_of_birth: null,
    age: 0,
    users:[]
  }

updateFname = event =>{
  this.setState({firstname:event.target.value})
}

updateLname = event =>{
  this.setState({lastname:event.target.value}) 
}

updateHobby = event =>{
  this.setState({hobby:event.target.value})
}

updateBday = event =>{
  this.setState({date_of_birth:event.target.value}) 
}

updateAge = event =>{
  this.setState({age:event.target.value})
}

handleDate = (date, dateString) => {

  this.setState({date_of_birth: dateString})
  console.log( this.state.date_of_birth)
}

addUserInfo = (event) =>{
  event.preventDefault()
  this.setState({
    users:[...this.state.users,
    {
      userId: this.state.users.length +=1,
      firstname: this.state.firstname,
      lastname:this.state.lastname,
      hobby: this.state.hobby,
      age:this.state.age,
      date_of_birth:this.state.date_of_birth
    }],
      firstname: '',
      lastname:'',
      hobby: '',
      age:'',
      date_of_birth:''
  })
}

userRow = () => this.state.users.map( user => 
  <tr key={user.userId}>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.date_of_birth}</td>
      <td>{user.age}</td>
      <td>{user.hobby}</td>
  </tr>
    )

  render(){

    return(
      <Container>
        <div>
        <Row>
        <h2>ENYE CODING CHALLENGE</h2>
        </Row>
        <hr />
      <Row>
      <Col><h3>User Info Table</h3></Col>
      </Row>
        <Row>
        
        <Col>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Date Of Birth</th>
      <th>Age</th>
      <th>Hobby</th>
    </tr>
  </thead>
  <tbody>
    {this.userRow()}
  </tbody>
</Table>
        </Col>
        </Row>

        <hr />
        <h4 >Enter Your Info</h4>
        <Row>
        <Col>
        <Form onSubmit={this.addUserInfo}>
  <Form.Group>
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder=" Your First name" value={this.state.firstname || ''} onChange={this.updateFname} />
  </Form.Group>
  <Form.Group>
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder=" Your Last name" value={this.state.lastname || ''} onChange={this.updateLname} />
  </Form.Group>
  <Form.Group>
    <Form.Label>Hobby</Form.Label>
    <Form.Control type="text" placeholder=" Your Hobby" value={this.state.hobby || ''} onChange={this.updateHobby}/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" placeholder="Your Age" value={this.state.age || ''} onChange={this.updateAge}/>
  </Form.Group>

  <DatePicker format="MM/DD/YYYY"  onChange={this.handleDate}/>
  
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
        </Col>
        </Row>
      </div>
      </Container>
    )
  }
}

export default App;
