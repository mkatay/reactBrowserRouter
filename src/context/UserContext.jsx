import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const UserContext=createContext()

export const UserProvider = ({children}) => {
    const [admin,setAdmin]=useState(false)
    const [user,setUser]=useState('')

  return (
    <UserContext.Provider value={{admin,setAdmin,user,setUser}}>
        {children}
    </UserContext.Provider>

  )
}

