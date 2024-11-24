import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { paths } from "../lib/constsns"

export const UserContext = createContext(null)

export function UserData({children}) {

    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
 
 function createUser (newUser) {
   localStorage.setItem("user", JSON.stringify(newUser))
    setUser(newUser)
    navigate(paths.MAIN)
 }

 function exitUser () {
   localStorage.removeItem("user")
    setUser(null)
    navigate(paths.LOGIN)
 }


 return <UserContext.Provider value={{user, createUser, exitUser}}>
            {children}
        </UserContext.Provider>
        
}