var Product = React.createClass({displayName: "Product",

	getInitialState: function(){
		return {
			product: this.props.data
		}
	},

  render: function() {
  	var product = this.state.product;
  	if(!product) {
  		return false;
  	}
  	console.log('pr s ', product)
    return(React.createElement("div", {class: "filter-result"}, 
				    React.createElement("div", {class: "product-result"}, 
				        React.createElement("i", {class: "biqpoints points-vhigh filter-biq hidden-xs", title: "We love it!"}, React.createElement("span", null, product.biq_score)), 
				        React.createElement("div", {class: "result-img"}, 
				            React.createElement("a", {href: "/p/motorola-moto-e-43596/", title: "Motorola Moto E Price, Reviews and Specs"}, 
				                React.createElement("img", {src: "http://biqcdn.com.s3.amazonaws.com/s/www/img/blank.98213adbef4c.png", class: "", "data-srcset": "http://biqcdn.com.s3.amazonaws.com/m/img/p/p43596-pi330323-ci0-ui295790-s180x180.jpg", srcset: "http://biqcdn.com.s3.amazonaws.com/m/img/p/p43596-pi330323-ci0-ui295790-s180x180.jpg"})
				            ), 
				            React.createElement("div", {class: "clearfix"})
				        ), 
				        React.createElement("div", {class: "result-details"}, 
				            React.createElement("a", {class: "result-name", href: product.url, title: product.name + ' Price, Reviews and Specs'}, product.name), 
				            React.createElement("div", {class: "result-score"}, 
				                React.createElement("i", {class: "biqpoints points-vhigh filter-biq visible-xs-block"}, React.createElement("span", {style: "position:relative;"}, "95")), 
				                React.createElement("div", {class: "rating-3 home-review-rating hidden-xs"}, product.avg_rating), 
				                React.createElement("div", {class: "clearfix"}), 
				                React.createElement("div", {class: "result-votes hidden-xs"}, product.rating_count, " Votes")
				            ), 
				            React.createElement("div", {class: "result-price-block"}, 
				                React.createElement("div", null, "BEST PRICE ", React.createElement("span", {class: "result-price"}, product.min_price_str)), 
				                React.createElement("div", null, product.deal_count, " DEALS")
				            ), 
				            React.createElement("div", {class: "clearfix"}), 
				            React.createElement("div", {class: "result-keyfeatures"}, 
				                React.createElement("ul", null
				                )
				            ), 
				            React.createElement("div", {class: "clearfix"})
				        )
				    )
				)
				);
  }
});
