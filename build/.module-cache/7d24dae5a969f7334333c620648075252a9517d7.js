var Body = React.createClass({displayName: "Body",

		getInitialState: function() {
			return {
				products: this.props.products,
				total: this.props.total,
				next: this.props.next,
				sortBy: 'popularity-desc'
			}
		},

		componentWillReceiveProps: function(nextProps) {
			this.setState({products: nextProps.products, next: nextProps.next, total: nextProps.total});
		},

		onSortSelect: function (val) {
		  this.setState({
		  	sortBy: val
		  });
		},

		sort: function() {

			var split = this.state.sortBy.split('-'),
				property = split[0];
				order = split[1];

				console.log(property, order);

			this.state.products.sort(function(a, b) {
				var result = 1;
				if(parseInt(a[property])){
					first = parseInt(a[property]);
					second = parseInt(b[property]);
				} else {
					first = a[property];
					second = b[property];
				}
				if(first < second) {
					result = 1;
				} else {
					result = -1;
				}

				if(order === 'asc') {
					result = result * -1;
				}
				return result;

			});
		},

		_renderResultPages: function () {
			var pages = [],
				products = this.state.products.slice(),
				lowerBound = 0,
				upperBound = 18,
				groups = Math.ceil(products.length/upperBound);

			for(var i = 1; i <= groups; i++) {
				pages.push(React.createElement(ResultPage, {products: products.splice(lowerBound, upperBound), pgNumber: i, total: this.state.total, sortBy: 'rating_count-desc', lowerBound: lowerBound*i + upperBound, sort: this.onSortSelect}));
			}

			return pages;
		},

    render: function() {
    		this.sort();
        return (
        	React.createElement("div", {className: "filter-results"}, 
					  this._renderResultPages(), 
					   this.state.next ?
				      React.createElement("div", null, 
				        React.createElement("input", {type: "button", value: "Load More Products", onClick: this.props.loadMore}, " fdafdfdsf ")
				      ) : false
					  
					)
      );
    }
});
