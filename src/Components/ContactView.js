const ContactView = ({Name, Age , Bio}) => {
    return (  
        <div className="ContactView">
            <div className="Board">
               <div className="userImage">
                    <img src={require('./Images/user.png')}  alt="user icon"/>
               </div>
                <div className="ContactInfo">
                    <h1 className="ContactName">{Name}</h1>
                    <h3 className="ContactAge">Age: {Age}</h3>
                    <h4 className="Bio">{Bio}</h4>
                </div>

            </div>
        </div>
    );
}
 
export default ContactView;