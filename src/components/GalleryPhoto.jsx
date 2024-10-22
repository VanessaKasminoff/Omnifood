const GalleryPhoto = (props) => {
    return (
        <figure className="gallery-item">
            <img src={props.image} alt="Photo of beautifully arranged food"/>
        </figure>
    )
};

export default GalleryPhoto;