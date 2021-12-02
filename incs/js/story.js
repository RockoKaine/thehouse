let responses = {};

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

        intoTheHouse: {}

        
}

export { responses, story };