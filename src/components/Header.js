import React from "react";
import soupKitchenImg from "./../img/soupKitchenImg.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Soup Kitchen</h1>
      <img src={soupKitchenImg} alt="A soup bowl being handed from one person to another" />
    </React.Fragment>
  );
}

export default Header;