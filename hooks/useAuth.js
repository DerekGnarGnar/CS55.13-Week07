//import 2 react functions to implement react hooks with effect and state
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const useAuth = () => {
    //ask react to define a state variable and an associated function to change its variable
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn ] = useState(false);
    //ask react to manage our state variables based on a block of code we give it to 
    useEffect(

        //we are passing an anonymous arrow function to react's useEffect()
        () => {
            auth.onAuthStateChanged(
                //we are passing another anonymous function to firebase's onAuthchanged method
                (user) => {
                    //with the user object value that firebase returns set react states
                    //set react state variable isLoggedIn
                    setIsLoggedIn( user && user.uid ? true : false);
                    //set react state variable user
                    setUser( user );

                }
            );
        }
    );

}

//don't forget to export the function so that other files can import it!
 export default useAuth;

 //everytime the Auth state changes, the onAuth state changed method is called