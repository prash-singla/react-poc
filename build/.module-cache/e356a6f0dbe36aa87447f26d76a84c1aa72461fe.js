var Mobiles = React.createClass({displayName: "Mobiles",

		getInitialState: function() {
			return {}
		},

		onTagSelect: function (tag) {
			var index = this.state.tags.indexOf(tag);
			if(index<0) {
				this.state.tags.push(tag);
			} else {
				this.state.tags.splice(index, 1);
			}
			console.log('tags ', this.state.tags);
		},

		componentDidMount: function () {
		  console.log('componentDidMount');

		  var xhr = createCORSRequest('GET', 'http://localhost:3000/v1/search/?tags=mobiles&facet=1');

		  xhr.onload = function () {
		    var response = xhr.responseText;
		    console.log(response);
		    response = JSON.parse(response);
		    this.setState({
		      folders: response.folders
		    });
		  }.bind(this);

		  xhr.onerror = function () {
		    console.log('There was an error!');
		  };

		  xhr.send();
		},

    render: function() {
      return (React.createElement("div", null, 
      		React.createElement(FilterBar, {folders: []})
      	));
    }
});
