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

const Tour = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle server">What we serve</h5>
              <h2 className="services__title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section> */}



      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Explore Places</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Tour