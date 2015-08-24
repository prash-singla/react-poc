var Product = React.createClass({displayName: "Product",

	getInitialState: function(){
		return {
			product: this.props.product
		}
	},

	onFacetSelect: function (argument) {
			this.props.onFacetSelect(this.state.tag);
		},

  render: function() {
      return(React.createElement("label", {className: "facet", "data-tag": "brands:acer"}, 
              React.createElement("input", {type: "checkbox", onClick: this.onFacetSelect}), 
                React.createElement("a", {href: '/s/mobiles/' + this.state.title, title: this.state.title  + ' Phones'}, this.state), 
              React.createElement("span", {className: "count"}, '(' + this.state.count + ')')
          ));
  }
});
