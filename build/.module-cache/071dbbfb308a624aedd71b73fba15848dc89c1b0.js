var Body = React.createClass({displayName: "Body",

		getInitialState: function() {
			return {
				products: this.props.products,
				next: this.props.next,
				sortBy: 'popularity-desc'
			}
		},

		componentWillReceiveProps: function(nextProps) {
			this.setState({products: nextProps.products, next: nextProps.next});
		},

		_renderProducts: function () {
			var products = [];
			this.state.products.forEach(function(product) {
				products.push(React.createElement(Product, {data: product}))
			}.bind(this));
			return products;
		},

		onChange: function() {

		},

		sort: function() {
			console.log('value is ', this.refs.sortSelect);
		},

    render: function() {
        return (
        	React.createElement("div", {className: "filter-results"}, 
					  React.createElement("div", {className: "filter-results-head clearfix"}, 
					    React.createElement("select", {class: "sorter", onChange: this.sort(), value: this.state.sortBy, ref: "sortSelect"}, 
					      React.createElement("option", {value: "sort:popularity-desc", selected: "selected"}, 
					        "Popularity High - Low"
					      ), 
					      React.createElement("option", {value: "sort:biq-score-desc"}, 
					        "IQ Score High - Low"
					      ), 
					      React.createElement("option", {value: "sort:price-desc"}, 
					        "Price High - Low"
					      ), 
					      React.createElement("option", {value: "sort:price-asc"}, 
					        "Price Low - High"
					      ), 
					      React.createElement("option", {value: "sort:rating-desc"}, 
					        "Rating High - Low"
					      )
					    ), 
					    React.createElement("div", {class: "meta"}, 
					      "Showing 1-24 of 5355 Results"
					    )
					  ), 
					  React.createElement("div", {className: "", key: "search-result-products"}, 
					    React.createElement("div", {className: "result-row"}, 
					      this._renderProducts()
					    )
					  ), 
					   this.state.next ?
					      React.createElement("div", null, 
					        React.createElement("input", {type: "button", value: "Load More Products", onClick: this.props.loadMore}, " fdafdfdsf ")
					      ) : false
					  
					)
      );
    }
});
