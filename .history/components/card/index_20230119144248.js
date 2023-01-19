export default function Card({
    degree = "none",
    colour = "purple",
    font = 0,
    image = 'icon/personTwo.png'
}){
    return(
        <div style={{backgroundColor: colour, fontSize: font}}>
            {
                colour === "#98CE00" ? <img src={'icon/person.png'} width="50" border-radius="/> :
                colour === "#6CCFF6" ? <img src={'icon/personThree.png'} width="50"/> :
                                    <img src={image} width="50"/> 
            }
            {degree}
        </div>
    )
}