const mapComment = require('../helpers/mapComment');
const { isObjectIdOrHexString } = require("mongoose");


module.exports = function (post) {
	return {
		id: post.id,
		title: post.title,
		imageUrl: post.image,
		content: post.content,
		comments: post.comments.map((comment) => isObjectIdOrHexString(comment)
			? comment
			: mapComment(comment)),
		publishedAt: post.createdAt,
	};
}