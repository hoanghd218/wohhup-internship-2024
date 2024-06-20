import img from "./assets/react.svg";
import PropTypes from "prop-types"

function Card(props){ 

   const cardStyles = {
      border: "1px solid rgb(0, 0, 0)",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px",
      textAlign: "center",
      maxwidth: "200px",
      display: "inline-block",
   }

   const spanStyles = {
      color: "green",
      fontSize: "15px",
   }

   return(
      <div style={cardStyles}>
         <img className="cardImg" src={img} alt="" />
         <h2 className="cardTitle">{props.name} <span style={spanStyles}>{props.growth}</span></h2>
         <p className="cardText">From PDA Company</p>
      </div>
   );
}

Card.defaultProps = {
   name: "Guest",
   growth: 0,
}

Card.propTypes = {
   name: PropTypes.string,
   growth: PropTypes.number,
}

export default Card