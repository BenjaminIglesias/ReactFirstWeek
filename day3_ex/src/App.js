import './App.css';
import Form from './FormDemo';
import FormMultiple from './FormDemoMultiple';
import LiftingUp from './LiftingUpState';
 
function App() {
  return (
    <div className="App">
      <Form/>
      <FormMultiple/>
      <LiftingUp/>
    </div>
  );
}

export default App;
