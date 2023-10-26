import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({pictures}) => {
    const [index, setIndex] = useState(0)
    const next = () => {
        if(index < pictures.length - 1) setIndex(index + 1)
        else setIndex(0)
    }

    const previus = () => {
        if(index > 0) setIndex(index - 1)
        else setIndex(pictures.length - 1)
    }


    return (
        <div className="carousel">
            <div className="content-carousel">
                <span className="arrow left" onClick={previus}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
                </span>
                <img src={pictures[index]} />
                <span className="arrow right" onClick={next} >
                    <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                </span>
            </div>
            <div className='counter'>
                <span>{index+1}</span>
                <span>/</span>
                <span>{pictures.length}</span>
            </div>
        </div>
    )
}

export default Carousel;