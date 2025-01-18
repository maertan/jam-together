import React from 'react';
import './CollabPage.css';
import SongManagerBar from "./SongManagerBar"
import SongList from "./SongList"

function CollabPage() {
    return (       
        <>     
            <SongManagerBar />
            <SongList />
        </>
    )
}

export default CollabPage;