// import { response } from 'express';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

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

