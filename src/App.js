import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

import "./App.css";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/aftab"), {
      id: 1,
      name: "Al-Aftab",
      age: 23,
    });
  };
  return (
    <div className="App">
      <h1>Firebase react app</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
