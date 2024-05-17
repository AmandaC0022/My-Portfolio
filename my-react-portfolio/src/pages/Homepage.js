import image from '../images/IMG_3563-2.jpg'
const Homepage = () => {
    return ( 
        <div className="home-container">
            <img src={image} className="profile-image" alt="my portrait"/> 
            <div className="home-text-container">
                <h1>Amanda Morgan</h1>
                <hr/>
                <div className="titles">
                    <h3>Developer</h3>
                    <h3>Designer</h3>
                    <h3>Ecommerce</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Homepage;