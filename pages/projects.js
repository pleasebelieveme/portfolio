import Layout from "../components/layout";
import Head from "next/head";
import { NOTION_TOKEN_ID, NOTION_DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item"

export default function Projects({projects}) {
    
    return (
        <>
            <Layout>
                <div className="flex flex-col items-center min-h-screen px-5 mb-10">
                    <Head>
                        <title>김믿음 포트폴리오</title>
                        <meta name="description" content="김믿음 포트폴리오" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head> 
                    <h1 className="text-4xl font-bold sm:text-6xl">
                        총 프로젝트 : 
                        <span className="pl-4 text-blue-500">{projects.results.length}</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
                        {projects.results.map((aProject)=>(
                            <ProjectItem key={aProject.id} data={aProject} />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
}

// 빌드 타임에 호출
export async function getStaticProps() {
    const options = {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-type': 'application/json',
            Authorization: `Bearer ${NOTION_TOKEN_ID}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "WorkPeriod",
                    "direction": "descending"
                }
            ],
            page_size: 100
        }) 
    } 
    const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, options)
    const projects = await response.json();
    
    return {
        props: {projects},
    };
}