import React, {useState} from "react";
 
 
function MemberTable({ members }) {

    const AllMembers = () => members.map((member, index) => {

      return(
        <tr key={index}>
        <td>{member.name}</td>
        <td>{member.age}</td>
         </tr>
      )
    })
    
  return (
    <table>
      <thead><tr>
      <th>Name</th>
      <th>Age</th>
    </tr></thead>
      <tbody>
      <AllMembers/>
      </tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members}/>
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];
  const [members] = useState(initialMembers)
  
  return (<h3><MemberDemo members={members} /></h3>);
}
