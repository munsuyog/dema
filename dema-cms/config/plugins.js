module.exports = ({ env }) => ({
	// ...
	io: {
		enabled: true,
		config: {
			// This will listen for all supported events on the article content type
            contentTypes: ['api::Blog.comments', 'api::Blog.reactions', 'api::Blog.reactions.comments'],
		},
	},
	// ...
});