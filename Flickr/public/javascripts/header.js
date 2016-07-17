var headerBar = React.createClass({
	render : function(){
		
			return (
				<Button>
					{button.label}
				</Button>
			);
		});
		return(
			<div id="headerBar">
				{barButton}
			</div>
		);
	}
});

var Button = React.createClass({

	getInitialState: function() {
    	return  {
    		label:  ["flickr", Explore", "Create","Sign In","Signup"];
		};
  	},

  	handleMouseOver : function(name){
  		
  	},

  	handleClick : function(name){
  		
  	},

	render : function(){
		var barButton = this.props.label.map(function(name){
			if(name && name==="SignIn"){
				return(


				)
			}
			else{
				return(
				
				)
			}
		}

		return (
		);
	}

});




