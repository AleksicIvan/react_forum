//the parent component
var Forum = React.createClass({

    getInitialState: function() {

        return {
            allAnswers: {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and Flux are a tool and methodologies for building the front end of web applications.",
                    correct: false
                },
                "3": {
                    body: "React is synonym for respond.",
                    correct: false
                }
            }
        }

    },

    render: function() {

        return React.createElement(
            'div',
            //cemu null?
            null,
            //child Forum-a je ForumHeader iz fajla ForumHeader.react.js
            //this.state omogucuje data dalje svakom child 
            React.createElement(ForumHeader, { allAnswers: this.state.allAnswers })
        );
    }
});
