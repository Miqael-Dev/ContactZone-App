import { useLoaderData } from "react-router";
import { useState } from "react";
import Home from "./Home";
import AddNew from "./AddNew";


const Header = () => {
    const contact = useLoaderData();
    const [userInput, setUserInput] = useState("")
    let filter = contact.filter(names => {
        if(userInput === ""){
            return null;
        }else {
        return names.firstName.toLowerCase().includes(userInput)
        || names.lastName.toLowerCase().includes(userInput);
            }
    })
    const handleChange = e => {
        e.preventDefault()
        setUserInput(e.target.value.toLowerCase())
    }

    const [clickEvent, setClickEvent] = useState(false)

    const [clickOutput , setClickedOutput] = useState({
        firstName:"",
        lastName: "",
        image: "",
        Age: null
    })
    
    return ( 
        <>
        <div>
            <div className="leftArea">
                <div className="form">
                    <input id="searchInput" type={"text"} onChange={handleChange} placeholder="Search here..." />
                    <button className="btnAdd" onClick={() => {
                        setClickEvent(true)
                    }}>Add</button>
                </div>
                <div className="formOutput">
                    {
                        filter.map(names => (
                            <li onClick={() => {
                               setClickedOutput({
                                firstName: `${names.firstName}`,
                                lastName: `${names.lastName}`,
                                image: `${names.image}`,
                                Age: `${names.age}`
                               });
                               setClickEvent(false)
                            }} key={names.id}>{names.firstName} {names.lastName}</li>
                        ))
                    }
                    {/* <li><a href={"#First"}>First Name</a></li>
                   <li> <a href={"#Last"}>Last Name</a></li> */}
                </div>
                <div className="name">Miqael-<span className="underline"><span style={{color:"red"}}>D</span>ev</span></div>
            </div>
            <div className="rightArea">
                {
                    clickEvent === true ? <AddNew />
                    : 
                    clickOutput.firstName === "" || clickOutput.lastName === "" ? null : <Home firstName={clickOutput.firstName} lastName={clickOutput.lastName} Age={clickOutput.Age} image={clickOutput.image}/>

                    
                }
            </div>
        </div>
        </>
     );
}

export const loaderData = async () => {
    let res = await fetch("http://localhost:4000/people")
    return res.json();
}
 
export default Header;