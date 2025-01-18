import './SongCard.css';
import React, { useState, useEffect } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';

function SongCard({songInfo, upvotes, downvotes}) {
    // const [songName, setSongName] = useState("")
    // const [artist, setArtist] = useState("")
    // const [imageURL, setImageURL] = useState("")
    // const [likes, setLikes] = useState(0)
    // const [dislikes, setDislikes] = useState(0)
    const [activeBtn, setActiveBtn] = useState("none") //https://www.youtube.com/watch?v=6L06rxEoX0o
    const [upvoteCount, setUpvoteCount] = useState(upvotes)
    const [downvoteCount, setDownvoteCount] = useState(downvotes)

    // Handle the case of an upvote/downvote button being clicked
    const handleClick = (reaction) => {

        if (activeBtn === "none") {
            if (reaction === "upvote") {
                setUpvoteCount(upvoteCount + 1);
                setActiveBtn("upvote")
            } else {
                setDownvoteCount(downvoteCount + 1);
                setActiveBtn("downvote")
            }
        }
        else if (activeBtn === reaction) {
            if (reaction === "upvote") {
                setUpvoteCount(upvoteCount - 1)
            } else {
                setDownvoteCount(downvoteCount - 1)
            }
            setActiveBtn("none")
        } else {
            if (reaction === "upvote") {
                setDownvoteCount(downvoteCount - 1)
                setUpvoteCount(upvoteCount + 1);
                setActiveBtn("upvote")

            } else {
                setDownvoteCount(downvoteCount + 1)
                setUpvoteCount(upvoteCount - 1);
                setActiveBtn("downvote")
            }

        }

    }


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
                <ul className="btn-container">
                    <button className={`btn ${activeBtn === "upvote" ? "upvote-active" : ""}`} onClick={() => handleClick("upvote")}>
                         <span> <FaThumbsUp /> </span>
                         {upvoteCount}
                    </button>

                    <button className={`btn ${activeBtn === "downvote" ? "downvote-active" : ""}`} onClick={() => handleClick("downvote")}>
                         <span> <FaThumbsDown/> </span>
                         {downvoteCount}
                    </button>



                </ul>
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
