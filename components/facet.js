'use strict';

  /**
  * @class
  * @name Facet
  *
  * @description
  * View for the Mobile page.
  */

var Facet = React.createClass({

  /**
   * @method
   * @name Facet#getInitialState
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
   * @method
   * @name Facet#componentWillReceiveProps
   *
   * @description
   * Invoked when component receives new props.
   * Invoke component setState method with updated or new props.
   */
	componentWillReceiveProps: function (nextProps) {
	  this.setState({title: nextProps.title,count: nextProps.count,tag: nextProps.tag});
	},

	/**
   * @method
   * @name Facet#onFacetSelect
   *
   * @description
   * Invoked when the facet is selectd or deselected.
   * Invoke the props.onfacetselect callback with the tag of facet passed as arrument.
   */
	onFacetSelect: function (argument) {
			this.props.onFacetSelect(this.state.tag);
	},

	/**
   * @method
   * @name Facet#render
   *
   * @description
   * Renders the one filter criteria in folder.
   *
   * @returns HTML to be rendered.
   */
  render: function() {
    return(<label className="facet" data-tag="brands:acer">
            <input type="checkbox" onClick={this.onFacetSelect}></input>
              <a href="" title={this.state.title  + ' Phones'}>{this.state.title}</a>
            <span className="count">{'(' + this.state.count + ')'}</span>
        </label>);
  }
});