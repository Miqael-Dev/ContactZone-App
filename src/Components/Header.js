import { useState, useEffect } from "react";
import Home from "./Home";
import AddNew from "./AddNew";
import db from "./Firebase"
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";



const Header = () => {
    const [data, setData] = useState([]);
    const [userInput, setUserInput] = useState("");
    let filter = data.filter(names => {
        if(userInput === ""){
            return null;
        }else {
        return names.name.toLowerCase().includes(userInput)
            }
    })

    const editItem = (names) => {
        const editRef = doc(db, 'user', `${names.id}`);
    }

    const handleChange = e => {
        e.preventDefault()
        setUserInput(e.target.value.toLowerCase())
    }

    useEffect(() => {
        onSnapshot(collection(db, "user"), (snapshot) => {
            setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
    }, [])


    const [clickEvent, setClickEvent] = useState(false);
    const [clickOutput , setClickedOutput] = useState({
        Name: "",
        Age: null,
        Bio: ""
    })
    
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
                            <div className="output" key={names.id}>
                                <li  onClick={() => {
                                    setClickedOutput({
                                        Name: `${names.name}`,
                                        Age: `${names.age}`,
                                        Bio: `${names.Bio}`
                                    });
                                    setClickEvent(false);
                                    }} >
                                        <div className="nameOutput">{names.name}</div>
                                    </li>
                                <div className="outputIcons">
                                    <img className="editIcon" onClick={() => {

                                    }} src={require('./Images/editing.png')} alt="editing icon"/>
                                    <img className="deleteIcon" onClick={() => {
                                        deleteDoc(doc(db, "user", `${names.id}`))
                                    }} src={require('./Images/delete.png')} alt="editing icon"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="name">Miqael-<span className="underline"><span style={{color:"red"}}>D</span>ev</span></div>
            </div>
            <div className="rightArea">
                {
                    clickEvent === true ? <AddNew/>
                    : 
                    clickOutput.Name === "" ? null : <Home Name={clickOutput.Name} Age={clickOutput.Age} Bio={clickOutput.Bio} />   
                }
                {

                }
            </div>
        </div>
        </>
     );
}

 
export default Header;