import { TextField } from "@mui/material";

const Edit = ({nameValue, ageValue, bioValue, thisOnChange, onSubmit, action}) => {

    // console.log(prevData)

    return ( 
        <>
            <div className="editPage">
                <div className="editInputs">
                <center className="boardTitle">Edit Profile</center>
                <p className="authWarning">
                        {action === false ? <p className="success">Edited Successfully.</p> : null }
                        {action === true ? <p className="warn">Please fill all the spaces</p> : null }
                    </p>
                    <TextField 
                    id="outlined-basic" 
                    name = "name"
                    className="nameInput" 
                    margin="normal"
                    size="small"
                    value={nameValue}
                    onChange={thisOnChange}
                    label="Username" 
                    variant="outlined" />
                    
                    <TextField 
                    id="outlined-number"
                    name="age" 
                    className="ageInput" 
                    margin="normal"
                    size="small"
                    value={ageValue}
                    onChange={thisOnChange}
                    label="Age" 
                    type="number" />

                    <TextField
                    id="outlined-multiline-static"
                    label="Bio"
                    name="bio"
                    className="bioBox"
                    margin="normal"
                    size="small"
                    value={bioValue}
                    onChange={thisOnChange}
                    multiline
                    rows={5}
                    placeholder="Enter text here..." />
                    {/* <h2>Username:</h2>
                    <input value={nameValue}  name="name" onChange={thisOnChange}/>
                    <h2>Age:</h2>
                    <input value={ageValue} type="number" name="age" onChange={thisOnChange} />
                    <h2>Bio:</h2>
                    <textarea value={bioValue} name="bio" onChange={thisOnChange} rows={5}></textarea> */}
                    <button onClick={onSubmit}>Done</button>
                </div>
            </div>
        </>
     );
}
 
export default Edit;