'use strict';

  /**
  * @class
  * @name Facet
  *
  * @description
  * View for the Mobile page.
  */

var Folder = React.createClass({displayName: "Folder",

	  /**
   * 	@ngdoc method
   * @name Body#getInitialState
   *
   * @description
   * Initialise state of the component.
   *
   * @returns {Object} State object of inital data
   */
	getInitialState: function (){
		return {
			facets: this.props.facets,
			name: this.props.name,
			uri: this.props.uri
		}
	},

	onFacetSelect: function (tag) {
		this.props.onTagSelect(tag);
	},

	/**
   * @method
   * @name Body#_renderFacets
   *
   * @description
   * Renders the facets inside the filter group.
   *
   * @returns HTML to be rendered.
   */
	_renderFacets: function () {
		var facets = [];
		this.props.facets.forEach(function(facet) {
			facets.push(React.createElement(Facet, {title: facet.label, count: facet.count, onFacetSelect: this.onFacetSelect, tag: facet.tag, folder: facet.tag}))
		}.bind(this));
		return facets;
	},

	/**
   * @method
   * @name Body#render
   *
   * @description
   * Renders the one filter group in filter bar.
   *
   * @returns HTML to be rendered.
   */
  render: function() {
	  return (React.createElement("div", {className: "folder"}, 
		          React.createElement("div", {className: "head"}, this.state.name), 
		          React.createElement("div", {className: "facets"}, 
		          	this._renderFacets()
		          )
	      ));
  }
});
