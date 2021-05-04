import Axios from 'axios';
import { useState } from 'react';

// component function to set up display of gallery items
function GalleryItem({item, getGalleryList}) {

    const [state, setState] = useState(true);
    // setting state and using toggle state to set up conditional rendering
    const toggleState = () => {
            if (state == false) {
                return setState(true)
            }
                return setState(false)
        }

    // function to take in id of card and add a like using PUT
    const addLike = (id) => {
        console.log('Id is:', id);

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

        // layout for gallery items before being sent to the DOM
    return (
        <div className="card">
            {
                state ?
                <img className="pic" onClick={toggleState} src={item.path}/> :
                <p className="pic" onClick={toggleState}>{item.description}</p>
            }
            <button className="like" onClick={(event) => addLike(item.id)}>Like!</button>
            {
                item.likes == 0 ?
                <p className="p">0 people like this :(</p> :
                <p className="p">Like Count: {item.likes}</p>
            }  
        </div>
    )
}

export default GalleryItem;

