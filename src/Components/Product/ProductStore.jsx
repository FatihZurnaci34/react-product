import axios from "axios"
import { makeAutoObservable, runInAction, toJS } from "mobx"

class ProductStore{
    products = []

    baseURL = "https://fakestoreapi.com/"

    constructor(){
        makeAutoObservable(this)
    }
    getProductList = async()=>{
        await axios.get(`${this.baseURL}products/`)
        .then((data)=>{
            runInAction(()=>{
                this.products = data.data
            })
        })
    }
    getProduct = async(id)=>{
        await axios.get(`${this.baseURL}products/${id}`)
        .then((data)=>{
            runInAction(()=>{
                this.products = data.data
                console.log(toJS(this.products));
            })
        })
    }
}

export const productStore = new ProductStore()