'use strict';

  /**
  * @class
  * @name FilterBar
  *
  * @description
  * View for the Filter bar.
  */

var Product = React.createClass({displayName: "Product",

  /**
   * @method
   * @name Product#getInitialState
   *
   * @description
   * Initialise state of the component.
   *
   * @returns {Object} State object of inital data
   */
	getInitialState: function(){
		return {
			product: this.props.data
		}
	},

  /**
   * @method
   * @name Product#componentWillReceiveProps
   *
   * @description
   * Invoked when component receives new props.
   * Invoke component setState method with updated or new props.
   */
	componentWillReceiveProps: function (nextProps) {
	  this.setState({product: nextProps.data});
	},

		/**
   * @method
   * @name Product#render
   *
   * @description
   * Renders the one result item.
   *
   * @returns HTML to be rendered.
   */
  render: function() {
  	var product = this.state.product;
  	if(!product) {
  		return false;
  	}
    return(React.createElement("div", {className: "filter-result"}, 
				    React.createElement("div", {className: ""}, 
				        React.createElement("i", {className: "biqpoints points-vhigh filter-biq hidden-xs", title: "We love it!"}, React.createElement("span", null, product.biq_score)), 
				        React.createElement("div", {className: "result-img"}, 
				            React.createElement("a", {href: "/p/motorola-moto-e-43596/", title: "Motorola Moto E Price, Reviews and Specs"}, 
			                React.createElement("img", {src: product.images_o.xl, class: "", "data-srcset": "", srcset: ""})
				            )
				        ), 
				        React.createElement("div", {className: "result-details"}, 
				            React.createElement("a", {className: "result-name", href: product.url, title: product.name + ' Price, Reviews and Specs'}, product.name), 
				            React.createElement("div", {className: "result-score"}, 
				                React.createElement("i", {className: "biqpoints points-vhigh filter-biq visible-xs-block"}, React.createElement("span", null, product.biq_score)), 
				                React.createElement("div", {className: "rating-3 home-review-rating hidden-xs"}, product.avg_rating), 
				                React.createElement("div", {className: "result-votes hidden-xs"}, product.rating_count, " Votes")
				            ), 
				            React.createElement("div", {className: "result-price-block"}, 
				                React.createElement("div", null, "BEST PRICE ", React.createElement("span", {className: "result-price"}, product.min_price_str)), 
				                React.createElement("div", null, product.deal_count, " DEALS")
				            ), 
				            React.createElement("div", {class: "result-keyfeatures"}, 
				                React.createElement("ul", null
				                )
				            )
				        )
				    )
				)
				);
  }
});
