import React, { useState, useEffect } from 'react';
import './SongList.css';
import SongCard from './SongCard.jsx';
import { loadSongList } from '../../logic/loadSongList.jsx';

function SongList({collab_id}) {
    const [error, setError] = useState("");
    const [songCards, setSongCards] = useState([
    ]);

    console.log("Songlist - Final collab_id:", collab_id); // Debug final collab_id XHlvyF6 (L NOT I)

    const handleSongLoading = async () => {
        try {
            const songList = await loadSongList(collab_id)
            if (songList) {
                setSongCards(songList);
            }
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        handleSongLoading();
    }, [collab_id])

    if (error) {
        return <div>Error: {error}</div>;
    }



    return (
        <div>
            {
                songCards.map((song) => (
                    <SongCard 
                        songInfo={{title: song.title, artist: song.artist, img: song.img}}
                        upvotes= {song.upvotes}
                        downvotes = {song.downvotes}
                    />

                ))
            }
        </div>

    )

}

export default SongList;

// <ul> 
// <img src={song.img} width="100" height="100"/>
// Song: {song.title}, Artist: {song.artist}, Likes: {song.likes}, Dislikes: {song.dislikes}
// </ul>
