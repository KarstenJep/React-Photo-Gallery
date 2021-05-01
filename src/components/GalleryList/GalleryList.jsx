import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({galleryList}) {
    // Insert PUT ...maybes delete

    return (
    <>
        {galleryList.map(item => (
            (<GalleryItem key={item.id} item={item} />)
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