import React from 'react'

import './../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import WorldImg from '../assets/images/world.png'
import Subtitle from '../components/shared/Subtitle';

import SearchBar from '../components/shared/SearchBar';

import ServiceList from '../Services/ServiceList';

import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={WorldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                <h5>Welcome to Your Ultimate Travel Companion!</h5>
                <p>
                  At <b>ItineraryPlanner</b> we believe that every journey is an opportunity for adventure, discovery, and unforgettable experiences. Whether you're dreaming of a tranquil beach escape, an exhilarating city break, or an epic outdoor adventure, we're here to make your travel dreams a reality.
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="HeroImage" /></div></Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <video autoPlay loop muted src={heroVideo} alt="Video Here" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg2} alt="HeroImage" /></div></Col>


            <SearchBar />

          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle server">What we serve</h5>
              <h2 className="services__title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>



      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Home