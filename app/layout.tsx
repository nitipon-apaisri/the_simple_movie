"use client";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "./globals.css";
import { Inter } from "next/font/google";
import { Col, Layout, Row } from "antd";
import React from "react";
import { AppProvider } from "./contexts/AppContext";

import Cart from "./components/Cart";
import AppHeader from "./components/header/AppHeader";
const { Header, Footer, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });
const headerStyle: React.CSSProperties = {
    backgroundColor: "#fff",
};
const layoutStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
};
const footerStyle: React.CSSProperties = {
    backgroundColor: "#FAFAFA",
    textAlign: "center",
};
const contentStyle: React.CSSProperties = {
    flex: "1 0 auto",
    padding: "50px",
    backgroundColor: "#fff",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <AppProvider>
                        <Layout style={layoutStyle}>
                            <Header style={headerStyle}>
                                <AppHeader />
                            </Header>
                            <Content style={contentStyle}>{children}</Content>
                            <Footer style={footerStyle}>
                                <h1 style={{ margin: 0 }}>Footer</h1>
                            </Footer>
                        </Layout>
                    </AppProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
