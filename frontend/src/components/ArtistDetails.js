const ArtistDetails = ({artist})=>{
    return (
        <div className="box-details">
            <h4>{artist.name}</h4>
            <p><strong>Day: </strong>{artist.day}</p>
            <p><strong>Time: </strong>{artist.time} Hundred Hours</p>
            <p>{artist.about}</p>
        </div>

    )
    
}

export default ArtistDetails