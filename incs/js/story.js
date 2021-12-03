import {Resp} from "./responses.js";
let responses = {};
let resp = new Resp ();
let afterTxt = {
    storyIntro:`<p class="fade-in-text" id="into-the-house">
    <br>
    You cross the threshold and call out, no one responds, further in you make it to a hallway, it has three directions, left, right, and forward. No matter the direction you look you don't see signs of anyone, you glance back to the doors, they are closed, you never heard them shut. You call out again but this time your voice cracks. The silence that answers back makes you sick, all sound has evaporated save the beating of your heart. Panic fills you, you rush to the front doors and twist the handles, but no luck, they will not open.
    <br>
    <br>
    What do you do?
    <br>
    <br>
    A) Try to escape through the window<br>
    B) You realize you are not getting out of here so easily, if at all, and decide to explore the mansion and pick a hall from the hallway, standing in the entrance you pick:<br>
    C) Cry<br>

    </p>`,

    longbottomMsg1: {
        txt1: `"Welcome to my home,`,
        txt2: `I am Frank Longbottom. Once every 50 yrs the mansion appears, opening it's doors to draw in one who is worthy of the challenge. Through out this mansion you will find six rooms containing clues or items to help you leave. Failure to leave the mansion by sun rise and you take my place as keeper of this mansion, and I will walk free into the world once more. Fret naught, I am no enemy to you. Should you find yourself successful leaving this place by the breaking dawn, we both walk free, and I will return to my time continuing where I left off 100 yrs ago. I had a family before this mansion became my home, it is my hearts desire to return to them once more. The curse of this house forbids me from giving up it's secrets to you, but I will not hinder you. 
        <br>
        <br>
        
        Help me`,
        txt3: `you're my only hope!"`
    }
};



const story = {
    
    storyIntro: {
        luck: `Almost as if by LUCK you find the perfect shaded spot to rest,`,

        perc: `You look around and see what you PERCEIVE to be the perfect spot to get some shade,`,

        txt1: `
        You are strolling through the woods near your house one day. It is getting hot and are beginning to feel that you require shade.
        `,

        txt2: `it is under a great willow tree overlooking a valley with a large pond near it's east end. You must have walked farther than you realized, you have walked these woods before, but you don't recognize the area. But you're not lost. You sit with your back against the tree gazing over the valley eyes drawn to the pond. Your heart skips a beat, and for a moment your stomach drops. It must be the heat, you reach in your bag and sip water from your canteen. You close your eyes for what you only plan to be a moment, but as you start opening your eyes you realize you fell asleep. The sun is setting over the pond, lighting up a mansion near it's edge.
        <br>
        <br>
        What do you do? <br>
        A) Turn around and go home <br>
        B) Make your way down to the mansion <br>
        C) Go back to sleep, there ain't no bears in the woods <br>`,
        
        id: `story-intro`,

        res: {
            
        
            "a": {
                txt:`Wow you have no sense of adventure, you make it back to you car as the sun's light leaves the sky. You drive back to town, make it home, go to bed and have the sweetest dreams.`,
                id: `story-intro-a`
            },
            "b": {
                txt: `By the time you get to the front of the mansion the light has left the sky. While the area is dimly lit by lamp post leading down the walk way, it doesn't give off spooky vibes. You approach the door and are greeted by a chill, the door opens, you walk in without much thought. ${afterTxt.storyIntro}`,
                id: `story-intro-b`
            },
            "c": {
                txt: `Something isn't right, you are being dragged by your ankles, you know you were asleep for several hours before coming to. You find the nerve to open your eyes, before you have adjusted to the lighting whoever was dragging you drops your feet, and you watch them fade into the shadows back into the woods. You stare after it before you decide it isn't coming back and start to stand up. Other than confusion you feel fine, you were drugged as you were dragged. Also you don't feel any pain, you don't think you were attacked. The doors to the mansion open it is illuminated and welcoming, you can't explain why, but without a second thought you walk into the mansion as though you were an invited guest. ${afterTxt.storyIntro}`,
                id: `story-intro-c`
            }
        }
        },

        intoTheHouse: {
            res : {
                "a": {
                    txt: `You look around, the panic you are feeling is clouding your perception, you don't see anything you could lift and use to smash the window. You are not thinking clearly about anything except your desire to flee this mansion, you hurl you body at the nearest window. ** Crack - Crash ** That move didn't go as planned, your luck is running dry. Looking up from the ground you see the window unbroken much the opposite of your pride. Your head hurts, you are bleeding, as you crashed to the floor you managed to hit your head upon the corner of the window sill (You take some damage). You are not bleeding profusely, you compose yourself and go back to the hallway, clearly exploration is key. Standing in the hallway entrance you look to see the best path to follow, left, right, or forward. You place your hand upon the frame of the hallway opening, you loose your grip and stumble to the right, your coordination has picked a direction for you.`,
    
                    id: `into-the-house-a`
                },
                "b": {
                    txt: `You close your eyes and take a few deep breaths realigning your chakkras. Luck/Perception allows you to notice by the left corner of the hallway intersection an ornate envelope. You pick it up noticing that your name is on it. Curiously you open the envelope revealing it's contents to be a letter, it reads :
                            <br>
                            <br>
            
                             `,
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
                             C) Cry<br>
                            
                                     `,
                    id: `into-the-house-c`
                }
            }
        }

        
}

export { responses, story };