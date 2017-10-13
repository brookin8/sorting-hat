var menu = new Vue ({
	
	el : '#app',
	
	data: {

		houses: ['Gryffindor','Slytherin','Hufflepuff','Ravenclaw'],
		chosenHouse : ''

	},

	beforeMount : function() {
		var houseNum = Math.round(Math.random()*3);
		this.chosenHouse = this.houses[houseNum];
	},

	methods: { 



	}

});