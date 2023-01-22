export default function Card({
    degree = "none",
    colour = "purple",
    font = 0,
    image = 'icon/personTwo.png'
}){
    return(
        <div style={{backgroundColor: colour, fontSize: font}}>
            {
                colour === "#ffffff" ? <img src={'icon/person.png'} width="50"/> :
                colour === "#fffdfd" ? <img src={'icon/personThree.png'} width="50"/> :
                                    <img src={image} width="50"/> 
            }
            {degree}
        </div>
    )
}