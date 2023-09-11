
const HobbiesInfo = ({ hobbyInfo }) => {
    const { image, hobby } = hobbyInfo
    return (
        <div style={{marginLeft: "32px"}}>
            <img src={`/images/Hobbies/${image}`} alt={`${image}`} width="150" height="150" />
            <h5 style={{padding: "10px"}}>{hobby}</h5>
        </div>
    )
}

export default HobbiesInfo