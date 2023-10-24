import spot from '../assets/spot.jpg' 
import {useState} from'react'

export default function Child({name}) {
   console.log (useState(0))

   const [likes, setLikes] = useState(0)
    
   function handleLikes() {
    setLikes(likes + 1)
   }
    return (
        <div>
            <p>{name} is the child</p>
            <img src={spot} onClick={handleLikes} />
            <span>❤️{likes}</span>
        </div>
    )
}