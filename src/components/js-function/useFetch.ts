const apiNavbar = process.env.API_PUBLIC_NAVBAR_CONTENT as string
interface props{
    links:string
    list:string
}





async function GetNavbar(){
    try {
        const response = await fetch(apiNavbar);
        if (response.ok) {
            return await response.json();
        } else {
            console.error('Error fetching navbar:', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error in GetNavbar:', error);
        return null;
    }
};
const apiHero = process.env.PUBLIC_HERO_CONTENT_DEFAULT as string
async function GetHero(){
    try {
        const response = await fetch(apiHero,{
            method:'GET',
            headers:{
                'Appication-Type':'application/json'
            }
        })
        if(response){
            const data = response.json()
            return data
        }
    } catch (error) {
        console.log(error)
        return null
    }
}
export{GetNavbar,GetHero}
