export default  {
    register : (data)=>{
        return fetch('http://localhost:9999/api/user/register', {
            body:JSON.stringify(data),
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            }
        })
        

        
    },

    login : (data)=>{
        return fetch('http://localhost:9999/api/user/login',{
            body:JSON.stringify(data),
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials:"include"

        })
    
    },

    logout : ()=>{
        return fetch('http://localhost:9999/api/user/logout',{
           
            method:'POST',
            credentials:"include"
        }).then(res=>res.text());
    
    },

   // update: (id,data) => {
   //     //console.log(data)
   //     return fetch('http://localhost:9999/api/?id=' + id, { //moje da ne e viarno
   //         body:JSON.stringify(data),
   //         method: 'PUT',
   //         headers: {
   //             'Content-type': 'application/json',
   //             'Accept': 'application/json',
   //         },
//
   //         credentials: 'include'
   //     })
//
   // },
}


