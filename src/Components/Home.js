
import ContactView from "./ContactView";



const Home = ({firstName, lastName, Age, image}) => {
    return (  
        <>
            <div className="addNew">
                <ContactView firstName={firstName} lastName={lastName} Age={Age} Image={image}/>
            </div>
        </>
    );
};
 
export default Home;