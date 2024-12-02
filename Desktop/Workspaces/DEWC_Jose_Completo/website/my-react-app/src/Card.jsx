// import profilePic from './assets/profile.jpg'  -- importará la foto que tengamos en asset
function Card() {
    return (
        <div className="card">
            <img className="card-image" src="https://tinyurl.com/4fby6996" alt="Profile Picture"></img>
            <h2 className="card-title">Prueba card</h2>
            <p className="card-text">Haciendo pruebitas de React</p>
        </div>
    );
}

export default Card;