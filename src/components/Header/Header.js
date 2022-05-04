import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header (){
  // objektu negrazina
  const Array = [{id:1, post:"karbauskio dienorastis"
  },
{id:1, post:"karbauskio dienorastis"},
{id:1, post:"karbauskio dienorastis"}]
  return (
    <>
        {/* <p>1</p> */}
        {/* <p>2</p> */}

        {/* Creating empty array to generate a paragraph 10 times */}
        {Array.map((value, idx) => (
            // Warning: Each child in a list should have a unique "key" prop.
            //key del greitaveikos, gerai butu unikalus indeksai, reikia key prideti del generacijos
            <p key={idx}>{value.id} {value.post}</p>
        ))}
    </>
);

};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
