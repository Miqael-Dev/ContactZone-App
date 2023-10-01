import { useState, useEffect } from "react";
import Home from "./Home";
import AddNew from "./AddNew";
import db from "./Firebase"
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import Edit from "./Edit";



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


    const [clickEvent, setClickEvent] = useState("");
    const [id, setId] = useState("")
    const [clickOutput , setClickedOutput] = useState({
        name: "",
        age: null,
        bio: "",
    })

    const onChange = (e) => {
        setClickedOutput(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const editRef = doc(db, 'user', `${id}`);
        setDoc(editRef, clickOutput)

    }
    
    return ( 
        <>
        <div>
            <div className="leftArea">
                <div className="form">
                    <input id="searchInput" type={"text"} onChange={handleChange} placeholder="Search here..." />
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
                                        bio: `${names.bio}`
                                    });
                                    setClickEvent("ViewPage");
                                    }} >
                                        <div className="nameOutput">{names.name}</div>
                                    </li>
                                <div className="outputIcons">
                                    <img className="editIcon" onClick={() => {
                                        setClickedOutput({
                                            name: `${names.name}`,
                                            age: Number(names.age),
                                            bio: `${names.bio}`
                                        });
                                        setId(names.id)
                                        setClickEvent("EditPage")
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
                    clickEvent === "AddPage" ? <AddNew/> : null   
                }
                {
                    clickEvent === "ViewPage" ? <Home Name={clickOutput.name} Age={clickOutput.age} Bio={clickOutput.bio}/> : null
                }
                {
                    clickEvent === "EditPage" ? <Edit 
                    nameValue={clickOutput.name} 
                    ageValue={clickOutput.age}
                    bioValue={clickOutput.bio}
                    onSubmit={onSubmit}
                    thisOnChange={onChange}/> : null
                }
            </div>
        </div>
        </>
     );
}

 
export default Header;