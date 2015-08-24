var Folder = React.createClass({displayName: "Folder",


		getInitialState: function (){
			return {
				facets: this.props.facets
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
                React.createElement("div", {className: "head"}, "Brands"), 
                React.createElement("div", {className: "facets"}, 
                	this._renderFacets()
                )
            )
    }
});
