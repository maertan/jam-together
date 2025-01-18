import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import Reactions from './Reactions';

function SongCard({user, songInfo, upvotes, downvotes}) {

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
        <Reactions songId={songInfo.id} user = {user} upvotes = {upvotes} downvotes = {downvotes} />
      </Row>
    </Container>
  );
}

export default SongCard;
