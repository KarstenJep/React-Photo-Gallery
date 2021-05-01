function GalleryItem({item}) {
    return (
        <img className="pic" src={item.path}/>
    )
}

export default GalleryItem;