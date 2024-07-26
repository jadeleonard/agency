const apiNavbar = process.env.API_PUBLIC_NAVBAR_CONTENT;
interface props{
    links:string
    list:string
}

const GetNavbar = async ():Promise<props[] | null>=> {
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

export default GetNavbar;
