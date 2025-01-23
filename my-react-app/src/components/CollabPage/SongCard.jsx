import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import Reactions from './Reactions';
import Delete from './Delete';

function SongCard({id, user, songInfo, upvotes, downvotes, handleSongLoading}) {
  return (
    <Container
      className="my-3 p-2" 
      style={{
        backgroundColor: "#2f4f6f",
        borderRadius: "20px",
        // width: "100%",
      }}
    >      <Row className="align-items-center">
        <Col xs="auto">
          <img
            src={songInfo.image_url}
            alt={songInfo.artist}
            style={{
              width: "4em",
              height: "4em",
              objectFit: "cover",
              borderRadius: "10%",
            }}
          />
        </Col>

        <Col >
          <h4 style={{ margin: 0 }}>{songInfo.title}</h4>
        </Col>
        <Col xs="auto" className="text-end">
          <p style={{ margin: 0, fontWeight: "bold" }}>{songInfo.artist}</p>
        </Col>
        <Col xs="auto">
            <Reactions songId={songInfo.id} user={user} upvotes ={upvotes} downvotes ={downvotes} votes={songInfo.votes} />
        </Col>
        <Col xs="auto" className="d-flex justify-content-between">
            <div style={{ width: '60px' }}>
                {songInfo.owner && user === songInfo.owner && 
                <Delete songId={songInfo.id} handleSongLoading={handleSongLoading} />
                }
            </div>
        </Col>
      </Row>
    </Container>
  );

}

export default SongCard;
