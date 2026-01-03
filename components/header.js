import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg>
                            <span className="ml-3 text-xl">김믿음 포트폴리오</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">홈</a>
                        </Link>
                        <Link href="/projects">
                            <a className="mr-5 hover:text-gray-900">프로젝트</a>
                        </Link>
                        <a href="https://open.kakao.com/o/sbDxLt9h" className="mr-5 hover:text-gray-900">연락하기</a>
                    </nav>
                    {/* 다크모드 토글 버튼 작업 필요 */}
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    );
}