import { Button, Col, Popover, Row, Space } from "antd";
import { appContextType } from "@/app/types/generalTypes";

import { useContext, useState } from "react";
import { AppContext } from "@/app/contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";

const AppHeader = () => {
    const { cart, removeFromCart } = useContext(AppContext) as appContextType;
    const [showCart, setShowCart] = useState<boolean>(false);

    const popOverContent = (
        <>
            {cart.length === 0 ? (
                <span>Cart is empty</span>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <Space>
                                <span>{item.title}</span>
                                <FontAwesomeIcon icon={faXmark} color="#fc0303" style={{ cursor: "pointer" }} onClick={() => removeFromCart(item.id)} />
                            </Space>
                        </div>
                    ))}
                </>
            )}
        </>
    );
    return (
        <Row justify={"space-between"}>
            <Col span={2}>
                <h1 style={{ margin: 0 }}>Header</h1>
            </Col>
            <Col span={2}>
                <Popover content={popOverContent} title="Cart" trigger="click" open={showCart} onOpenChange={() => setShowCart(!showCart)}>
                    <Button type="primary" onClick={() => setShowCart(!showCart)}>
                        <Space>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>{cart.length}</span>
                        </Space>
                    </Button>
                </Popover>
            </Col>
        </Row>
    );
};

export default AppHeader;
