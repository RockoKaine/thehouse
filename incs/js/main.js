import { responses, story } from './story.js';
// Start with the coins and  hearts hidden
const storyText = document.getElementById('story-text'),
      btn = document.getElementById('button'),
      playerName = document.getElementById('player-name'),
      userInput = document.getElementById("input");
let lifeTotal = 3;
let money = 0;
let cryCount = 0;
// let responses = {};
let started = false;
let playerInfo = false;
let playerInventory = [];

window.onload = ()=>{userInput.focus();}

userInput.addEventListener('keyup', (e)=>{
// Listening for enter keyup.
// On enter keyup we run the associated onclick
// we use eval to turn the string to the function so we can run it
    if(e.code === 'Enter' || e.code === 'NumpadEnter'){
        eval(btn.attributes.onclick.value);
    }
});

// Functions
let resHandler = (res, resObj) =>{
    switch(res){
        case "a":
            movingOn(resObj.a.txt, resObj.a.id);
            break;
        case "b":
            movingOn(resObj.b.txt, resObj.b.id);
            break;
        case "c":
            movingOn(resObj.c.txt, resObj.c.id)
            break;


    }


}

let startGame = ()=>{
    started = true;
    btn.innerText = 'ENTER';
    userInput.focus();
        storyText.innerHTML = `
            <p class="fade-in-text" id="get-player-name">
                Please tell me your name.
            </p>
        `;
    btn.setAttribute('onclick','getPlayerInfo()');
}

// movingOn clears the text, sets focus on the text input so user doesn't need to click.
// then sets the paragraph id 
let movingOn = (str, id)=>{
        userInput.value = '';
        userInput.focus();
        storyText.innerHTML = `<p class="fade-in-text" id="${id}">
            ${str}
        </p>`

}

// gathering player info
let getPlayerInfo = ()=>{
    if(!responses.name){
        responses.name = userInput.value;
        playerName.innerText =  responses.name;
        movingOn(`Please tell me your pronoun.`, `get-player-pronoun`);
       

    } else if (!responses.pronoun) {
        responses.pronoun = userInput.value;
        console.log(responses.pronoun);
        movingOn(`Please choose luck or perception to get a bonus in.`, `get-player-bonus`);        
    } else {
        responses.bonus = userInput.value;
        console.log(responses.bonus);
        btn.setAttribute('onclick','userResponses()');


        let introTxt = `
            ${story.storyIntro.txt1}
            ${(responses.bonus === 'luck') ? story.storyIntro.luck : story.storyIntro.perc}
            ${story.storyIntro.txt2}
        `

        movingOn(introTxt, story.storyIntro.id);
        setTimeout(()=>{
            playerInventory.push('Canteen');
            document.getElementById('test').innerText = playerInventory[0];
        },1500)
    }
}



