import React from 'react'
import { IconContext } from "react-icons"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
/* import PropTypes from 'prop-types' */

const Rating = ({ value , text }) => {
    return (
        
        <div className="rating">
            <IconContext.Provider
      value={{ color: '#f8e825', size: '12.5px', className: "starIcons"  /* , style: { stroke: "black", strokeWidth: "2.5"} */ }}
    >
            <span>
                {value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
            <span>
                {value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
            <span>
                {value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
            <span>
                {value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
            <span>
                {value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
            </IconContext.Provider>
            <span className="starText">{text && text}</span> {/* { {text ? text : ''}  =  {text && text} } */}
        </div>
    )
}


// type check props - if something is wrong we see warning in console
/* Rating.propTypes = {
   value: PropTypes.number.isRequired,
   text: PropTypes.string.isRequired
} */

export default Rating
