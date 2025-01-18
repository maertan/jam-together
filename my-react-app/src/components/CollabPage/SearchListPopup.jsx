import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';

function SearchListPopup(props) {  
    const handleClose = () => { 
        props.resetSongs();

    };

    return (
      <>
        <Modal show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Search Results</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ButtonGroup vertical>
                {
                    props.songs.map((song) => {
                        return (
                        <Button key={song.id} variant="dark" onClick={() => console.log(song)}> 
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                <img
                                    src={
                                        song.album.images[0].url 
                                    }
                                    style={{
                                    width: "5em",
                                    height: "5em",
                                    objectFit: "cover",
                                    borderRadius: "10%",
                                    }}
                                />
                                </div>
                                <div className="col">
                                    {song.name}
                                </div>
                                <div className="col">
                                    {song.artists[0].name}
                                </div>
                            </div>
                            </div>
                        </Button>
                        )
                    })
                }

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