import './App.css';
import Button from './components/Button.js';

function App() {
  return (

    <div className="App">
      <header>
        <p>
          MNL SPACE
        </p>
      </header>
      <div>
        <Button link="https://www.youtube.com/" title="Music - Youtube" />
        <Button link="https://www.instagram.com/" title="Music Merch - Instagram" />
        <Button link="" title="Music Merch - Website" />
        <Button link="" title="Hello:)" />
      </div>
    </div>
  );
}

export default App;
