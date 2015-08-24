var FilterBar = React.createClass({displayName: "FilterBar",


		getInitialState: function() {
			return {
				folders: this.props.folders
			}
		},

		_renderFolders: function () {
			var folders = [];
			this.props.folders.forEach(function(folder) {
				folders.push(React.createElement(Folder, {facets: folder.facets, name: folder.name, uri: folder.uri}))
			});
			return folders;
		},

    render: function() {
        return (React.createElement("div", {className: "filter-tags"}, 
        			this._renderFolders()
            ));
    }
});
