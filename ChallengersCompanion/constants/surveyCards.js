const surveyCards = [
    {
        text: 'How difficult do you want your champion to be?',
        photo: require('../assets/difficultyBG.png'),
        overlayText: ['HARD', 'EASY'],
        result: [2, 1], // 3
    },
    {
        text: 'Would you prefer to be in the heat of the action or attack from a safe distance?',
        photo: require('../assets/classBG.png'),
        overlayText: ['IN THE ACTION', 'SAFE DISTANCE'],
        result: ['M', 'R'],
    },
    {
        text: 'How I work with people',
        photo: require('../assets/collabBG.png'),
        overlayText: ['LONE WOLF', 'IN THE PACK'],
        result: ['S', 'T'],
    },
    {
        text: 'Would you rather be an unstoppable force or an immovable object?',
        photo: require('../assets/meleeBG.png'),
        overlayText: ['UNSTOPPABLE', 'IMMOVABLE'],
        result: ['Fighter', 'Tank'], // assassin
    },
    {
        text: 'Do you like to do tasks little by little or all at once?',
        photo: require('../assets/rangeBG.png'),
        overlayText: ['LITTLE BY LITTLE', 'ALL AT ONCE'],
        result: ['Marksman', 'Mage'],
    },
    {
        text: 'Would you like to support your friends or be supported by friends?',
        photo: require('../assets/supporterBG.png'),
        overlayText: ['BE SUPPORTED', 'SUPPORT'],
        result: ['', 'Y'],
    },
    {
        text: 'I would want the sex of my champion to be',
        photo: require('../assets/sexBG.png'),
        overlayText: ['MALE', 'FEMALE'],
        result: ['M', 'F'],
    },
    {
        text: 'This background setting appeals to me',
        photo: require('../assets/Regions/DemaciaBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Demacia'],
    },
    {
        text: 'Actually I like this',
        photo: require('../assets/Regions/IoniaBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Ionia'],
    },
    {
        text: 'Or this',
        photo: require('../assets/Regions/NoxusBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Noxus'],
    },
    {
        text: 'Or that',
        photo: require('../assets/Regions/FreljordBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Freljord'],
    },
    {
        text: 'This',
        photo: require('../assets/Regions/VoidBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Void'],
    },
    {
        text: 'That',
        photo: require('../assets/Regions/ShurimaBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Shurima'],
    },
    {
        text: 'This',
        photo: require('../assets/Regions/ShadowIslesBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Shadow Isles'],
    },
    {
        text: 'That',
        photo: require('../assets/Regions/PiltoverBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Piltover'],
    },
    {
        text: 'This',
        photo: require('../assets/Regions/BandleCityBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'BandleCity'],
    },
    {
        text: 'That',
        photo: require('../assets/Regions/IxtalBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Ixtal'],
    },
    {
        text: 'This',
        photo: require('../assets/Regions/ZaunBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Zaun'],
    },
    {
        text: 'That',
        photo: require('../assets/Regions/TargonBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Targon'],
    },
    {
        text: 'This',
        photo: require('../assets/Regions/BilgewaterBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Bilgewater'],
    },
    {
        text: 'I like all places',
        photo: require('../assets/Regions/RuneterraBG.png'),
        overlayText: ['NO', 'YES'],
        result: ['', 'Runeterra'],
    },
]

export default surveyCards