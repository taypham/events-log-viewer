import JsonDataDisplay from './Table'
import React, {useState} from "react"
import './App.css'
function App() {
  return (
    <div className="App">
  
      <h1>Event log viewer </h1>
      <JsonDataDisplay/>
    </div>
  );
}
export default App;