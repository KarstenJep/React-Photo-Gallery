function GalleryItem({item}) {

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
        <div>
        <img className="pic" data-id={item.id} src={item.path}/>
        <p>Like count: {item.likes}</p>
        <button data-id={item.id} >Like</button>
        </div>
    )
}

export default GalleryItem;

//onClick={addLike}
// onClick={imgDescription}
// {likeCount}