var ResultPage = React.createClass({displayName: "ResultPage",

		getInitialState: function() {
			return {
				products: this.props.products,
				total: this.props.total,
				pgNumber: 1
			}
		},

		componentWillReceiveProps: function(nextProps) {
			this.setState({products: nextProps.products, pgNumber: nextProps.pgNumber, total: nextProps.total});
		},

		_renderProducts: function () {
			var products = [];
			this.state.products.forEach(function(product) {
				products.push(React.createElement(Product, {data: product, key: product.id}))
			}.bind(this));
			return products;
		},

		_renderTopRight: function() {
			if(this.sate.pgNumber > 1) {
				return (
					React.createElement("select", {className: "sorter", onChange: this.onChange('sortSelect', 'sortBy'), value: this.state.sortBy, ref: "sortSelect"}, 
			      React.createElement("option", {value: "rating_count-desc"}, 
			        "Popularity High - Low"
			      ), 
			      React.createElement("option", {value: "biq_score-desc"}, 
			        "IQ Score High - Low"
			      ), 
			      React.createElement("option", {value: "min_price-desc"}, 
			        "Price High - Low"
			      ), 
			      React.createElement("option", {value: "min_price-asc"}, 
			        "Price Low - High"
			      ), 
			      React.createElement("option", {value: "avg_rating-desc"}, 
			        "Rating High - Low"
			      )
			    )
					);
			} else {
				return (React.createElement("span", null, "Page ", this.state.pgNumber))
			}
		},

    render: function() {
        return (
        	React.createElement("div", {className: "filter-results"}, 
					  React.createElement("div", {className: "filter-results-head clearfix"}, 
					  	this._renderTopRight(), 
					    
					    	this.state.products.length ?
						    React.createElement("div", {class: "meta"}, 
						      "Showing 1-", this.state.products.length, " of ", this.state.total, " Results"
						    ) : false
					    
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
