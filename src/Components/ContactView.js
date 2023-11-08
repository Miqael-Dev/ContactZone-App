import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import db from './Firebase'
import { deleteDoc, doc, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Error from './Error';

const ContactView = () => {
    const { userID } = useParams()
    const [contact, setContact] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isAvailable, setIsAvailable] = useState(<div className="loading"><p>Loading...</p></div>);

    useEffect(() => {
        onSnapshot(collection(db, `user`), (snapshot) => {
            let res = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            let contacts = res.find(data => data.id === userID);
            if(contacts === undefined){
                setIsAvailable(<Error/>)
            }else {
                setContact(contacts)
                setIsLoading(false)
            }
        })
    }, [userID])
    console.log(contact)
    return ( 
        <>
            { isLoading ? isAvailable :
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
                                <div className="outputIcons">
                                    <Link to={"edit"} className='editBtn'>
                                        <div className='edit'>
                                            <img className="editIcon" src={require('./Images/editing.png')} alt="editing icon"/>
                                            <p>Edit</p>
                                        </div>
                                    </Link>
                                    <Link to={'/'} className='deleteBtn'>
                                        <div className='delete' onClick={() => {
                                            window.history.replaceState(null, null, '/')
                                            deleteDoc(doc(db, "user", `${contact.id}`))
                                            }}>
                                            <img className="deleteIcon" src={require('./Images/delete.png')} alt="editing icon"/>
                                            <p>Delete</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            } 
        </>
    );
}
 
export default ContactView;