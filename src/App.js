function App() {
  function handleClick() {
    console.log('button clicked');
  }

  return (
    <div id='container'>
      <div id='navbar'>Counter.js</div>
      <div id='counter'>
        <p>You clicked ___ times</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    </div>
  );
}

export default App;
