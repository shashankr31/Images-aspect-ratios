import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CardImg from '../Assets/photo.jpg'

export default function Images() {
    // const CardImg = "https://pixabay.com/photos/maldives-palm-tree-hammock-beach-3220702/"
    return (
        <div>
            <Container>
                <div className='p-4 mt-3 text-center '>
                    <h2 style={{ color: "#1D4ED8" }}>
                        <b>Responive Images with Aspect Ratio</b>
                    </h2>
                    <h6>
                        You can create your own image ratios with this formula <br />
                        <strong>
                            Eg: 16:9 = (9/6 * 100) = 56.25%
                        </strong>
                    </h6>
                </div>

                <Row>
                    <Col md={6} lg={4} xs={12} className='mt-4'>
                        <div className='card-design'>
                            <h4 className='card-tittle'>16:9</h4>
                            <div className='aspect-16-9 mt-4'>
                                <img src={CardImg} alt={"img"} className="aspect-img" />
                            </div>
                        </div>
                    </Col>

                    <Col md={6} lg={4} xs={12} className='mt-3'>
                        <div className='card-design'>
                            <h4 className='card-tittle'> 4:3</h4>
                            <div className='aspect-4-3 mt-4'>
                                <img src={CardImg} alt={"img"} className="aspect-img" />
                            </div>
                        </div>
                    </Col>

                    <Col md={6} lg={4} xs={12} className='mt-3'>
                        <div className='card-design'>
                            <h4 className='card-tittle'>4:5</h4>
                            <div className='aspect-4-5 mt-4'>
                                <img src={CardImg} alt={"img"} className="aspect-img" />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
