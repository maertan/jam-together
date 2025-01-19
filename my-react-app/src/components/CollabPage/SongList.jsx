import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import './SongList.css';
import SongCard from './SongCard.jsx';
import { loadSongList } from '../../logic/loadSongList.jsx';

const SongList = (props) => {
    console.log("Songlist - Final collab_id:", props.collab_id); // Debug final collab_id XHlvyF6 (L NOT I)

    return (
        <div>
            {
                props.songCards.map((song) => (
                    <SongCard 
                        user = {props.user}
                        songInfo={{id:song.id, title: song.title, artist: song.artist,image_url: song.image_url, votes:song.votes, owner: song.owner}}
                        upvotes= {song.upvotes}
                        downvotes = {song.downvotes}
                        handleSongLoading={props.handleSongLoading} 
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
