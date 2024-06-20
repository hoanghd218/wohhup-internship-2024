import React from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Stock from "./Stock.jsx";
import Card from "./Card.jsx";
import Button from './Button.jsx';
import UserAccount from "./UserAccount.jsx";

function App() {

  return(
    <>
      <Header/>
      <UserAccount isLoggedIn={true} username="John"/>
      <Button/>
      <Stock/> 
      <Card name="PDA" growth={15}/>
      <Card/>
      <Card/>
      <Footer/>
    </> 
  );
}

export default App
