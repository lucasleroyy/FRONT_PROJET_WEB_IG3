import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UidContext } from './components/AppContext';
import Routes from './components/Routes';

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => { //on va se stocker l'id de notre utilisateur
    const fetchToken = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL} jwtid`,
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setUid(res.data); 
      })
      .catch((err) => console.log("No token"));
    };
    fetchToken();
  }, [uid]); 

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
