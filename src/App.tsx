import React from "react";
import "./main.global.css";

import { Content } from "./Content";
import { Header } from "./Header";
import { Layout } from "./Layout";

export function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Content>Содержимое html-тега main</Content>
      </Layout>
    </div>
  );
}
