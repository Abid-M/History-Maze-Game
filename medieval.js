const medievalQs = [
    {
        question: "Can you name one famous medieval queen of England?",
        answers: [
            {text: "Anne Boleyn", value: 0},
            {text: "Queen Victoria", value: 1},
            {text: "Queen Elizabeth II", value: 0},
            {text: "Diana", value: 0},
        ]
    },
    {
        question: "What was the Black Death?",
        answers: [
            {text: "A war between England and France", value: 0},
            {text: "A type of medieval weapon", value: 0},
            {text: "The name of a famous knight", value: 0},
            {text: "A plague that killed many people in the 14th century", value: 1},
        ]
    },
    {
        question: "What did the Magna Carta do?",
        answers: [
            {text: "Limited the powers of the king", value: 1},
            {text: " Made everyone equal before the law", value: 0},
            {text: "Gave all men the right to vote", value: 0},
            {text: "Abolished the monarchy", value: 0},
        ]
    },
    {
        question: " What was the main consequence of the Norman Conquest of England?",
        answers: [
            {text: "The English language was replaced by Latin", value: 0},
            {text: "England became part of France", value: 0},
            {text: "Feudalism was established in England", value: 1},
            {text: "Parliament was dissolved", value: 0},
        ]
    },
    {
        question: "Who was King Arthur, and why is he famous in medieval history?",
        answers: [
            { text: "A legendary British king known for his knights and the Round Table.", value: 1 },
            { text: "A medieval scientist and inventor.", value: 0 },
            { text: "A famous explorer during the Middle Ages.", value: 0 },
            { text: "A medieval musician and composer.", value: 0 },
        ]
    },
    {
        question: "What were knights during the medieval period, and what did they wear?",
        answers: [
            { text: "Knights were skilled blacksmiths.", value: 0 },
            { text: "Knights were warriors who wore heavy armor and rode horses.", value: 1 },
            { text: "Knights were medieval scholars and writers.", value: 0 },
            { text: "Knights were priests in medieval churches.", value: 0 },
        ]
    },
    {
        question: "Which famous medieval building in France is known for its stunning stained glass windows and Gothic architecture?",
        answers: [
            { text: "The Leaning Tower of Pisa", value: 0 },
            { text: "The Colosseum in Rome", value: 0 },
            { text: "The Eiffel Tower", value: 0 },
            { text: "The Notre-Dame Cathedral in Paris", value: 1 },
        ]
    },
    {
        question: "What is a moat, and how was it used in medieval castles?",
        answers: [
            { text: "A moat is a type of medieval musical instrument.", value: 0 },
            { text: "A moat is a deep, wide ditch filled with water surrounding a castle, used for defense.", value: 1 },
            { text: "A moat is a type of medieval dessert.", value: 0 },
            { text: "A moat is a kind of medieval clothing worn by knights.", value: 0 },
        ]
    },
    {
        question: "What were medieval peasants called, and what were their main responsibilities?",
        answers: [
            { text: "Medieval peasants were called wizards and witches.", value: 0 },
            { text: "Medieval peasants were called serfs or villagers, and they worked the land for the lord of the manor.", value: 1 },
            { text: "Medieval peasants were called merchants and traders, and they conducted business in towns.", value: 0 },
            { text: "Medieval peasants were called bards, and they composed epic poems.", value: 0 },
        ]
    },
    {
        question: "What was the purpose of a drawbridge in a medieval castle?",
        answers: [
            { text: "To serve as a medieval playground equipment.", value: 0 },
            { text: "To provide access to the castle over a defensive moat.", value: 1 },
            { text: "To store food and supplies for the castle's inhabitants.", value: 0 },
            { text: "To display the lord's coat of arms.", value: 0 },
        ]
    },
    {
        question: "Who were minstrels in medieval times, and what did they do?",
        answers: [
            { text: "Minstrels were medieval healers who used herbs and remedies.", value: 0 },
            { text: "Minstrels were traveling musicians and storytellers who entertained people with songs and tales.", value: 1 },
            { text: "Minstrels were medieval artists who painted portraits of nobility.", value: 0 },
            { text: "Minstrels were medieval astronomers who studied the stars.", value: 0 },
        ]
    },
    {
        question: "What was the purpose of a medieval dungeon in a castle?",
        answers: [
            { text: "To store the royal treasure.", value: 0 },
            { text: "To serve as a medieval library.", value: 0 },
            { text: "To imprison and punish wrongdoers or enemies of the lord.", value: 1 },
            { text: "To hold grand feasts and banquets.", value: 0 },
        ]
    },
    {
        question: "What did medieval knights use as their primary weapon in battle?",
        answers: [
            { text: "Swords made of paper.", value: 0 },
            { text: "Bows and arrows.", value: 0 },
            { text: "Long spears or lances.", value: 1 },
            { text: "Musical instruments.", value: 0 },
        ]
    },
    {
        question: "What was a medieval joust, and who participated in it?",
        answers: [
            { text: "A medieval cooking competition between knights.", value: 0 },
            { text: "A type of medieval dance performed by peasants.", value: 0 },
            { text: "A sport or combat competition where knights on horseback tried to unseat each other with lances.", value: 1 },
            { text: "A medieval educational gathering for scholars.", value: 0 },
        ]
    },
    {
        question: "What was the purpose of a medieval catapult in a siege?",
        answers: [
            { text: "To transport knights from one castle to another.", value: 0 },
            { text: "To launch fireballs for lighting up the night sky.", value: 0 },
            { text: "To hurl large objects, like rocks or barrels of burning oil, at the enemy's castle walls.", value: 1 },
            { text: "To serve as a medieval amusement park ride.", value: 0 },
        ]
    },
    {
        question: "What were the Crusades, and why are they significant in medieval history?",
        answers: [
            { text: "The Crusades were medieval fashion shows featuring elaborate costumes.", value: 0 },
            { text: "The Crusades were a series of religious wars fought between Christians and Muslims in the Middle Ages.", value: 1 },
            { text: "The Crusades were medieval sports competitions.", value: 0 },
            { text: "The Crusades were medieval trade routes.", value: 0 },
        ]
    },
    {
        question: "Who was Joan of Arc, and why is she remembered in medieval history?",
        answers: [
            { text: "Joan of Arc was a famous medieval chef known for her culinary skills.", value: 0 },
            { text: "Joan of Arc was a medieval artist renowned for her paintings.", value: 0 },
            { text: "Joan of Arc was a teenage girl who led the French army to victory during the Hundred Years' War.", value: 1 },
            { text: "Joan of Arc was a medieval explorer who discovered new lands.", value: 0 },
        ]
    },
    {
        question: "What was the purpose of a medieval moat in front of a castle?",
        answers: [
            { text: "To create a fishing pond for the castle's inhabitants.", value: 0 },
            { text: "To keep knights' horses well-fed.", value: 0 },
            { text: "To provide a defensive barrier by making it difficult for attackers to reach the castle walls.", value: 1 },
            { text: "To grow colorful flowers for decoration.", value: 0 },
        ]
    },
    {
        question: "What is a trebuchet, and how was it used in medieval warfare?",
        answers: [
            { text: "A trebuchet is a type of medieval musical instrument.", value: 0 },
            { text: "A trebuchet is a medieval writing tool.", value: 0 },
            { text: "A trebuchet is a powerful medieval siege weapon that could launch heavy projectiles, such as rocks, at the enemy's fortifications.", value: 1 },
            { text: "A trebuchet is a type of medieval dance.", value: 0 },
        ]
    },
    {
        question: "What was the primary role of a medieval blacksmith in a castle or village?",
        answers: [
            { text: "To create intricate medieval jewelry.", value: 0 },
            { text: "To build and repair armor and weapons for knights.", value: 1 },
            { text: "To brew potions and elixirs for the villagers.", value: 0 },
            { text: "To compose epic poems about heroes of the time.", value: 0 },
        ]
    },
    {
        question: "What was the primary purpose of a medieval castle's battlements and arrow slits?",
        answers: [
            { text: "To grow colorful flowers for decoration.", value: 0 },
            { text: "To provide seating for castle guests during feasts.", value: 0 },
            { text: "To defend the castle by offering protection for archers and a place to pour hot oil or shoot arrows at attackers.", value: 1 },
            { text: "To serve as a playground for medieval children.", value: 0 },
        ]
    },
    {
        question: "What is the significance of the Bayeux Tapestry in medieval history?",
        answers: [
            { text: "The Bayeux Tapestry is a medieval board game played by nobles.", value: 0 },
            { text: "The Bayeux Tapestry is a medieval cookbook with recipes from the era.", value: 0 },
            { text: "The Bayeux Tapestry is a historic embroidered cloth that depicts the events leading up to the Norman Conquest of England.", value: 1 },
            { text: "The Bayeux Tapestry is a famous medieval dance choreography.", value: 0 },
        ]
    },
    {
        question: "What was a medieval minstrel's role in a lord's castle or court?",
        answers: [
            { text: "To maintain the castle's gardens and plant crops.", value: 0 },
            { text: "To entertain guests with tales, songs, and music.", value: 1 },
            { text: "To train and oversee the castle's knights in combat.", value: 0 },
            { text: "To organize medieval banquets and feasts.", value: 0 },
        ]
    },
    {
        question: "What was the primary purpose of a medieval tapestry or rug in a castle?",
        answers: [
            { text: "To decorate the castle's walls and provide insulation.", value: 1 },
            { text: "To be used as a medieval picnic blanket.", value: 0 },
            { text: "To be worn as clothing by knights.", value: 0 },
            { text: "To serve as a stage backdrop for medieval plays.", value: 0 },
        ]
    },
    {
        question: "What were the medieval guilds, and why were they important?",
        answers: [
            { text: "Medieval guilds were secret societies of wizards.", value: 0 },
            { text: "Medieval guilds were trade organizations of craftsmen and merchants that regulated their respective industries and provided support to members.", value: 1 },
            { text: "Medieval guilds were groups of knights who protected the realm.", value: 0 },
            { text: "Medieval guilds were medieval dance troupes.", value: 0 },
        ]
    },
    {
        question: "What was the primary role of a medieval scribe or monk in a monastery?",
        answers: [
            { text: "To cook and prepare meals for the monks.", value: 0 },
            { text: "To copy and preserve important manuscripts and texts by hand.", value: 1 },
            { text: "To sing medieval hymns during church services.", value: 0 },
            { text: "To train the monastery's knights.", value: 0 },
        ]
    },
    {
        question: "What was the purpose of a medieval drawbridge in front of a castle?",
        answers: [
            { text: "To create a picturesque entrance for visitors.", value: 0 },
            { text: "To provide a platform for knights to showcase their skills in jousting tournaments.", value: 0 },
            { text: "To offer a path for people to cross over a moat and access the castle, while also serving as a defensive feature.", value: 1 },
            { text: "To host medieval banquets and feasts.", value: 0 },
        ]
    },
    {
        question: "Who was Richard the Lionheart, and why is he famous in medieval history?",
        answers: [
            { text: "Richard the Lionheart was a famous medieval chef known for his delicious recipes.", value: 0 },
            { text: "Richard the Lionheart was a renowned medieval artist.", value: 0 },
            { text: "Richard the Lionheart was a medieval English king known for his role in the Crusades and his reputation as a fearless knight.", value: 1 },
            { text: "Richard the Lionheart was a medieval philosopher.", value: 0 },
        ]
    },
    {
        question: "What were the main responsibilities of a medieval serf or peasant in a feudal system?",
        answers: [
            { text: "To organize and oversee the local trade fairs.", value: 0 },
            { text: "To perform skilled labor such as blacksmithing and weapon making.", value: 0 },
            { text: "To compose medieval poetry.", value: 0 },
            { text: "To work the land, grow crops, and provide agricultural support to the lord of the manor.", value: 1 },
        ]
    },
    {
        question: "What was the primary function of a medieval tapestry or rug in a castle or manor house?",
        answers: [
            { text: "To serve as a form of storytelling and decoration while also insulating the walls.", value: 1 },
            { text: "To act as a medieval calendar.", value: 0 },
            { text: "To provide a soft surface for knights to practice their sword fighting.", value: 0 },
            { text: "To act as a medieval map of the local area.", value: 0 },
        ]
    }
]

module.exports = medievalQs
