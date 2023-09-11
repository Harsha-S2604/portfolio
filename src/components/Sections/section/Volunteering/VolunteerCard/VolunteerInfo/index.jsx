const VounteerInfo = ({ volunteer }) => {
    const { title, description } = volunteer
    return (
        <div className="box-content" style={{fontFamily: 'Roboto-Regular'}}>
            <div className="row">
                <div className="col-sm-10">
                    <h4>{title}</h4>
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default VounteerInfo