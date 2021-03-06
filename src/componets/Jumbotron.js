import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

import { HashLink } from "react-router-hash-link";


const TopJumbo = () => {

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    return (
        <Jumbotron id='home' fluid className='jumbo'>
            <div className='jumbo-image'>
                <div className='jb0-container'>
                    <p className='jb-text1'>what are you waiting for?</p>
                    <h1 className='jb-h1'>Let's be creative !</h1>
                    <div className='jb1-container'>
                        <p>loremNulla incididunt aute</p>
                    </div>
                    <br />
                    <div className='jb2-container'>
                        <div className='line-grp1'>
                            <hr className='line' />
                            <hr className='line' />
                        </div>
                        <div className='shape-sp'>
                            <div className="shape-grp1">
                                <div className='shape1'></div>
                                <div className='shape2'></div>
                                <div className='shape3'></div>
                            </div>
                        </div>
                        <div className='jb-text2'>
                            <p ><span>start</span> doing that</p>
                        </div>
                        <div className='shape-sp'>
                            <div className="shape-grp2">
                                <div className='shape1'></div>
                                <div className='shape2'></div>
                                <div className='shape3'></div>
                            </div>
                        </div>
                        <div className='line-grp2'>
                            <hr className='line' />
                            <hr className='line' />
                        </div>
                    </div>
                    <div className='top-btn'>
                        <HashLink smooth to='/#offer' scroll={el => scrollWithOffset(el)}>
                            <Button variant='default' className='btn-down'><i className='arrow down'></i></Button>
                        </HashLink>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
};

export default TopJumbo;