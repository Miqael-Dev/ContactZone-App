import { TextField } from "@mui/material";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import db from "./Firebase"
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";

const Edit = () => {
    const { userID } = useParams()
    const [contact, setContact] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [action, setAction] = useState()
    const [clickOutput , setClickedOutput] = useState({
        name: "",
        age:  null,
        bio: "",
        id: ""
    })

    useEffect(() => {
        onSnapshot(collection(db, `user`), (snapshot) => {
            let res = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            let contacts = res.find(data => data.id === userID)
            setClickedOutput({
                name: `${contacts.name}`,
                age: contacts.age,
                bio: `${contacts.bio}`
            })
            setIsLoading(false)
        })
    })
    
    const onChange = (e) => {
        setClickedOutput(prev => ({...prev, [e.target.name]: e.target.value}));
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(clickOutput.name !== "" && clickOutput.age !== "" && clickOutput.bio !== ""){
            const editRef = doc(db, 'user', `${userID}`);
            setDoc(editRef, clickOutput);
            setAction(false)
        }else {
            setAction(true)
        }  
    }
    return ( 
        <> 
            { isLoading ? 
            <div className="loading">
                <p>Loading...</p> 
            </div> :
                <div className="editPage">
                    <div className="editInputs">
                    <center className="boardTitle">Edit Profile</center>
                    <p className="authWarning">
                            {action === false ? <p className="success">Edited Successfully.</p> : null }
                            {action === true ? <p className="warn">Please fill all the spaces</p> : null }
                        </p>
                        <TextField 
                        id="outlined-basic" 
                        name = "name"
                        className="nameInput" 
                        margin="normal"
                        size="small"
                        value={clickOutput.name}
                        onChange={onChange}
                        label="Username" 
                        variant="outlined"
                        focused />
                        
                        <TextField 
                        id="outlined-number"
                        name="age" 
                        className="ageInput" 
                        margin="normal"
                        size="small"
                        value={clickOutput.age}
                        onChange={onChange}
                        label="Age" 
                        type="number" 
                        focused />

                        <TextField
                        id="outlined-multiline-static"
                        label="Bio"
                        name="bio"
                        className="bioBox"
                        margin="normal"
                        size="small"
                        value={clickOutput.bio}
                        onChange={onChange}
                        multiline
                        rows={5}
                        placeholder="Enter text here..." 
                        focused />
                        <button onClick={onSubmit}>Done</button>
                    </div>
                </div>
            }
        </>
     );
}
 
export default Edit;