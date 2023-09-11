const HobbyInfo = ({ hobbyInfo }) => {
    const { hobby } = hobbyInfo
    return (
        <div className="hobby-content">
            <div className="row">
                <div className="col-sm-12">
                    <h4 style={{textAlign: "center"}}>{hobby}</h4>
                </div>
            </div>
        </div>
    )
}

export default HobbyInfo