var Facet = React.createClass({displayName: "Facet",


		getInitialState: function(){
			return {
				title: this.props.title,
				count: this.props.count
			}
		},

    render: function() {
        return(React.createElement("label", {className: "facet", "data-tag": "brands:acer"}, 

                      React.createElement("input", {type: "checkbox"}), 

                          React.createElement("a", {href: "/s/mobiles/acer/", title: this.state.title  + ' Phones'}, this.state), 

                      React.createElement("span", {className: "count"}, '(' + this.state.count + ')')
                  ))
    }
});
