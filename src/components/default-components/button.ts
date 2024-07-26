
interface ButtonProps{
    class?:string
    id?:string
    textContent?:string
    style?:string


    type?: 'submit' | 'button' | 'reset'
    name?:string

}

export const Button = (props:ButtonProps):HTMLButtonElement =>{
    const button = document.createElement('button') as HTMLButtonElement

    if(props.style) button.style.cssText = props.style
    if(props.type) button.type = props.type
    if(props.class) button.className = props.class
    if(props.id) button.id = props.id
    if(props.textContent) button.textContent = props.textContent
    if(props.name) button.name = props.name

    return button
}