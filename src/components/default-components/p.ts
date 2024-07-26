interface PProps{
    textContent?:string
    id?:string
    className?:string
    style?:string
}


export const P = (props:PProps):HTMLParagraphElement =>{
    const p = document.createElement('p') as HTMLParagraphElement

    if(props.id) p.id = props.id
    if(props.style) p.style.cssText = props.style
    if(props.textContent) p.textContent = props.textContent


    return p
}