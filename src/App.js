import './App.css';
import Button from './components/Button.js';

function App() {
  return (

    <div className="App">
      <header>
        <p>
          Manuel Vargas
        </p>
      </header>
      <div>
        <Button link="https://www.youtube.com/watch?v=ZtT553qLD2M" title="Music - Youtube" />
        <Button link="https://www.instagram.com/shhmanuel/" title="Music Merch - Instagram" />
        <Button link="" title="Music Merch - Website" />
        <Button link="https://manuelvargas.casa/" title="manuelvargas.casa" />
      </div>
    </div>
  );
}

export default App;
