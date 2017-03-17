var viewModel;
var vocabArray;
var choice;
var answer;

var model = [{
        id: 1,
        word: 'apostate',
        definition: 'Person who deserts a party, cause, religion, etc.',
        pos: ['noun', 'adj']
    },
    {
        id: 2,
        word: 'antithetical',
        definition: 'Directly opposed, opposite; involving anithesis (the rhetorical act of placing two phrases opposite one another for contrast, "as in love me or hate me"',
        pos: ['adj']
    },
    {
        id: 3,
        word: 'antedate',
        definition: 'Be older than, precede in time; assign to an earlier date',
        pos: ['verb']
    },
    {
        id: 4,
        word: 'anodyne',
        definition: 'Medicine that relieves pain (noun); soothing, relieving pain (adj)',
        pos: ['noun', 'adj']
    },
    {
        id: 5,
        word: 'annul',
        definition: 'Make void or null, cancel, abolish (usually of laws or other established rules)',
        pos: ['verb']
    },
    {
        id: 6,
        word: 'analgesia',
        definition: 'Pain relief; inability to feel pain',
        pos: ['noun']
    },
    {
        id: 7,
        word: 'anachronism',
        definition: 'Something that is not in its correct historical time; a mistake in chronology, such as by assigning a person or event to the wrong time period',
        pos: ['noun']
    },
    {
        id: 8,
        word: 'ameliorate',
        definition: 'Improve; make better or more bearable',
        pos: ['verb']
    },
    {
        id: 9,
        word: 'amalgamate',
        definition: 'Blend, merge, or unite',
        pos: ['verb']
    },
    {
        id: 10,
        word: 'aloof',
        definition: 'Distant physically or emotionally; reserved; indifferent',
        pos: ['adj']
    },
    {
        id: 11,
        word: 'albeit',
        definition: 'Although, even though',
        pos: ['conjunction']
    },
    {
        id: 12,
        word: 'aerie',
        definition: 'Dwelling or fortress built on a high place; the nest of a bird of prey, such as an eagle or hawk, built on a mountain or cliff',
        pos: ['noun']
    },
    {
        id: 13,
        word: 'adumbrate',
        definition: 'Give a rough outline of; foreshadow; reveal only partially; obscure',
        pos: ['verb']
    },
    {
        id: 14,
        word: 'amortize',
        definition: 'Gradually pay off a debt, or gradually write of an asset',
        pos: ['verb']
    },
    {
        id: 15,
        word: 'adulterate',
        definition: 'Make impure by adding inappropriate or inferior ingredients',
        pos: ['verb']
    },
    {
        id: 16,
        word: 'accede',
        definition: 'Agree, give consent; assume power (usually as "accede to")',
        pos: ['verb']
    },
    {
        id: 17,
        word: 'abyss',
        definition: 'A deep and vast space or cavity; anything profound or infinite',
        pos: ['noun']
    },
    {
        id: 18,
        word: 'abscond',
        definition: 'Depart suddenly and secretively',
        pos: ['verb']
    },
    {
        id: 20,
        word: 'demur',
        definition: 'Show reluctance or object, esp. for moral reasons',
        pos: ['verb']
    },
    {
        id: 21,
        word: 'desultory',
        definition: 'Lacking consistency or order, disconnected, sporadic; going off topic',
        pos: ['adj']
    },
    {
        id: 22,
        word: 'diaphanous',
        definition: 'Very sheer, fine, translucent',
        pos: ['adj']
    },{
        id: 23,
        word: 'dichotomy',
        definition: 'Division into two parts or into two contradictory groups',
        pos: ['noun']
    },{
        id: 24,
        word: 'dictum',
        definition: 'Formal or authoritative pronouncement; saying or proverb',
        pos: ['noun']
    },
    {
        id: 25,
        word: 'diffident',
        definition: 'Lacking confidence, shy',
        pos: ['adj']
    },
    {
        id: 26,
        word: 'apposite',
        definition: 'Highly appropriate, suitable, or relevent',
        pos: ['adj']
    },
    {
        id: 27,
        word: 'diffuse',
        definition: 'Spread widely, disseminate (verb); dispersed, widely spread out, or word and going off-topic (adj)',
        pos: ['verb', 'adj']
    },
    {
        id: 28,
        word: 'axiom',
        definition: 'Self-evident truth requiring no proof; universally or generally accepted principle',
        pos: ['noun']
    },
    {
        id: 29,
        word: 'avarice',
        definition: 'Insatiable greed; a miserly desire to hoard wealth',
        pos: ['noun']
    },
    {
        id: 30,
        word: 'canard',
        definition: 'Rumor, a false or baseless story',
        pos: ['noun']
    },
    {
        id: 31,
        word: 'calumny',
        definition: "Malicious lie intended to hurt someone's reputation; the act of telling such lies",
        pos: ['noun']
    },
    {
        id: 32,
        word: 'burnish',
        definition: "Polish, make smooth and lustrous",
        pos: ['verb']
    },
    {
        id: 33,
        word: 'bucolic',
        definition: 'Suggesting a peaceful and pleasant view of rural life',
        pos: ['adj']
    },
    {
        id: 34,
        word: 'contraries',
        definition: 'Things that are opposing; either of two opposite things',
        pos: ['noun']
    },
    {
        id: 35,
        word: 'connote',
        definition: 'Suggest or imply in addition to the precise, literal meaing',
        pos: ['verb']
    },
    {
        id: 36,
        word: 'confound',
        definition: 'Confuse, frustrat; mix up or make worse',
        pos: ['verb']
    },
    {
        id: 37,
        word: 'complaisant',
        definition: 'Eager to please; cheerfully complying',
        pos: ['adj']
    },
    {
        id: 38,
        word: 'blithe',
        definition: 'Joyous, merry; excessively carefree (so as to ignore more important concerns)',
        pos: ['adj']
    },
    {
        id: 39,
        word: 'acumen',
        definition: 'Keen, quick, accurate insight or judgment',
        pos: ['noun']
    },
    {
        id: 40,
        word: 'apostle',
        definition: 'Pioneer of a reform movement (originally, an early follower of Jesus)',
        pos: ['noun']
    },
    {
        id: 41,
        word: 'compendium',
        definition: 'Concise but complete summary; a list or collection',
        pos: ['noun']
    },
    {
        id: 42,
        word: 'collude',
        definition: 'Conspire; cooperate for illegal or fraudulent purpose',
        pos: ['verb']
    },
    {
        id: 43,
        word: 'coffer',
        definition: 'Chest for storing valuables; financial resources, a treasury',
        pos: ['noun']
    },
    {
        id: 44,
        word: 'coda',
        definition: 'Final part of a musical composition; an ending, esp. one that sums up what has come before',
        pos: ['noun']
    },
    {
        id: 45,
        word: 'coagulate',
        definition: 'Cause a liquid to become solid or semisolid',
        pos: ['verb']
    },
    {
        id: 46,
        word: 'cloying',
        definition: 'Disgustingly or distastefully sweet',
        pos: ['adj']
    },
    {
        id: 47,
        word: 'clamber',
        definition: 'Climb awkwardly or with difficulty, scramble',
        pos: ['verb']
    },
    {
        id: 48,
        word: 'discordant',
        definition: 'Harsh or inharmonious in sound; disagreeing, incongruous',
        pos: ['adj']
    },
    {
        id: 49,
        word: 'discrete',
        definition: 'Separate, distinct, detached, existing as individual parts',
        pos: ['adj']
    },
    {
        id: 50,
        word: 'abase',
        definition: 'Degrade or humble; to lower in rank, status or esteem',
        pos: ['verb']
    },
    {
        id: 51,
        word: 'abeyance',
        definition: 'Temporary suspension, inactivity',
        pos: ['noun']
    },
    {
        id: 52,
        word: 'abreast',
        definition: 'Side-by-side (with preposition of); keeping up with, staying aware of, or remaining equal in progress with',
        pos: ['adj']
    },
    {
        id: 53,
        word: 'abscission',
        definition: 'Cutting off; sudden termination; the separation of leaves, petals, or other parts from a plant or animal',
        pos: ['noun']
    },
    {
        id: 54,
        word: 'demagogue',
        definition: 'A leader who lies and gains power by arousing the passions and especially prejudices of the people',
        pos: ['noun']
    },
    {
        id: 55,
        word: 'delimit',
        definition: 'Fix, mark, or define the boundaries of',
        pos: ['verb']
    },
    {
        id: 56,
        word: 'declivity',
        definition: 'Downward slope',
        pos: ['noun']
    },
    {
        id: 57,
        word: 'declaim',
        definition: 'Speak in an impassioned, pompous, or oratorical manner; give a formal speech',
        pos: ['verb']
    },
    {
        id: 58,
        word: 'curmudgeon',
        definition: 'Bad-tempered, difficult person; grouch',
        pos: ['noun']
    },
    {
        id: 59,
        word: 'bombastic',
        definition: '(Of speech or writing) far too showy or dramatic than is appropriate; pretentious',
        pos: ['adj']
    },
    {
        id: 60,
        word: 'discomfiting',
        definition: 'Disconcerting, confusing, frustrating',
        pos: ['adj']
    },
    {
        id: 61,
        word: 'accretion',
        definition: 'Gradual increase; an added part or addition',
        pos: ['noun']
    },
    {
        id: 62,
        word: 'acerbic',
        definition: 'Sour; harsh or severe',
        pos: ['adj']
    },
    {
        id: 63,
        word: 'bonhomie',
        definition: 'Friendliness, open and simple good heartedness',
        pos: ['noun']
    },
    {
        id: 64,
        word: 'acidulous',
        definition: 'Slightly acid or sour; sharp or caustic',
        pos: ['adj']
    },
    {
        id: 65,
        word: 'dilate',
        definition: 'To become wider or make wider, cause to expand; to speak or write at length, elaborate upon',
        pos: ['verb']
    },
    {
        id: 66,
        word: 'dilatory',
        definition: 'Slow, late; procrastinating or stalling for time',
        pos: ['adj']
    },
    {
        id: 67,
        word: 'dilettante',
        definition: 'Person who takes up an art or activity for amusement only or in a superficial way',
        pos: ['noun']
    },
    {
        id: 68,
        word: 'dirge',
        definition: 'A funeral or mourning song or poem',
        pos: ['noun']
    },
    {
        id: 69,
        word: 'cardinal',
        definition: 'Chief, most important',
        pos: ['adj']
    },
    {
        id: 70,
        word: 'brandish',
        definition: 'Shake, wave, or flourish, as a weapon',
        pos: ['verb']
    },
    {
        id: 71,
        word: 'approbation',
        definition: 'Praise or approval, especially formal approval',
        pos: ['noun']
    },
    {
        id: 72,
        word: 'apprise',
        definition: 'Inform, give notice to',
        pos: ['verb']
    },
    {
        id: 73,
        word: 'blight',
        definition: 'Disease that kills plants rapidly, or any cause of decay or destruction (noun); ruin or cause to wither (verb)',
        pos: ['noun', 'verb']
    },
    {
        id: 74,
        word: 'bilk',
        definition: 'Cheat or defraud',
        pos: ['verb']
    },
    {
        id: 75,
        word: 'bifurcate',
        definition: 'To for into two branches or divide into two halves (verb); split or forked (adj)',
        pos: ['verb', 'adj']
    },
    {
        id: 76,
        word: 'bevy',
        definition: 'Group of birds or other animals that stay close together; any large group',
        pos: ['noun']
    },
    {
        id: 77,
        word: 'besiege',
        definition: 'Attack, overwhelm, crowd in on or surround',
        pos: ['verb']
    },
    {
        id: 78,
        word: 'bent',
        definition: 'Personal inclination or tendency',
        pos: ['noun']
    },
    {
        id: 79,
        word: 'beneficent',
        definition: 'Doing good',
        pos: ['adj']
    },
    {
        id: 80,
        word: 'baying',
        definition: 'Howling in a deep way, like a dog or wolf',
        pos: ['adj']
    },
    {
        id: 81,
        word: 'bane',
        definition: 'Something that ruins or spoils',
        pos: ['noun']
    },
    {
        id: 82,
        word: 'banal',
        definition: 'Lacking freshness and originality; cliche',
        pos: ['adj']
    },
    {
        id: 83,
        word: 'balloon',
        definition: 'Swell or puff out; increase rapidly',
        pos: ['verb']
    },
    {
        id: 84,
        word: 'brook',
        definition: 'Suffer or tolerate',
        pos: ['verb']
    },
    {
        id: 85,
        word: 'cupidity',
        definition: 'Greed, great or excessive desire',
        pos: ['noun']
    },
    {
        id: 86,
        word: 'contumacious',
        definition: 'Rebellious; stubbornly disobedient',
        pos: ['adj']
    },
    {
        id: 87,
        word: 'contrite',
        definition: "Remorseful; feeling sorry for one's offenses or sins",
        pos: ['adj']
    },
    {
        id: 88,
        word: 'cosset',
        definition: 'Treat as a pet, pamper',
        pos: ['verb']
    },
    {
        id: 89,
        word: 'catholic',
        definition: 'Universal, broad-minded',
        pos: ['adj']
    },
    {
        id: 90,
        word: 'convoke',
        definition: 'Call together, as to a meeting',
        pos: ['verb']
    },
    {
        id: 91,
        word: 'coterie',
        definition: 'Close or exclusive group, clique',
        pos: ['noun']
    },
    {
        id: 92,
        word: 'august',
        definition: 'Venerable, majestic; inspiring admiration',
        pos: ['adj']
    },
    {
        id: 93,
        word: 'augury',
        definition: 'Telling the future, such as through supernatural means',
        pos: ['noun']
    },
    {
        id: 94,
        word: 'attuned',
        definition: 'In harmony; in sympathetic relationship',
        pos: ['adj']
    },
    {
        id: 95,
        word: 'attenuate',
        definition: 'Weaken or thin out',
        pos: ['verb']
    },
    {
        id: 96,
        word: 'assiduous',
        definition: 'Persevering, diligent, constant',
        pos: ['adj']
    },
    {
        id: 97,
        word: 'assail',
        definition: 'Attack violently, assault',
        pos: ['verb']
    },
    {
        id: 98,
        word: 'aspersions',
        definition: 'Damaging remarks, defamation, slander',
        pos: ['noun']
    },
    {
        id: 99,
        word: 'asperity',
        definition: 'Rigor, severity; harshness or sharpness of tone; roughness of surface',
        pos: ['noun']
    },
    {
        id: 100,
        word: 'aseptic',
        definition: 'Free from germs',
        pos: ['adj']
    },
    {
        id: 101,
        word: 'ascribe',
        definition: 'Assign or credit to a certain cause or source',
        pos: ['verb']
    },
    {
        id: 102,
        word: 'arrogate',
        definition: 'Claim or take presumptuously or without the right to do so',
        pos: ['verb']
    },
    {
        id: 103,
        word: 'ardent',
        definition: 'Very passionate, devoted, or enthusiastic',
        pos: ['adj']
    },
    {
        id: 104,
        word: 'arbiter',
        definition: 'Judge, umpire, person empowered to decide matters at hand',
        pos: ['noun']
    },
    {
        id: 105,
        word: 'appropriate',
        definition: "Set aside or authorize (such as money) for a particular purpose; take for one's own use",
        pos: ['verb']
    },
    {
        id: 106,
        word: 'circumspect',
        definition: 'Cautious, prudent; careful to consider the circumstances and consequences',
        pos: ['adj']
    },
    {
        id: 107,
        word: 'circumscribe',
        definition: 'Strictly limit a role, range of activity, or area; in math, to be constructed around so as to touch as many points as possible',
        pos: ['verb']
    },
    {
        id: 108,
        word: 'chicanery',
        definition: 'Trickery, deception by knowingly false arguments',
        pos: ['noun']
    },
    {
        id: 109,
        word: 'faction',
        definition: 'Group or clique within a larger organization; party strife and dissension',
        pos: ['noun']
    },
    {
        id: 110,
        word: 'engender',
        definition: 'Produce, give rise to, cause to exist; procreate',
        pos: ['verb']
    },
    {
        id: 111,
        word: 'epicure',
        definition: 'Person with cultivated, refined tastes, esp. in food and wine',
        pos: ['noun']
    },
    {
        id: 112,
        word: 'equanimity',
        definition: 'Composure, evenness of mind; mental or emotional stability, esp. under stress',
        pos: ['noun']
    },
    {
        id: 113,
        word: 'equivocate',
        definition: 'Use unclear language to deceive or avoid committing to a position',
        pos: ['verb']
    },
    {
        id: 114,
        word: 'ersatz',
        definition: 'Artificial, synthetic; being an inferior substitute',
        pos: ['adj']
    },
    {
        id: 115,
        word: 'erstwhile',
        definition: 'Former, previous (adj); in the past formerly (adv)',
        pos: ['adj', 'adv']
    },
    {
        id: 116,
        word: 'ethos',
        definition: 'The character, personality, or moral values specific to a person, group, time period, etc.',
        pos: ['noun']
    },
    {
        id: 117,
        word: 'euphemism',
        definition: 'Substitution of a mild, inoffensive, or indirect expression for one that is considered offensive or too direct',
        pos: ['noun']
    }
];

var Word = function(data) {
    this.word = data.word;
    this.id = data.id;
    this.def = data.definition;
    this.pos = data.pos;
};

var ViewModel = function() {
    var self = this;
    this.vocabArray = ko.observableArray([]);
    this.currentWord = ko.observable("");
    this.showCard = ko.observable(false);
    this.answerArray = ko.observableArray([]);
    this.allAnswersArray = ko.observableArray([]);

    var modelLength = model.length;
    for(var i = 0; i < modelLength; i++) {
        self.vocabArray.push(model[i]);
    };

    this.arrayLen = self.vocabArray().length;
    this.getWord = self.vocabArray()[Math.floor(Math.random() * self.arrayLen)];


    this.startCard = function() {
        this.showCard(true);
    };

    this.getAnswers = function() {
        this.answerArray.push(this.currentWord().def);
    };

    this.currentWord(new Word(this.getWord));

    this.nextWord = function() {
        this.index = [Math.floor(Math.random() * self.arrayLen)];
        this.getWord = this.vocabArray()[this.index];
        console.log(this.index)
        this.currentWord(new Word(this.getWord));
        this.getAnswers();
    };
};

viewModel = new ViewModel();

ko.applyBindings(viewModel);