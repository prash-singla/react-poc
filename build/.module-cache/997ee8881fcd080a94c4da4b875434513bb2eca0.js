var Product = React.createClass({displayName: "Product",

	getInitialState: function(){
		return {
			product: this.props.data
		}
	},

	componentWillReceiveProps: function (nextProps) {

  console.log('rece')

  this.state.products = nextProps.products;

  this.setState();

},


  render: function() {
  	var product = this.state.product;
  	if(!product) {
  		return false;
  	}
    return(React.createElement("div", {className: "filter-result"}, 
				    React.createElement("div", {className: ""}, 
				        React.createElement("i", {class: "biqpoints points-vhigh filter-biq hidden-xs", title: "We love it!"}, React.createElement("span", null, product.biq_score)), 
				        React.createElement("div", {class: "result-img"}, 
				            React.createElement("a", {href: "/p/motorola-moto-e-43596/", title: "Motorola Moto E Price, Reviews and Specs"}, 
			                React.createElement("img", {src: product.images_o.xl, class: "", "data-srcset": "", srcset: ""})
				            )
				        ), 
				        React.createElement("div", {class: "result-details"}, 
				            React.createElement("a", {class: "result-name", href: product.url, title: product.name + ' Price, Reviews and Specs'}, product.name), 
				            React.createElement("div", {class: "result-score"}, 
				                React.createElement("i", {class: "biqpoints points-vhigh filter-biq visible-xs-block"}, React.createElement("span", null, "95")), 
				                React.createElement("div", {class: "rating-3 home-review-rating hidden-xs"}, product.avg_rating), 
				                React.createElement("div", {class: "result-votes hidden-xs"}, product.rating_count, " Votes")
				            ), 
				            React.createElement("div", {class: "result-price-block"}, 
				                React.createElement("div", null, "BEST PRICE ", React.createElement("span", {class: "result-price"}, product.min_price_str)), 
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
