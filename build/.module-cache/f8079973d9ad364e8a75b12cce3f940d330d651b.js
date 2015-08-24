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
				folders.push(React.createElement(Folder, {facets: folder.facets, name: folder.name, uri: folder.uri, onTagSelect: this.onTagSelect}))
			}.bind(this));
			return folders;
		},

		onTagSelect: function (tag) {
			this.state.push(tag);
			console.log('tag is ', tag);
		},

    render: function() {
        return (React.createElement("div", {className: "filter-tags"}, 
        			this._renderFolders()
            ));
    }
});
