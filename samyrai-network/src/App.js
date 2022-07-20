import React from 'react';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Nav from './components/nav';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}
export default App;
//урок 12 закончен