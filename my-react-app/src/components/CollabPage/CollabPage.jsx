import React from 'react';
import './CollabPage.css';
import SongManagerBar from "./SongManagerBar"
import SongList from "./SongList"
import { useParams, useLocation } from 'react-router-dom';


function CollabPage() {
    const { code } = useParams(); // Extract `code` from the URL
    const location = useLocation(); // Access the navigation `state`
    const collab_id = (location.state?.code || code).trim(); // Fallback to URL if `state` is not available

    console.log("CollabPage - URL code:", code); // Debug URL code
    console.log("CollabPage - State code:", location.state?.code); // Debug state code
    console.log("CollabPage - Final collab_id:", collab_id); // Debug final collab_id

    if (!collab_id) {
        return <div>Error: No collab ID provided</div>;
    }


    return (
        <div>     
            <SongManagerBar />
            <SongList collab_id={collab_id}/>
        </div>
    )
}

export default CollabPage;