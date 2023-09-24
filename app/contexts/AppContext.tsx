import { createContext, useEffect, useState } from "react";
import { appContextType, childrenType } from "../types/generalTypes";
import { movieType } from "../types/movieTypes";

const AppContext = createContext<appContextType | null>(null);
const AppProvider = ({ children }: childrenType) => {
    const [cart, setCart] = useState<movieType[]>([]);

    const addToCart = (product: movieType) => {
        setCart([...cart, product]);
        localStorage.setItem("cart", JSON.stringify([...cart, product]));
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter((item: movieType) => item.id !== id));
        localStorage.setItem("cart", JSON.stringify(cart.filter((item: movieType) => item.id !== id)));
    };

    useEffect(() => {
        if (localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart") as string));
        }
    }, []);
    return <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
