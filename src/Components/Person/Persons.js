import React, { Component } from 'react';
import Person from './Person';

class Persons extends Component {
    constructor(props){
        super(props);
        this.state = {
          persons : [
            {id:1, age:20, name:'Sharanya', profession:'Student'},
            {id:2, age:28, name:'Santhosh', profession:'Software'},
            {id:3, age:26, name:'Mahesh', profession:'Clerk'},
            {id:4, age:20, name:'Sharanya', profession:'Student'},
            {id:5, age:28, name:'Santhosh', profession:'Software'},
            {id:6, age:26, name:'Mahesh', profession:'Clerk'},
            {id:7, age:20, name:'Sharanya', profession:'Student'},
            {id:8, age:28, name:'Santhosh', profession:'Software'},
            {id:9, age:26, name:'Mahesh', profession:'Clerk'},
            {id:10, age:20, name:'Sharanya', profession:'Student'},
            {id:11, age:28, name:'Santhosh', profession:'Software'},
            {id:12, age:26, name:'Mahesh', profession:'Clerk'},
            {id:13, age:20, name:'Sharanya', profession:'Student'},
            {id:14, age:28, name:'Santhosh', profession:'Software'},
            {id:15, age:26, name:'Mahesh', profession:'Clerk'},
            {id:16, age:20, name:'Sharanya', profession:'Student'},
            {id:17, age:28, name:'Santhosh', profession:'Software'},
            {id:18, age:26, name:'Mahesh', profession:'Clerk'},
          ],
          activePage: 1
        }
      }
      render() {
        return (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person key={person.id} name={person.name} age={person.age} profession={person.profession} 
              delete={() => {this.deletePerson(index)}} />
            })}
          </div>
        );
      }
      handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
      }
      updateProfession = (event, index) => {
        //const person = Object.assign({},this.state.persons[index]);
        const person = {...this.state.persons[index]}; //ES6
        person.profession = event.target.value;
        const persons = {...this.state.persons};
        persons[index] = person;
        this.setState({persons:persons});
      }
      
      deletePerson = (index) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];//ES6
        persons.splice(index,1);
        console.log(index);
        this.setState({persons:persons});
      }
      
}

export default Persons;