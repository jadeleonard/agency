import './home.css'
import {Button} from "../../../components/default-components/button";

export const Home = ():HTMLDivElement =>{
    const Home = document.createElement('div') as HTMLDivElement






    const title = Button({
        textContent:'Button'
    })
    Home.appendChild(title)
    return Home
}