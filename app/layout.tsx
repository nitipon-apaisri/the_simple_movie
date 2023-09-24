"use client";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "./globals.css";
import { Inter } from "next/font/google";
import { Layout } from "antd";
import React from "react";
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
    backgroundColor: "#fff",
    textAlign: "center",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <Layout style={layoutStyle}>
                        <Header style={headerStyle}>
                            <h1 style={{ margin: 0 }}>Header</h1>
                        </Header>
                        <Content>{children}</Content>
                        <Footer style={footerStyle}>
                            <h1 style={{ margin: 0 }}>Footer</h1>
                        </Footer>
                    </Layout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
