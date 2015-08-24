var Mobiles = React.createClass({displayName: "Mobiles",

		getInitialState: function() {
			return {
				folders: []
			}
		},

		onTagSelect: function (tag) {
			var index = this.state.tags.indexOf(tag);
			if(index<0) {
				this.state.tags.push(tag);
			} else {
				this.state.tags.splice(index, 1);
			}
		},

		filterItems: function(tags) {
			var selectedTags = tags.splice(0, tags.length);
			console.log('tags are ', this.state.tags)
			var queryString = '';
			for (var i in selectedTags) {
				selectedTags[i] = 'tags=' + selectedTags[i];
			}
			queryString = selectedTags.join('&');
			console.log('queryString is ', queryString);
			return;
		  var xhr = new XMLHttpRequest();
		  xhr.open('GET', 'http://localhost:3000/v1/search/?tags=mobiles');

		  xhr.onload = function () {
		    var response = xhr.responseText;
		    response = JSON.parse(response);
		    this.setState({
		      folders: response.folders
		    });''
		  }.bind(this);

		  xhr.onerror = function () {
		    console.log('There was an error!');
		  };

		  xhr.send();
		},

		componentDidMount: function () {
		  var xhr = new XMLHttpRequest();
		  xhr.open('GET', 'http://localhost:3000/v1/search/?tags=mobiles&facet=1');

		  xhr.onload = function () {
		    var response = xhr.responseText;
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
      		React.createElement(FilterBar, {folders: this.state.folders, onFilterSelect: this.filterItems})
      	));
    }
});
