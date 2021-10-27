import React, { useState } from 'react';
import { createApi  } from "unsplash-js"; //used to convert the response to JSON format

const unsplashInstance =createApi ({
    accessKey : process.env.REACT_APP_API,
});


const SearchBar = () => {
    const [input, setInput] = useState("");
    const [photos, setphotos] = useState([])

    const submit=()=>{
        unsplashInstance.search.getPhotos({
            query:input,
            page:1,
            perPage:30
        })
        .then((result)=>{
            setphotos(result.response.results)
        })
    }
    return (
        <div>
            <div className="title-input" align="center">
                <br /><br />
                <div><h3 className='title'>Photo Search Gallery</h3></div>
                <div><h5 className="creator">Created by Pragya Mukherjee</h5></div>
                <br /><br />
                <div>
                    <input onChange={(e) =>setInput(e.target.value)} type="search" placeholder="Search for images"className="searchInput" autoComplete="off"/> <span>
                        <button className="btn btn-dark" onClick={submit}>Search</button>
                    </span>
                </div>
            </div>
            <br /><br />
            <div className="gallery" align="center">
                {
                    photos.map((photo)=>(
                        <div className="each-photo" key={photo.id}><a rel="noopener noreferrer" target="_blank" href={photo.urls.full}><img src={photo.urls.full} alt= {photo.alt_description} /></a></div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchBar
