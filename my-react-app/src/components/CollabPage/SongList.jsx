import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import './SongList.css';
import SongCard from './SongCard.jsx';
import { loadSongList } from '../../logic/loadSongList.jsx';

const SongList = (props) => {
    const [error, setError] = useState("");
    const [songCards, setSongCards] = useState([
    ]);

    console.log("Songlist - Final collab_id:", props.collab_id); // Debug final collab_id XHlvyF6 (L NOT I)

    const handleSongLoading = async () => {
        try {
            
            const songList = await loadSongList(props.collab_id)
            if (songList) {
                setSongCards(songList);
            }
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        handleSongLoading();
    }, [props.collab_id, props.user])

    if (error) {
        return <div>Error: {error}</div>;
    }



    return (
        <div>
            {
                songCards.map((song) => (
                    <SongCard 
                        user = {props.user}
                        songInfo={{id:song.id, title: song.title, artist: song.artist,image_url: song.image_url, votes:song.votes, owner: song.owner}}
                        upvotes= {song.upvotes}
                        downvotes = {song.downvotes}
                        handleSongLoading={handleSongLoading} 
                    />

                ))
            }
        </div>

    )

}

SongList.propTypes = {
    collab_id: PropTypes.string.isRequired, 
    user: PropTypes.string.isRequired, 
};

export default SongList;

// <ul> 
// <img src={song.img} width="100" height="100"/>
// Song: {song.title}, Artist: {song.artist}, Likes: {song.likes}, Dislikes: {song.dislikes}
// </ul>
