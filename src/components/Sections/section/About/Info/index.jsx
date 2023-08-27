const Info = ({ data }) => {
    return (
        <div className='info'>
            <h1>{"Hi there!, I'm " + data.name}</h1>
            <p className="text-secondary">{data.about}</p>
            <p className="profession">{data.profession}</p>
        </div>
    )
}

export default Info