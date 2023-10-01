import { useState } from "react";
import { collection, addDoc} from "firebase/firestore";
import db from "./Firebase";


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
        if(newData.name !== "" && newData.age !== "" && newData.age !== ""){
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
                    <h2>Username:</h2>
                    <input className="nameInput" value={newData.name} name="name" onChange={handleChangeTwo} type={"text"} />
                    <h2>Age:</h2>
                    <input className="ageInput" value={newData.age} name="age" onChange={handleChangeTwo} type={"number"} />
                    <div className="bio">
                        <h2>Bio:</h2>
                        <textarea rows={5} name="bio" value={newData.bio} placeholder="Enter text here..." onChange={handleChangeTwo}></textarea>
                    </div>
                    <div className="btns">
                        <button onClick={handleSubmit} className="AddBtn">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddNew;