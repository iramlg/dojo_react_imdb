var x = {"a":1,"b":3,"c":3,"d":3,"e":2};
var y = [];
var rulesStrings = [];
var objx = Object.keys(x); // get the keys from formula

// map the keys and trow on y[] the ones "repeateds"
objx.map((item) => {
  	if (x[item] === 3) {
  		y.push(item);
  	} 
})

var repeatedsLength = y.length;

switch (repeatedsLength) {
    case 0:
    	// no "repeated" value, so only one rule possible, simple case here
		var newRule = [];

		objx.map((item) => {
			var stringName = item;
			if (x[item] === 2) {
				stringName = '!' + item;
			}
			newRule.push(stringName);
		})

		rulesStrings.push('(' + newRule.join('&') + ')')
        break;
    case 1:
    	// just one "repeated" value, simple iterator to write the 2 possible rules
    	y.map((repeated) => {
    		var values = [1, 2];
    		// map for current possible values
    		values.map((repeatedValue) => {
    			var newRule = [];
    			var x_ = x;
    			x_[repeated] = repeatedValue;

    			objx.map((item) => {
					let stringName = item;
					if (x[item] === 2) {
						stringName = '!' + item;
					}

					newRule.push(stringName);
				})

				rulesStrings.push('(' + newRule.join('&') + ')')
    		})
    		
    	})
        break;
    default:
    	// 2 or more "repeated" values, multi-level iterator needed for N rules
    	for (i = 0; i < repeatedsLength; i++) { 
    		// simple iterate in the first level
		    var values = [1, 2];
		    let x_ = _.clone(x);

    		values.map((repeatedValue) => {
    			x_[y[i]] = repeatedValue;
    			if (i > 0) {
    				let j = i;
    				// if its not the first level, should iterate back all the levels it already passed
    				while (j >= 0) {
    					values.map((repeatedValue) => {
    						let newRule = [];
    						x_[y[j]] = repeatedValue;

	    					objx.map((item) => {
								let stringName = item;
								if (x_[item] === 2) {
									stringName = '!' + item;
								}

								newRule.push(stringName);
							})
	    					// check if the rule already exists, them saves it
	    					if (!rulesStrings.includes('(' + newRule.join('&') + ')')) {
								rulesStrings.push('(' + newRule.join('&') + ')')
	    					}
    					});
					    j--;
					}
    			}

    		})
		}
}

console.log(rulesStrings);