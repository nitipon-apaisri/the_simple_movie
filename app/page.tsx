"use client";
import { useState } from "react";
import { Button, Card, Col, Divider, Input, Row, Space } from "antd";
import { Api } from "./services/api";
import { movieType } from "./types/movieTypes";
import Image from "next/image";
const { Meta } = Card;
const Home = () => {
    const api = new Api();
    const imgUrl = "https://image.tmdb.org/t/p/original";
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<movieType[]>([]);

    const handleSearch = async () => {
        const results = await api.searchMovies(searchQuery);
        setSearchResults(results.results);
    };

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
                            <Card hoverable cover={<Image alt={movie.title} src={imgUrl + movie.poster_path} width={360} height={360} style={{ objectFit: "cover" }} />}>
                                <Meta title={movie.title} />
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
