'use strict';

  /**
  * @ngdoc class
  * @name Mobiles
  *
  * @description
  * View for the Mobile page.
  */

var Mobiles = React.createClass({displayName: "Mobiles",

  /**
   * @ngdoc method
   * @name Mobiles#getInitialState
   *
   * @description
   * Initialise scope variable
   *
   * @returns {Object} State object of inital data
   */
	getInitialState: function() {
		return {
			folders: [],
			products: [],
			next: null
		}
	},

  /**
   * @ngdoc method
   * @name Mobiles#onTagSelect
   *
   * @description
   * On selecting/deselecting the filter push/pop the tag respetive tag in tags array.
   */
	onTagSelect: function (tag) {
		var index = this.state.tags.indexOf(tag);
		if(index<0) {
			this.state.tags.push(tag);
		} else {
			this.state.tags.splice(index, 1);
		}
	},

	filterItems: function(tags) {
		var selectedTags = tags.slice();
		selectedTags = selectedTags.length ? selectedTags : ['mobiles']
		for (var i in selectedTags) {
			selectedTags[i] = 'tags=' + selectedTags[i];
		}
		var queryString = selectedTags.join('&');
		queryString += '&facet=1'
	  var xhr = new XMLHttpRequest();
	  xhr.open('GET', 'http://localhost:3000/v1/search/?' + queryString);

	  xhr.onload = function () {
	    var response = xhr.responseText;
	    response = JSON.parse(response);
	    this.setState({
	      folders: response.folders,
	      products: response.products,
	      next: response.next,
	      total: response.total
	    })

	  }.bind(this);

	  xhr.onerror = function () {
	    console.log('There was an error!');
	  };

	  xhr.send();
	},

	/**
   * @ngdoc method
   * @name Mobiles#componentDidMount
   *
   * @description
   * Fetch the items once the component has been mounted.
   */
	componentDidMount: function () {
	  var xhr = new XMLHttpRequest();
	  xhr.open('GET', 'http://localhost:3000/v1/search/?tags=mobiles&facet=1');

	  xhr.onload = function () {
	    var response = xhr.responseText;
	    response = JSON.parse(response);
	    this.setState({
	      folders: response.folders,
	      products: response.products,
	      next: response.next,
	      total: response.total
	    });
	  }.bind(this);

	  xhr.onerror = function () {
	    console.log('There was an error!');
	  };

	  xhr.send();
	},

  /**
   * @ngdoc method
   * @name Mobiles#loadMore
   *
   * @description
   * Load more result items from the server and update the items array.
   */
	loadMore: function() {
	  var xhr = new XMLHttpRequest();
	  xhr.open('GET', 'http://localhost:3000/v1/search/?' + this.state.next);

	  xhr.onload = function () {
	    var response = xhr.responseText;
	    response = JSON.parse(response);
	    this.setState({
	      products: this.state.products.concat(response.products),
	      next: response.next
	    });
	  }.bind(this);

	  xhr.onerror = function () {
	    console.log('There was an error!');
	  };

	  xhr.send();
	},

  /**
   * @ngdoc method
   * @name Mobiles#render
   *
   * @description
   * Renders the mobile page comprised of Filter bar and result items.
   *
   * @returns HTML to be rendered.
   */
  render: function() {
    return (React.createElement("div", {className: "wrapper"}, 
    		React.createElement(FilterBar, {folders: this.state.folders, onFilterSelect: this.filterItems}), 
    		React.createElement(Body, {products: this.state.products, next: this.state.next, loadMore: this.loadMore, total: this.state.total}), 
    	React.createElement("div", {className: "clear-both"})));
  }
});
