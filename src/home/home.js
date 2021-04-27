import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageSlider from "./slider/slider";
import data from "./data.json";
import "./home.css";

class Home extends Component {
    state = {
        obj: { images: [] },
        isMobile: false
    }

    componentDidMount() {
        if (data.length > 0) {
            this.setState({ obj: data[0] })
        }
        this.setState({ isMobile: window.innerWidth < 768 });
        window.addEventListener('resize', (e) => {
            this.setState({ isMobile: window.innerWidth < 768 });
        });
    }

    selectObj = (obj) => {
        this.setState({ obj });
    }

    render() {
        const { obj, isMobile } = this.state;
        return (
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={3} lg={2}>
                        <div className="logo">
                            Hotel<br />
                            Rooms
                        </div>
                        <p className="logoDesc">
                            some paragraph is written,
                            some paragraph is written under this,
                            some paragraph is there.
                        </p>
                        <button className="mainBtn">First Button</button>
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={10}>
                        <div className="welcomeContainer">
                            <div>
                                <div className="welcomeText">Welcome to the site</div>
                                <div className="welcomeText">Different <span className="redText">420 Rooms</span> available</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {!isMobile && <div style={{ marginBottom: 40 }}></div>}
                <Row>
                    <Col xs={12} sm={12} md={3} lg={2}>
                        <div className="spacing">
                            <label>Select confort: </label>
                            <select>
                                <option>abc</option>
                                <option>xyz</option>
                            </select>
                        </div>
                        {isMobile ?
                            <div className="spacing">
                                <label>Select Category: </label>
                                <select onChange={(e) => this.selectObj(e)}>
                                    {data.map((e, i) => (
                                        <option key={e.id} value={e.name}>{e.name}</option>
                                    ))}
                                </select>
                            </div>
                            :
                            <ul className="list-unstyled scrolling">
                                {data.map((e, i) => (
                                    <li key={e.id} className={obj.id === e.id ? "selectedItem mb-3" : "mb-3"} onClick={() => this.selectObj(e)}>
                                        <span className="listItems">{e.name}</span>
                                    </li>
                                ))}
                            </ul>
                        }
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={10}>
                        <ImageSlider obj={obj} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;