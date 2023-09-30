import { useState } from "react";
import { collection, addDoc} from "firebase/firestore";
import db from "./Firebase";


const AddNew = () => {
    const [action, setAction] = useState();
    const [input, setInput] = useState();
   
    const [newData, setNewData] = useState({
        name: "",
        age: ""
    });

    const emptyInput = () => {
        document.querySelector(".firstname").value = "";
        document.querySelector(".ageInput").value = "";
    }
    
    const handleChangeTwo = (e) => {
        if(e.target.name === "name"){
            setNewData(prevData => ({...prevData, name: e.target.value}))
        } else if(e.target.name === "age"){
            setNewData(prevData => ({...prevData, age: e.target.value}))
        }
    }
    console.log(newData);
    
    function handleSubmit(e) {
        e.currentTarget.disable = true;
        if(newData.name !== "" && newData.age !== ""){
            setNewData({
                name : "",
                age: ""
            })
            emptyInput();
            const submit = async () => {
                const collectionRef = collection(db, "user");
                const payload = newData
                await addDoc(collectionRef, payload)
            }
            submit();
            setAction(false);
            } else {
                setAction(true)
            }
            
        }
        

    console.log(input)

    
        
       
    
    return (  
        <>
            <div className="AddNew" >
                <div className="AddNewBoard">
                {action === false ? <p className="success">Added Successfully.</p> : null }
                {action === true ? <p className="warn">Please fill out the form</p> : null }
                    <h2>Full name:</h2>
                    <input className="firstname" name="name" onChange={handleChangeTwo} type={"text"} />
                    <h2>Age:</h2>
                    <input className="ageInput" name="age" onChange={handleChangeTwo} type={"number"} />
                    <div className="btns">
                        <button onClick={handleSubmit} className="AddBtn">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddNew;