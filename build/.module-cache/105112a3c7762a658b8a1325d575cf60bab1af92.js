var Body = React.createClass({displayName: "Body",


		getInitialState: function() {
			return {
				products: this.props.products
			}
		},

		_renderProducts: function () {
			var products = [];
			this.props.products.forEach(function(product) {
				products.push(React.createElement(Product, {data: product}))
			}.bind(this));
			return products;
		},

    render: function() {
        return (React.createElement("div", {className: "", key: "search-result-products"}, 
        					this._renderProducts()
            		));
    }
});
