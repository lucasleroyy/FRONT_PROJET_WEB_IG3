import React, { useContext } from 'react';
import Log from '../components/Log'
import { UidContext } from '../components/AppContext';

const Profil = () => {
  const uid = useContext(UidContext);

  return (

    //
<div className="profil-page">
  {uid ?  (
    <h1> UPDATE PAGE </h1>
  ) : (
  <div className="log-container">
    <Log signIn={false} signUp={true} />
     <div className="img-container">
<img src="./img/log.png" alt="img-log" /> 
     </div>
    </div>
    )}
  </div>
  );
};

//image logo

export default Profil;
