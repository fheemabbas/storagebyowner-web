import Logo from '../../src/assets/images/logo-horizontal.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././App.scss';

function Footer() {
    return (
        <section className='footer-section' style={{ height: '588px' }}>

            <footer class="desktop-footer">

                <div class="p-12">
                    <section className="">
                        <div className="row">
                            <div className="column column-1 col-lg-3 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0 list-space">
                                    <div className='upper-container'>
                                        <li>
                                            <a href="#!" className="">
                                                <img src={Logo} alt='invision logo' className='footer-logo' />
                                            </a>
                                        </li>
                                    </div>
                                    <div className='lower-container'>
                                        <li>
                                            <a href="#!" className=""><h5>Contact Us</h5></a>
                                        </li>
                                        <li className="green-text phone">
                                            <a href="tel:1-800-789-8969">1-800-789-8969</a>
                                        </li>
                                        <li className="green-text email">
                                            <a href="mailto:info@storagebyowner.com" >info@storagebyowner.com</a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div className="column col-lg-3 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className=""><h5>About Us</h5></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">How it Works</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Our Story</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="column col-lg-3 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className=""><h5>Join Us</h5></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Create an Account</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">List Your Space</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Register for Updates</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="column col-lg-3 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className=""><h5>Follow us</h5></a>
                                    </li>
                                    <div className='inline-scoial-links'>
                                        <li>
                                            <a href="#!" className=""><i className='icon-instagram green-icon' /></a>
                                        </li>
                                        <li>
                                            <a href="#!" className=""><i className='icon-facebook green-icon'></i></a>
                                        </li>
                                    </div>
                                    <li>
                                        <p>© 2019 StorageByOwner, Inc.
                                            <br></br>
                                            All Rights Reserved. </p>
                                    </li>
                                    <li>
                                        <p className='mb-30'>Design by SPINX</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>

            <footer class="mobile-footer">

                <div class="p-12">
                    <section className='footer-logo'>
                        <a href="#!" className="">
                            <img src={Logo} alt='invision logo' className='footer-logo' />
                        </a>
                    </section>
                    <section className="row-links">
                        <div className="row">
                            <div className="column">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className=""><h5>About Us</h5></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">How it Works</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Our Story</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="column">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className=""><h5>Join Us</h5></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Create an Account</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">List Your Space</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Register for Updates</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className='copyright-section'>
                        <div className="column">
                            <ul className="list-unstyled mb-0">
                                <li className='cp-text'>
                                    <p>© 2019 StorageByOwner, Inc. All Rights Reserved. </p>
                                </li>
                                <li>
                                    <p className='mb-30'>Design by SPINX</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </footer>

        </section>
    );
}

export default Footer;
