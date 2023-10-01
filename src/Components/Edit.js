const Edit = ({nameValue, ageValue, bioValue, thisOnChange, onSubmit}) => {

    // console.log(prevData)

    return ( 
        <>
            <div className="editPage">
                <div className="editInputs">
                    <center className="boardTitle">Edit Profile</center>
                    <h2>Username:</h2>
                    <input value={nameValue}  name="name" onChange={thisOnChange}/>
                    <h2>Age:</h2>
                    <input value={ageValue} type="number" name="age" onChange={thisOnChange} />
                    <h2>Bio:</h2>
                    <textarea value={bioValue} name="bio" onChange={thisOnChange} rows={5}></textarea>
                    <button onClick={onSubmit}>Done</button>
                </div>
            </div>
        </>
     );
}
 
export default Edit;