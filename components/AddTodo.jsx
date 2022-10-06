//our first react component for our todo app!
//so we can use jsx to make a component load React
import React from "react";
//now lets add a bunch of chakra ui components
import {
    Box,
    Input,
    Button,
    Textarea,
    Stack,
    Select,
    useToast

} from "@chakra-ui/react";

//bring in useAuth from our hooks
import  {addTodo} from "../api/todo";
import useAuth from "../hooks/useAuth";

const AddTodo = () =>{
//every form control (text input) we want to associate a react state 
const [title, setTitle] = React.useState("");
const [description, setDescription] = React.useState("");
const [status, setStatus] = React.useState("pending");
const [isLoading, setIsLoading] = React.useState(false);
const toast =  useToast();
//lets call useAuth()
const { isLoggedIn, user } = useAuth() || {};
//let's define a function to run that handles the add todo operation
const handleTodoCreate = async () => {
    if (!isLoggedIn) {
        //show a floating alert
        toast (
            {
                title: "You must be logged in to create a todo",
                status: "error",
                duration: 9000,
                isClosable: true
            }
        );
        return;
    }
    setIsLoading(true);
    const todo = {
        title, 
        description,
        status,
        userId: user.uid
    }
await addTodo(todo);
setIsLoading(false);
setTitle("");
setDescription("");
setStatus("pending");
toast(
    {
        title: "To Do Created",
        status: "Success"

    }
);
};

return(
    <Box w="40%" margin={"0 auto"} display="block" mt={5}>
    <Stack direction="column">
        <Input 
        placeholder="Title"
        value = {title}
        onChange = {
            (e) => setTitle(e.target.value)
        }
         />
        <Textarea 
        placeholder = "Description"
        value = {description}
        onChange = {
            (e) => setDescription(e.target.value)
        }
        />
    <Select 
        value = {status}
        onChange = {(e) => setStatus(e.target.value) }>
            <option value ={"pending"} style= {{color: "yellow", fontWeight: "bold"} } >
            Pending
            </option>
            <option value ={"completed"} style= {{color: "green", fontWeight: "bold"} } >
            Completed
            </option>
    </Select>
    <Button onClick={ ()=>handleTodoCreate() }
    disabled={title.length < 1 || description.length < 1 || isLoading }
    variantColor = "teal"
    variant = "solid"
    >
        Add Todo 
    </Button>
    </Stack>
</Box>
);


};

export default AddTodo;