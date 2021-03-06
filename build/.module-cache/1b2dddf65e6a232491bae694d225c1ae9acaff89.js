var Folder = React.createClass({displayName: "Folder",


		getInitialState: function (){
			return {
				facets: this.props.facets,
				name: this.props.name,
				uri: this.props.uri
			}
		},

		_renderFacets: function () {
			var facets = [];
			this.props.facets.forEach(function(facet) {
				facets.push(React.createElement(Facet, {title: facet.label, count: facet.count}))
			});
			return facets;
		},

    render: function() {
        return React.createElement("div", {className: "folder"}, 
                React.createElement("div", {className: "head"}, this.state.name), 
                React.createElement("div", {className: "facets"}, 
                	this._renderFacets()
                )
            )
    }
});
