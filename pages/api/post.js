//안쪽에서 await 로 동기화 할 예정이므로 wraping함수를 async 지정
export default async function handler(req, res) {
	//await 로 동기화하므로 than,catch 문을 쓸 수 없으니 try catch문 예외처리
	try {
		//요청 성공시 실행할 구문
	} catch {
		//요청 실패시 실행할 구문
	}
}
