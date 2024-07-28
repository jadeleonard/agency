interface UlProps{
    className?:string
    id?:string
    children?:HTMLElement[] | Text[]
    
}



const Ul = (props:UlProps) =>{
    const ul = document.createElement('ul') as HTMLUListElement
    
    if(props.className) ul.className = props.className
    if(props.id) ul.id = props.id
   
}


export default Ul