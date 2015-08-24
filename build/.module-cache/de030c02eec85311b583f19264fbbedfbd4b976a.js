var Facet = React.createClass({displayName: "Facet",

	getInitialState: function(){
		return {
			title: this.props.title,
			count: this.props.count,
			tag: this.props.tag
		}
	},

	onFacetSelect: function (argument) {
			this.props.onFacetSelect(this.state.tag);
	},

	componentWillReceiveProps: function (nextProps) {
	  this.setState({title: nextProps.title,count: nextProps.count,tag: nextProps.tag});
	},

  render: function() {
    return(React.createElement("label", {className: "facet", "data-tag": "brands:acer"}, 
            React.createElement("input", {type: "checkbox", onClick: this.onFacetSelect}), 
              React.createElement("a", {href: "", title: this.state.title  + ' Phones'}, this.state.title), 
            React.createElement("span", {className: "count"}, '(' + this.state.count + ')')
        ));
  }
});
