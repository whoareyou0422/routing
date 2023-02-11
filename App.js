import logo from './logo.svg';
import './App.css';

function App() {
    const helloWorld = "Hello World!"
    const name = "Archee";

    return(
      <div style = {{fontSize: '50px'}}
      className = "text-lg"
      >
        {helloWorld}
        Colors
        <ul>
          <li>Red</li>
          <li>Blue</li>
        </ul>
        <Card name = {"John"} />
        <Card name = {"Anna"} />
        <Card name = {name} />
        </div>
  );
}

export default App;
