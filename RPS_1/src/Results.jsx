import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function Results() {
    const [count, setCount] = useState(0)
    

    return (
        <section id="center">
            <div className="hero">
                <img src={rock} className="rock" width="170" height="179" alt="" />
                <img src={paper} className="paper" alt="React logo" />
                <img src={scissors} className="scissors" alt="Vite logo" />
            <Win>
            
            </Win>
            <Lose>

            </Lose>
            </div>

        </section> 
    )

}