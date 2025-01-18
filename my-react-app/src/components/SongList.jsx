import React, { useState, useEffect } from 'react';
import './SongList.css';
// import SongCard from './SongCard.jsx';

function SongList() {
    const [error, setError] = useState("");
    const [songCards, setSongCards] = useState([
        {id: 0, title: "Bohemian Rhapsody", artist: "Queen", "likes": 3, "dislikes": 0, "img":"https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg"}, // Note: likes and dislikes meant to contain list of people who liked/disliked a song
        {id: 1, title: "Ode of the Clown", artist: "Megus", "likes": 1, "dislikes": 2, "img": "https://artprojectsforkids.org/wp-content/uploads/2020/05/Easy-Clown-Face-Coloring-Page-.jpg"},
        {id: 2, title: "Rolling Orange", artist: "Jinx", "likes": 2, "dislikes": 1, "img":"https://cdn6.aptoide.com/imgs/3/3/f/33f34e57df3dc67bfec3ba9dbf01524e_icon.png"}
    ]);
    const [user, setUser] = useState("");

    return (
        <div>
            {
                songCards.map((song) => (
                    <ul> 
                        <img src={song.img} width="100" height="100"/>
                        Song: {song.title}, Artist: {song.artist}, Likes: {song.likes}, Dislikes: {song.dislikes}
                    </ul>

                ))
            }
        </div>

    )

}

export default SongList;