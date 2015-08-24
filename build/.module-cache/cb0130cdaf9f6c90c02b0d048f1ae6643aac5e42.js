'use strict';

  /**
  * @ngdoc class
  * @name Mobiles
  *
  * @description
  * View for the Mobile page.
  */
var Facet = React.createClass({displayName: "Facet",

  /**
   * @ngdoc method
   * @name Body#getInitialState
   *
   * @description
   * Initialise state of the component.
   *
   * @returns {Object} State object of inital data
   */
	getInitialState: function(){
		return {
			title: this.props.title,
			count: this.props.count,
			tag: this.props.tag
		}
	},

	/**
   * @ngdoc method
   * @name Body#componentWillReceiveProps
   *
   * @description
   * Invoked when component receives new props.
   * Invoke component setState method with updated or new props.
   */
	componentWillReceiveProps: function (nextProps) {
	  this.setState({title: nextProps.title,count: nextProps.count,tag: nextProps.tag});
	},

	/**
   * @ngdoc method
   * @name Body#onFacetSelect
   *
   * @description
   * Invoked when the facet is selectd or deselected.
   * Invoke the props.onfacetselect callback with the tag of facet passed as arrument.
   */
	onFacetSelect: function (argument) {
			this.props.onFacetSelect(this.state.tag);
	},

	/**
   * @ngdoc method
   * @name Body#render
   *
   * @description
   * Renders the one filter criteria in folder.
   *
   * @returns HTML to be rendered.
   */
  render: function() {
    return(React.createElement("label", {className: "facet", "data-tag": "brands:acer"}, 
            React.createElement("input", {type: "checkbox", onClick: this.onFacetSelect}), 
              React.createElement("a", {href: "", title: this.state.title  + ' Phones'}, this.state.title), 
            React.createElement("span", {className: "count"}, '(' + this.state.count + ')')
        ));
  }
});