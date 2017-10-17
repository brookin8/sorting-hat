Vue.component('houseInfo', {
	//The name of the prop does NOT have to the same as it's corresponding data element. It just has to be
	//the same as what's used in template. You just have to connect the two in v-bind. 
	template: '<div class="col-xs-4 listCol"><ul><li><span class="font-weight-bold text-uppercase">Values :</span> {{ values }}</li><li><span class="font-weight-bold text-uppercase">Founder :</span> {{ founder }}</li><li><span class="font-weight-bold text-uppercase">Mascot :</span> {{ mascot }}</li><li><span class="font-weight-bold text-uppercase">Colours :</span> {{ colours }}</li><li><span class="font-weight-bold text-uppercase">Element :</span> {{ element }}</li><li><span class="font-weight-bold text-uppercase">Famous Alumni :</span> {{ alumni }}</li></ul></div>',
	props : ['values','founder','mascot','colours','element','alumni']
})


var menu = new Vue ({
	
	el : '#app',
	
	data: {

		// houses: ['Gryffindor','Slytherin','Hufflepuff','Ravenclaw'],
		// chosenHouse : '',
		sortedHouse : '',
		sortedHouseIndex : 0,
		buttonClicked : 'no',
		questionNum : 0,
		currentQuestion : '',
		answersReceived : [],
		houses : [ 
			{
			values : 'Bravery, Daring, Chivalry',
			founder : 'Godric Gryffindor',
			mascot : 'Lion',
			colours : 'Scarlet and Gold',
			element : 'Fire',
			alumni : 'Albus Dumbledore, Harry Potter, and Celestina Warbeck'
			},
			{
			values : 'Intelligence, Knowledge, Wit',
			founder : 'Rowena Ravenclaw',
			mascot : 'Eagle',
			colours : 'Blue and Bronze',
			element : 'Air',
			alumni : 'Gilderoy Lockheart, Ignatia Wildsmith (inventor of floo powder), and Garrick Ollivander'
			},
			{
			values : 'Hard Work, Patience, Loyalty',
			founder : 'Helga Hufflepuff',
			mascot : 'Badger',
			colours : 'Yellow and Black',
			element : 'Earth',
			alumni : 'Hengist of Woodcroft (founder of Hogsmeade), Newt Scamander, and Artemisia Lufkin (first female minister for magic)'
			},
			{
			values : 'Ambition, Cunning and Resourcefulness',
			founder : 'Salazar Slytherin',
			mascot : 'Serpent',
			colours : 'Emerald Green and Silver',
			element : 'Water',
			alumni : 'Merlin, Tom Riddle, and Dolores Umbridge'
			}
		],
		questions : [
			{
				question: 'How do you feel about hair gel?',
				answers : [
				{
					letter : 's',
					text: 'Lots of it. Always.'
				},
				{
					letter : 'h',
					text: "I personally don't use it, but it's cool if you do!"
				},
				{
					letter : 'g',
					text: 'Gross.'
				},
				{
					letter : 'r',
					text: 'No opinion. Why would you ask that?'
				}
				]	
			},
			{
				question: 'Favorite superhero?',
				answers : [
				{
					letter : 'r',
					text: 'Tony Stark'
				},
				{
					letter : 'g',
					text: "Superman"
				},
				{
					letter : 's',
					text: 'Gordan Gecko'
				},
				{
					letter : 'h',
					text: "Alfred (Bruce Wayne's Butler)"
				}
				]	
			},
			{
				question: "Your team is down by 2, with 5 seconds to go in a basketball game. You have the ball. What do you do?",
				answers : [
				
				{
					letter : 's',
					text: "We wouldn't be down. I would have already paid the refs, and had my teammate Grayson Allen trip the other team's star player."
				},
				{
					letter : 'r',
					text: 'Go for an easy two pointer, and fight it out in overtime.'
				},
								{
					letter : 'h',
					text: "Pass the ball to our best shooter!"
				},
				{
					letter : 'g',
					text: "Take the three!"
				}
				]	
			},
			{
				question: 'How do you pass the time on a road trip?',
				answers : [
				{
					letter : 'r',
					text: "Many episodes of 'This American Life'."
				},
				{
					letter : 'g',
					text: "Listening to whatever's popular on the radio."
				},
				{
					letter : 's',
					text: "Plotting."
				},
				{
					letter : 'h',
					text: "Talking to my friends, or friendly strangers."
				}
				]	
			},
			{
				question: 'Are you a Weasley?',
				answers : [
				
				{
					letter : 'g',
					text: "How could you tell? Was it the red hair or the freckles?"
				},
				{
					letter : 'r',
					text: 'No.'
				},

				{
					letter : 's',
					text: 'Ew, no.'
				},
				{
					letter : 'h',
					text: "No, but great people!"
				}
				]	
			}
		]

	},

	// beforeMount : function() {
	// 	var houseNum = Math.round(Math.random()*3);
	// 	this.chosenHouse = this.houses[houseNum];
	// },

	methods: { 

		sortBegins : function() {
			this.buttonClicked = 'yes';
			console.log(this.questions[0].answers);
			this.currentQuestion = this.questions[0].question;
		},

		reset : function() {
			this.buttonClicked = 'yes';
			this.currentQuestion = this.questions[0].question;
			this.sortedHouse = '',
			this.questionNum = 0,
			this.answersReceived = []

		},

		finalSort : function() {

			var numG = 0;
			var numS = 0;
			var numH = 0;
			var numR = 0;

			for(var i=0;i<this.answersReceived.length;i++) {
				switch(this.answersReceived[i]) {
					case 'g' :
						numG += 1;
						break;
					case 'r' :
						numR += 1;
						break;
					case 'h' :
						numH += 1;
						break;
					case 's' :
						numS += 1;
						break;
				}	
			}

		if (numG > numS && numG > numH && numG > numR) {
			this.sortedHouse = 'Gryffindor';
			this.sortedHouseIndex = 0;
		} else if (numS >numG && numS > numH && numS > numR ) {
			this.sortedHouse = 'Slytherin';
			this.sortedHouseIndex = 3;
		} else if (numR >numG && numR > numH && numR > numS ) {
			this.sortedHouse = 'Ravenclaw';
			this.sortedHouseIndex = 1;
		} else {
			this.sortedHouse = 'Hufflepuff';
			this.sortedHouseIndex = 2;
		}

		console.log(this.sortedHouse);

		},

		sorting : function() {
			this.buttonClicked = 'sorting';
			var vm = this;

			setTimeout(function() { 
				vm.buttonClicked = 'sorted';
				vm.finalSort();

			}, 2000);

			
		},

		answerQuestion : function(index) {
			console.log(this.houses[0].Values);
		
			if(this.questionNum <=3) {	
				var answerStore = this.questions[this.questionNum].answers[index].letter;
				this.answersReceived.push(answerStore);
				console.log(this.answersReceived);
				this.questionNum += 1;
				this.currentQuestion = this.questions[this.questionNum].question;
			} else {
				var answerStore = this.questions[this.questionNum].answers[index].letter;
				this.answersReceived.push(answerStore);
				this.sorting()
			}

		}

	
	}

});