import './GalleryList.css';

function GalleryList({galleryList}) {
    // Insert PUT ...maybes delete

    return (
    <>
        {galleryList.map(item => (
            <div key={item.id}>
               <img className="pic" src={item.path}/> 
                <p>{item.path}</p>
            </div>
        ))}
    </>
    );
}

export default GalleryList;

 {/* <p>Gallery goes here</p>
            <img src="images/goat_small.jpg"/>
            <img src="images/sam.jpeg" width="300"/>
            <img src="images/Zion.jpg" width="300"/> */}