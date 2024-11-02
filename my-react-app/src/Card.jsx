import profilePic from './assets/Beth Kimani.jpeg'






function Card(){

    return(
<div className="card">
    <img className="card-image" src="{profilePic}" alt="profile picture" ></img>
    <h2 className="card-title">betechtechnologies</h2>
    <p className="card-text">I develop websites</p>
</div>

    );

}
export default Card