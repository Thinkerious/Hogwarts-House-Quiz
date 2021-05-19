let houses = {};

let houseNames= ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];

let houseValues = [
    "bravery, helping others, and chivalry", 
    "hard work, patience, loyalty, and fair play", 
    "intelligence, knowledge, planning ahead, and wit", 
    "ambition, cunningness, heritage, and resourcefulness"
];

let questions = [
    "Question 1 \nYou and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you: \na) Volunteer to fight \nb) Attempt to confuse the troll into letting all three of you pass without fighting \nc) Suggest drawing lots to decide which of you will fight\nd) Suggest that all three of you should fight (without telling the troll)",
    "Question 2 \nGiven the choice, would you rather invent a potion that would guarantee you: \na) glory\nb) wisdom \nc) love \nd) power",
    "Question 3 \nAfter you have died, what would you most like people to do when they hear your name?\na) Ask for more stories about your adventures \nb) I do not care what people think of me after I amdead; it is what they think of me while I am alive that counts \nc) Miss you, but smile \nd) Think with admiration of your achievements",
    "Question 4 \nWhich of the following do you find the most difficult to deal with? \na) boredom \nb) cold\nc) loneliness \nd) being ignored",
    "Question 5 \nWhich of the following would you most like to study? \na) ghosts \nb) centaurs \nc) vampires \nd) trolls",
    "Question 6 \nLate at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. Do you: \na) Draw your wand and stand your ground \nb) Withdraw into the shadows to await developments, while mentally reviewing the most appropriate defensive and offesnive spells, should trouble occur \nc) Proceed with caution, keeping one hand on your concealed wand and an eye out for any disturbance \nd) Draw your wand and try to find the source of the noise",
    "Question 7 \nYou enter an enchanted garden. What would you be most curious to examine first? \na)the bubbling pool, in the depths of which something luminous is swirling \nb) the statue of an old wizard with a strangely twinkling eye \nc) the fat red toadstools that appear to be talking to each other \nd) the silver leafed tree bearing golden apples",
    "Question 8 \nFour goblets are placed before you. Which would you choose to drink? \na) The gold liquid so bright that it hurts the eye, and which makes sunspots dance all around the room \nb) The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds \nc) The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums \nd) The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions",
    "Question 9 \nA Muggle confronts you and says that they are sure you are a witch or wizard. Do you:\na) Agree, and walk away leaving them to wonder whether you are bluffing \nb) Ask what makes them think so \nc) Tell them that you are worried about their mental health, and offer to call a doctor \nd) Agree, and ask whether they would like a free sample of a jinx",
    "Question 10 \nFour boxes are placed before you. Which would you try and open: \na) Theh small pewter box, unassuming and plain, with a scratched message upon it that reads: I open only for the worthy \nb) The gealming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin \nc) The small tortoise shell box, embellished with gold, inside which some small creature seems to be squeaking \nd) The ornate golden casket, standing on clawed feet, whoseinscription warns that both secret knowledge and unbearable temptation lie within"
];

let introText = [
    "Welcome to the Hogwarts House Quiz. In this Hogwarts House themed personality quiz, you will answer a series of 10 questions to figure out which house of Hogwarts you belong in. \nAre you ready to start? Type 'GO' to continue.",
    "Please take a moment to read the instructions on the left of the page. once you have done so, type 'START' to start the quiz."
];

houseNames.forEach((house, index) => {
    houses[house] = {
        name: house,
        points: 0,
        values: houseValues[index]
    }
})

askQuestion(introText[0]);

function askQuestion(question){
    let questionAnswer = prompt(question);
    if(questionAnswer == 'a'){
        houses["Gryffindor"].points++;
    } else if(questionAnswer == 'b'){
        houses["Ravenclaw"].points++;
    } else if (questionAnswer == 'c'){
        houses["Hufflepuff"].points++;
    } else if (questionAnswer == 'd'){
        houses["Slytherin"].points++;
    } else if (questionAnswer == 'GO'){
        askQuestion(introText[1]); 
    } else if (questionAnswer == 'START'){
        questions.forEach(element => askQuestion(element)); 
    } else{
        alert("ERROR: UNKNOWN RESPONSE. REPLY WITH THE GIVEN RESPONSE OPTIONS ONLY"); 
    }
}

sortUser();
houseSelections();

function sortUser(){
    if(houses["Gryffindor"].points > houses["Ravenclaw"].points && houses["Gryffindor"].points > houses["Hufflepuff"].points && houses["Gryffindor"].points > houses["Slytherin"].points){
        alert("You've been sorted into... GRYFFINDOR! Gryffindors value " + houses["Gryffindor"].values + ".");
    } else if(houses["Ravenclaw"].points > houses["Gryffindor"].points && houses["Ravenclaw"].points > houses["Hufflepuff"].points && houses["Ravenclaw"].points > houses["Slytherin"].points){
        alert("You've been sorted into... RAVENCLAW! Ravenclaws value " + houses["Ravenclaw"].values + ".");
    } else if(houses["Hufflepuff"].points > houses["Gryffindor"].points && houses["Hufflepuff"].points > houses["Ravenclaw"].points && houses["Hufflepuff"].points > houses["Slytherin"].points){
        alert("You've been sorted into... HUFFLEPUFF! Hufflepuffs value " + houses["Hufflepuff"].values + ".");
    } else if(houses["Slytherin"].points > houses["Gryffindor"].points && houses["Slytherin"].points > houses["Ravenclaw"].points && houses["Slytherin"].points > houses["Hufflepuff"].points){
        alert("You've been sorted into... SLYTHERIN! Slytherins value " + houses["Slytherin"].values + ".");
    } else{
        alert("Too difficult to decide...");
    }
}

function houseSelections(){
    for (let index = 0; index < houseNames.length; index++){
        const house = houseNames[index];
        alert("You had a " + (houses[house].points > 0 ? houses[house].points : "") + "0% chance of getting into " + houses[house].name + "!");
    }
}
