import React from "react";
import './SongCard.css';
import React, { useState, useEffect } from 'react';

function SongCard() {
    const [songName, setSongName] = useState("")
    const [artist, setArtist] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    return (
        <div className="card"> 
        </div>

    )
}

export default SongCard;

//             <img src={song.img} width="100" height="100"/>
// Song: {song.title}, Artist: {song.artist}, Likes: {song.likes}, Dislikes: {song.dislikes}
