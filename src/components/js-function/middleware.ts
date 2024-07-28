
function Middleware({route,params,done}:any) {
    const isAuthenticated = false;

    if(!isAuthenticated){
        window.location.href = '/sign-up'



        return
    }
    done()
}


export default Middleware