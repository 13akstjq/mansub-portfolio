import React, { useEffect } from "react";
import { firestore } from "./Firebase";

function App() {
  useEffect(() => {
    firestore
      .collection("projects")
      .get()
      .then(() => console.log("성공"));
  }, []);

  return (
    <div className="App">
      <span>Hello World!</span>
    </div>
  );
}

export default App;
