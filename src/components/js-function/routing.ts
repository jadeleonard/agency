import Navigo from 'navigo'
import {Home} from "../../pages/public/home";
const routing = new Navigo('/')
routing
    .on('/',() =>{
        const app = document.getElementById('app')


        if(app){
            app.innerHTML = ''
            app.appendChild(Home())
        }
    }).resolve()

