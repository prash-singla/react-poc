var FilterBar = React.createClass({displayName: "FilterBar",


		getInitialState: function() {
			return {
				folders: this.props.folders,
				tags: []
			}
		},

		_renderFolders: function () {
			var folders = [];
			this.props.folders.forEach(function(folder) {
				folders.push(React.createElement(Folder, {facets: folder.facets, name: folder.name, uri: folder.uri, onTagSelect: this.onTagSelect, key: folder.uri}))
			}.bind(this));
			return folders;
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

		componentDidMount: function() {


	console.log('componentDidMount');

			var xhr = createCORSRequest('GET', 'http://localhost:3000/v1/search/?tags=mobiles&facet=1');

			xhr.onload = function() {
			  var response = xhr.responseText;
			  console.log(response);
			  response = JSON.parse(response);
			  this.setState({
			  	folders: response.folders
			  });
			}.bind(this);

			xhr.onerror = function() {
			  console.log('There was an error!');
			};

			xhr.send();
		},

    render: function() {
        return (React.createElement("div", {className: "filter-tags"},
        					this._renderFolders()
            		));
    }
});


function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url, true);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}