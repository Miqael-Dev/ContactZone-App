import db from './Firebase'
import { deleteDoc, doc } from 'firebase/firestore';

const ContactView = ({Name, Age , Bio, Output, Id, Event}) => {

    return (  
        <div className="ContactView">
            <div className="Board">
                <div className='Board-Info'>
                    <div className="userImage">
                        <img src={require('./Images/user.png')}  alt="user icon"/>
                    </div>
                    <div className="ContactInfo">
                        <h1 className="ContactName">{Name}</h1>
                        <h3 className="ContactAge">Age: {Age}</h3>
                        <h4 className="Bio">{Bio}</h4>
                    </div>
                </div>
                <div className="outputIcons">
                    <div className='editBtn' onClick={() => {
                            Output({
                                name: `${Name}`,
                                age: Number(Age),
                                bio: `${Bio}`
                            });
                            Id(Output.Id)
                            Event("EditPage")
                        }}>
                        <img className="editIcon" src={require('./Images/editing.png')} alt="editing icon"/>
                        <p>Edit</p>
                    </div>
                    <div className='deleteBtn' onClick={() => {
                            deleteDoc(doc(db, "user", `${Output.id}`))
                        }}>
                        <img className="deleteIcon" src={require('./Images/delete.png')} alt="editing icon"/>
                        <p>Delete</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default ContactView;