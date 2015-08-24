var FilterBar = React.createClass({displayName: "FilterBar",


		getInitialState: function() {
			return {
				products: this.props.products
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
			// console.log('tags are ', this.state.tags)
			this.props.onFilterSelect(this.state.tags);
			this.setState();
		},

    render: function() {
        return (React.createElement("div", {className: "filter-tags"}, 
        					this._renderFolders()
            		));
    }
});
