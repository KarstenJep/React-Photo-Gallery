// import { response } from 'express';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({galleryList, getGalleryList}) {
    // Insert PUT ...maybes delete
    // const addLike = (event) => {
    //     console.log('Id is:', event.currentTarget.dataset.id );
    //     let id = event.currentTarget.dataset.id;

    //     axios ({
    //         method: 'PUT',
    //         url: `/gallery/${id}`, 
    //     })
    //         .then( response => {
    //             console.log('response from server:', response);
    //             getGalleryList();
    //         })
    //         .catch( error => {
    //             console.log('error on put request:', error);
    //         })
    // };

    return (
    <>
        {galleryList.map(item => (
            (<GalleryItem key={item.id} item={item} getGalleryList={getGalleryList}/>)
        ))}
    </>
    );
}

export default GalleryList;


            // <div key={item.id}>
            //    <img className="pic" src={item.path}/> 
            //     <p>{item.path}</p>
            // </div>


 {/* <p>Gallery goes here</p>
            <img src="images/goat_small.jpg"/>
            <img src="images/sam.jpeg" width="300"/>
            <img src="images/Zion.jpg" width="300"/> */}