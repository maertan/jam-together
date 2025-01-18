import './SongCard.css';
import React, { useState, useEffect } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import { supabase } from '../../client';

const Reactions = (props) => {
    const user = props.user
    const [activeBtn, setActiveBtn] = useState("none") //https://www.youtube.com/watch?v=6L06rxEoX0o
    const [upvoteCount, setUpvoteCount] = useState(props.upvotes)
    const [downvoteCount, setDownvoteCount] = useState(props.downvotes)

    const [userVote, setUserVote] = useState(null); 
    const [votes, setVotes] = useState(props.votes || {}); 
    const fetchVotes = async () => {
        const { data, error } = await supabase
            .from('songs')
            .select('votes, upvotes, downvotes')
            .eq('id', props.songId)
            .single();

        if (error) {
            console.error("Error fetching votes:", error.message);
        } else {
            const currentVotes = data.votes || {};  
            await setVotes(currentVotes);
            await setUserVote(currentVotes[user]);  
            if (currentVotes[user] == 1) {
                setActiveBtn("upvote")
            } else if (currentVotes[user] == -1) {
                setActiveBtn("downvote");
            }
            await setUpvoteCount(data.upvotes);
            await setDownvoteCount(data.downvotes);
        }
    };
    useEffect(() => {
 
        fetchVotes();
    }, [props.songId, user]);

    //Update vote count in db
    const updateDbVotes = async (newUpvotes, newDownvotes, newVotes) => {
        const { error } = await supabase
            .from('songs') 
            .update({ upvotes: newUpvotes, downvotes: newDownvotes, score:newUpvotes - newDownvotes, votes:newVotes})
            .eq('id', props.songId); 
            console.log("votes updated")

        if (error) {
            console.error("Error updating votes:", error.message);
        }
    };

    // Handle the case of an upvote/downvote button being clicked
    const handleClick = async (reaction) => {
        if (!user) {  
            alert("Please enter a name before voting!");
            return;
        }
        let newVotes = {...votes};
        let newUpvotes = upvoteCount;
        let newDownvotes = downvoteCount;

        if (activeBtn === "none") {
            if (reaction === "upvote") {
                newUpvotes += 1;
                setActiveBtn("upvote");
                newVotes[user] = 1; 
            } else {
                newDownvotes += 1;
                setActiveBtn("downvote");
                newVotes[user] = -1; 
            }
        }
        else if (activeBtn === reaction) {
            delete newVotes[user]; 
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
                newVotes[user] = 1; 
                setActiveBtn("upvote");
            } else {
                newDownvotes += 1;
                newUpvotes -= 1;
                newVotes[user] = -1;
                setActiveBtn("downvote");
            }
        }
        setUpvoteCount(newUpvotes);
        setDownvoteCount(newDownvotes);
        setVotes(newVotes)
        await updateDbVotes(newUpvotes, newDownvotes, newVotes);
    };
    return (
        <ul className="btn-container">
            <button className={`btn ${activeBtn === "upvote" ? "upvote-active" : ""}`} onClick={() => handleClick("upvote")}
            style={{color: "white"}}>
                <span> <FaThumbsUp /> </span>
                    {upvoteCount}
            </button>

            <button className={`btn ${activeBtn === "downvote" ? "downvote-active" : ""}`} onClick={() => handleClick("downvote")} style={{color: "white"}}>
                    <span> <FaThumbsDown/> </span>
                    {downvoteCount}
            </button>
        </ul>
    )
}

export default Reactions