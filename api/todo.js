//this file has code to interact with our firestore databse
import {db} from "../firebase";
import {
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc
} from "firebase/firestore";
import { async } from "@firebase/util";

//create a function as an arrow function 
//const FUNCTIONAME = async (arguments) => { CODE };

const addTodo =  async ( {userId, title, description, status} ) => {
    try {
        await addDoc(
            collection(db, "todo"),
            {
               user: userId,
               title: title,
               description: description,
               status: status, 
               createdAt: new Date().getTime()


            }
        );

    } catch (err) {
        console.log(err);
    }
};

const toggleTodoStatus = async ( { docId, status} ) => {
    try {
        //grab a reference to an existing firestore document by Id
        const todoRef = doc( db, "todo", docId );
        //update that doc!
        await updateDoc( 
            todoRef, 
            {
                status: status 
            }
            )
    } catch(err) {
        console.log(err);
    }
};

const deleteTodo = async ( docId ) => {
    try {
        const todoRef = doc(db, "todo", docId);
        await deleteDoc( todoRef);

    } catch(err) {
        console.log(err);
    }
};

export { addTodo, toggleTodoStatus, deleteTodo};