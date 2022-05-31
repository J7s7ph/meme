import logo from './logo.svg';
import firefire from './Firefire.png';
import './App.css';
import Form from './Form.js';
import State from './State.js';
import Partner from './Partner.js'

function App() {

  return (
    <div className="App">
      <header className="Meme-header">
      <img src={firefire} className="App-logo" alt="logo" />
      <h2 className="Meme-Title"><span class="font-effect-fire-animation">Fireglow</span></h2>
      <p className="Header-Topic">Prototype - Build 1</p>
      </header>
      <Form />   
        
    </div>
  );
}

export default App;

/* Lesson 26
<header className="Meme-header">
<img src={logo} className="App-logo" alt="logo" />
<h2 className="Meme-Title">Fireglow</h2>
<p className="Header-Topic">Prototype - Build 1</p>
</header>
<Form />
*/