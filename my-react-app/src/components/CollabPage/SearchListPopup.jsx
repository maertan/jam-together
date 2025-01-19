import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import { addSong } from "../../logic/addSong";

function SearchListPopup(props) {

  const handleClose = () => {
    props.resetSongs();
  };

  const handleAddSong = async (song) => {
    try {
      await addSong(song, props.owner, props.handleSongLoading, props.collab_id); // Add the song
      await props.handleSongLoading(); // Reload the song list
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ButtonGroup vertical>
            {props.songs.map((song) => {
              return (
                <Button
                  key={song.id}
                  variant="dark"
                  onClick={() => handleAddSong(song)} // Use async handler
                >
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <img
                          src={song.album.images[0].url}
                          alt={song.name}
                          style={{
                            width: "5em",
                            height: "5em",
                            objectFit: "cover",
                            borderRadius: "10%",
                          }}
                        />
                      </div>
                      <div className="col">{song.name}</div>
                      <div className="col">{song.artists[0].name}</div>
                    </div>
                  </div>
                </Button>
              );
            })}
          </ButtonGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchListPopup;
