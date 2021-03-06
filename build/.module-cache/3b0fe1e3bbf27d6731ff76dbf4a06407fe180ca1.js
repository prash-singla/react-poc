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
			console.log('fdafd', nextProps.products)
			this.state.products = nextProps.products;
			this.state.next = nextProps.next;
			console.log('ext ', this.state.next)
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
        					this._renderProducts(), 
        					 this.state.next !== null ?
					      	  React.createElement("div", null, 
					      	  	React.createElement("input", {type: "button", value: "Load More Products", onClick: this.props.loadMore}, " fdafdfdsf ")
					      	  ) : false
            		));
    }
});
