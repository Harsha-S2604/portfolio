const Info = ({ data }) => {
    return (
        <div className='info'>
            <h1 className="name">{"Hi there!, I'm " + data.name}</h1>
            <p className="text-secondary description">{data.about}</p>
            <p className="profession fw-bolder">{data.profession}</p>
        </div>
    )
}

export default Info