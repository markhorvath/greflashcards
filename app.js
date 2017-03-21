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
        definition: 'Confuse, frustrate; mix up or make worse',
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
    },
    {
        id: 118,
        word: 'exonerate',
        definition: 'Clear from blame or accusation; free from a responsibility',
        pos: ['verb']
    },
    {
        id: 119,
        word: 'glower',
        definition: 'Stare in an angry, sullen way',
        pos: ['verb']
    },
    {
        id: 120,
        word: 'gestation',
        definition: 'Pregnancy; the period from conception until birth of an animal or (metaphorically) of an idea or plan',
        pos: ['noun']
    },
    {
        id: 121,
        word: 'glacial',
        definition: 'Pertaining to glaciers; cold, icy, slow, unsympathetic',
        pos: ['adj']
    },
    {
        id: 122,
        word: 'expedient',
        definition: 'Suitable, proper; effective often at the expense of ethics or other considerations',
        pos: ['adj']
    },
    {
        id: 123,
        word: 'expurgate',
        definition: 'Censor; remove objectionable or offensive parts',
        pos: ['verb']
    },
    {
        id: 124,
        word: 'extemporaneous',
        definition: 'Done without preparation (esp. of a speech), or with some preparation but no notes; improvised, done on the spur of the moment',
        pos: ['adj']
    },
    {
        id: 125,
        word: 'fallow',
        definition: 'Left unplanted (of land); not in use',
        pos: ['adj']
    },
    {
        id: 126,
        word: 'fastidious',
        definition: 'Excessively particular, difficult to please; painstaking, meticulous, requiring excessive attention to detail',
        pos: ['adj']
    },
    {
        id: 127,
        word: 'fatuous',
        definition: 'Foolish, silly, esp. in a smug or complacent manner',
        pos: ['adj']
    },
    {
        id: 128,
        word: 'fawn',
        pos: ['verb'],
        definition: 'Show affection or try to please in the manner of a dog; try to win favor through flattery and submissive behaviour'
    },
    {
        id: 129,
        word: 'fervid',
        pos: ['adj'],
        definition: 'Very hot; heated in passion or enthusiasm'
    },
    {
        id: 130,
        word: 'fecund',
        pos: ['adj'],
        definition: 'Fruitful, fertile; capable of abundantly producing offspring, vegatation, or creative or intellectual work'
    },
    {
        id: 131,
        word: 'euphony',
        pos: ['noun'],
        definition: 'Pleasing or sweet sound, esp. as formed by a harmonious use of words'
    },
    {
        id: 132,
        word: 'exigent',
        pos: ['adj'],
        definition: 'Requiring immediate attention, action, or aid; excessively demanding'
    },
    {
        id: 133,
        word: 'felicitous',
        pos: ['adj'],
        definition: 'Admirably appropriate, very well-suited for the occasion; pleasant, fortunate, marked by happiness'
    },
    {
        id: 134,
        word: 'faction',
        pos: ['noun'],
        definition: 'Group or clique within a larger organization; party strife and dissension'
    },
    {
        id: 135,
        word: 'fetid',
        pos: ['adj'],
        definition: 'Stinking; having an offensive smell'
    },
    {
        id: 136,
        word: 'fledgling',
        pos: ['noun', 'adj'],
        definition: 'A young bird that has just recently gotten its feathers, an inexperienced person (noun); new or inexperienced (adj)'
    },
    {
        id: 137,
        word: 'florid',
        pos: ['adj'],
        definition: 'Reddish or rosy; flowery, showy, or excessively fancy'
    },
    {
        id: 138,
        word: 'flout',
        pos: ['verb'],
        definition: 'Treat with disdain, contempt, or scorn (usually of rules)'
    },
    {
        id: 139,
        word: 'fluke',
        pos: ['noun'],
        definition: 'Stroke of luck, something accidentally successful'
    },
    {
        id: 140,
        word: 'forage',
        pos: ['verb'],
        definition: 'Wander in search of; rummage, hunt, make a raid'
    },
    {
        id: 141,
        word: 'ford',
        pos: ['noun', 'verb'],
        definition: 'Place where a river or similar body of water is shallow enough to walk or ride a vehicle across (noun); to cross at such a place (verb)'
    },
    {
        id: 142,
        word: 'forestall',
        pos: ['verb'],
        definition: 'Delay, hinder, prevent by taking action beforehand'
    },
    {
        id: 143,
        word: 'fortuitous',
        pos: ['adj'],
        definition: 'Happening by chance; lucky'
    },
    {
        id: 144,
        word: 'fracas',
        pos: ['noun'],
        definition: 'Noisy disturbance or fight; brawl'
    },
    {
        id: 145,
        word: 'fractious',
        pos: ['adj'],
        definition: 'Unruly, troublemaking; irritable'
    },
    {
        id: 146,
        word: 'frenetic',
        pos: ['adj'],
        definition: 'Wildly excited, frantic, distracted'
    },
    {
        id: 147,
        word: 'fulminate',
        pos: ['verb'],
        definition: 'Attack verbally in a vehement, thunderous way; explode, detonate'
    },
    {
        id: 148,
        word: 'furtive',
        pos: ['adj'],
        definition: 'Done secretly; stealthy, sly, shifty'
    },
    {
        id: 149,
        word: 'gambol',
        pos: ['verb'],
        definition: 'Frolic; skip or leap playfully'
    },
    {
        id: 150,
        word: 'garner',
        pos: ['verb'],
        definition: 'Gather and store; amass, collect'
    },
    {
        id: 151,
        word: 'goad',
        pos: ['verb'],
        definition: 'Spur on, stimulate, encourage; urge on (as cattle) with a pointed or electrically charged stick'
    },
    {
        id: 152,
        word: 'gouge',
        pos: ['noun', 'verb'],
        definition: "Scooping or digging tool, like a chisel, or a hole made with such a tool; cut or scoop out; force out a person's eye with one's thumb; swindle, extort money from"
    },
    {
        id: 153,
        word: 'graft',
        pos: ['verb', 'noun'],
        definition: "Insert part of a plant into another plant, where it continues to grow; join living tissue (such as skin) to part of the body where it will continue to live and grow; attach as if by grafting; the part so grafted (as in a graft of skin); the act of acquiring money or other benefits through illegal means, esp. by abusing one's power"
    },
    {
        id: 154,
        word: 'grandiloquent',
        pos: ['adj'],
        definition: 'Relating to lofty speech, esp. to the point of being pompous, overblown, bombastic'
    },
    {
        id: 155,
        word: 'grandstand',
        pos: ['verb'],
        definition: 'Perform showily in an attempt to impress onlookers'
    },
    {
        id: 156,
        word: 'grating',
        pos: ['adj'],
        definition: 'Irritating; harsh or discordant (of a noise); scraping'
    },
    {
        id: 157,
        word: 'grievous',
        pos: ['adj'],
        definition: 'Causing grief or suffering; very serious, grave; flagrant, outrageous'
    },
    {
        id: 158,
        word: 'grouse',
        pos: ['verb', 'noun'],
        definition: 'Complain or grumble; a reason for complaint'
    },
    {
        id: 159,
        word: 'grovel',
        pos: ['verb'],
        definition: "Creep or crawl with one's face to the ground, prostrate oneself as a token of subservience, degrade or abase oneself"
    },
    {
        id: 160,
        word: 'halcyon',
        pos: ['adj'],
        definition: 'Calm and peaceful, carefree; prosperous, successful, happy'
    },
    {
        id: 161,
        word: 'hallmark',
        pos: ['noun'],
        definition: 'A mark of indication of quality, purity, genuineness, etc.; any distinguishing characteristic'
    },
    {
        id: 162,
        word: 'hapless',
        pos: ['adj'],
        definition: 'Unlucky, unfortunate'
    },
    {
        id: 163,
        word: 'harangue',
        pos: ['noun', 'verb'],
        definition: 'Long, intense verbal attack, esp. when delivered publicly; to speak to in a forceful way'
    },
    {
        id: 164,
        word: 'harrow',
        pos: ['noun', 'verb'],
        definition: 'Farming tool that breaks up soil; painfully disturb or distress'
    },
    {
        id: 165,
        word: 'hegemony',
        pos: ['noun'],
        definition: 'Domination, authority; influence by one country over others socially, culturally, economically, etc'
    },
    {
        id: 166,
        word: 'hermetic',
        pos: ['adj'],
        definition: 'Airtight, sealed, isolated; reclusive; pertaining to alchemy, occult'
    },
    {
        id: 167,
        word: 'hew',
        pos: ['verb'],
        definition: 'Strike, chop, or hack (as with an axe, sword, etc.); make or shape something (such as a statue) with a cutting tool'
    },
    {
        id: 168,
        word: 'hoary',
        pos: ['adj'],
        definition: 'Very old, gray or white as from old age'
    },
    {
        id: 169,
        word: 'homage',
        pos: ['noun'],
        definition: 'Honor or respect demonstrated publicly'
    },
    {
        id: 170,
        word: 'husband',
        pos: ['verb'],
        definition: 'Manage prudently, sparingly, or economically; conserve'
    },
    {
        id: 171,
        word: 'iconoclast',
        pos: ['noun'],
        definition: 'Attacker of cherished beliefs or institutions'
    },
    {
        id: 172,
        word: 'idolatry',
        pos: ['noun'],
        definition: 'Idol worship; excessive or unthinking devotion or adoration'
    },
    {
        id: 173,
        word: 'idyllic',
        pos: ['adj'],
        definition: 'Presenting a positive, peaceful view of rural life; pleasant in a natural, simple way; a happy, enjoyable experience'
    },
    {
        id: 174,
        word: 'ignoble',
        pos: ['adj'],
        definition: 'Not noble; having mean, base, low motives; low quality'
    },
    {
        id: 175,
        word: 'imbue',
        pos: ['verb'],
        definition: 'Permeate or saturate, as dye in a fabric; influence throughout'
    },
    {
        id: 176,
        word: 'immutable',
        pos: ['adj'],
        definition: 'Unchangeable'
    },
    {
        id: 177,
        word: 'impasse',
        pos: ['noun'],
        definition: 'Position or road from which there is no escape; deadlock'
    },
    {
        id: 178,
        word: 'impassive',
        pos: ['adj'],
        definition: 'Not having or not showing physical feeling or emotion'
    },
    {
        id: 179,
        word: 'impecunious',
        pos: ['adj'],
        definition: 'Poor, without money'
    },
    {
        id: 180,
        word: 'imperious',
        pos: ['adj'],
        definition: 'Commanding, domineering; acting like a high-ranking person; urgent'
    },
    {
        id: 181,
        word: 'impermeable',
        pos: ['adj'],
        definition: 'Impassable, not allowing passage through (such as by a liquid)'
    },
    {
        id: 182,
        word: 'imperturbable',
        pos: ['adj'],
        definition: 'Calm, not able to be upset or agitated'
    },
    {
        id: 183,
        word: 'impervious',
        pos: ['adj'],
        definition: 'Impenetrable, not able to be harmed or emotionally disturbed'
    },
    {
        id: 184,
        word: 'impetuous',
        pos: ['adj'],
        definition: 'Passionately impulsive, marked by sudden, hasty emotion; forceful, violent'
    },
    {
        id: 185,
        word: 'impious',
        pos: ['adj'],
        definition: 'Not religious, lacking reverence, ungodly'
    },
    {
        id: 186,
        word: 'implacable',
        pos: ['adj'],
        definition: 'Relentless, unstoppable; not able to be appeased, calmed, or satisfied'
    },
    {
        id: 187,
        word: 'imprecation',
        pos: ['noun'],
        definition: 'Curse, prayer for harm to come to someone'
    },
    {
        id: 188,
        word: 'impugn',
        pos: ['verb'],
        definition: 'Attack the truth or integrity of'
    },
    {
        id: 189,
        word: 'impute',
        pos: ['verb'],
        definition: 'Credit, attribute; lay blame or responsibility for (sometimes falsely'
    },
    {
        id: 190,
        word: 'incarnadine',
        pos: ['adj', 'noun'],
        definition: 'Blood red or flesh-colored'
    },
    {
        id: 191,
        word: 'inconstancy',
        pos: ['noun'],
        definition: 'Fickleness, unreliability; the state of changing without good reason'
    },
    {
        id: 192,
        word: 'inculcate',
        pos: ['verb'],
        definition: 'Teach persistently, implant (an idea) in a person'
    },
    {
        id: 193,
        word: 'indefatigable',
        pos: ['adj'],
        definition: 'Untiring, not able to become fatigued'
    },
    {
        id: 194,
        word: 'indigence',
        pos: ['noun'],
        definition: 'Extreme poverty'
    },
    {
        id: 195,
        word: 'indolent',
        pos: ['adj'],
        definition: 'Lazy, slothful'
    },
    {
        id: 196,
        word: 'inert',
        pos: ['adj'],
        definition: 'Inactive; having little or no power to move'
    },
    {
        id: 197,
        word: 'inexorable',
        pos: ['adj'],
        definition: 'Relentless, unyielding; not moved by pleading'
    },
    {
        id: 198,
        word: 'infallible',
        pos: ['adj'],
        definition: 'Incapable of error; certain'
    },
    {
        id: 199,
        word: 'ingrate',
        pos: ['noun'],
        definition: 'Ungrateful person'
    },
    {
        id: 200,
        word: 'ingratiate',
        pos: ['verb'],
        definition: 'Make an effort to gain favor with'
    },
    {
        id: 201,
        word: 'inimical',
        pos: ['adj'],
        definition: 'Hostile, adverse, harmful'
    },
    {
        id: 202,
        word: 'iniquity',
        pos: ['noun'],
        definition: 'Injustice, wickedness, sin'
    },
    {
        id: 203,
        word: 'inordinate',
        pos: ['adj'],
        definition: 'Excessive, not within proper limits, unrestrained'
    },
    {
        id: 204,
        word: 'inquest',
        pos: ['noun'],
        definition: "Legal or judicial inquiry, especially before a jury and esp. made by a coroner into the cause of someone's death; the results of such an inquiry"
    },
    {
        id: 205,
        word: 'insensible',
        pos: ['adj'],
        definition: 'Incapable of feeling; unconscious, unaware'
    },
    {
        id: 206,
        word: 'insinuate',
        pos: ['verb'],
        definition: "Hint, suggest slyly; introduce (an idea) into someone's mind in a subtle, artful way"
    },
    {
        id: 207,
        word: 'insipid',
        pos: ['adj'],
        definition: 'Dull, stale, lacking taste or interest'
    },
    {
        id: 208,
        word: 'insular',
        pos: ['adj'],
        definition: 'narrow-minded, provincial; pertaining to an island; detached, standing alone'
    },
    {
        id: 209,
        word: 'insurrection',
        pos: ['noun'],
        definition: 'Rebellion or revolt against a government or similarly established authority'
    },
    {
        id: 210,
        word: 'inter',
        pos: ['verb'],
        definition: 'Bury (a dead body) or place in a tomb'
    },
    {
        id: 211,
        word: 'interplay',
        pos: ['noun'],
        definition: 'Interaction, reciprocal relationship or influence'
    },
    {
        id: 212,
        word: 'interregnum',
        pos: ['noun'],
        definition: 'A time in between two reigns or regimes during which there is no ruler; a period during which government does not function; any period of freedom from authority or break in interruption in a series'
    },
    {
        id: 213,
        word: 'intransigent',
        pos: ['adj'],
        definition: 'Refusing to compromise, inflexible, having extreme attitudes'
    },
    {
        id: 214,
        word: 'inundate',
        pos: ['verb'],
        definition: 'Flood, cover with water, overwhelm'
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
    this.allAnswersArray = [];
    this.arrayLen = ko.observable(model.length);
    this.correctCount = 0;
    this.correctAnswers = ko.observable(this.correctCount);
    this.wrongCount = 0;
    this.wrongAnswers = ko.observable(this.wrongCount);
    this.percentage = ko.observable((this.correctCount / (this.correctCount + this.wrongCount)) * 100);

    //copy original model
    var modelLength = model.length;
    for(var i = 0; i < modelLength; i++) {
        this.vocabArray().push(model[i]);
    };
    //create array of all definitions
    for(var i = 0; i < modelLength; i++) {
        this.allAnswersArray.push(model[i].definition);
    };


    this.getWord = function() {
        self.arrayLen = self.vocabArray().length;
        var randomIndex = Math.floor(Math.random() * self.arrayLen);
        var newWord = this.vocabArray()[randomIndex];
        self.vocabArray().splice(randomIndex, 1);
        return newWord;
    };

    this.startCard = function() {
        this.showCard(!this.showCard());
    };

    //this.currentWord(new Word(this.getWord()));
    //Populate an observable array of possible answers, then add the correct answer for the current word at a random index between 0-4
    this.getAnswers = function() {
        this.answerArray([]);
        for (i = 0; i < 4; i++) {
            var randomInt = Math.floor(Math.random() * this.allAnswersArray.length);
            //logic to make sure there are no duplicate answers
            if(this.answerArray.indexOf(this.allAnswersArray[randomInt]) == -1) {
                this.answerArray.push(this.allAnswersArray[randomInt]);
            } else {
                i -= 1;
            };
        };
        var correctAnswer = self.currentWord().def;
        var test = Math.floor(Math.random() * 4);
        this.answerArray.splice(test, 0, correctAnswer);
    };

    this.nextWord = function() {
        this.currentWord(new Word(this.getWord()));
        this.getAnswers();
    };

    this.checkAnswer = function() {
        var clickedAnswer = this.toString();
        if (clickedAnswer == self.currentWord().def){
            console.log(clickedAnswer);
            self.correctCount += 1;
            self.correctAnswers(self.correctCount);
            self.percentage(Number((self.correctCount / (self.correctCount + self.wrongCount)) * 100).toFixed(2));
            setTimeout(function() {
                self.nextWord();
            }, 1000);
        } else {
            self.wrongCount += 1;
            self.wrongAnswers(self.wrongCount);
            self.percentage(Number((self.correctCount / (self.correctCount + self.wrongCount)) * 100).toFixed(2));
        };
    };
};

viewModel = new ViewModel();

ko.applyBindings(viewModel);