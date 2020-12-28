import {initNotification} from "./SERVICES/FirebaseServices"
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>PWA LEARNING CLASS</h1>
    <button onClick={initNotification}>NOTIFICATIONS</button>
    </div>
  );
}

export default App;
