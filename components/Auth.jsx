import Reach from "react";
import {Box, Button, Link, Text, useColorMode } from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaMoon, FaSun} from "react-icons/fa";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";

const Auth = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const { isLoggedIn, user } = useAuth() || {};
    //define a function to perform the login operation
    const handleAuth = async () => {
        const provider = new GoogleAuthProvider();
        //some async calls with promise
        signInWithPopup(
           auth,
           provider 
        ).then(
            //since we got a promise inside the then we get results returned
            (result) => {
                //This gives you the Google Access Token. You can use it aacces the Google API
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

            }
        ).catch(
            (error) => {
                const errorCode = error.code;
                const errorMessage = error.errorMessage;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("authentication error " + errorCode + errorMessage);

            }
        );
    };
    return (
        <Box position={"fixed"} top="5%" right="5%">
            <Button onClick={() => toggleColorMode()}>
                {colorMode== "dark" ? <FaSun /> : <FaMoon />}
            </Button>
            {" "}
            {isLoggedIn && (
                <>
                    <Text color="green.500">{user.email}</Text>
                    <Link color="red.500" onClick={ () => auth.signOut() }>
                        Logout
                    </Link>
                </>
            )}
            {!isLoggedIn && (
                <Button leftIcon={<FaGoogle />} onClick={ () => handleAuth() }>
                    Login with Google
                </Button>
            )}
        </Box>
    );
};

export default Auth;