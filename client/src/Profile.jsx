import React from 'react';

export default function Profile(props) {
  return (

      
        <div>
          <p>Profile</p>
          <button onClick={() => props.logout()}>Log Out</button>
        </div>
      
    
  );
}