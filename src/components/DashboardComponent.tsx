import React, { useEffect, useState } from 'react';
import '../App.css';
import { Col, Container, Row, Stack } from 'react-bootstrap';

const DashboardComponent = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 576);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 576);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
            <Container fluid className={isDarkTheme ? 'darkbg darktxt px-0' : 'lightbg lighttxt px-0'}>
                <div className={isMobile ? 'container-wrappermob' : 'container-wrapper'}>
                <Row className={`border-0 rounded-b-3xl m-0 ${isMobile ? 'margincard2' : 'margincard1'} ${isDarkTheme ? 'darkpattern' : 'lightpattern '}`}>
                    <Col lg={6} className={`${isMobile ? 'pt-1 px-3' : 'pt-3 px-2 pb-4'}`}>
                        <p className='fw1 pt-4 m-0 p-0'>
                            Social Media Dashboard
                        </p>
                        <p className='fw2 p-0'>
                            Total Followers: 23,004
                        </p>
                    </Col>
                    <div className='d-sm-none d-block '>
                    <hr/>
                    </div>
                    <Col lg={6} className={`${isMobile ? 'px-0' : 'px-0 pt-5'}`}>
                        <Row className='gx-0 xs:px-4'>
                            <Col xs={6} lg={10} className='pt-1'>
                                <p className={`darkswitch ${isMobile ? 'lg:text-end px-3 pb-3' : 'lg:text-end pe-3'}`}>
                                    Dark Mode
                                </p>
                            </Col>
                            <Col xs={5} lg={1} className='px-0 ms-2 text-end'>
                                <label className="switch">
                                    <input onClick={handleTheme} type="checkbox"/>
                                    <span className="slider round"></span>
                                </label>
                            </Col>
                        </Row>
                    </Col>
                    <Row className='gx-0'>
                        <Col lg={3} sm={12} className={isMobile ? 'pb-3' : 'pb-5'}>
                            <Row className='mx-3'>
                                <Col className={isDarkTheme ? "p-2 facecard" : "p-2 facecardlight"}>
                                    <Row>
                                        <Col className='svg-container2 pt-4 pb-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className=''><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" /></svg>
                                            <p className='m-0 attxt fw2 px-0 ps-2 tracking-wider'>
                                                @nathanf
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row className='text-center pb-4'>
                                        <Col lg={12} className='bignum fonth'>
                                            1987
                                        </Col>
                                        <Col lg={12} className='subtxt track'>
                                            FOLLOWERS
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        <Col className='svg-container2 pb-3 px-0 pe-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                            <p className='m-0 ps-1 tlv tracking-wider green'>
                                                12 Today
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3} sm={12} className={isMobile ? 'pb-3' : 'pb-5'}>
                            <Row className='mx-3'>
                                <Col className={isDarkTheme ? "p-2 twitcard" : "p-2 twitcardlight"}>
                                    <Row>
                                        <Col className='svg-container2 pt-4 pb-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#1DA1F2" d="M20 1.924a8.192 8.192 0 01-2.357.646A4.11 4.11 0 0019.448.3a8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847 0c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392.752a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513C.76 7.616 2.122 9.395 4.095 9.79a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.41a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 1.924z" /></svg>
                                            <p className='m-0 attxt fw2 px-0 ps-2 tracking-wider'>
                                                @nathanf
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row className='text-center pb-4'>
                                        <Col lg={12} className='bignum fonth'>
                                            1044
                                        </Col>
                                        <Col lg={12} className='subtxt track'>
                                            FOLLOWERS
                                        </Col>
                                    </Row>
                                    <Row className='text-center pb-1'>
                                        <Col className='svg-container2 pb-3 px-0 pe-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                            <p className='m-0 ps-1 tlv tracking-wider green'>
                                                99 Today
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3} sm={12} className={isMobile ? 'pb-3' : 'pb-5'}>
                            <Row className='mx-3'>
                                <Col className={isDarkTheme ? "instapad instacard" : "instapad instacardlight"}>
                                    <Row>
                                        <Col className='svg-container2 pt-4 pb-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#DF4896" /><stop offset="50.913%" stop-color="#EE877E" /><stop offset="100%" stop-color="#FDC366" /></linearGradient></defs><path fill="url(#a)" d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.878.06 2.246.227.228 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg>
                                            <p className='m-0 attxt fw2 px-0 ps-2 tracking-wider'>
                                                @realnathanf
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row className='text-center pb-4'>
                                        <Col lg={12} className='bignum fonth'>
                                            11k
                                        </Col>
                                        <Col lg={12} className='subtxt track'>
                                            FOLLOWERS
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        <Col className='svg-container2 pb-3 px-0 pe-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                            <p className='m-0 ps-1 tlv tracking-wider green'>
                                                1099 Today
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3} sm={12} className={isMobile ? 'pb-3' : 'pb-5'}>
                            <Row className='mx-3'>
                                <Col className={isDarkTheme ? "p-2 tubecard" : "p-2 tubecardlight"}>
                                    <Row>
                                        {/* <Col lg={5} className='svg-container px-0 pt-4 pb-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z" /></svg>                                        </Col>
                                        <Col lg={7} className='attxt fw2 px-0 ps-2 pt-4 pb-3 tracking-wider'>
                                            Nathan F.
                                        </Col> */}
                                        <Col className='svg-container2 pt-4 pb-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z" /></svg>
                                            <p className='m-0 attxt fw2 px-0 ps-2 tracking-wider'>
                                                @realnathanf
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row className='text-center pb-4'>
                                        <Col lg={12} className='bignum fonth'>
                                            8239
                                        </Col>
                                        <Col lg={12} className='subtxt track'>
                                            FOLLOWERS
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        <Col className='svg-container2 pb-3 px-0 pe-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" /></svg>
                                            <p className='m-0 ps-1 tlv tracking-wider red'>
                                                144 Today
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                        {/* Overview part 1 */}

                        <Row className='p-0 gx-0 m-0'>
                            <Col lg={12} className='fw1 pb-3 px-3'>
                                Overview - Today
                            </Col>
                            <Col lg={3} sm={12} className={isMobile ? "pb-3" : "pb-4"}>
                                <Row className='mx-3'>
                                    <Col className={isDarkTheme ? "p-2 pb-3 normcard" : "p-2 pb-3 normcardlight"}>
                                        <Row className='px-4'>
                                            <Col className='attxt fw2 px-0 ps-2 py-3 tracking-wider overtxt'>
                                                Page Views
                                            </Col>
                                            <Col className='svg-container pe-2 py-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" /></svg>
                                            </Col>
                                        </Row>
                                        <Row className='px-4'>
                                            <Col className='px-0 ps-2 pt-2 overnum'>
                                                87
                                            </Col>
                                            <Col className='svg-container pe-2 pt-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" className='mb-3'><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                                <p className='mb-2 ps-1 green tlv'>3%</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={3} sm={12} className={isMobile ? "pb-3" : "pb-4"}>
                                <Row className='mx-3'>
                                    <Col className={isDarkTheme ? "p-2 pb-3 normcard" : "p-2 pb-3 normcardlight"}>
                                        <Row className='px-4'>
                                            <Col className='attxt fw2 px-0 ps-2 py-3 tracking-wider overtxt'>
                                                Likes
                                            </Col>
                                            <Col className='svg-container pe-2 py-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" /></svg>
                                            </Col>
                                        </Row>
                                        <Row className='px-4'>
                                            <Col className='px-0 ps-2 pt-2 overnum'>
                                                52
                                            </Col>
                                            <Col className='svg-container pe-2 pt-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" className='mb-3'><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" /></svg>
                                                <p className='mb-2 ps-1 red tlv'>
                                                    2%
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={3} sm={12} className={isMobile ? "pb-3" : "pb-4"}>
                                <Row className='mx-3'>
                                    <Col className={isDarkTheme ? "p-2 pb-3 normcard" : "p-2 pb-3 normcardlight"}>
                                        <Row className='px-4'>
                                            <Col className='attxt fw2 px-0 ps-2 py-3 tracking-wider overtxt'>
                                                Likes
                                            </Col>
                                            <Col className='svg-container pe-2 py-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#1DA1F2" d="M20 1.924a8.192 8.192 0 01-2.357.646A4.11 4.11 0 0019.448.3a8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847 0c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392.752a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513C.76 7.616 2.122 9.395 4.095 9.79a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.41a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 1.924z" /></svg>
                                            </Col>
                                        </Row>
                                        <Row className='px-4'>
                                            <Col className='px-0 ps-2 pt-2 overnum'>
                                                5462
                                            </Col>
                                            <Col className='svg-container pe-2 pt-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" className='mb-3'><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                                <p className='mb-2 ps-1 green tlv'>
                                                    2257%
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={3} sm={12} className={isMobile ? "pb-3" : "pb-4"}>
                                <Row className='mx-3'>
                                    <Col className={isDarkTheme ? "p-2 pb-3 normcard" : "p-2 pb-3 normcardlight"}>
                                        <Row className='px-4'>
                                            <Col className='attxt fw2 px-0 ps-2 py-3 tracking-wider overtxt'>
                                                Profile Views
                                            </Col>
                                            <Col className='svg-container pe-2 py-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#1DA1F2" d="M20 1.924a8.192 8.192 0 01-2.357.646A4.11 4.11 0 0019.448.3a8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847 0c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392.752a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513C.76 7.616 2.122 9.395 4.095 9.79a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.41a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 1.924z" /></svg>
                                            </Col>
                                        </Row>
                                        <Row className='px-4'>
                                            <Col className='px-0 ps-2 pt-2 overnum'>
                                                52k
                                            </Col>
                                            <Col className='svg-container pe-2 pt-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" className='mb-3'><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                                <p className='mb-2 ps-1 green tlv'>
                                                    1375%
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        {/* Overview part 2 */}

                        <Row className='p-0 gx-0 m-0'>
                            <Col lg={3} sm={12} className={isMobile ? "pb-3" : "pb-4"}>
                                <Row className='mx-3'>
                                    <Col className={isDarkTheme ? "p-2 pb-3 normcard" : "p-2 pb-3 normcardlight"}>
                                        <Row className='px-4'>
                                            <Col className='attxt fw2 px-0 ps-2 py-3 tracking-wider overtxt'>
                                                Retweets
                                            </Col>
                                            <Col className='svg-container pe-2 py-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#DF4896" /><stop offset="50.913%" stop-color="#EE877E" /><stop offset="100%" stop-color="#FDC366" /></linearGradient></defs><path fill="url(#a)" d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.878.06 2.246.227.228 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg>
                                            </Col>
                                        </Row>
                                        <Row className='px-4'>
                                            <Col className='px-0 ps-2 pt-2 overnum'>
                                                117
                                            </Col>
                                            <Col className='svg-container pe-2 pt-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" className='mb-3'><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                                <p className='mb-2 ps-1 green tlv'>
                                                    303%
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={3} sm={12} className={isMobile ? "pb-3" : "pb-4"}>
                                <Row className='mx-3'>
                                    <Col className={isDarkTheme ? "p-2 pb-3 normcard" : "p-2 pb-3 normcardlight"}>
                                        <Row className='px-4'>
                                            <Col className='attxt fw2 px-0 ps-2 py-3 tracking-wider overtxt'>
                                                Likes
                                            </Col>
                                            <Col className='svg-container pe-2 py-3'>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#DF4896" /><stop offset="50.913%" stop-color="#EE877E" /><stop offset="100%" stop-color="#FDC366" /></linearGradient></defs><path fill="url(#a)" d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.878.06 2.246.227.228 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg>
                                            </Col>
                                        </Row>
                                        <Row className='px-4'>
                                            <Col className='px-0 ps-2 pt-2 overnum'>
                                                507
                                            </Col>
                                            <Col className='svg-container pe-2 pt-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" className='mb-3'><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                                <p className='mb-2 ps-1 green tlv'>
                                                    553%
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={3} sm={12} className={isMobile ? "pb-3" : "pb-4"}>
                                <Row className='mx-3'>
                                    <Col className={isDarkTheme ? "p-2 pb-3 normcard" : "p-2 pb-3 normcardlight"}>
                                        <Row className='px-4'>
                                            <Col className='attxt fw2 px-0 ps-2 py-3 tracking-wider overtxt'>
                                                Likes
                                            </Col>
                                            <Col className='svg-container pe-2 py-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z" /></svg>
                                            </Col>
                                        </Row>
                                        <Row className='px-4'>
                                            <Col className='px-0 ps-2 pt-2 overnum'>
                                                107
                                            </Col>
                                            <Col className='svg-container pe-2 pt-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" className='mb-3'><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" /></svg>
                                                <p className='mb-2 ps-1 red tlv'>
                                                    19%
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={3} sm={12} className={isMobile ? "pb-3" : "pb-4"}>
                                <Row className='mx-3'>
                                    <Col className={isDarkTheme ? "p-2 pb-3 normcard" : "p-2 pb-3 normcardlight"}>
                                        <Row className='px-4'>
                                            <Col className='attxt fw2 px-0 ps-2 py-3 tracking-wider overtxt'>
                                                Total Views
                                            </Col>
                                            <Col className='svg-container pe-2 py-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z" /></svg>
                                            </Col>
                                        </Row>
                                        <Row className='px-4'>
                                            <Col className='px-0 ps-2 pt-2 overnum'>
                                                1407
                                            </Col>
                                            <Col className='svg-container pe-2 pt-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" className='mb-3'><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" /></svg>
                                                <p className='mb-2 ps-1 red tlv'>
                                                    3%
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Row>
                </Row>
                </div>
            </Container>
    );
};

export default DashboardComponent;
