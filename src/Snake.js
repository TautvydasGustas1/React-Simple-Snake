import React from 'react';
import PropTypes from 'prop-types';

const snake = ({ snakeDots }) => {
    return (
        <div>
            {snakeDots.map((dot, index) => {
                const style = {
                    top: `${dot[0]}%`,
                    left: `${dot[1]}%`,
                };
                return (
                    <div key={index} className={'snake-dot'} style={style} />
                );
            })}
        </div>
    );
};

snake.propTypes = {
    snakeDots: PropTypes.array.isRequired,
};

export default snake;
