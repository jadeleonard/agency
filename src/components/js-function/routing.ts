import Navigo from 'navigo'
import {Home} from "../../pages/public/home/home";
import {Services} from '../../pages/public/services/services'
import {SignUp} from '../../pages/public/sign-up/sign-up'
const routing = new Navigo('/')
routing
    .on('/',() =>{
        const app = document.getElementById('app')


        if(app){
            app.innerHTML = ''
            app.appendChild(Home())
        }
    })
    .on('/services',() =>{
    const app = document.getElementById('app')
        
        if(app){
            app.innerHTML = ''
            app.appendChild(Services())
        }
})
.on('/sign-up',()=>{
    const app = document.getElementById('app')
    if(app){
        app.innerHTML = ''
        app.appendChild(SignUp())
    }
}).resolve()

