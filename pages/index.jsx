import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Header from '@/components/Header';
import Image from 'next/image';
import pic from '@/public/img/pic.jpg';
import { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaCanadianMapleLeaf } from 'react-icons/fa6';
import { FcAnswers } from 'react-icons/fc';
// import { IconContext } from '';

//api라우팅은 (서버요청 처리를 위해서는 express라는 프레임웍을 활용)
//next에서는 api폴더 안쪽에 서버쪽 요청 및 응답에 대한 라우팅 설정가능
//api폴더 안쪽의 파일명이 라우터 요청명으로 자동설정됨 /api/hello

export default function Home() {
	//서버쪽에서 프리랜더된 페이지를 가지고 온 후 이후에
	//클라이언트쪽에 다시 서버쪽 요청가능
	//next 자체적으로 서버쪽 요청, 응답처리

	useEffect(() => {
		//api 폴더 안쪽의 hello.js에 서버요청처리
		//fetch함수의 두번째 인수로 옵션값을 설정하지 핞으면 GET방식으로 전송요청
		//{methoc: 전송방식, body:전달값(문자값)}
		fetch('/api/hello', {
			method: 'POST',
			body: 'abc',
		})
			.then((res) => res.json())
			.then((json) => console.log(json.members));

		fetch('/api/hello')
			.then((res) => res.json())
			.then((json) => console.log(json));
	}, []);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<Header />
				<h1>Main</h1>

				{/* IconContext.Provider컴포넌트 임포트후 웹폰트 아이콘 활용한 부모요소에 wrapping해주면 해당 컴포넌트 안쪽에서는 context api를 이용해서 동일한 스타일을 전역으로 활용 가능 */}
				{/* <IconContext.Provider value={{ color: 'blue', className: 'global-class-name' }}> */}
				{/* 직접적으로 웹폰트아이콘에 커스텀 클래스명, 사이즈, 컬러값 지정가능 */}
				<FaCanadianMapleLeaf className='fontA' size='30' color='red' />
				<FcAnswers size='80' />
				{/* </IconContext.Provider> */}
				<div className={styles.pic}>
					<Image src={pic} alt='pic' fill quality={50} placeholder='blur' />
				</div>
				<div className={styles.pic}>
					<Image
						src='https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
						alt='pic'
						fill
						quality={50}
						priority
					/>
				</div>
			</main>
		</>
	);
}
