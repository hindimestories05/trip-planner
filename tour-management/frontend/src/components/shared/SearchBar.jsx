import React, { useState, useRef, useEffect } from 'react'

import citiesData from '../../../src/Cities_detail.json';

import './search-bar.css'

import { Col, Form, FormGroup } from 'reactstrap'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');

    const [filteredPlaces, setFilteredPlaces] = useState([]);

    // const handleInputChange = (e) => {
    //     setSearchInput(e.target.value);
    // };

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // Set filtered places to all cities initially
        setFilteredPlaces(citiesData);
    }, []);


    const handleChange = (event) => {
        const query = event.target.value;
        setQuery(query);

        // Filter cities based on query
        const filteredCities = citiesData.filter(city =>
            city.city.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredCities);
    };

    const handleSelect = (city) => {
        // You can do something with the selected city here
        console.log("Selected city:", city);
        // For example, you can set it as the value of the input field
        setQuery(city.city);
        // Clear suggestions
        setSuggestions([]);
    };

    // const filteredPlaces = places.filter(place =>
    //     place.toLowerCase().startsWith(searchInput.toLowerCase())
    // );

    const locref = useRef('')
    const disref = useRef(0)
    const maxgsref = useRef(0)


    const searchHandler = () => {
        const location = locref.current.value
        const distance = disref.current.value
        const maxgsize = maxgsref.current.value

        if (location === '' || distance === '' || maxgsize === '') {
            return alert("All Fields are required !")
        }

    }

    const renderSuggestions = () => {
        if (searchInput.trim() === '') {
            return null;
        }

        return (
            <ul>
                {filteredPlaces.map((city, index) => (
                    <li key={index}>{city.city}</li>
                ))}
            </ul>
        );
    };

    return <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i class="ri-map-pin-fill"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input
                            type="text"
                            value={query}
                            onChange={handleChange}
                            placeholder="Search for a city..."
                            className="search-input"
                        />
                        <ul className="suggestions">
                            {suggestions.map((city, index) => (
                                <li key={index} onClick={() => handleSelect(city)}>
                                    {city.city}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FormGroup>


                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i class="ri-map-pin-time-line"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number"
                            placeholder='Distance k/m' ref={disref} />
                    </div>
                </FormGroup>


                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span>
                        <i class="ri-group-fill"></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder='0' ref={maxgsref} />
                    </div>
                </FormGroup>

                <span className="search__icon" type="submit" onClick={searchHandler}>
                    <i class="ri-search-2-line"></i>
                </span>

            </Form>
        </div>
    </Col>
}

export default SearchBar