'use strict';

  /**
  * @ngdoc class
  * @name Body
  *
  * @description
  * View for the Mobile page.
  */

var Body = React.createClass({displayName: "Body",

  /**
   * 	@ngdoc method
   * @name Body#getInitialState
   *
   * @description
   * Initialise state of the component.
   *
   * @returns {Object} State object of inital data
   */
	getInitialState: function() {
		return {
			products: this.props.products,
			total: this.props.total,
			next: this.props.next,
			sortBy: 'popularity-desc'
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
	componentWillReceiveProps: function(nextProps) {
		this.setState({products: nextProps.products, next: nextProps.next, total: nextProps.total});
	},

	/**
   * @ngdoc method
   * @name Body#onSortSelect
   *
   * @description
   * Invoked when the sort selection  criteria is changed..
   * Invoke component setState method updaing the sortBy property of state object.
   */
	onSortSelect: function (val) {
	  this.setState({
	  	sortBy: val
	  });
	},

	/**
   * @ngdoc method
   * @name Body#sort
   *
   * @description
   * Sort the result items according to the criteria selected.
   */
	sort: function() {

		var split = this.state.sortBy.split('-'),
			property = split[0];
			order = split[1];

		this.state.products.sort(function(a, b) {
			var result = 1;
			if(parseInt(a[property])){
				first = parseInt(a[property]);
				second = parseInt(b[property]);
			} else {
				first = a[property];
				second = b[property];
			}
			if(first < second) {
				result = 1;
			} else {
				result = -1;
			}

			if(order === 'asc') {
				result = result * -1;
			}
			return result;

		});
	},

	/**
   * @ngdoc method
   * @name Body#_renderResultPages
   *
   * @description
   * Renders result pages containing the result items.
   *
   * @returns HTML to be rendered.
   */
	_renderResultPages: function () {
		var pages = [],
			products = this.state.products.slice(),
			lowerBound = 0,
			upperBound = 24,
			groups = Math.ceil(products.length/upperBound);

		for(var i = 1; i <= groups; i++) {
			pages.push(React.createElement(ResultPage, {products: products.splice(lowerBound, upperBound), pgNumber: i, total: this.state.total, sortBy: 'rating_count-desc', upperBound: upperBound, sort: this.onSortSelect}));
		}

		return pages;
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
  		this.sort();
      return (
      	React.createElement("div", {className: "filter-results"}, 
				  this._renderResultPages(), 
				   this.state.next ?
			      React.createElement("div", null, 
			        React.createElement("input", {type: "button", value: "Load More Products", onClick: this.props.loadMore})
			      ) : false
				  
				)
    );
  }
});
