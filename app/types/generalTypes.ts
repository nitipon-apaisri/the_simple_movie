import { movieType } from "./movieTypes";

type childrenType = { children: React.ReactNode };
interface appContextType {
    cart: movieType[];
    addToCart: (item: movieType) => void;
    removeFromCart: (id: number) => void;
}
export type { childrenType, appContextType };
