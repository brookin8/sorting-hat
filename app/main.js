var menu = new Vue ({
	
	el : '#app',
	
	data: {

		// houses: ['Gryffindor','Slytherin','Hufflepuff','Ravenclaw'],
		// chosenHouse : '',
		sortedHouse : '',
		buttonClicked : 'no',
		questionNum : 0,
		currentQuestion : '',
		answersReceived : [],
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
					text: "I personally don't like it, but it's cool if people use it."
				},
				{
					letter : 'g',
					text: 'Gross.'
				},
				{
					letter : 'r',
					text: 'No opinion. Although how do you feel about asking dumb questions?'
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
				question: "It's down to the last 5 seconds in a basketball game. Your team's down by 2, and you have the ball. What do you do?",
				answers : [
				
				{
					letter : 's',
					text: "We wouldn't be down by 2. I would have already paid the refs and ensured the other team's best player was out."
				},
				{
					letter : 'r',
					text: 'Go for an easy two pointer, and fight it out in overtime'
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
					text: "Many episodes of 'This American Life' or 'Hardcore History'"
				},
				{
					letter : 'g',
					text: "Listening to whatever's popular on the radio"
				},
				{
					letter : 's',
					text: "Plotting"
				},
				{
					letter : 'h',
					text: "Talking to my friends, or friendly strangers"
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
		} else if (numS >numG && numS > numH && numS > numR ) {
			this.sortedHouse = 'Slytherin';
		} else if (numR >numG && numR > numH && numR > numS ) {
			this.sortedHouse = 'Ravenclaw';
		} else {
			this.sortedHouse = 'Hufflepuff';
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