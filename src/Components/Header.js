import { useState, useEffect } from "react";
import AddNew from "./AddNew";
import db from "./Firebase"
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import Edit from "./Edit";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ContactView from "./ContactView";

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

    const handleChange = e => {
        e.preventDefault()
        setUserInput(e.target.value.toLowerCase())
    }

    useEffect(() => {
        onSnapshot(collection(db, "user"), (snapshot) => {
            setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
    }, [])

    const [action, setAction] = useState()
    const [clickEvent, setClickEvent] = useState("AddPage");
    const [id, setId] = useState("")
    const [clickOutput , setClickedOutput] = useState({
        name: "",
        age: null,
        bio: "",
        id: ""
    })

    const onChange = (e) => {
        setClickedOutput(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(clickOutput.name !== "" && clickOutput.age !== "" && clickOutput.bio !== ""){
            const editRef = doc(db, 'user', `${id}`);
            setDoc(editRef, clickOutput);
            setAction(false)
        }else {
            setAction(true)
        }  
    }
    
    return ( 
        <>
        <div className="mainContainer">
            <div className="leftArea">
                <div className="form">
                    {/* <input id="searchInput" type={"text"} onChange={handleChange} placeholder="Search here..." /> */}
                    <TextField id="outlined-search" className="searchInput" size="small" onChange={handleChange} label="Search" type="search" />
                    <button className="btnAdd" onClick={() => {
                        setClickEvent("AddPage");
                    }}>Add</button>
                </div>
                <div className="formOutput">
                    {  
                        filter.map(names => (
                            <div className="output" key={names.id}>
                                <li  onClick={() => {
                                    setClickedOutput({
                                        name: `${names.name}`,
                                        age: `${names.age}`,
                                        bio: `${names.bio}`,
                                        id: `${names.id}`
                                    });
                                    setClickEvent("ViewPage");
                                    }} >
                                        <div className="nameOutput">{names.name}</div>
                                    </li>
                            </div>
                        ))
                    }
                </div>
                <div className="name">Miqael-<span className="underline"><span style={{color:"red"}}>D</span>ev</span></div>
            </div>
            <div className="rightArea">
                <div className="nav600">
                    <FontAwesomeIcon className="addBtn" onClick={() => {
                        setClickEvent("AddPage");
                        setUserInput("")
                    }} icon={faCirclePlus}/>
                    <div className="search600">
                        <input type="text" placeholder="Search..." className="searchInput600" value={userInput} onChange={handleChange} />
                        <FontAwesomeIcon className="searchBtn" icon={faMagnifyingGlass} />
                        { userInput === "" ? null :    
                            <div id="form600" className="formOutput600">
                                {
                                    filter.map(names => (
                                        <div className="output" key={names.id}>
                                            <li  onClick={() => {
                                                setUserInput("")
                                                setClickedOutput({
                                                    name: `${names.name}`,
                                                    age: `${names.age}`,
                                                    bio: `${names.bio}`
                                                });
                                                setClickEvent("ViewPage");
                                                }} >
                                                    <div className="nameOutput">{names.name}</div>
                                                </li>
                                        </div>
                                    )) 
                                }
                            </div>
                        }
                    </div>
                </div>
                {
                    clickEvent === "AddPage" ? <AddNew/> : null   
                }
                {
                    clickEvent === "ViewPage" ? <ContactView 
                    Name={clickOutput.name} 
                    Age={clickOutput.age} 
                    Bio={clickOutput.bio}
                    Event={setClickEvent}
                    Output={setClickedOutput}
                    Id={setId}
                    /> : null
                }
                {
                    clickEvent === "EditPage" ? <Edit 
                    nameValue={clickOutput.name} 
                    ageValue={clickOutput.age}
                    bioValue={clickOutput.bio}
                    onSubmit={onSubmit}
                    thisOnChange={onChange}
                    action={action} /> : null
                }
                <div className="name600">Miqael-<span className="underline600"><span style={{color:"red"}}>D</span>ev</span></div>
            </div>
        </div>
        </>
     );
}

 
export default Header;