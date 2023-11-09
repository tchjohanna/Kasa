import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

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
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </span>
                <img src={pictures[index]} alt="cacoursel" />
                <span className="arrow right" onClick={next} >
                    <FontAwesomeIcon icon={faAngleRight}/>
                </span>
                <span className='counter'>
                    <span>{index+1}</span>
                    <span>/</span>
                    <span>{pictures.length}</span>
                </span>
            </div>
        </div>
    )
}

export default Carousel;