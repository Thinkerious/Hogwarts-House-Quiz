// house(s) = Gryffindor, Ravenclaw, Hufflepuff, Slytherin
// defines gryffindor, its name, and its points
let gryffindor = {
    name: "Gryffindor",
    points: 0
}

// defines ravenclaw, its name, and its points
let ravenclaw = {
    name: "Ravenclaw",
    points: 0
}

// defines hufflepuff, its name, and its points
let hufflepuff = {
    name: "Hufflepuff",
    points: 0
}

// defines slytherin, its name, and its points
let slytherin = {
    name: "Slytherin",
    points: 0
}

// this array contains
let introText = [
    "Welcome to the Hogwarts House Quiz. In this Hogwarts House themed personality quiz, you will answer a series of 10 questions to figure out which house of Hogwarts you belong in. \nAre you ready to start? Type 'GO' to continue.",
    "Please take a moment to read the instructions on the left of the page. once you have done so, type 'START' to start the quiz."
];

// this array contains all the questions to be asked to the user
let questions = [
    "Question 1 \nYou and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you: \na) Volunteer to fight \nb) Attempt to confuse the trollinto letting all three of you pass without fighting \nc) Suggest drawing lots to decide which of you will fight\nd) Suggest that all three of you should fight (without telling the troll)",
    "Question 2 \nGiven the choice, would you rather invent a potion that would guarantee you: \na) glory\nb) wisdom \nc) love \nd) power",
    "Question 3 \nAfter you have died, what would you most like people to do when they hear your name?\na) Ask for more stories about your adventures \nb) I do not care what people think of me after I amdead; it is what they think of me while I am alive that counts \nc) Miss you, but smile \nd) Think withadmiration of your achievements",
    "Question 4 \nWhich of the following do you find the most difficult to deal with? \na) boredom \nb) cold\nc) loneliness \nd) being ignored",
    "Question 5 \nWhich of the following would you most like to study? \na) ghosts \nb) centaurs \nc)vampires \nd) trolls",
    "Question 6 \nLate at night, walking alone down the street, you hear a peculiar cry that you believe tohave a magical source. Do you: \na) Draw your wand and stand your ground \nb) Withdraw into theshadows to await developments, while mentally reviewing the most appropriate defensive and offesnivespells, should trouble occur \nc) Proceed with caution, keeping one hand on your concealed wand and aneye out for any disturbance \nd) Draw your wand and try to find the source of the noise",
    "Question 7 \nYou enter an enchanted garden. What would you be most curious to examine first? \na)the bubbling pool, in the depths of which something luminous is swirling \nb) the statue of an old wizardwith a strangely twinkling eye \nc) the fat red toadstools that appear to be talking to each other \nd) thesilver leafed tree bearing golden apples",
    "Question 8 \nFour goblets are placed before you. Which would you choose to drink? \na) The goldliquid so bright that it hurts the eye, and which makes sunspots dance all around the room \nb) Thefoaming, frothing, silvery liquid that sparkles as though containing ground diamonds \nc) The smooth,thick, richly purple drink that gives off a delicious smell of chocolate and plums \nd) The mysterious blackliquid that gleams like ink, and gives off fumes that make you see strange visions",
    "Question 9 \nA Muggle confronts you and says that they are sure you are a witch or wizard. Do you:\na) Agree, and walk away leaving them to wonder whether you are bluffing \nb) Ask what makes themthink so \nc) Tell them that you are worried about their mental health, and offer to call a doctor \nd) Agree, and ask whether they would like a free sample of a jinx",
    "Question 10 \nFour boxes are placed before you. Which would you try and open: \na) Theh smallpewter box, unassuming and plain, with a scratched message upon it that reads: I open only for the worthy \nb) The gealming jet black box with a silver lock and key, marked with a mysterious rune that youknow to be the mark of Merlin \nc) The small tortoiseshell box, embellished with gold, inside which somesmall creature seems to be squeaking \nd) The ornate golden casket, standing on clawed feet, whoseinscription warns that both secret knowledge and unbearable temptation lie within"
];

askQuestion(introText[0]);

sortUser();
houseSelections();

// this function asks the question and updates the house.points object based off the user's answer to the prompt
function askQuestion(question){
    let questionAnswer = prompt(question);
    if(questionAnswer == 'a'){
        gryffindor.points++;
    } else if(questionAnswer == 'b'){
        ravenclaw.points++;
    } else if (questionAnswer == 'c'){
        hufflepuff.points++;
    } else if (questionAnswer == 'd'){
        slytherin.points++;
    } else if (questionAnswer == 'GO'){
        askQuestion(introText[1]);
    } else if (questionAnswer == 'START'){
        questions.forEach(element => askQuestion(element));  
    } else{
        alert("ERROR: UNKNOWN RESPONSE. REPLY WITH THE GIVEN RESPONSE OPTIONS ONLY");
        askQuestion(question);
    }
}

// this function sorts the user into their house
function sortUser(){
    if(gryffindor.points > ravenclaw.points && gryffindor.points > hufflepuff.points && gryffindor.points > slytherin.points){
        alert("You've been sorted into... GRYFFINDOR!");
    } else if(ravenclaw.points > gryffindor.points && ravenclaw.points > hufflepuff.points && ravenclaw.points > slytherin.points){
        alert("You've been sorted into... RAVENCLAW!");
    } else if(hufflepuff.points > gryffindor.points && hufflepuff.points > ravenclaw.points && hufflepuff.points > slytherin.points){
        alert("You've been sorted into... HUFFLEPUFF!");
    } else if(slytherin.points > gryffindor.points && slytherin.points > ravenclaw.points && slytherin.points > hufflepuff.points){
        alert("You've been sorted into... SLYTHERIN!");
    } else{
        alert("Too difficult to decide...");
    }
}

// this function tells the user the percent chance they had of being sorted into each house
function houseSelections(){
    let houses = [gryffindor, ravenclaw, hufflepuff, slytherin];
    for (let index = 0; index < houses.length; index++){
        const house = houses[index];
        alert("You had a " + (house.points > 0 ? house.points : "") + "0% chance of getting into " + house.name + "!");
    }
}
