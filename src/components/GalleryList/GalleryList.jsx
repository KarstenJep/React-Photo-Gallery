import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

// component function to take in props and use .map to display GalleryItems to the DOM
function GalleryList({galleryList, getGalleryList}) {
    return (
    <>
        {galleryList.map(item => (
            (<GalleryItem key={item.id} item={item} getGalleryList={getGalleryList}/>)
        ))}
    </>
    );
}

export default GalleryList;

