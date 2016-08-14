var ForumQuestion = React.createClass({
	displayName: "ForumQuestion",

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"What is React?"
			),
			React.createElement(
				"p",
				null,
				"I don't understand React and Flux. Can someone help me?"
			)
		);
	}
});