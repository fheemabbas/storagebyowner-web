import 'bootstrap/dist/css/bootstrap.min.css';
import '.././App.scss';
import Slider from "react-slick";
import ProfileImage from '../../src/assets/images/home-testimonial.jpg';
import React from 'react';

function SliderSection() {
    const sliderRef = React.useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: false
                }
            },
        ]
    };
    return (
        <section className='testomonies-detail-section' style={{ height: '662px' }}>
            <h1>You don’t have to take our word for it. Take theirs.</h1>
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <h4>We’re fostering storage solutions for renters and hosts just like you.</h4>
                <div>
                    <p onClick={() => sliderRef.current.slickPrev()} className='next-prev-d-section'>&larr;</p>
                    <p onClick={() => sliderRef.current.slickNext()} className='next-prev-d-section'>&rarr;</p>
                </div>
            </div>
            <div className='testomonies-detail-container'>
                <Slider ref={sliderRef} {...settings}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                        return <div className='slider-box'>
                            <p>{i}“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac convallis erat. Cras velit magna, euismod gravida malesuada sodales, euismod vel eros. Pellentesque tristique ultrices sapien.”</p>
                            <div className='profile'>
                                <div className='profile-img'>
                                    <img src={ProfileImage} alt='profile' width={'70'} height='70' className='pofile-picture' />
                                </div>
                                <div className='profile-detail'>
                                    <h6>Terrance R.</h6>
                                    <h6>Host</h6>
                                </div>
                            </div>
                        </div>
                    })}


                    {/* <div className='slider-box'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac convallis erat. Cras velit magna, euismod gravida malesuada sodales, euismod vel eros. Pellentesque tristique ultrices sapien.”</p>
                        <div className='profile'>
                            <div className='profile-img'>
                                <img src={ProfileImage} alt='profile' width={'70'} height='70' className='pofile-picture' />
                            </div>
                            <div className='profile-detail'>
                                <h6>Terrance R.</h6>
                                <h6>Host</h6>
                            </div>
                        </div>
                    </div>

                    <div className='slider-box'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac convallis erat. Cras velit magna, euismod gravida malesuada sodales, euismod vel eros. Pellentesque tristique ultrices sapien.”</p>
                        <div className='profile'>
                            <div className='profile-img'>
                                <img src={ProfileImage} alt='profile' width={'70'} height='70' className='pofile-picture' />
                            </div>
                            <div className='profile-detail'>
                                <h6>Terrance R.</h6>
                                <h6>Host</h6>
                            </div>
                        </div>
                    </div>

                    <div className='slider-box'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac convallis erat. Cras velit magna, euismod gravida malesuada sodales, euismod vel eros. Pellentesque tristique ultrices sapien.”</p>
                        <div className='profile'>
                            <div className='profile-img'>
                                <img src={ProfileImage} alt='profile' width={'70'} height='70' className='pofile-picture' />
                            </div>
                            <div className='profile-detail'>
                                <h6>Terrance R.</h6>
                                <h6>Host</h6>
                            </div>
                        </div>
                    </div>

                    <div className='slider-box'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac convallis erat. Cras velit magna, euismod gravida malesuada sodales, euismod vel eros. Pellentesque tristique ultrices sapien.”</p>
                        <div className='profile'>
                            <div className='profile-img'>
                                <img src={ProfileImage} alt='profile' width={'70'} height='70' className='pofile-picture' />
                            </div>
                            <div className='profile-detail'>
                                <h6>Terrance R.</h6>
                                <h6>Host</h6>
                            </div>
                        </div>
                    </div>

                    <div className='slider-box'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac convallis erat. Cras velit magna, euismod gravida malesuada sodales, euismod vel eros. Pellentesque tristique ultrices sapien.”</p>
                        <div className='profile'>
                            <div className='profile-img'>
                                <img src={ProfileImage} alt='profile' width={'70'} height='70' className='pofile-picture' />
                            </div>
                            <div className='profile-detail'>
                                <h6>Terrance R.</h6>
                                <h6>Host</h6>
                            </div>
                        </div>
                    </div> */}

                </Slider>
                <div className='next-prev-m-section'>
                    <span className='next-prev-section' onClick={() => sliderRef.current.slickPrev()} >&larr;</span>
                    <span onClick={() => sliderRef.current.slickNext()} >&rarr;</span>
                </div>
            </div>
        </section>
    );
}

export default SliderSection;
