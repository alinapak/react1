// import React from 'react';
// import PropTypes from "prop-types";

const Animal = (props) => {
   const setBg = () => {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      return randomColor;
    }
   return (<>
<figure>
    <img style={{width:"50%", justifySelf: 'center'}} src={props.photo}
         alt={props.pavad}/>
         {/* iskvieciam fcija aprasyta virsuj norimam stiliui */}
    <figcaption style={{width:"50%", backgroundColor:setBg()}}>{props.pavad}</figcaption>
</figure>
   </>
   )
}
//du rasymo variantai
// const Animal = ({photo, pavad}) => {
//    return (<>
// <figure>
//     <img src={photo}
//          alt={pavad}/>
//     <figcaption>{pavad}</figcaption>
// </figure>
//    </>
//    )
// }

export default Animal;