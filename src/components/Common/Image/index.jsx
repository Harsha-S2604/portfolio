const Image = ({ imageSource, imageAlt }) => {
    return (
        <div className="box-image">
            <img className="img-fluid" src={imageSource} alt={imageAlt} />
        </div>
    )
}

export default Image
