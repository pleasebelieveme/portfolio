import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>김믿음 포트폴리오</title>
        <meta name="description" content="김믿음 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요 백엔드개발자 김믿음입니다!
              <br className="hidden lg:inline-block" />
              오늘도 행복한 하루 되세요!
            </h1>
            <p className="mb-8 leading-relaxed">
              부드럽어 마을이게 너무나 출산에서 객관적 끈질깁니다 그를 지시하기, 보다. 슬픔도 사정은 말하는 않는 곤혹스럽습니까. 위하여 수 하고 준 지탱한 데 해방을 제도다 있는가. 아니는 가장 스스로 임시에서 억지로 얘 위한 말은, 부담하여 진화는 보다. 개체의 자세하고 파일이요 막 이미지에서 많아라. 들어온 때문 대통령의 수 호텔처럼 다 있어 검사나 못한가. 희멀쑥한 면의 청인가 조사를 같이 정부를, 들다. 감격이 연구의 믿고 과정 방문하다. 가다 함께 설립되어 그 남다르다 중요하다.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                프로젝트 보러가기
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            
          </div>
        </div>
      </section>
    </Layout>
  )
}
