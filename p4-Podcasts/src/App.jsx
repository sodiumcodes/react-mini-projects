import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import './App.css'

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const handleCallBack = (res)=>{
        const user = jwtDecode(res.credential)
        setLoggedIn(true);
        setUser(user);
    }
    const handleLogOut= ()=>{
        setLoggedIn(false)
        setUser(null)
    }
    useEffect(()=>{
        // global google 
        google.accounts.id.initialize({
            //deleted this project from google
            client_id:"361787205946-oq9dh7issk024ap1jca58p4k0e7tg4p5.apps.googleusercontent.com",
            callback: handleCallBack,
        });
        google.accounts.id.renderButton(
            document.getElementById("SignIn"),{
                theme: "outline", size:"large"
            }
        )
    }, [loggedIn])
    return(
        <>  
            {
                !loggedIn? 
                <button id='SignIn'></button> : 
                <div>
                    hi {user.given_name}!!
                    <button onClick={handleLogOut}>Log Out</button>
                </div> 
            }
        </>
    )
}

export default App
