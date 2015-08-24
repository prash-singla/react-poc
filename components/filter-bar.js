'use strict';

  /**
  * @class
  * @name FilterBar
  *
  * @description
  * View for the Filter bar.
  */

var FilterBar = React.createClass({

  /**
   * @method
   * @name Body#getInitialState
   *
   * @description
   * Initialise state of the component.
   *
   * @returns {Object} State object of inital data
   */
	getInitialState: function() {
		return {
			folders: this.props.folders,
			tags: []
		}
	},

  /**
   * @method
   * @name FilterBar#componentWillReceiveProps
   *
   * @description
   * Invoked when component receives new props.
   * Invoke component setState method with updated or new props.
   */
	componentWillReceiveProps: function(nextProps) {
		this.setState({folders: nextProps.folders});
	},


	/**
   * @method
   * @name Body#onTagSelect
   *
   * @description
   * Handle the facet selection.
   * Push or pop the selection based on the action and invoke props.onfilterSelect callback.
   *
   * @returns HTML to be rendered.
   */
	onTagSelect: function (tag) {
		var index = this.state.tags.indexOf(tag);
		if(index<0) {
			this.state.tags.push(tag);
		} else {
			this.state.tags.splice(index, 1);
		}
		this.props.onFilterSelect(this.state.tags);
		this.setState();
	},

	/**
   * @method
   * @name Body#_renderFolders
   *
   * @description
   * Renders the folders inside the filter bars.
   *
   * @returns HTML to be rendered.
   */
	_renderFolders: function () {
		var folders = [];
		this.props.folders.forEach(function(folder) {
			folders.push(<Folder facets={folder.facets} name={folder.name} uri={folder.uri} onTagSelect={this.onTagSelect} key={folder.uri}/>)
		}.bind(this));
		return folders;
	},

	/**
   * @method
   * @name Body#render
   *
   * @description
   * Renders the left side filter bar.
   *
   * @returns HTML to be rendered.
   */
  render: function() {
    return (<div className="filter-tags">
    					{this._renderFolders()}
        		</div>);
  }
});
