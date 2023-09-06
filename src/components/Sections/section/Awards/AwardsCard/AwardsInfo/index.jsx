const AwardsInfo = ({ award }) => {
    const { awardName, awardDesc } = award
    return (
        <div className="box-content">
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="content-title">{awardName}</h4>
                    <p className="content-description">{awardDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default AwardsInfo