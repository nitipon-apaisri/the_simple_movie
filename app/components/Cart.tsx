import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Space } from "antd";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { appContextType } from "../types/generalTypes";

const Cart = () => {
    const { cart } = useContext(AppContext) as appContextType;
    return (
        <Button type="primary">
            <Space>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{cart.length}</span>
            </Space>
        </Button>
    );
};

export default Cart;
