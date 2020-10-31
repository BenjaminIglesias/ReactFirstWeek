
const MyDemo = (props) => {
    return (
        <table>
        <tr><th>First Name</th><th>Last Name</th></tr>
      {props.names.map(el=><tr><td>{el.fname}</td><td>{el.lname}</td></tr>)}
      </table>
    );
};

export default MyDemo;
