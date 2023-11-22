function Card(props){
    return(
        <div className="card">
    <img alt="profile picture" src="https://via.placeholder.com/150" className="card-image"></img>
    <h2 className="card-title">Name: {props.name}</h2>
    <p className="card-text">I am doing coding and play video games</p>
        </div>
    )
    
    }
    
    export default Card