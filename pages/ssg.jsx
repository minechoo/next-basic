import SubLayout from '@/components/SubLayout';

function Ssg(props) {
	return (
		<SubLayout name={'SSG'}>
			<p>SSG방식 테스트 페이지입니다</p>
			<h1>{props.now}</h1>
		</SubLayout>
	);
}

export async function getStaticProps() {
	console.log('ssg');
	return {
		props: { now: performance.now() },
	};
}

export default Ssg;
/*
자주 바뀌지 않는 데이터
*/
