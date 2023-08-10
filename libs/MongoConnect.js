import mongoose from 'mongoose';
//몽고 DB접속 함수를 정의한 다음 export
export const connectMongoDB = async () => {
	//해당 함수 호출시 MongoDB 접속에 접속하면 접속성공객체를 promise형태로 반환값을 리턴
	if (mongoose.connection.readyState === 1) {
		return mongoose.connection.asPromise();
	}
	//위에서 성공 promise가 반환되면
	//동기적으로 몽고DB접속후 접속상태 리턴
	//해당함수를 MongoDB를 사용해야되는 페이지나 컴포넌트에 호출하면 MongoDB 접속가능
	//중요 접속 정보를 숨기기 위해서 로컬 환경변수파일에 몽고디비 접속 URL를 등록후 호출
	return await mongoose.connect(process.env.MONGO_URL);
};
