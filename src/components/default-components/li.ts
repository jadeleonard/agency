interface LiProps {
    className?:string
    id?:string
    textContent?:string
}





const Li = (props:LiProps) =>{
    const li = document.createElement('li') as HTMLLIElement
    
    if(props.className) li.className = props.className
    if(props.id) li.id = props.id
    if(props.textContent) li.textContent = props.textContent
}



export default Li