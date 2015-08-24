var Body = React.createClass({displayName: "Body",

		getInitialState: function() {
			return {
				products: this.props.products
			}
		},

		_renderProducts: function () {
			var products = [];
			this.state.products.forEach(function(product) {
				products.push(React.createElement(Product, {data: product}))
			}.bind(this));
			return products;
		},

    render: function() {
        return (React.createElement("div", {className: "filter-results", key: "search-result-products"}, 
        				"jkljkjkljl", 
        					this._renderProducts()
            		));
    }
});
