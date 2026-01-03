import Layout from "../components/layout";
import Head from "next/head";
import { NOTION_TOKEN_ID, NOTION_DATABASE_ID } from "../config";

export default function Projects() {
    return (
        <>
            <Layout>
                <Head>
                    <title>김믿음 포트폴리오</title>
                    <meta name="description" content="김믿음 포트폴리오" />
                    <link rel="icon" href="/favicon.ico" />
                </Head> 
                <h1>프로젝트</h1>
            </Layout>
        </>
    );
}

// 빌드 타임에 호출
export async function getStaticProps() {
    const options = {
        method: "POST",
        headers: {
            Aceept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-type': 'application/json',
            Authorization: `Bearer ${NOTION_TOKEN_ID}`
        },
        body: JSON.stringify({page_size: 100}) 
    } 
    const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, options)
    const result = await response.json();
    console.log(result);
    return {
        props: {},
    };
}