import React , { useState }  from 'react';

export const UserContext = React.createContext();


export default function Index({children}) {

    const [addUserData, setaddUserData] = useState()
  return (
    <UserContext.Provider 
        value={{ addUserData, setaddUserData}}>
                     {children}
    </UserContext.Provider>
  )
}
