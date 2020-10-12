import React, { Fragment } from 'react';

const Membre = ({nom, age, makeOlder, changeName, children}) => {
  return (
    <div className="App">
          <h2 style={{backgroundColor: age<6 ? 'red' : 'purple',
        color: 'white'}}>Membre {nom.toUpperCase()} : {age} ans</h2>
          {children ? <h3>{children}</h3> : <Fragment />}
          <input value={nom} type="text" onChange={changeName} />
          <button onClick={makeOlder}>+</button>
    </div>
  );
}

export default Membre;