'use strict';

  /**
  * @class
  * @name Product
  *
  * @description
  * View for the Filter bar.
  */

var Product = React.createClass({

  /**
   * @method
   * @name Product#getInitialState
   *
   * @description
   * Initialise state of the component.
   *
   * @returns {Object} State object of inital data
   */
	getInitialState: function(){
		return {
			product: this.props.data
		}
	},

  /**
   * @method
   * @name Product#componentWillReceiveProps
   *
   * @description
   * Invoked when component receives new props.
   * Invoke component setState method with updated or new props.
   */
	componentWillReceiveProps: function (nextProps) {
	  this.setState({product: nextProps.data});
	},

		/**
   * @method
   * @name Product#render
   *
   * @description
   * Renders the one result item.
   *
   * @returns HTML to be rendered.
   */
  render: function() {
  	var product = this.state.product;
  	if(!product) {
  		return false;
  	}
    return(<div className="filter-result">
				    <div className="">
				        <i className="biqpoints points-vhigh filter-biq hidden-xs" title="We love it!"><span>{product.biq_score}</span></i>
				        <div className="result-img">
				            <a href="/p/motorola-moto-e-43596/" title="Motorola Moto E Price, Reviews and Specs">
			                <img src={product.images_o.xl} class="" data-srcset="" srcset=""/>
				            </a>
				        </div>
				        <div className="result-details">
				            <a className="result-name" href={product.url} title={product.name + ' Price, Reviews and Specs'}>{product.name}</a>
				            <div className="result-score">
				                <i className="biqpoints points-vhigh filter-biq visible-xs-block"><span>{product.biq_score}</span></i>
				                <div className="rating-3 home-review-rating hidden-xs">{product.avg_rating}</div>
				                <div className="result-votes hidden-xs">{product.rating_count} Votes</div>
				            </div>
				            <div className="result-price-block">
				                <div>BEST PRICE <span className="result-price">{product.min_price_str}</span></div>
				                <div>{product.deal_count} DEALS</div>
				            </div>
				            <div class="result-keyfeatures">
				                <ul>
				                </ul>
				            </div>
				        </div>
				    </div>
				</div>
				);
  }
});
