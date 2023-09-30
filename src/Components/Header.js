import { useState, useEffect } from "react";
import Home from "./Home";
import AddNew from "./AddNew";
import db from "./Firebase"
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";



const Header = () => {
    const [data, setData] = useState([])
    const [userInput, setUserInput] = useState("")
    let filter = data.filter(names => {
        if(userInput === ""){
            return null;
        }else {
        return names.name.toLowerCase().includes(userInput)
            }
    })
    const handleChange = e => {
        e.preventDefault()
        setUserInput(e.target.value.toLowerCase())
    }

    console.log(data)

    useEffect(() => {
        onSnapshot(collection(db, "user"), (snapshot) => {
            setData(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
    }, [])


    const [clickEvent, setClickEvent] = useState(false)

    const [clickOutput , setClickedOutput] = useState({
        Name: "",
        Age: null,
        Bio: ""
    })
    console.log(clickOutput)
    return ( 
        <>
        <div>
            <div className="leftArea">
                <div className="form">
                    <input id="searchInput" type={"text"} onChange={handleChange} placeholder="Search here..." />
                    <button className="btnAdd" onClick={() => {
                        setClickEvent(true);
                    }}>Add</button>
                </div>
                <div className="formOutput">
                    {
                        filter.map(names => (
                            <div className="output">
                                <li onClick={() => {
                                    setClickedOutput({
                                        Name: `${names.name}`,
                                        Age: `${names.age}`,
                                        Bio: `${names.Bio}`
                                    });
                                    setClickEvent(false)
                                    }} key={names.id}>
                                        <div className="nameOutput">{names.name}</div>
                                    </li>
                                <div className="outputIcons">
                                    <img className="editIcon" src={require('./Images/editing.png')} alt="editing icon"/>
                                    <img className="deleteIcon" onClick={() => {
                                        deleteDoc(doc(db, "user", `${names.id}`))
                                    }} src={require('./Images/delete.png')} alt="editing icon"/>
                                </div>
                            </div>
                        ))
                    }
                    {/* <li><a href={"#First"}>First Name</a></li>
                   <li> <a href={"#Last"}>Last Name</a></li> */}
                </div>
                <div className="name">Miqael-<span className="underline"><span style={{color:"red"}}>D</span>ev</span></div>
            </div>
            <div className="rightArea">
                {
                    clickEvent === true ? <AddNew/>
                    : 
                    clickOutput.Name === "" ? null : <Home Name={clickOutput.Name} Age={clickOutput.Age} Bio={clickOutput.Bio} />

                    
                }
            </div>
        </div>
        </>
     );
}

 
export default Header;