import Axios from 'axios';
import { useState } from 'react';

function GalleryItem({item, getGalleryList}) {

    const [state, setState] = useState(true);

    const toggleState = () => {
            if (state == false) {
                return setState(true)
            }
                return setState(false)
        }

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
        <div className="card">
            {
                state ?
                <img className="pic" data-id={item.id} onClick={toggleState} src={item.path}/> :
                <p className="pic" data-id={item.id} onClick={toggleState}>{item.description}</p>
            }
            <button data-id={item.id} className="like" onClick={addLike}>Like!</button>
            {
                item.likes == 0 ?
                <p className="p">0 people like this :(</p> :
                <p className="p">Like Count: {item.likes}</p>
            }  
        </div>
    )
}

export default GalleryItem;

