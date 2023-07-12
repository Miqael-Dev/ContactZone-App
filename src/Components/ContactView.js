const ContactView = ({firstName, lastName, Age , Image}) => {
    return (  
        <div className="ContactView">
            <div className="Board">
                <div className="ContactImage">
                   <img alt="profile" src={require(`${Image}`)} />
                </div>
                <div className="ContactInfo">
                    <h1 className="ContactName">{firstName} {lastName}</h1>
                    <h3 className="ContactAge">Age: {Age}</h3>
                    <div className="btns">
                        <button className="ContactEdit">Edit</button>
                        <button className="ContactDelete">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default ContactView;