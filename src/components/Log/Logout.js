import React from 'react';
import axios from 'axios';
import cookie from "js-cookie";

const RemoveCookie = (key) => {
  if (window !== undefined) {
    cookie.remove(key, {expires : 1 }); //une milliseconde
  }
};

const Logout = () => {
  const logout = async() => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/api/user/logout`,
      withCredentials: true ,
    })
    .then(() => RemoveCookie('jwt'))
    .catch ((err) => console.log(err));

window.location = "/";
  };

  //quand on clique dessus déclenche le logout 
  return (
    <li onClick={logout}>
      <img src="./img/icons/logout.svg" alt="logout"/>
    </li>
  );
};

export default Logout;
