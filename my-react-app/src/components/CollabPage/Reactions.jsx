import './SongCard.css';
import React, { useState, useEffect } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import { supabase } from '../../client';

const Reactions = (props) => {
    const [activeBtn, setActiveBtn] = useState("none") //https://www.youtube.com/watch?v=6L06rxEoX0o
    const [upvoteCount, setUpvoteCount] = useState(props.upvotes)
    const [downvoteCount, setDownvoteCount] = useState(props.downvotes)

    //Update vote count in db
    const updateDbVotes = async (newUpvotes, newDownvotes) => {
        const { error } = await supabase
            .from('songs') 
            .update({ upvotes: newUpvotes, downvotes: newDownvotes })
            .eq('id', props.songId); 
            console.log("votes updated")

        if (error) {
            console.error("Error updating votes:", error.message);
        }
    };
    // Handle the case of an upvote/downvote button being clicked
    const handleClick = async (reaction) => {
        let newUpvotes = upvoteCount;
        let newDownvotes = downvoteCount;

        if (activeBtn === "none") {
            if (reaction === "upvote") {
                newUpvotes += 1;
                setActiveBtn("upvote");
            } else {
                newDownvotes += 1;
                setActiveBtn("downvote");
            }
        }
        else if (activeBtn === reaction) {
            if (reaction === "upvote") {
                newUpvotes -= 1;
            } else {
                newDownvotes -= 1;
            }
            setActiveBtn("none");
        } else {
            if (reaction === "upvote") {
                newDownvotes -= 1;
                newUpvotes += 1;
                setActiveBtn("upvote");
            } else {
                newDownvotes += 1;
                newUpvotes -= 1;
                setActiveBtn("downvote");
            }
        }
        setUpvoteCount(newUpvotes);
        setDownvoteCount(newDownvotes);
        await updateDbVotes(newUpvotes, newDownvotes);
    };
    return (
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
    )
}

export default Reactions