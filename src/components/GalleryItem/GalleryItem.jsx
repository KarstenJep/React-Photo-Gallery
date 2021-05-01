import Axios from 'axios';


function GalleryItem({item, getGalleryList}) {

    const addLike = (event) => {
        console.log('Id is:', event.currentTarget.dataset.id );
        let id = event.currentTarget.dataset.id;

        Axios ({
            method: 'PUT',
            url: `/gallery/like/${id}`, 
        })
            .then( response => {
                console.log('response from server:', response);
                getGalleryList();
            })
            .catch( error => {
                console.log('error on put request:', error);
            })
    };

    return (
        <div>
        <img className="pic" data-id={item.id} src={item.path}/>
        <p>Like count: {item.likes}</p>
        <button data-id={item.id} onClick={addLike}>Like</button>
        </div>
    )
}

export default GalleryItem;


// onClick={imgDescription}
