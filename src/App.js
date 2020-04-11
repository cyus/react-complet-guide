import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState,setPersonsState] = useState({
  persons:[
    {name: 'Max', age:28},
    {name: 'Manu', age:29},
    {name: 'Stepahine', age:26}
  ],
  otherState: 'some other value'
  });

  const switchNameHandlelr = ()=>{
  //console.log('Was clicked!');
  ///wrong
  //this.state.persons[0].name = 'Cempron';
    setPersonsState({
      persons:[
        {name: 'Cyrus', age:38},
        {name: 'Raisa', age: 28},
        {name: 'Zivah', age:5}
      ]
    });
  };

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandlelr}>Swith Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
   // return React.createElement('div',{className:},React.createElement('h1',null,'Does this work now?'));
  
  }


export default app;
