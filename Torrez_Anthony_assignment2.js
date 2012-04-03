// SDI Assignment Week 2
// Deliverable 2
// Student: Anthony Torrez
// Date: April 2nd, 2012

// A second look at volunteering to see if I can add to the story and rewrite 
// it using what I've learned.  First step, I've imported week 1's javascript 
// into week 2's js file.


var weekDay = "Friday"
	refugeStatus = "open"
	ref_messages = true
	cell_charged = 32
	full_charge = 100 - cell_charged
	myStatus = true
	
;

console.log("As I wake up in my nice warm bed, I am grateful for it's comfort.  But I know not everyone is")
console.log("so blessed.  This is why I volunteer at the Livermore Homeless Refuge doing night security.")
console.log("I am scheduled to volunteer on Tuesday nights but I also fill in if there are not enough")
console.log("volunteers for the Refuge to open.  So am I scheduled for tonight?  Well, today is ", weekDay);


	
if (weekDay === "Tuesday") {
	console.log("So I should check to see if the Refuge is open.");
	if (refugeStatus === "open") {
		console.log ("Well, it looks like the Refuge will be open tonight, so I should check to see if my", 
		"cellphone is charged.");
		if (cell_charged <= 70) {
			console.log("Hmm... The cellphone is ", cell_charged, "% charged.  It needs another ", full_charge, "% more to be fully charged. I'd better charge it.");
			} else {
			console.log("Good, the cellphone is ", cell_charged, "% charged.  That should enough to get through tonight.");
			};
	} else {
			console.log("Oh, good! I can relax, the Refuge will be closed tonight.");
	};
} else {
		console.log("I'm not scheduled but I should check my cellphone for any messages to see if the Refuge is looking for volunteers.");
		if (ref_messages === true) {
				console.log("Yes, there is a message, I should respond to it.");
					if (myStatus === true) {
						console.log("I will respond to the Refuge that I am available and then verify my cellphone is charged!");
						if (cell_charged <= 70) {
							console.log("Hmm... The cellphone is ", cell_charged, "% charged.  It needs another ", full_charge, "% more to be fully charged. I'd better charge it.");
						} else {
							console.log("Good, the cellphone is ", cell_charged, "% charged.  That should enough to get through tonight.");
					};
					} else {
						console.log("I have things to do tomorrow so I'm unable to volunteer tonight, I'll respond to the Refuge so they can find someone else.");
					};
			} else {
				console.log("Well, no messages so everything must be fine.  Great! I can relax and enjoy my day.");
		}
};

alert("JavaScript works!");