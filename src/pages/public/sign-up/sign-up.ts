import './sign-up.css'
import {Button} from '../../../components/default-components/button'
import {Input} from '../../../components/default-components/input'

import { Submit } from './sign-up.config'
interface props{

    email:string
    name:string
    password:string
}
export const SignUp  = ():HTMLDivElement =>{
    const signup = document.createElement('div') as HTMLDivElement
    
    
    

    const email = Input({
        placeholder:'Email',
        type:'email'
    })
    const name = Input({
        placeholder:'Name',
        type:'text'
    })
    const password = Input({
        placeholder:'Password',
        type:'password'
    })
    const SubmitButton = Button({
        textContent:'Submit',
        class:'buttonSignUp'
    })
    signup.appendChild(name)
    signup.appendChild(email)
    signup.appendChild(password)
    signup.appendChild(SubmitButton)
    SubmitButton.addEventListener('click', async() =>{
            const Props: props ={
                name:name.value,
                email:email.value,
                password:password.value
            }    
            await Submit(Props)


    })
    
    return signup
    
}