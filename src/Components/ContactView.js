import { useParams } from 'react-router';
import db from './Firebase'
import { deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const ContactView = () => {
    const { userID } = useParams()
    const [contact, setContact] = useState([])

    useEffect(() => {
        onSnapshot(collection(db, `user`), (snapshot) => {
            let res = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            let contacts = res.find(data => data.id === userID)
            setContact(contacts)
        })
    })

    return (  
        <div className="ContactView">
            <div className="Board">
                <div className='Board-Info'>
                    <div className="userImage">
                        <img src={require('./Images/user.png')}  alt="user icon"/>
                    </div>
                    <div className="ContactInfo">
                        <h1 className="ContactName">{contact.name}</h1>
                        <h3 className="ContactAge">Age: {contact.age}</h3>
                        <h4 className="Bio">{contact.bio}</h4>
                    </div>
                </div>
                <div className="outputIcons">
                    <div className='editBtn' onClick={() => {
                            // Output({
                            //     name: `${Name}`,
                            //     age: Number(Age),
                            //     bio: `${Bio}`
                            // });
                            // Id(Output.id)
                            // Event("EditPage");
                            console.log(contact)
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