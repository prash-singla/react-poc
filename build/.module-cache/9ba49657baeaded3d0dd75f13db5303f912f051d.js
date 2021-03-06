var Body = React.createClass({displayName: "FilterBar",


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

		onTagSelect: function (tag) {
			var index = this.state.tags.indexOf(tag);
			if(index<0) {
				this.state.tags.push(tag);
			} else {
				this.state.tags.splice(index, 1);
			}
			// console.log('tags are ', this.state.tags)
			this.props.onFilterSelect(this.state.tags);
			this.setState();
		},

    render: function() {
        return (React.createElement("div", {className: "filter-tags"},
        					this._renderFolders()
            		));
    }
});
