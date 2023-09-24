"use client";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Divider, Input, Row, Space } from "antd";
import { Api } from "./services/api";
import { movieType } from "./types/movieTypes";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "./contexts/AppContext";
import { appContextType } from "./types/generalTypes";
const { Meta } = Card;
const Home = () => {
    const api = new Api();
    const imgUrl = "https://image.tmdb.org/t/p/original";
    const { cart, addToCart } = useContext(AppContext) as appContextType;
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<movieType[]>([]);

    const handleSearch = async () => {
        const results = await api.searchMovies(searchQuery);
        setSearchResults(results.results);
    };
    const handleAddToCart = (product: movieType) => {
        addToCart(product);
    };
    useEffect(() => {
        console.log(cart);
    }, [cart]);
    return (
        <>
            <h1>Search a movie</h1>
            <Space>
                <Input placeholder="Movie name" onChange={(e) => setSearchQuery(e.target.value)} onPressEnter={handleSearch} />
                <Button type="primary" onClick={handleSearch}>
                    Search
                </Button>
            </Space>
            <Divider />
            <h1>Search results</h1>
            {searchResults.length > 0 ? (
                <Row gutter={[16, 16]}>
                    {searchResults.map((movie) => (
                        <Col key={movie.id} span={4}>
                            <Card hoverable cover={<Image alt={movie.title} src={imgUrl + movie.poster_path} width={360} height={560} style={{ objectFit: "cover" }} />}>
                                <Meta title={movie.title} />
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "16px 0 0 0" }}>
                                    <span>Price: $15</span>
                                    <Button type="primary" onClick={() => handleAddToCart(movie)}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                "No results"
            )}
        </>
    );
};

export default Home;
