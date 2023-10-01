import { useState } from "react";
import { collection, addDoc} from "firebase/firestore";
import db from "./Firebase";


const AddNew = () => {
    const [action, setAction] = useState();
    const [newData, setNewData] = useState({
        name: "",
        age: "",
        Bio: ""
    });
    
    const handleChangeTwo = (e) => {
        if(e.target.name === "name"){
            setNewData(prevData => ({...prevData, name: e.target.value}))
        } else if(e.target.name === "age"){
            setNewData(prevData => ({...prevData, age: e.target.value}))
        } else if(e.target.name === "bio"){
            setNewData(prevData => ({...prevData, Bio: e.target.value}))
        }
    }
    console.log(newData);
    
    function handleSubmit(e) {
        e.preventDefault();
        if(newData.name !== "" && newData.age !== "" && newData.age !== ""){
            const submit = async () => {
                const collectionRef = collection(db, "user");
                const payload = newData
                await addDoc(collectionRef, payload)
            }
            setNewData({
                name : "",
                age: "",
                Bio: ""
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
                {action === false ? <p className="success">Added Successfully.</p> : null }
                {action === true ? <p className="warn">Please fill out the form</p> : null }
                    <h2>Full name:</h2>
                    <input className="nameInput" value={newData.name} name="name" onChange={handleChangeTwo} type={"text"} />
                    <h2>Age:</h2>
                    <input className="ageInput" value={newData.age} name="age" onChange={handleChangeTwo} type={"number"} />
                    <div className="bio">
                        <h2>Bio:</h2>
                        <textarea rows={5} name="bio" value={newData.Bio} placeholder="Enter text here..." onChange={handleChangeTwo}></textarea>
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