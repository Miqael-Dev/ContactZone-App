import { useState } from "react";
import { collection, addDoc} from "firebase/firestore";
import db from "./Firebase";
import { TextField } from "@mui/material";

const AddNew = () => {
    const [action, setAction] = useState();
    const [newData, setNewData] = useState({
        name: "",
        age: "",
        bio: ""
    });
    
    const handleChangeTwo = (e) => {
        if(e.target.name === "name"){
            setNewData(prevData => ({...prevData, name: e.target.value}))
        } else if(e.target.name === "age"){
            setNewData(prevData => ({...prevData, age: Number(e.target.value)}))
        } else if(e.target.name === "bio"){
            setNewData(prevData => ({...prevData, bio: e.target.value}))
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if(newData.name !== "" && newData.age !== "" && newData.bio !== ""){
            const submit = async () => {
                const collectionRef = collection(db, "user");
                await addDoc(collectionRef, newData)
            }
            setNewData({
                name : "",
                age: "",
                bio: ""
            });
            submit();
            setAction(false);
        } else {
                setAction(true)
            }
            
        }   
       
    
    return (  
        <>
            <div className="AddNew" >
                <div className="AddNewBoard">
                    <center className="boardTitle">Add Profile</center>
                    <p className="authWarning">
                        {action === false ? <p className="success">Added Successfully.</p> : null }
                        {action === true ? <p className="warn">Please fill all the spaces</p> : null }
                    </p>
                    <TextField 
                    id="outlined-basic" 
                    name = "name"
                    className="nameInput" 
                    margin="normal"
                    value={newData.name}
                    onChange={handleChangeTwo}
                    label="Username" 
                    variant="outlined" />
                    
                    <TextField 
                    id="outlined-number"
                    name="age" 
                    className="ageInput" 
                    margin="normal"
                    value={newData.age}
                    onChange={handleChangeTwo}
                    label="Age" 
                    type="number" />

                    <TextField
                    id="outlined-multiline-static"
                    label="Bio"
                    name="bio"
                    className="bioBox"
                    margin="normal"
                    value={newData.bio}
                    onChange={handleChangeTwo}
                    multiline
                    rows={5}
                    placeholder="Enter text here..." />
                    <div className="btns">
                        <button onClick={handleSubmit} className="AddBtn">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddNew;