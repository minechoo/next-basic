import mongoose from 'mongoose';

//mongoose의 Schema생성자 함수로 글 저장 객체에 적용될 강제 틀 적용(스키마)
const communitySchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		communityNum: Number,
	},
	{ collection: 'Community' }
);

const Community = mongoose.model('Community', communitySchema);
export { Community };
