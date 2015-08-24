'use strict';

  /**
  * @ngdoc class
  * @name ResultPage
  *
  * @description
  * View for the filter result pages.
  */
var ResultPage = React.createClass({displayName: "ResultPage",

  /**
   * @method
   * @name ResultPage#getInitialState
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
			pgNumber: this.props.pgNumber,
			sortBy: this.props.defaultSort,
			upperBound: this.props.upperBound
		}
	},

	/**
   * @method
   * @name ResultPage#componentWillReceiveProps
   *
   * @description
   * Invoked when component receives new props.
   * Invoke component setState method with updated or new props.
   *
   */
	componentWillReceiveProps: function(nextProps) {
		this.setState({products: nextProps.products, pgNumber: nextProps.pgNumber, total: nextProps.total});
	},

	/**
   * @method
   * @name ResultPage#onChange
   *
   * @description
   * Handle the value change of sort select.
   */
	onChange: function (ref, key) {
	  return (function () {
	    var val = this.refs[ref].getDOMNode().value;
	 		this.state[key] = val;
	 		this.setState();
	 		this.props.sort(val);
	  }.bind(this));
	},

	/**
   * @method
   * @name ResultPage#_renderProducts
   *
   * @description
   * Renders the products in the page.
   *
   * @returns HTML to be rendered.
   */
	_renderProducts: function () {
		var products = [];
		this.state.products.forEach(function(product) {
			products.push(React.createElement(Product, {data: product, key: product.id}))
		}.bind(this));
		return products;
	},

	/**
   * @method
   * @name ResultPage#_renderTopRight
   *
   * @description
   * Renders the top right section of the page, depending on wheteher the page is first
   * or any other.
   *
   * @returns HTML to be rendered.
   */
	_renderTopRight: function() {
		if(this.state.pgNumber == 1) {
			return (
				React.createElement("div", {className: "filter-results-head right"}, 
				React.createElement("select", {onChange: this.onChange('sortSelect', 'sortBy'), value: this.state.sortBy, ref: "sortSelect"}, 
		      React.createElement("option", {value: "rating_count-desc"}, 
		        "Popularity High - Low"
		      ), 
		      React.createElement("option", {value: "biq_score-desc"}, 
		        "IQ Score High - Low"
		      ), 
		      React.createElement("option", {value: "min_price-desc"}, 
		        "Price High - Low"
		      ), 
		      React.createElement("option", {value: "min_price-asc"}, 
		        "Price Low - High"
		      ), 
		      React.createElement("option", {value: "avg_rating-desc"}, 
		        "Rating High - Low"
		      )
		    ))
				);
		} else {
			return (React.createElement("span", {className: "filter-results-head right"}, "Page ", this.state.pgNumber))
		}
	},

	/**
   * @method
   * @name ResultPage#render
   *
   * @description
   * Renders the list of filtered items page wise.
   *
   * @returns HTML to be rendered.
   */
  render: function() {
    return (
      	React.createElement("div", {className: ""}, 
				  React.createElement("div", {className: "filter-results-head clearfix"}, 
				    
				    	this.state.products.length ?
					    React.createElement("div", {className: "meta"}, 
					      "Showing ", this.state.upperBound * this.state.pgNumber - this.state.upperBound + 1, "-", (this.state.pgNumber -1) * this.state.upperBound + this.state.products.length, " of ", this.state.total, " Results"
					    ) : false, 
				    
				  	this._renderTopRight()

				  ), 
				  React.createElement("div", {className: "", key: "search-result-products"}, 
				    React.createElement("div", {className: "result-row"}, 
				      this._renderProducts()
				    )
				  ), 
				   this.state.next ?
				      React.createElement("div", null, 
				        React.createElement("input", {type: "button", value: "Load More Products", onClick: this.props.loadMore}, " fdafdfdsf ")
				      ) : false, 
				  
				  React.createElement("div", {className: "clear-both"})
				)
    );
  }
});
