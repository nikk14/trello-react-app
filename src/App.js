import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="trello-master">
        <nav className='navbar app'>App bar</nav>
        <nav className='navbar board'>Board bar</nav>
        <div className='board-columns'>
          <div className='column'>
            <header>BrainStrorm</header>
            <ul>
              <li>
                <img src="https://source.unsplash.com/erondu2"  alt="image not available at this time" />
                Title: Trungandev
              </li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
          <div className='column'>
            <header>BrainStrorm</header>
            <ul>
              <li>
                <img src="https://source.unsplash.com/erondu2" alt="image not available at this time" />
                Title: Trungandev
              </li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
        </div>
        {/* <h1 className='hello-world'>Hello</h1> */}
      </header>
    </div>
  );
}

export default App;
