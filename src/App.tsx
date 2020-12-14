import React from 'react';
import './App.css';
import AppAccordian from './AppAccordian';
import  TreeView from './Tree'
import Datagrid from './Datagrid'

function App() {
  return (
    <div className="App">
      <TreeView/>
      <AppAccordian />
      
    </div>
  );
}

export default App;
