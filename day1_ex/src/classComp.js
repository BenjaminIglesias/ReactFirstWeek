import React, { Component } from 'react';

class MyClassDemo extends React.Component{
constructor(props){
    super(props)
   // this.state = {names: props.names}
}
    
render(){
return (
    <table>
    <tr><th>First Name</th><th>Last Name</th></tr>
  {this.props.names.map(el=><tr><td>{el.fname}</td><td>{el.lname}</td></tr>)}
  </table>
);

}

}

;

export default MyClassDemo;