import './SongCard.css';
import React, { useState, useEffect } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

import Reactions from './Reactions';

function SongCard({id, user, songInfo, upvotes, downvotes}) {
    // const [songName, setSongName] = useState("")
    // const [artist, setArtist] = useState("")
    // const [imageURL, setImageURL] = useState("")
    // const [likes, setLikes] = useState(0)
    // const [dislikes, setDislikes] = useState(0)



    return (
        <div className="card"> 
            <div> 
                
                <img src={songInfo.img} width="100" height="100"/> 
                <p> {songInfo.artist} </p>
            </div>

            <div>
                <ul>
                    <strong> {songInfo.title} </strong>
                </ul>
                <Reactions songId={songInfo.id} user = {user} upvotes = {upvotes} downvotes = {downvotes} />
            </div>
             
        </div>

    )
}

export default SongCard;

//             <img src={song.img} width="100" height="100"/>
// Song: {song.title}, Artist: {song.artist}, Likes: {song.likes}, Dislikes: {song.dislikes}


// <button className={`btn ${activeBtn === "upvote" ? "upvote-active" : ""}`} onClick={() => handleClick("upvote")}>
// <span className="material-symbols-rounded"> thumb_up </ span> <FaThumbsDown />
//  {upvoteCount}
// </button>

// <button className={`btn ${activeBtn === "downvote" ? "downvote-active" : ""}`} onClick={() => handleClick("downvote")}>
// <span className="material-symbols-rounded"> thumb_down </ span> <FaThumbsDown />
//  {downvoteCount}
// </button>
