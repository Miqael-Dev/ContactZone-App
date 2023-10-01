const Edit = ({nameEdit, ageEdit, bioEdit}) => {
    return ( 
        <>
            <div className="editPage">
                <div className="editInputs">
                    <h2>Name:</h2>
                    <input defaultValue={nameEdit}/>
                    <h2>Age:</h2>
                    <input defaultValue={ageEdit}/>
                    <h2>Bio:</h2>
                    <textarea defaultValue={bioEdit} rows={5}></textarea>
                    <button>Done</button>
                </div>
            </div>
        </>
     );
}
 
export default Edit;