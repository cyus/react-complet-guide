import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Stepahine', age:26}
    ],
    otherState: 'some other value'
  }
  switchNameHandlelr = ()=>{
    //console.log('Was clicked!');
    ///wrong
    //this.state.persons[0].name = 'Cempron';
    this.setState({
      persons:[
        {name: 'Cyrus', age:38},
        {name: 'Raisa', age: 28},
        {name: 'Zivah', age:5}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandlelr}>Swith Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
   // return React.createElement('div',{className:},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
