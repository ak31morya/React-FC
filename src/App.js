import './App.css';
import ButtonEx from './components/button/ButtonEx';
import First from './components/first/first';
import Five from './components/FiveFolder/five';
import Four from './components/fourex/FourExmp';
import Second from './components/secondf/second';

function App() {
  return (
    <div className="App">
      <First />
      {/* <Second /> */}
      <Second firstName = "Aashish"  lastName = "Morya"/>

      <ButtonEx />

      <p>Example of Fourth Code Below :-</p>

      <Four/>
      <Five/>
      
    </div>
  );
}

export default App;
