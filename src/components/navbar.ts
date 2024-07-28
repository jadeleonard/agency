import './navbar.css'
import A from '../components/default-components/a'
const navbarData = [
    {name:'Docs',url:'/docs'},
    {name:'Sign Up',url:'/sign-up'},
    {name:'Agencies',url:'/agencies'},
    {name:'Post a Job',url:'/post'},
    {name:'Apply',url:'/apply'}
]

    const navbar = document.createElement('nav')
    const ul = document.createElement('ul') as HTMLUListElement
navbar.className = 'nav'
ul.className = 'orderList'


navbarData.forEach((item) =>{

    const a = A({
        textContent:item.name,
        href:item.url,
        class:'a'
        
    })

    ul.appendChild(a)
    
})


navbar.appendChild(ul)


    
export default navbar