let userResponses = ()=>{


    if (document.getElementById('story-intro')) {
        responses.storyIntro = userInput.value;

        // Story intro choice results for the player, adding the next set of choices
        
        resHandler(responses.storyIntro, story.storyIntro.res);
    }

    if(document.getElementById('into-the-house')){
        responses.intoTheHouse = userInput.value;
        
        const longbottomMsg1 = `"Welcome to my home ${responses.name}, I am Frank Longbottom. Once every 50 yrs the mansion appears, opening it's doors to draw in one who is worthy of the challenge. Through out this mansion you will find six rooms containing clues or items to help you leave. Failure to leave the mansion by sun rise and you take my place as keeper of this mansion, and I will walk free into the world once more. Fret naught, I am no enemy to you. Should you find yourself successful leaving this place by the breaking dawn, we both walk free, and I will return to my time continuing where I left off 100 yrs ago. I had a family before this mansion became my home, it is my hearts desire to return to them once more. The curse of this house forbids me from giving up it's secrets to you, but I will not hinder you. 
        <br>
        <br>
        
        Help me ${responses.name} you're my only hope!"`;

        resIntoHouse = {
            "a": {
                txt: `You look around, the panic you are feeling is clouding your perception, you don't see anything you could lift and use to smash the window. You are not thinking clearly about anything except your desire to flee this mansion, you hurl you body at the nearest window. ** Crack - Crash ** That move didn't go as planned, your luck is running dry. Looking up from the ground you see the window unbroken much the opposite of your pride. Your head hurts, you are bleeding, as you crashed to the floor you managed to hit your head upon the corner of the window sill (You take some damage). You are not bleeding profusely, you compose yourself and go back to the hallway, clearly exploration is key. Standing in the hallway entrance you look to see the best path to follow, left, right, or forward. You place your hand upon the frame of the hallway opening, you loose your grip and stumble to the right, your coordination has picked a direction for you.`,

                id: `into-the-house-a`
            },
            "b": {
                txt: `You close your eyes and take a few deep breaths realigning your chakkras. Luck/Perception allows you to notice by the left corner of the hallway intersection an ornate envelope. You pick it up noticing that your name is on it. Curiously you open the envelope revealing it's contents to be a letter, it reads :
                        <br>
                        <br>
        
                         ${longbottomMsg1}`,
                id: `into-the-house-b`
            },
            "c": {
                txt: `For some time you cry inconsolably on the ground in the fetal position.
                         <br>
                         <br>
                         What do you do?
                         <br>
                         <br>
                         A) Try to escape through the window<br>
                         B) You realize you are not getting out of here so easily, if at all, and decide to explore the mansion and pick a hall from the hallway, standing in the entrance you pick:<br>
                         C) Cry #${cryCount}<br>
                        
                                 `,
                id: `into-the-house-c`
            }
        }
        resHandler(responses.intoTheHouse, resIntoHouse);         
    }
    if (responses.intoTheHouse === 'c') {
        cryCount++;
        const longbottomMsg1 = `"Welcome to my home ${responses.name}, I am Frank Longbottom. Once every 50 yrs the mansion appears, opening it's doors to draw in one who is worthy of the challenge. Through out this mansion you will find six rooms containing clues or items to help you leave. Failure to leave the mansion by sun rise and you take my place as keeper of this mansion, and I will walk free into the world once more. Fret naught, I am no enemy to you. Should you find yourself successful leaving this place by the breaking dawn, we both walk free, and I will return to my time continuing where I left off 100 yrs ago. I had a family before this mansion became my home, it is my hearts desire to return to them once more. The curse of this house forbids me from giving up it's secrets to you, but I will not hinder you. 
        <br>
        <br>
        
        Help me ${responses.name} you're my only hope!"`;
        resIntoHouse = {
            "a": {
                txt: `You look around, the panic you are feeling is clouding your perception, you don't see anything you could lift and use to smash the window. You are not thinking clearly about anything except your desire to flee this mansion, you hurl you body at the nearest window. ** Crack - Crash ** That move didn't go as planned, your luck is running dry. Looking up from the ground you see the window unbroken much the opposite of your pride. Your head hurts, you are bleeding, as you crashed to the floor you managed to hit your head upon the corner of the window sill (You take some damage). You are not bleeding profusely, you compose yourself and go back to the hallway, clearly exploration is key. Standing in the hallway entrance you look to see the best path to follow, left, right, or forward. You place your hand upon the frame of the hallway opening, you loose your grip and stumble to the right, your coordination has picked a direction for you.`,

                id: `into-the-house-a`
            },
            "b": {
                txt: `You close your eyes and take a few deep breaths realigning your chakkras. Luck/Perception allows you to notice by the left corner of the hallway intersection an ornate envelope. You pick it up noticing that your name is on it. Curiously you open the envelope revealing it's contents to be a letter, it reads :
                        <br>
                        <br>
        
                         ${longbottomMsg1}`,
                id: `into-the-house-b`
            },
            "c": {
                txt: `For some time you cry inconsolably on the ground in the fetal position.
                         <br>
                         <br>
                         What do you do?
                         <br>
                         <br>
                         A) Try to escape through the window<br>
                         B) You realize you are not getting out of here so easily, if at all, and decide to explore the mansion and pick a hall from the hallway, standing in the entrance you pick:<br>
                         C) Cry #${cryCount}<br>
                        
                                 `,
                id: `into-the-house-c`
            }
        }
        resHandler(responses.intoTheHouse, resIntoHouse);         
        
    }
}

// Re-prompt for current what to do. If crying count is greater than 2. 
                //     Some force hurls your body towards the hallway your not going to stop before crashing into the wall. But you do and are placed on your feet standing in the hallway.
                //         You close your eyes and take a few deep breaths realigning your chakkras. Luck/Perception allows you to notice by the left corner of the hallway intersection an ornate envelope. You pick it up noticing that your name is on it. Curiously you open the envelope reveling it's contents to be a letter, it reads :
                //         <br>
                //         <br>
                //         ${longbottomMsg1}




                export{responses}