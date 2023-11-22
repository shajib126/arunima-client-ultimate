import { create } from 'zustand'
import axios from 'axios'

const api = "arunima-server-ultimate.onrender.com"
axios.defaults.baseURL = api
export const useStore = create((set) => ({
 user:{},
 me:{},
 carts:[],
 categories:null,
 products:null,
 product:{},
 sslUrl:"",
 test:null,

  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  testApi:async()=>{
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        set({test:data})
    } catch (error) {
        
    }
  },
  signUpUser:async(name,email,password,avatar)=>{
    try {
        const userData = await axios.post(`https://arunima-server-ultimate.onrender.com/user/signup`,{name,email,password,avatar})
        
        set({user:userData.data})
        localStorage.setItem('token',userData.data.token)
    } catch (error) {
        set({user:error});
    }
   
  },
  signInUser:async(email,password)=>{
    console.log(email,password);
    try {
        const userData = await axios.post(`https://arunima-server-ultimate.onrender.com/user/signin`,{email,password})
        
        set({user:userData.data})
        localStorage.setItem('token',userData.data.token)
    } catch (error) {
       alert(error.message);
    }
  },
  getUser:async()=>{
    try {
        const userData = await axios.get(`https://arunima-server-ultimate.onrender.com/user/me`,{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        set({me:userData.data})
        console.log(userData);
    } catch (error) {
        set({me:userData})
    }
   
    
  },
  createCategory:async(name)=>{
    try {
        await axios.post(`https://arunima-server-ultimate.onrender.com/category/create`,{name})
        alert('Category created')
    } catch (error) {
        console.log(error);
    }
  },
  allCategories:async()=>{
    try {
        const category = await axios.get(`https://arunima-server-ultimate.onrender.com/category`);
      
       
        set({categories:category.data.categories})
        

    } catch (error) {
        console.log(error);
    }
  },

  addToCart:async({product,productCount})=>{
    console.log(product);
    try {
        const cartData = await axios.post(`https://arunima-server-ultimate.onrender.com/cart/create`,{product,productCount},{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        alert(`${cartData.data} added to the cart`)
    } catch (error) {
        console.log(error);
    }
  },
  removeCart:async(cartId)=>{
    
    try {
        const cart = await axios.delete(`https://arunima-server-ultimate.onrender.com/cart/${cartId}`,{
            headers:{
                token:localStorage.getItem('token')
            }
        }) 
       alert(cart.data.message);   
    } catch (error) {
        
    }
  },

  allCart:async()=>{
    try {
        const cartData = await axios.get(`https://arunima-server-ultimate.onrender.com/cart`,{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        set({carts:cartData.data.carts});
    } catch (error) {
       console.log(error);
    }
  },
  allProduct:async()=>{
    try {
        const productData =await axios.get(`https://arunima-server-ultimate.onrender.com/product`)
        set({products:productData.data.products})
       
    } catch (error) {
        console.log(error);
    }
  },
  productById:async(id)=>{
    
    try {
        const productData = await axios.get(`https://arunima-server-ultimate.onrender.com/product/${id}`)
        set({product:productData.data.product})
       
    } catch (error) {
        console.log(error);
    }
  },

  createOrder:async({carts,total},shippingInfo)=>{
  console.log(carts,shippingInfo,total);
    try {
        const order = await axios.post(`https://arunima-server-ultimate.onrender.com/order`,{carts,total,shippingInfo},{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        set({sslUrl:order.data.url})
        console.log(sslUrl);
    } catch (error) {
        console.log(error);
    }
  }

}))