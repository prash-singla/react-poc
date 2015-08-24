var Body = React.createClass({displayName: "Body",

		getInitialState: function() {
			return {
				products: this.props.products
			}
		},

		consolemponentWillReceiveProps: function(nextProps) {

			console.log('receiveing props', nextProps.products)

			this.state.products = nextProps.products;
		},

		componentWillUpdate: function(nextProps, nextState) {
			this.state.products = nextProps.products;
			this.state.next = nextProps.next;
		},

		_renderProducts: function () {
			var products = [];
			this.state.products.forEach(function(product) {
				products.push(React.createElement(Product, {data: product}))
			}.bind(this));
			return products;
		},

    render: function() {
        return (React.createElement("div", null, 
        	React.createElement("div", {className: "filter-results", key: "search-result-products"}, 
  					React.createElement("div", {className: "result-row"}, 
  						this._renderProducts()
  					)
      		), 
      		 this.state.next ?
	      	  React.createElement("div", null, 
	      	  	React.createElement("input", {type: "button", value: "Load More Products", onClick: this.props.loadMore}, " fdafdfdsf ")
	      	  ) : false));
    }
});
