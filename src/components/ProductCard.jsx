import React from 'react'
import Card from 'react-bootstrap/Card';
import projectimg from '../assets/projectimg.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function ProductCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '100%' }} className='shadow border-0 mt-5 mt-md-0'>
                <Card.Img variant="top" src={projectimg} className='w-100' onClick={handleShow}/>
                <Card.Body>
                    <Card.Title className='text-center'>Media Player</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Media Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={projectimg} alt="no image" className='w-100' />
                            </div>
                            <div className="col-md-6">
                                <h3>Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga ad impedit est incidunt corporis porro esse rerum? Facilis distinctio rem corporis atque tempora aliquid neque est aut obcaecati libero.</p>
                                <h4>Technologies</h4>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={''}><FontAwesomeIcon icon={faGithub} className='fa-2x me-3' /></Link>
                    <Link to={''}><FontAwesomeIcon icon={faGlobe}  className='fa-2x me-3 ms-3'/></Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductCard