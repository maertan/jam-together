import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function SongCard({ songInfo, upvotes, downvotes }) {
  const [activeBtn, setActiveBtn] = useState("none");
  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [downvoteCount, setDownvoteCount] = useState(downvotes);

  const handleClick = (reaction) => {
    if (activeBtn === "none") {
      // first click
      if (reaction === "upvote") {
        setUpvoteCount(upvoteCount + 1);
        setActiveBtn("upvote");
      } else {
        setDownvoteCount(downvoteCount + 1);
        setActiveBtn("downvote");
      }
    } else if (activeBtn === reaction) {
      // undo the same reaction
      if (reaction === "upvote") {
        setUpvoteCount(upvoteCount - 1);
      } else {
        setDownvoteCount(downvoteCount - 1);
      }
      setActiveBtn("none");
    } else {
      // switch reaction
      if (reaction === "upvote") {
        setDownvoteCount(downvoteCount - 1);
        setUpvoteCount(upvoteCount + 1);
        setActiveBtn("upvote");
      } else {
        setUpvoteCount(upvoteCount - 1);
        setDownvoteCount(downvoteCount + 1);
        setActiveBtn("downvote");
      }
    }
  };

  return (
    <Container
      className="my-3 p-3" 
      style={{
        backgroundColor: "cornflowerblue",
        border: "2px solid #ccc",
        borderRadius: "20px",
        minWidth: "500px",
      }}
    >
      {/* ------ TOP ROW ------ */}
      <Row className="align-items-center">
        {/* Top Left: Image */}
        <Col xs="auto">
          <img
            src={
              songInfo.image_url ||
              "https://i.scdn.co/image/ab67616d0000b273fd8d7a8d96871e791cb1f626"
            }
            alt={songInfo.artist}
            style={{
              width: "10em",
              height: "10em",
              objectFit: "cover",
              borderRadius: "10%",
            }}
          />
        </Col>

        {/* Top Right: Song Name */}
        <Col className="text-end">
          <h2 style={{ margin: 0 }}>{songInfo.title}</h2>
        </Col>
      </Row>

      {/* ------ BOTTOM ROW ------ */}
      <Row className="mt-3 align-items-center">
        {/* Bottom Left: Artist Name */}
        <Col xs="auto">
          <p style={{ margin: 0, fontWeight: "bold" }}>{songInfo.artist}</p>
        </Col>

        {/* Bottom Right: Upvote / Downvote */}
        <Col className="text-end">
          <Button
            variant="light"
            className={activeBtn === "upvote" ? "upvote-active" : ""}
            onClick={() => handleClick("upvote")}
            style={{ marginRight: "10px" }}
          >
            <FaThumbsUp /> {upvoteCount}
          </Button>

          <Button
            variant="light"
            className={activeBtn === "downvote" ? "downvote-active" : ""}
            onClick={() => handleClick("downvote")}
          >
            <FaThumbsDown /> {downvoteCount}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SongCard;
