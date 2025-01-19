import React, {useEffect, useState} from 'react';
import './CollabPage.css';
import SongManagerBar from "./SongManagerBar"
import SongList from "./SongList"
import { useParams, useLocation } from 'react-router-dom';
import { loadSongList } from '../../logic/loadSongList.jsx';



function CollabPage() {
    const { code } = useParams(); // Extract `code` from the URL
    const location = useLocation(); // Access the navigation `state`
    const collab_id = (location.state?.code || code).trim(); // Fallback to URL if `state` is not available
    const [error, setError] = useState("");
    const [songCards, setSongCards] = useState([]);
    
    // console.log("CollabPage - URL code:", code); // Debug URL code
    // console.log("CollabPage - State code:", location.state?.code); // Debug state code
    // console.log("CollabPage - Final collab_id:", collab_id); // Debug final collab_id


    const [user, setUser] = useState('')


        const handleSongLoading = async () => {
            console.log("handleSongLoading called!");

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
        }, [collab_id, user])
        
    if (!collab_id) {
        return <div>Error: No collab ID provided</div>;
    }

    return (
        <div>     
            <SongManagerBar collab_id={collab_id} setUser = {setUser} handleSongLoading={handleSongLoading}/>
            <SongList collab_id={collab_id} user={user} songCards={songCards} handleSongLoading={handleSongLoading}/>
        </div>
    )
}

export default CollabPage;