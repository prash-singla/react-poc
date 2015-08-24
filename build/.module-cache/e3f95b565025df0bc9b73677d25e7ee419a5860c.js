var Body = React.createClass({displayName: "Body",


		getInitialState: function() {
			return {
				products: this.props.products
			}
		},

		_renderProducts: function () {
			var folders = [];
			this.props.products.forEach(function(product) {
				folders.push(React.createElement(Product, {data: product}))
			}.bind(this));
			return folders;
		},

    render: function() {
        return (React.createElement("div", {className: "", key: "search-result-products"}, 
        					this._renderProducts()
            		));
    }
});
