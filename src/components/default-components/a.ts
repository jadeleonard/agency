interface prop{
    class?:string
    href?:string
    textContent?:string
}




const A = (props:prop)=>{
    const a = document.createElement('a') as HTMLAnchorElement
    if(props.class) a.className = props.class
    if(props.href) a.href = props.href
    if(props.textContent)a.textContent = props.textContent

    return a
}



export default A