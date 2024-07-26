interface props{
    email:string
    name:string
    password:string
}




async function Submit(props:props):Promise<any>{


        try {
            const response  = await fetch('',{
                method:'POST',
                headers:{
                    'Application-Type':'application/json'
                },
                body:JSON.stringify({
                    email:props.email,
                    name:props.name,
                    password:props.password

                })
           
            })
            if(response){
                const data = await response.json()
                window.sessionStorage.setItem('userData',data)
                return data
            }
        } catch (error) {
            console.log(error)
            return null
        }


}
export{Submit}


