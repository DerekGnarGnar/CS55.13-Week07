import React from "react";
import {
    Box,
    Heading,
     SimpleGrid,
    Text
} from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import {
    doc, 
    getDoc
} from "firebase/firestore";
import {db} from "../../firebase"

//define the jsx component to show just one single do 
const TodoItem = ({itemData}) => {
    //enfore user login
    const{ user } = useAuth() || {};
    if(!user){
        return;
    }//if our code continues exectuion, to here, a user is logged in
    return (
        <Box mt={5}>
            <Heading as="h3" fontSize={"xl"}>
                {itemData.title}
            </Heading>
            <Text>
                {itemData.description}
            </Text>
            <Text>
                {itemData.status}
            </Text>
            <Text>
                {itemData.createdAt}
            </Text>
        </Box>
    )

};

//define the Required getServerSideProps() function that Next.js will call
//when it gets a dynamically-routed URL: /todo/blah <- here the id will = blah

export async function getServerSideProps(context){
    //our function will receive all it needs from Next.js in context variable
    //if we want to get the url parameter that next.js set for id 'cause. [id].js
    let itemData = null;
    //get a doc from firestore 
    const docRef = doc( db, 'todo', context.params.id)
    const docSnap = await getDoc(docRef);
    //exists() and data() are methods, not property names
    if ( docSnap.exists){
        itemData = docSnap.data();
    }
    return {
            props: {
                itemData
            }
    };
}
export default TodoItem;