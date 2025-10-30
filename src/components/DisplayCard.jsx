function Card(props){
    

    return(
        <>
        <div className="cardWrapper">
            <div className="cardImg">
                <img src={props.cardPic} alt="Card Photo" />
            </div>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </div>
        </>
    );


}

export default Card