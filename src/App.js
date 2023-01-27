import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Truc";

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 2);
    return names[int];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleNameChange()}!</p>
        {/* curly bracets indicate js expression */}
        {/* <p>{name}</p> */}
      </header>
    </div>
  );
}

export default App;
