import React from 'react'
import './App.css';
import ParentComponent from './ParentComponent'
import SiblingComponent from './SiblingComponent'

function App() {
  return (
    <div className="App">
<ParentComponent />
<SiblingComponent />
    </div>
  );
}

export default App;
