import { useState } from "react";

const AddNew = () => {
    const [data, setData] = useState()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let firstName = document.querySelector(".firstname").value;
        let lastName = document.querySelector(".lastname").value;
        let age = document.querySelector(".ageInput").value;
        setData({
            firstName: `${firstName}`,
            lastName: `${lastName}`,
            age: `${age}`
    })
        console.log(data)
        // const response = await fetch("http://localhost:4000/people", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
    }
    return (  
        <>
            <div className="AddNew">
                <div className="AddNewBoard">
                    <h2>First Name:</h2>
                    <input className="firstname"  type={"text"} />
                    <h2>Last Name:</h2>
                    <input className="lastname" type={"text"} />
                    <h2>Age:</h2>
                    <input className="ageInput" type={"number"} />
                    <div className="btns">
                        <button onClick={handleSubmit} className="AddBtn">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default AddNew;