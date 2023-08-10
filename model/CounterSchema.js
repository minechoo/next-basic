import mongoose from 'mongoose';

//mongoose의 Schema생성자 함수로 글 저장 객체에 적용될 강제 틀 적용(스키마)
const counterSchema = new mongoose.Schema(
	{
		name: String,
		communityNum: Number,
	},
	{ collection: 'Counter' }
);

const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema);
export { Counter };
