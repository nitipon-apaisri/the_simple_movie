"use client";
import { useState } from "react";
import { Button, Divider, Input, Space } from "antd";
import { Api } from "./services/api";
const Home = () => {
    const api = new Api();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const handleSearch = async () => {
        const results = await api.searchMovies(searchQuery);
        setSearchResults(results);
    };
    return (
        <>
            <h1>Search a movie</h1>
            <Space>
                <Input placeholder="Movie name" onChange={(e) => setSearchQuery(e.target.value)} />
                <Button type="primary" onClick={handleSearch}>
                    Search
                </Button>
            </Space>
            <Divider />
            <h1>Search results</h1>
        </>
    );
};

export default Home;
