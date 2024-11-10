import { createContext, useEffect, useState } from "react";
import {productData} from "../assets/assetsData";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const deliveryFee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId,size)=>{

        if(!size){
            toast.error('Please select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);
        if( cartData[itemId] ){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

    }

    const getCartCount = () => {
        let count = 0;
        for (const items in cartItems) {
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        count += cartItems[items][item];
                    }
                } catch(e){
                    
                }
            }
        }
        return count;
    }

    const updateQuantity = async (itemId,size,quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = productData.find(item => item._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch(e){
                    
                }
        }
    }
    return totalAmount;
}


    const value = {
        productData, currency, deliveryFee,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
    };
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;