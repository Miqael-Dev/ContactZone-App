
import ContactView from "./ContactView";



const Home = ({Name, Age, Bio}) => {
    return (  
        <>
            <div className="addNew">
                <ContactView Name={Name} Age={Age} Bio={Bio}/>
            </div>
        </>
    );
};
 
export default Home;