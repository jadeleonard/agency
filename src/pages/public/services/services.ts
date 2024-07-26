
import {Button} from '../../../components/default-components/button'

export const Services = ():HTMLDivElement =>{
    
    const services = document.createElement('div') as HTMLDivElement
    
    
    
    
    
    
    const title = Button({
        textContent:'Services'
    })
    
    
    
    
    
    
    
    
    
    services.appendChild(title)
    return services
    
}
