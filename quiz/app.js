const startButton = document.getElementById('level1-btn');

const startContainer = document.getElementById("start");
const questionContainerElement = document.getElementById("quiz");
startButton.addEventListener('click', startGame);


function startGame () { 
    startContainer.classList.add('hide');
    questionContainerElement.classList.remove('hide'); 
    endButton.classList.add('hide');
    populate();
}
function populate() {
    if(quiz.isEnded()) {
        // show score
        showScores(); 
    }
    else{
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
         var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i<choices.length; i++) {
            var element = document.getElementById("choice" + i);
           element.innerHTML = choices[i];
           guess("btn" + i, choices[i]);
       }

       showProgress();

    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }

}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores:" + quiz.score + "</h2>";
    
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
   
}


var questions = [
    new Question("What is the default skin and what name does it have?", ["Alex","Lily","Doge","Steve"], "Steve"),
    // new Question("What are the main hostile mobs in Minecraft?", ["Spiders, Creepers, Enderman, Skeletons and Zombies","Wither, and Ghasts","Blazes,wither skeletons,ghasts, and pigmen ","None of the above"], "Spiders,Creepers,Enderman.Skeletons, and Zombies"),
    // new Question("Who created Minecraft?", ["Jerry","Jeb","Notch","Herobrine"], "Notch"),
    // new Question("What are the four mobs you can tame in Minecraft?", ["Wolves,Cats,Horses,and Foxes","Blazes,wither skeletons,ghasts, and pigmen ","Blazes,wither skeletons,ghasts, and pigmen ","Villagers, Iron Golems,Enderman, and Wither Skeletons"], "Wolves,Cats,Horses,and Foxes"),
    // new Question("What is minecraft about?", ["A game filled with magic","Sandbox Game","A game with a world made of blocks","None of the above"], "Sandbox Game"),
    // new Question("How do you make a large chest?", ["Put two chests next to each other","You can't","Put four chests next to each other","Put sixty-four chests together"], "Put two chests next to each other"),
    // new Question("<a href='https://www.youtube.com/watch?v=8EtcDOYsx8E' target='_blank'>Check it.</a> what do you need to make a water elevator?",["Gunpowder,Tnt,and sand"," Magma Block,Soul sand, and glass", "Lava,Sugar,and Obsidian", "None of the above"], "None of the above"),
    // new Question("Who inspired <a href='https://www.youtube.com/watch?v=RIbvV4bFTl4&t=25s' target='_blank'>this video</a>", ["stampylonghead","IBallisticSquid"],"stampylonghead"),
    // new Question("<a href='https://www.youtube.com/watch?v=YXO1iFOsDxQ' target='_blank'>Check it.</a> what do you need to make a Horse Stable?", ["Cauldrin, Water, and fences","Cauldrin,Lava,and Wood","Ice, Water, and Torches","None of the above"],"None of the above"),
    // new Question("<a href='https://www.youtube.com/watch?v=UAxHvTHaiV4' target='_blank'>Check it.</a> what do you need to make a House by a cobblestone generator?", ["Pistons,Lava,Water,and Redstone","Dirt,Sand,Gravel, and Oak logs","Nether bricks,Oak planks, and Lava","None of the above"],"Pistons,Lava,Water,and Redstone"),
    // new Question("<a href='https://youtu.be/ghi9s2wVR7w' target='_blank'>Check it.</a> tell what do you need to make a mailbox? ", ["Oak fence, Trapdoors, and Chest","Shulker Boxes and Oak wood","Iron ore and Sand","Carrot, Potatoes, and Dirt"],"Oak fence, Trapdoors, and Chest" ),
    // new Question("Which Minecraft character is well-known to be scary?", ["Slenderman","Slenderman","Herobrine","None of the above"], "Herobrine"),
    // new Question("True or False? Is minecraft only singleplayer?", ["True","False","Probably","Don't know"], "False"),
    // new Question("Which block you must have to survive?", ["Quartz","Wool ","Wood","None of the above"], "Wood"),
    // new Question("How does minecraft end?", ["When you kill the ender-dragon","When you get 1,000 xp levels","when you fall into void","There is no end to it"], "There is no end to it"),
    // new Question("What are the main tools in Minecraft?", ["Fists","your brain","bow and arrows","Pickaxes, Shovels,Swords, and Axes"], "Pickaxes, Shovels,Swords, and Axes"),
    // new Question("What dimension does the Enderman come from?", ["Nether","Overworld","End","None of the above"], "End"),
    // new Question("How many blocks of Iron/gold ore does it take to make an iron ignot?",["100"," 12", "4", "1"], "1"),
    // new Question("<a href='https://youtu.be/d80TLW5zlHw' target='_blank'>check it.</a> what do you need to make a dog house?", ["Concrete(Dog Collar Color), Oak Wood Planks and Oak Log","Obsidian,Sand,and Dirt", "water , lava , and cobblestone","None of the above"],"Concrete(Dog Collar Color), Oak Wood Planks, and Oak Log"),
    // new Question("<a href='https://www.youtube.com/watch?v=ZH9tgkpZn0Y' target='_blank'>Check it.</a> what do you need to make a armor dispenser?", ["Droppers, Pistons, and Pressure plates","Any Kind of block, Dispensers, Buttons, redstone and armor","Obsidian,Armor,Swords, and Lime wool","Armor stands,Green concrete,glass, and levers"],"Any Kind of block, Dispensers,Buttons,redstone,and armor"),
    // new Question("<a href=' https://www.youtube.com/watch?v=RIbvV4bFTl4&t=25s' target='_blank'>Check it.</a> what do you need to make a sugar cane farm? ", ["Sand,water , and sugarcane","Gravel,Lava, and sugarcane","Concrete Powder, Water, Sea Grass","Wool,Gunpowder,and Sand"],"Sand,water , and sugarcane"),
    // new Question("How do you make obsidian? ", ["Mix iron and diamonds","Iron and lava mixed","water and lava mixed","None of the above"],"water and lava mixed" ),
    // new Question("How much does US Dollars does Minecraft (Java Edition) Cost?", ["Its Free","$50 USD","$26.95 USD","$15 USD"], "$26.95 USD"),
    // new Question("Which of the following armor piece takes 5 diamonds,iron,gold,and lether to craft?", ["Chestplate","Boots","Helmet","Leggings"], "Helmet"),
    // new Question("What is the king of the end?", ["Enderman","Shulker","Endermite","Enderdragon"], "Enderdragon"),
    // new Question("Which of these consoles can Minecraft be played on?", ["Wii","Original Xbox","PS1 ","PS3"], "PS3"),
    // new Question("What is a charged creeper?", ["A creeper running at you","A creeper that blew up ","A creeper in fire","A creeper struck by lightning"], "A creeper struck by lightning"),
    // new Question("What can you wear to stop enderman from attacking you?", ["Helmet","Creeper Head","Skeleton Skull","Pumpkin"], "Pumpkin"),
    // new Question("What reference of game does the enderman come from?",["Skyrim"," Halo ", "Slenderman", "None of the above"], "Slenderman"),
    // new Question("What mob are creepers scared of?", ["Spiders","Cows","Pigs", "Ocelots/Cats"],"Ocelots/Cats")
];

var quiz = new Quiz(questions);

populate();