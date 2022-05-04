
import React from 'react';
import PropTypes from "prop-types";

const Song = (props) => {
   return (
      <div>
{props.myFavMusic.map((value,idx) => (
   <p key={idx}>
      {value.author} - {value.song}
   </p>
))}
      </div>
   );
};
Song.defaultProps = {
   myFavMusic: [
      { song: "Heat waves", author: "Glass Animals" },
      { song: "When will i see you again", author: "Shakka" },
      { song: "Evil twin", author: "Freaks on floor" },
      { song: "Čia", author: "Daddy was a milkman" }
   ]
}
//proptypes validation, pagr example: jei sudeti su reactu skaicius, nenurodzius proptypes butu (vietoj 15+5=20) 15+5=155;
Song.propTypes = {
   myFavMusic: PropTypes.array,
}

export default Song;


