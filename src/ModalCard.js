import React from "react";
import { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

const ModalCard = function Example({ more }) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                More Info
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title" className='modalHeader'>
                        <div className='modalTitle'>{more.Title}</div>
                        <div className='modalHeaderDetails'>{more.Rated} • {more.Year} • {more.Runtime}</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <img src={more.Poster} alt={more.Title}></img>
                    <div className='modalBodyDetails'>
                        <div className='rating'>{more.imdbRating}</div>
                        <div className='details'>{more.Genre}</div>
                        <div className='details'>{more.Plot}</div>
                        <div className='details'>Director: {more.Director}</div>
                        <div className='details'>Writer/s: {more.Writer}</div>
                        <div className='details'>Actors: {more.Actors}</div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCard