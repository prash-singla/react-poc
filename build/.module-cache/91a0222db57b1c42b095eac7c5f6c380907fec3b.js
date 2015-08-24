var Body = React.createClass({displayName: "Body",

		getInitialState: function() {
			return {
				products: this.props.products
			}
		},

		consolemponentWillReceiveProps: function(nextProps) {
			this.state.products = nextProps.products;
			console.log('nea ', nextProps	)
		},

		componentWillUpdate: function(nextProps, nextState) {
			console.log('fdafd')
		},

		_renderProducts: function () {
			console.log(this.state.products.length);
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
