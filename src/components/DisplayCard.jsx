import { useState } from "react"
import PropTypes from 'proptypes'


function Card(props){
    const [cardData, setCardData] = useState({
        cardThumbnail:'',
        cardTitle: '',
        cardDescription:''
    });

    // set API routes for backend
    return(
        <>
        <div className="cardWrapper">
            <div className="cardImg">
            <img src={cardData.cardThumbnail} alt="Card Photo" />
            </div>
            <h5>{cardData.cardTitle}</h5>
            <p>{cardData.cardDescription}</p>
        </div>
        </>
    );


}

export default Card