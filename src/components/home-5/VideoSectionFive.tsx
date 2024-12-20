"use client"
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import videoThumb from "../../../public/assets/img/bg/video-thumb.jpg";

const VideoSectionFive = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
        <div className="video-area style-5 pt-0 pb-0">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                        <div className="video-wrapper">
                            <div className="video-thumb">
                                <Image style={{width:"100%", height:"auto"}} src={videoThumb} alt="image not found"/>
                            </div>
                            <div className="video-btn mb-45">
                                <span className="play-btn popup-video play-border-effect" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSectionFive;