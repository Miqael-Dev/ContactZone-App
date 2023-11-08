import { useState, useEffect } from "react";
import db from "./Firebase"
import { collection, onSnapshot } from "firebase/firestore";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        onSnapshot(collection(db, "user"), (snapshot) => {
            setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
    }, [])
    const [userInput, setUserInput] = useState("");

    const filter = data.filter(names => {
        if(userInput === ""){
            return null;
        }else {
            return names.name.toLowerCase().includes(userInput)
        }
    });
    
    const handleChange = e => {
        e.preventDefault();
        setUserInput(e.target.value.toLowerCase());
    }
    
    
    return ( 
        <>
            <div className="mainContainer">
                <div className="leftArea">
                    <div className="form">
                        <TextField id="outlined-search" className="searchInput" size="small" onChange={handleChange} label="Search" type="search" />
                        <Link to={"add"}>
                            <button className="btnAdd">Add</button>
                        </Link>
                    </div>
                    <div className="formOutput">
                        {  
                            filter.map(names => (
                                <Link to={names.id} key={names.id}> 
                                    <div className="output">
                                            <li  onClick={() => { setUserInput("") }} >
                                                    <div className="nameOutput">{names.name}</div>
                                            </li>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="name">Miqael-<span className="underline"><span style={{color:"red"}}>D</span>ev</span></div>
                </div>
                <div className="rightArea">
                    <div className="nav600">
                        <Link to={"add"}>
                            <FontAwesomeIcon className="addBtn" onClick={() => {
                                setUserInput("")
                            }} icon={faCirclePlus}/>
                        </Link>
                        <div className="search600">
                            <input type="text" placeholder="Search..." className="searchInput600" value={userInput} onChange={handleChange} />
                            <FontAwesomeIcon className="searchBtn" icon={faMagnifyingGlass} />
                            { userInput === "" ? null :    
                                <div id="form600" className="formOutput600">
                                    {
                                        filter.map(names => (
                                            <Link className="link600" key={names.id} to={names.id}>
                                                <div className="output">
                                                        <li  onClick={() => { setUserInput("")}} >
                                                                <div className="nameOutput">{names.name}</div>
                                                        </li>
                                                </div>
                                            </Link>
                                        )) 
                                    }
                                </div>
                            }
                        </div>
                    </div>
                        <Outlet />
                    <div className="name600">Miqael-<span className="underline600"><span style={{color:"red"}}>D</span>ev</span></div>
                </div>
            </div>
        </>
     );
}


export default Header;