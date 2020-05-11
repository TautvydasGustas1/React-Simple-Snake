import React from 'react';
import PropTypes from 'prop-types';

const Food = ({ food }) => {
    const style = {
        top: `${food[0]}%`,
        left: `${food[1]}%`,
    };
    return <div style={style} className='food' />;
};

Food.propTypes = {
    food: PropTypes.array.isRequired,
};

export default Food;
