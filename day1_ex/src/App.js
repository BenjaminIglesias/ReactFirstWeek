import './App.css';
import Demo from './demo'; 
import ClassDemo from './classComp';
import Person from './file2.js';
import {males} from './file2.js';
import {females} from './file2.js';
import MultiWelcome from './file3.js';
function App() {
  console.log(males);
  console.log(females);
  const names = [{'fname':'Anders','lname':'Henriksen'},{'fname':'Britta','lname':'Albertsen'},{'fname':'Kalle','lname':'Fredborg'}]

  return (
    <div className="App">
      <table>
    <tr><th>First Name</th><th>Last Name</th></tr>
  {names.map(el=><tr><td>{el.fname}</td><td>{el.lname}</td></tr>)}
  </table>
  <Demo names={names} test="Hello"/>
  <ClassDemo names={names} test="Hello"/>
  <h2>Ex2
    <p> {Person.firstName} {Person.email}
 </p>
  </h2>
  <h2><MultiWelcome/> </h2>
   
    </div>
  );
}

export default App;
