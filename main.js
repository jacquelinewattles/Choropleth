(function(){
	var boros = [
		{
			name: 'manhattan',
			population: 4500
		},
		{
			name: 'brooklyn',
			population: 1500
		},
		{
			name: 'queens',
			population: 2200,
		},
		{
			name: 'staten-island',
			population: 200
		},
		{
			name: 'bronx',
			population: 100,
		}
	];

	var colors = ['#eff3ff', '#bdd7e7', '#6baed6', '#2171b5'];

	boros.forEach(function (boro){
		var hex = getFillColor(boro.population);
		console.log(boro.name, hex);
		$('g[data-which="'+boro.name+'"] path').css('fill', hex);
	})

	function getFillColor(pop){
		var fill;
		if( pop > 4499 ){
		fill = colors[3]
		} else if ( pop > 1499 ){
		fill = colors[2]
		} else if ( pop > 2199 ){
		fill = colors[1]
		} else if ( pop > 199 ){
		fill = colors[1]
		} else if ( pop > 99 ){
		fill = colors[0]
		}
		return fill;
	}


	

}).call(this);