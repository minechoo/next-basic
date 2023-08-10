import { connectMongoDB } from '@/libs/MongoConnect';
//안쪽에서 await 로 동기화 할 예정이므로 wraping함수를 async 지정
export default async function handler(req, res) {
	//await 로 동기화하므로 than,catch 문을 쓸 수 없으니 try catch문 예외처리
	try {
		//요청 성공시 실행할 구문
		const DB = await connectMongoDB();
		res.status(200).send('success');
		console.log(DB);
	} catch (err) {
		//요청 실패시 실행할 구문
		res.status(400).send(err);
	}
}

//데이터 저장 작업 순서
//1. 저장할 데이터의 구조에 맞게 스키마 생성
//2. api라우터에서 스키마 적용된 모델객체에 클라이언트로부터 전달받은 데이터를 바인딩후 DB에 저장한뒤, 응답성공 클라이언트로 전송
//2-1 : 클라이언트에서 포스트 요청 받음
//2-2 : 카운터모델에서 communityNum 가져온뒤 클라이언트로부터 전달받은 객체와 결합
//2-3 : 결합된 객체를 Post모델로 저장
//2-4 : 저장이 완료되면 다시 Counter값을 1증가
