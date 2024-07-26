import GetNavbar from "../js-function/useFetch";
import Ul from '../../components/default-components/ul'
import Li from '../../components/default-components/li'
interface props{
    links:string
    list:string
}


const Navbar = () =>{
    const nav = document.createElement('nav')

   async function Get(){
        const navbarData =GetNavbar()

       if(navbarData){
           navbarData.forEach((item:props) =>{

           })
       }
    }




}