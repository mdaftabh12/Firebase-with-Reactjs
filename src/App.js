//=============  Realtime Database ================//

// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "./firebase";

// import "./App.css";

// const db = getDatabase(app);

// function App() {
//   const putData = () => {
//     set(ref(db, "users/aftab"), {
//       id: 1,
//       name: "Al-Aftab",
//       age: 23,
//     });
//   };
//   return (
//     <div className="App">
//       <h1>Firebase react app</h1>
//       <button onClick={putData}>Put Data</button>
//     </div>
//   );
// }

// export default App;

//=============  Authentication With Email And Password  ================//

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";

const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "mdaftab@gmail.com", "Aftabh12").then(
      (value) => {
        console.log(value);
      }
    );
  };
  return (
    <div className="App">
      <h1>Firebase react app</h1>
      <button onClick={signupUser}>Put Data</button>
    </div>
  );
}

export default App;
