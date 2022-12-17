import {Link} from 'react-router-dom'
const LocationDetails = ({location})=>{
    return (
        <div className="box-details">
            <h4><strong>Day: </strong>{location.day}</h4>
            <p><strong>Location: </strong>{location.title}</p>
            <p><strong>Address: </strong>{location.address}</p>
            <Link to={'/lineup/day/' + location.day}><h4>Lineup on day {location.day}</h4></Link>
        </div>
    )
    
}

export default LocationDetails