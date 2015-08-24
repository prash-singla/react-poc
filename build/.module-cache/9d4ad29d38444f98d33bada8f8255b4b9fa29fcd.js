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
   * 	@ngdoc method
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

	onFacetSelect: function (argument) {
			this.props.onFacetSelect(this.state.tag);
	},

	componentWillReceiveProps: function (nextProps) {
	  this.setState({title: nextProps.title,count: nextProps.count,tag: nextProps.tag});
	},

	/**
   * @ngdoc method
   * @name Body#render
   *
   * @description
   * Renders the content of the page.
   * Its comprised of result pages.
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