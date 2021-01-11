import React from "react";
import "./App.css";
import AppAccordian from "./AppAccordian";
import todos from "./resources/data.json";
import TreeView from "./Tree";
import Datagrid from "./Datagrid";
import TestAccordian from "./TestAccordian";
import Todos from "./components/Todos";
import GridItem from "./components/GridItem";
import Tab from "./components/Tab";

function App() {
  return (
    <div className="App">
      {/*
      <TreeView/>
      <AppAccordian />
      
      <TestAccordian preview='test'>
        Tesintindflknlfnvldflk
      </TestAccordian>
      
      
      
      <GridItem />
      
      <Todos data={todos} />
      
      */}
      <Tab />
    </div>
  );
}

export default App;
