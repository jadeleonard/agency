interface UlProps{
    className?:string
    id?:string
    children?:HTMLElement[]
    
}



const Ul = (props:UlProps) =>{
    const ul = document.createElement('ul') as HTMLUListElement
    
    if(props.className) ul.className = props.className
    if(props.id) ul.id = props.id
    props.children.forEach(child =>{
        ul.appendChild(child)
    })
}


export default Ul