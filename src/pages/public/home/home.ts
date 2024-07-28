import './home.css'
import navbar from  '../../../components/navbar'

export const Home = ():HTMLDivElement =>{
    const Home = document.createElement('div') as HTMLDivElement





    Home.appendChild(navbar)
 
    return Home
}