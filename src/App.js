import HomeBanner from '../src/assets/images/home-hero.jpg';
import ConvienentIcon from '../src/assets/images/icon-medium-convenient.png';
import HomeLock from '../src/assets/images/home-lock.jpg';
import HomeGarrage from '../src/assets/images/home-garage.jpg';
import LargePackage from '../src/assets/images/large-package.png';
import CoupleHome from '../src/assets/images/home-couple.jpg';
import SafeIcon from '../src/assets/images/safe.png';
import HomeAbout from '../src/assets/images/home-about.jpg';
import RealEstate from '../src/assets/images/large-realestate.png';
import BackgroundPattern from '../src/assets/images/background-pattern.png';
import LargeLightBulb from '../src/assets/images/large-lightbulb.png';
import LargectaShed from '../src/assets/images/largecta-shed.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './Component/Header';
import Footer from "./Component/Footer";
import SliderSection from "./Component/SliderSection";

function App() {

  return (
    <div className="App">
      <Header />
      <div className='section-container'>
        <section className='right-section'>
          <div className='content-container'>
            <h1>Flexible, Secure, and Convenient Storage Solution.</h1>
            <h4 className=''>DIY peer-to-peer marketplace for all your storage needs.</h4>
            <div className='search-box-container'>
              <input type={'text'} className='search-input' placeholder='Search by zip code or city, state' />
              <button className='search-btn'>SEARCH</button>
            </div>

            <div className='square-box-container mb-45 mt-60'>
              <div className='square-box'>
                <img src={ConvienentIcon} alt='icon' width={'45'} height={'45'} />
                <p>Conveniently book with a click of a button.</p>
              </div>
              <div className='square-box'>
                <img src={ConvienentIcon} alt='icon' width={'45'} height={'45'} />
                <p>Conveniently book with a click of a button.</p></div>
            </div>
            <div className='square-box-container'>
              <div className='square-box'>
                <img src={ConvienentIcon} alt='icon' width={'45'} height={'45'} />
                <p>Conveniently book with a click of a button.</p>
              </div>
              <div className='square-box'>
                <img src={ConvienentIcon} alt='icon' width={'45'} height={'45'} />
                <p>Conveniently book with a click of a button.</p>
              </div>
            </div>
          </div>
          <div className='image-container'>
            <img src={HomeBanner} alt="Home banner" />
          </div>
        </section>

        <section className='renting-section left-section' style={{ height: '600px' }}>
          <div className='renting-details'>
            <img src={LargePackage} alt='Large package icon' width={'140'} height={'140'} className='largePackageImage' />
            <h2>Renting your storage space is oh, so easy.</h2>
            <p>It is seriously so easy - all you have to do is snap a few photos of your spare space & add it on StorageByOwner for potential renters to see.</p>
            <button className=''>See how easy it can be!</button>
          </div>
          <div className='rental-image-container'>
            <img src={HomeLock} alt="Home Lock" className='homeLockImage' width={'370'} height={'550'} />
            <img src={HomeGarrage} alt="Home garrage" className='homeGarrageImage' width={'375'} height={'550'} />
          </div>
        </section>

        <section className='left-section benifit-section' style={{ height: '912px' }}>
          <div className='image-container'>
            <img src={CoupleHome} alt='couple home' className='couple-home-container' height={'912'} width={'805'} />
          </div>

          <div className='benifits-details'>
            <div className='detail-container'>
              <img src={SafeIcon} alt='safe-icon' className='icon' width={'45'} height={'45'} />
              <h5>Your safety is our top priority</h5>
              <p>Verified spaces, background checks & insurance provide peace of mind for hosts & users.</p>
            </div>

            <div className='detail-container'>
              <img src={SafeIcon} alt='safe-icon' className='icon' width={'45'} height={'45'} />
              <h5>Your safety is our top priority</h5>
              <p>Verified spaces, background checks & insurance provide peace of mind for hosts & users.</p>
            </div>

            <div className='detail-container'>
              <img src={SafeIcon} alt='safe-icon' className='icon' width={'45'} height={'45'} />
              <h5>Your safety is our top priority</h5>
              <p>Verified spaces, background checks & insurance provide peace of mind for hosts & users.</p>
            </div>
          </div>

        </section>

        <section className='about-section right-section' style={{ height: '570px' }}>
          <div className='about-detail-container'>
            <img src={RealEstate} alt='real-estate-icon' width={'70'} height={'70'} />
            <h2>Our story intro vivamus id accumsan sem, sed accumsan erat. Vestibulum quis sapien erat.</h2>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus id accumsan sem, sed accumsan erat. Vestibulum quis sapien erat.</p>
            <button>READ OUR STORY</button>
          </div>
          <div className='image-container'>
            <img src={HomeAbout} alt='about home' width={'570'} height='570' />
          </div>
        </section>
        <SliderSection />

        <section className='CTA-section' style={{ height: '600' }}>
          <img src={BackgroundPattern} alt='background' className='bgImage' width={'100%'} height={'100%'} />
          <div className='CTA-inner-container'>
            <div className='CTA-details'>
              <img src={LargeLightBulb} alt='' width={'70'} height={'70'} />
              <h1>Transform your spare space into passive income!</h1>
              <h4>Listing with StorageByOwner can supplement your income worry-free.</h4>
              <button>Become a Host</button>
            </div>
            <div className='image-container'>
              <img src={LargectaShed} alt='Larget shed' width={'471'} height={'600'} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div >
  );
}

export default App;
