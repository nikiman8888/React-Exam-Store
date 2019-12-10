
export default {
    getAll: () => {
        return fetch('http://localhost:9999/api/product/', {

            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },

            credentials: 'include'
        })
    },

    getOne: (id) => {
        //console.log(id);
        return fetch('http://localhost:9999/api/product/details?id=' + id, {

            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },

            credentials: 'include'
        })
    },

    getMy: () => {
        return fetch('http://localhost:9999/api/product/my-products', {

            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },

            credentials: 'include'
        })
    },

    post: (data) => {

        return fetch('http://localhost:9999/api/product', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'

        }).then(res => res.json)
    },

    updateSell: (id,updatedProduct) => {
        return fetch('http://localhost:9999/api/product/details?id=' + id, {
            body:JSON.stringify(updatedProduct),
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },

            credentials: 'include'
        })

    },

    update: (id,data) => {
        //console.log(data)
        return fetch('http://localhost:9999/api/product/update?id=' + id, {
            body:JSON.stringify(data),
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },

            credentials: 'include'
        })

    },
    
    delete: (id) => {
        return fetch('http://localhost:9999/api/product/delete?id=' + id, {          
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },

            credentials: 'include'
        })
    }
}
