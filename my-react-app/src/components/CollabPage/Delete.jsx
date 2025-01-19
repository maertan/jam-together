import './Delete.css';
import React, { useState, useEffect } from 'react';
import { supabase } from '../../client';
import { RiDeleteBin5Line } from "react-icons/ri";

const Delete = (props) => {

    const handleDelete = async () => {
        const response = await supabase
            .from('songs')
            .delete()
            .eq('id', props.songId)
        
        if (response.error) {
                console.error("Error deleting song:", response.error);
        } else {
            console.log("Song deleted successfully.");
            
            // Call handleSongLoading to refresh the song list
            props.handleSongLoading();
        }
    

        
    }

    return (
        <button onClick={() => handleDelete()} style={{ color: 'white', backgroundColor: '#2f4f6f' }} > 
            <RiDeleteBin5Line style={{ color: 'white', fontSize: '28px'}} />
        </button>
    )
}

export default Delete