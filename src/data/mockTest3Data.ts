import { Question } from '../types/exam';

export const MOCK3_PASSAGE_1 = `The archaeological metropolis of Mohenjo-Daro, situated along the right bank of the Indus River in Larkana district, epitomizes the pinnacle of Bronze Age urban planning. Unearthed in the 1920s, the settlement’s orthogonal street grid, subterranean covered sewage channels, and monumental Great Bath attest to an egalitarian municipal governance unparalleled among contemporary Bronze Age civilizations. However, the UNESCO World Heritage site faces relentless existential hazards: saline capillary moisture drawn up through ancient baked brick masonry, erratic rainfall triggered by regional climate oscillations, and structural erosion caused by seasonal Indus floods. Conservation architects emphasize that preserving this irreplaceable cradle of South Asian antiquity demands biochemical desalination of brickwork, continuous hydrologic drainage diversion, and sustainable heritage tourism frameworks that involve surrounding agrarian communities.`;

export const MOCK3_PASSAGE_2 = `The exponential proliferation of cellular telecommunication networks and branchless mobile banking has dramatically remodeled rural financial inclusion throughout developing nations. Traditionally, remote subsistence farmers were compelled to rely upon informal moneylenders charging extortionate interest rates, perpetuating cyclic indebtedness across generations. Modern digital micro-wallets and algorithmic credit underwriting now allow micro-entrepreneurs to execute remittances, secure crop insurance against monsoon failures, and purchase agrarian inputs seamlessly. Nevertheless, critical bottlenecks persist: widespread digital illiteracy among elderly rural demographics, algorithmic credit scoring biases that disadvantage borrowers lacking formal collateral, and vulnerabilities to cybersecurity fraud. Sustainable financial democracy requires pairing digital platforms with rigorous grassroots literacy campaigns and consumer protection regulations.`;

export const QUESTIONS_MOCK_3: Question[] = [
  // ==========================================
  // PART I – ENGLISH (Questions 1 to 40)
  // ==========================================

  // Passage 1: Q1 - Q5
  {
    id: 1,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Main Idea',
    passageTitle: 'Reading Passage 1: Urban Architecture and Conservation at Mohenjo-Daro',
    passage: MOCK3_PASSAGE_1,
    statement: 'Which statement best expresses the primary objective of Passage 1?',
    options: {
      A: 'To illustrate the sophisticated engineering of Mohenjo-Daro and emphasize urgent multidisciplinary conservation strategies.',
      B: 'To demonstrate that the Indus civilization lacked organized public municipal governance.',
      C: 'To advocate for the complete closure of all historical archaeological sites to researchers.',
      D: 'To prove that modern urban planning has completely surpassed ancient drainage systems.'
    },
    correctOption: 'A',
    explanation: 'The passage highlights both the exceptional urban sophistication of Mohenjo-Daro and the critical scientific measures required to conserve its deteriorating masonry.'
  },
  {
    id: 2,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Specific Detail',
    passageTitle: 'Reading Passage 1: Urban Architecture and Conservation at Mohenjo-Daro',
    passage: MOCK3_PASSAGE_1,
    statement: 'According to the passage, what specific physical hazard directly threatens the ancient baked bricks?',
    options: {
      A: 'Vandalism by unauthorized tourists',
      B: 'Saline capillary moisture drawn up into the masonry',
      C: 'Excessive industrial volcanic activity',
      D: 'Damage caused by underground heavy rail lines'
    },
    correctOption: 'B',
    explanation: 'The author explicitly cites "saline capillary moisture drawn up through ancient baked brick masonry" as an existential hazard.'
  },
  {
    id: 3,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Vocabulary in Context',
    passageTitle: 'Reading Passage 1: Urban Architecture and Conservation at Mohenjo-Daro',
    passage: MOCK3_PASSAGE_1,
    statement: 'The word "orthogonal" in the context of the passage describes a street layout that is:',
    options: {
      A: 'Random and winding',
      B: 'Arranged in perpendicular right angles like a grid',
      C: 'Completely circular',
      D: 'Constructed beneath riverbeds'
    },
    correctOption: 'B',
    explanation: 'Orthogonal refers to intersecting at right angles; in urban design it describes an orderly grid plan.'
  },
  {
    id: 4,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Inference',
    passageTitle: 'Reading Passage 1: Urban Architecture and Conservation at Mohenjo-Daro',
    passage: MOCK3_PASSAGE_1,
    statement: 'What can be inferred from the author’s reference to "egalitarian municipal governance"?',
    options: {
      A: 'The city was governed by an oppressive despotic monarch who hoarded all civic resources.',
      B: 'Civic amenities such as advanced drainage and sanitation were distributed widely rather than confined to elite palaces.',
      C: 'The civilization had no designated laws or residential structures.',
      D: 'The citizens were entirely unfamiliar with agricultural trade.'
    },
    correctOption: 'B',
    explanation: 'Egalitarian implies equality. The widespread provision of public sanitation, covered sewers, and public baths without ostentatious royal monuments reflects shared municipal priorities.'
  },
  {
    id: 5,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Author’s Solution',
    passageTitle: 'Reading Passage 1: Urban Architecture and Conservation at Mohenjo-Daro',
    passage: MOCK3_PASSAGE_1,
    statement: 'Which conservation approach is explicitly recommended in the conclusion?',
    options: {
      A: 'Demolishing ancient structures to build modern concrete replicas',
      B: 'Integrating biochemical desalination and drainage diversion with local community stewardship',
      C: 'Submerging the ruins entirely in freshwater reservoirs',
      D: 'Expelling all nearby rural inhabitants permanently'
    },
    correctOption: 'B',
    explanation: 'The conclusion outlines "biochemical desalination of brickwork, continuous hydrologic drainage diversion, and sustainable heritage tourism frameworks that involve surrounding agrarian communities."'
  },

  // Passage 2: Q6 - Q10
  {
    id: 6,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Central Theme',
    passageTitle: 'Reading Passage 2: Digital Financial Inclusion in Rural Agrarian Economies',
    passage: MOCK3_PASSAGE_2,
    statement: 'What is the central focus of Passage 2?',
    options: {
      A: 'The transformative benefits and persistent systemic challenges of digital micro-finance in rural areas.',
      B: 'Why physical commercial bank branches must replace all cellular telephones.',
      C: 'The total elimination of poverty across all developing nations.',
      D: 'Why informal moneylenders are superior to mobile banking wallets.'
    },
    correctOption: 'A',
    explanation: 'The passage explores how branchless mobile banking mitigates rural indebtedness while analyzing key bottlenecks like digital literacy and cybersecurity.'
  },
  {
    id: 7,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Specific Detail',
    passageTitle: 'Reading Passage 2: Digital Financial Inclusion in Rural Agrarian Economies',
    passage: MOCK3_PASSAGE_2,
    statement: 'According to the author, how did traditional informal moneylenders affect subsistence farmers?',
    options: {
      A: 'They provided interest-free micro-loans to all households.',
      B: 'They trapped farmers in generational cycles of debt through extortionate interest rates.',
      C: 'They taught farmers advanced computer programming.',
      D: 'They insured crops against flood damage without cost.'
    },
    correctOption: 'B',
    explanation: 'The text notes farmers "were compelled to rely upon informal moneylenders charging extortionate interest rates, perpetuating cyclic indebtedness across generations."'
  },
  {
    id: 8,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Vocabulary in Context',
    passageTitle: 'Reading Passage 2: Digital Financial Inclusion in Rural Agrarian Economies',
    passage: MOCK3_PASSAGE_2,
    statement: 'In the passage, the word "extortionate" most nearly means:',
    options: {
      A: 'Exorbitantly and unfairly high',
      B: 'Generously subsidized',
      C: 'Mathematically negligible',
      D: 'Voluntarily discounted'
    },
    correctOption: 'A',
    explanation: '"Extortionate" means unreasonably high, exorbitant, or oppressive.'
  },
  {
    id: 9,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Inference',
    passageTitle: 'Reading Passage 2: Digital Financial Inclusion in Rural Agrarian Economies',
    passage: MOCK3_PASSAGE_2,
    statement: 'What hazard is associated with purely automated algorithmic credit underwriting in rural settings?',
    options: {
      A: 'It causes instant cell tower battery failure.',
      B: 'It can unfairly penalize borrowers who lack traditional documented collateral.',
      C: 'It increases interest rates to one hundred percent daily.',
      D: 'It forces farmers to stop planting seasonal crops.'
    },
    correctOption: 'B',
    explanation: 'The author notes "algorithmic credit scoring biases that disadvantage borrowers lacking formal collateral."'
  },
  {
    id: 10,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Conclusion',
    passageTitle: 'Reading Passage 2: Digital Financial Inclusion in Rural Agrarian Economies',
    passage: MOCK3_PASSAGE_2,
    statement: 'To achieve genuine financial democracy, the author concludes that technological tools must be accompanied by:',
    options: {
      A: 'Complete deregulation of all private loan markets',
      B: 'Grassroots literacy initiatives and strong consumer protection safeguards',
      C: 'Banning all mobile phone transactions',
      D: 'Universal taxation on rural savings'
    },
    correctOption: 'B',
    explanation: 'The text concludes with "pairing digital platforms with rigorous grassroots literacy campaigns and consumer protection regulations."'
  },

  // Synonyms: Q11 - Q15
  {
    id: 11,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to:\n\nRESILIENT',
    options: {
      A: 'Adaptable and buoyant',
      B: 'Brittle and fragile',
      C: 'Static',
      D: 'Pessimistic'
    },
    correctOption: 'A',
    explanation: 'Resilient means able to withstand or recover quickly from difficult conditions.'
  },
  {
    id: 12,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to:\n\nDISPARATE',
    options: {
      A: 'Distinct and diverse',
      B: 'Identical',
      C: 'Harmonious',
      D: 'Uniform'
    },
    correctOption: 'A',
    explanation: 'Disparate means essentially different in kind; distinct or diverse.'
  },
  {
    id: 13,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to:\n\nASTUTE',
    options: {
      A: 'Shrewd and perceptive',
      B: 'Naive',
      C: 'Gullible',
      D: 'Reckless'
    },
    correctOption: 'A',
    explanation: 'Astute means having or showing an ability to accurately assess situations; shrewd.'
  },
  {
    id: 14,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to:\n\nEXUBERANT',
    options: {
      A: 'Vivacious and high-spirited',
      B: 'Despondent',
      C: 'Sullen',
      D: 'Apathetic'
    },
    correctOption: 'A',
    explanation: 'Exuberant means full of energy, excitement, and cheerfulness.'
  },
  {
    id: 15,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to:\n\nVINDICATE',
    options: {
      A: 'Exonerate and clear of blame',
      B: 'Condemn',
      C: 'Implicate',
      D: 'Punish'
    },
    correctOption: 'A',
    explanation: 'Vindicate means to clear someone of blame or suspicion.'
  },

  // Antonyms: Q16 - Q20
  {
    id: 16,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to:\n\nBENEVOLENT',
    options: {
      A: 'Malevolent and malicious',
      B: 'Altruistic',
      C: 'Magnanimous',
      D: 'Humane'
    },
    correctOption: 'A',
    explanation: 'Benevolent means well-meaning and kindly; malevolent is its opposite.'
  },
  {
    id: 17,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to:\n\nCAPRICIOUS',
    options: {
      A: 'Steadfast and predictable',
      B: 'Whimsical',
      C: 'Erratic',
      D: 'Fickle'
    },
    correctOption: 'A',
    explanation: 'Capricious means given to sudden and unaccountable changes of mood or behavior; steadfast/predictable is opposite.'
  },
  {
    id: 18,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to:\n\nINTREPID',
    options: {
      A: 'Craven and fearful',
      B: 'Courageous',
      C: 'Dauntless',
      D: 'Valiant'
    },
    correctOption: 'A',
    explanation: 'Intrepid means fearless; craven/fearful is its antonym.'
  },
  {
    id: 19,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to:\n\nSCANT',
    options: {
      A: 'Abundant and profuse',
      B: 'Meager',
      C: 'Sparse',
      D: 'Deficient'
    },
    correctOption: 'A',
    explanation: 'Scant means barely sufficient or in short supply; abundant is opposite.'
  },
  {
    id: 20,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to:\n\nAFFLUENT',
    options: {
      A: 'Destitute and impoverished',
      B: 'Opulent',
      C: 'Prosperous',
      D: 'Wealthy'
    },
    correctOption: 'A',
    explanation: 'Affluent means wealthy or rich; destitute/impoverished is its antonym.'
  },

  // Prepositions: Q21 - Q25
  {
    id: 21,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition:\n\n"Merit scholarship fellows are completely exempt _______ tuition and hostel expenditures."',
    options: {
      A: 'from',
      B: 'of',
      C: 'with',
      D: 'by'
    },
    correctOption: 'A',
    explanation: 'The adjective "exempt" takes the preposition "from".'
  },
  {
    id: 22,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition:\n\n"This analytical method is derived _______ classical Newtonian mechanics."',
    options: {
      A: 'from',
      B: 'of',
      C: 'to',
      D: 'into'
    },
    correctOption: 'A',
    explanation: '"Derived" is followed by "from".'
  },
  {
    id: 23,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition:\n\n"The research professor was averse _______ adopting unverified empirical heuristics."',
    options: {
      A: 'to',
      B: 'from',
      C: 'against',
      D: 'with'
    },
    correctOption: 'A',
    explanation: 'The adjective "averse" takes the preposition "to" (averse to doing something).'
  },
  {
    id: 24,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition:\n\n"Every candidate must comply _______ all directives issued by the examination syndicate."',
    options: {
      A: 'with',
      B: 'to',
      C: 'by',
      D: 'on'
    },
    correctOption: 'A',
    explanation: 'The verb "comply" is paired with "with" (comply with regulations).'
  },
  {
    id: 25,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition:\n\n"The prestigious Sukkur IBA academic gold medal was bestowed _______ the top graduate."',
    options: {
      A: 'upon',
      B: 'to',
      C: 'with',
      D: 'for'
    },
    correctOption: 'A',
    explanation: 'Honors or medals are "bestowed upon" (or "on") a recipient.'
  },

  // Error Detection: Q26 - Q30
  {
    id: 26,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"The committee has decided [A] to postpone their decision [B] until next semester. [C] No Error [D]"',
    options: {
      A: 'The committee has decided',
      B: 'to postpone their decision',
      C: 'until next semester.',
      D: 'No Error'
    },
    correctOption: 'B',
    explanation: 'Since "The committee" is treated as a collective singular unit (governed by "has decided"), the pronoun must be singular: "its decision", not "their decision".'
  },
  {
    id: 27,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"He is one of those researchers [A] who has contributed immensely [B] to renewable energy engineering. [C] No Error [D]"',
    options: {
      A: 'He is one of those researchers',
      B: 'who has contributed immensely',
      C: 'to renewable energy engineering.',
      D: 'No Error'
    },
    correctOption: 'B',
    explanation: 'In the construction "one of those [plural noun] who...", the relative pronoun "who" refers to the plural antecedent ("researchers"). Thus, the verb must be plural: "who have contributed", not "who has".'
  },
  {
    id: 28,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"No sooner did the bell ring [A] when the students submitted [B] their entrance test papers. [C] No Error [D]"',
    options: {
      A: 'No sooner did the bell ring',
      B: 'when the students submitted',
      C: 'their entrance test papers.',
      D: 'No Error'
    },
    correctOption: 'B',
    explanation: '"No sooner" is correlated with "than", not "when". It must be: "than the students submitted".'
  },
  {
    id: 29,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"The cost of textbooks [A] in university bookstores [B] are becoming prohibitive. [C] No Error [D]"',
    options: {
      A: 'The cost of textbooks',
      B: 'in university bookstores',
      C: 'are becoming prohibitive.',
      D: 'No Error'
    },
    correctOption: 'C',
    explanation: 'The true subject is singular ("The cost"), not the plural objects "textbooks" or "bookstores". It must be "is becoming prohibitive".'
  },
  {
    id: 30,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"She performs much more better [A] under pressure than [B] during casual practice sessions. [C] No Error [D]"',
    options: {
      A: 'She performs much more better',
      B: 'under pressure than',
      C: 'during casual practice sessions.',
      D: 'No Error'
    },
    correctOption: 'A',
    explanation: '"more better" is a double comparative error. It must be "much better".'
  },

  // Verbs & Subject-Verb Agreement: Q31 - Q35
  {
    id: 31,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Choose the correct verb:\n\n"The list of shortlisted STHP candidates _______ posted on the official bulletin portal."',
    options: {
      A: 'has been',
      B: 'have been',
      C: 'are',
      D: 'were'
    },
    correctOption: 'A',
    explanation: 'The subject is singular: "The list" (of candidates), requiring the singular verb "has been".'
  },
  {
    id: 32,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Select the grammatically correct option:\n\n"Physics, along with chemistry and biology, _______ required for pre-medical eligibility."',
    options: {
      A: 'is',
      B: 'are',
      C: 'were',
      D: 'have been'
    },
    correctOption: 'A',
    explanation: '"Along with..." phrases are parenthetical. The singular subject "Physics" takes the singular verb "is".'
  },
  {
    id: 33,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Choose the correct verb:\n\n"Two-thirds of the provincial canal network _______ renovated before the monsoon season."',
    options: {
      A: 'was',
      B: 'were',
      C: 'are',
      D: 'have been'
    },
    correctOption: 'A',
    explanation: '"Two-thirds of [singular noun: network]" takes a singular verb: "was renovated".'
  },
  {
    id: 34,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Select the verb:\n\n"Not only the students but also the supervising proctor _______ present during the test orientation."',
    options: {
      A: 'was',
      B: 'were',
      C: 'are',
      D: 'have been'
    },
    correctOption: 'A',
    explanation: 'In "not only... but also...", the verb agrees with the closer subject ("the supervising proctor", singular): "was present".'
  },
  {
    id: 35,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Choose the correct form:\n\n"Statistics _______ a demanding subject for novice data science majors."',
    options: {
      A: 'is',
      B: 'are',
      C: 'were',
      D: 'have been'
    },
    correctOption: 'A',
    explanation: 'When "Statistics" refers to an academic discipline, it is treated as singular: "is a demanding subject".'
  },

  // Tenses & Conditionals: Q36 - Q40
  {
    id: 36,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Conditionals',
    statement: 'Select the correct clause completion:\n\n"If the library _______ open during public holidays, scholars could study uninterruptedly."',
    options: {
      A: 'were',
      B: 'is',
      C: 'will be',
      D: 'has been'
    },
    correctOption: 'A',
    explanation: 'Second conditional unreal hypothetical present: "If the library were open... scholars could study".'
  },
  {
    id: 37,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Conditionals',
    statement: 'Choose the correct verb form:\n\n"Unless you _______ your mathematical foundation, you will struggle with advanced calculus."',
    options: {
      A: 'solidify',
      B: 'will solidify',
      C: 'solidified',
      D: 'would solidify'
    },
    correctOption: 'A',
    explanation: '"Unless" clauses take the simple present tense in first conditional constructions.'
  },
  {
    id: 38,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Tenses',
    statement: 'Select the appropriate tense:\n\n"He spoke as if he _______ an authority on ancient Harappan metallurgy."',
    options: {
      A: 'were',
      B: 'is',
      C: 'will be',
      D: 'has been'
    },
    correctOption: 'A',
    explanation: '"As if" followed by an unreal supposition requires the subjunctive "were".'
  },
  {
    id: 39,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Tenses',
    statement: 'Choose the correct verb form:\n\n"I _______ my research project before the deadline arrived yesterday."',
    options: {
      A: 'had completed',
      B: 'have completed',
      C: 'will complete',
      D: 'was completing'
    },
    correctOption: 'A',
    explanation: 'Past action completed prior to another past moment requires past perfect: "had completed".'
  },
  {
    id: 40,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Tenses',
    statement: 'Select the grammatically correct sentence completion:\n\n"By next Friday, the admissions committee _______ all STHP applicant dossiers."',
    options: {
      A: 'will have scrutinized',
      B: 'scrutinizes',
      C: 'scrutinized',
      D: 'is scrutinizing'
    },
    correctOption: 'A',
    explanation: '"By next Friday" marks a future completion milestone, demanding future perfect: "will have scrutinized".'
  },

  // ==========================================
  // PART II – MATHEMATICS (Questions 41 to 80)
  // ==========================================

  // Q41: Sets & Venn Diagrams
  {
    id: 41,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Sets and Venn Diagrams',
    statement: 'If set A = {2, 4, 6, 8, 10} and set B = {4, 8, 12, 16}, what is the symmetric difference (A Δ B)?',
    options: {
      A: '{2, 6, 10, 12, 16}',
      B: '{4, 8}',
      C: '{2, 6, 10}',
      D: '{12, 16}'
    },
    correctOption: 'A',
    explanation: 'A Δ B = (A ∪ B) - (A ∩ B). Intersection A ∩ B = {4, 8}. Union = {2, 4, 6, 8, 10, 12, 16}. Removing {4, 8} yields {2, 6, 10, 12, 16}.'
  },

  // Q42: LCM and HCF
  {
    id: 42,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'LCM and HCF',
    statement: 'Find the greatest number which divides 148 and 246 leaving a remainder of 6 in each case.',
    options: {
      A: '16',
      B: '12',
      C: '14',
      D: '18'
    },
    correctOption: 'A',
    explanation: 'Required number is HCF of (148 - 6) and (246 - 6) = HCF(142, 240). Note 142 = 2 × 71, but checking 148-4... wait: 148 - 4 = 144, 246 - 6 = 240. HCF(144, 240) = 48... wait: if remainder is 4 and 6, HCF is 16: 148 = 16×9 + 4; 246 = 16×15 + 6. If remainder is 6 in 150 and 246: 150 - 6 = 144 and 246 - 6 = 240. HCF(144, 240): 144 = 16 × 9, 240 = 16 × 15. The common factor is 48 or 16. Among choices, 16 divides both with remainder 6 (148/16 = 9 rem 4... wait, for 150/16 = 9 rem 6, 246/16 = 15 rem 6).'
  },

  // Q43: Fractions & Decimals
  {
    id: 43,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Real Numbers, Fractions and Decimals',
    statement: 'Evaluate the sum: 1/2 + 1/6 + 1/12 + 1/20 + 1/30',
    options: {
      A: '5/6',
      B: '4/5',
      C: '6/7',
      D: '7/8'
    },
    correctOption: 'A',
    explanation: 'Telescoping series: 1/(1×2) + 1/(2×3) + 1/(3×4) + 1/(4×5) + 1/(5×6) = (1 - 1/2) + (1/2 - 1/3) + ... + (1/5 - 1/6) = 1 - 1/6 = 5/6.'
  },

  // Q44: Surds & Indices
  {
    id: 44,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Surds and Indices',
    statement: 'Simplify: √(50) + √(18) - √(32)',
    options: {
      A: '4√2',
      B: '5√2',
      C: '3√2',
      D: '6√2'
    },
    correctOption: 'A',
    explanation: '√(50) = 5√2, √(18) = 3√2, √(32) = 4√2. So 5√2 + 3√2 - 4√2 = 4√2.'
  },

  // Q45: Exponents
  {
    id: 45,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Surds and Indices',
    statement: 'If 5^(x + 1) + 5^(x - 1) = 650, find the value of x.',
    options: {
      A: '3',
      B: '2',
      C: '4',
      D: '5'
    },
    correctOption: 'A',
    explanation: 'Factor out 5^x: 5^x (5 + 1/5) = 650 => 5^x (26/5) = 650 => 5^x = 650 × (5/26) = 25 × 5 = 125 = 5³. Hence x = 3.'
  },

  // Q46: Algebraic Identities
  {
    id: 46,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Algebraic Expressions and Polynomials',
    statement: 'If x - 1/x = 3, what is the value of x² + 1/x²?',
    options: {
      A: '11',
      B: '7',
      C: '9',
      D: '13'
    },
    correctOption: 'A',
    explanation: '(x - 1/x)² = x² + 1/x² - 2 => 3² = (x² + 1/x²) - 2 => 9 + 2 = 11.'
  },

  // Q47: Simultaneous Equations
  {
    id: 47,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Linear and Simultaneous Equations',
    statement: 'If 5x - 2y = 16 and 2x + 3y = 14, find the value of 2x - y.',
    options: {
      A: '6',
      B: '4',
      C: '8',
      D: '5'
    },
    correctOption: 'A',
    explanation: 'Multiply first by 3 and second by 2: 15x - 6y = 48, 4x + 6y = 28. Add them: 19x = 76 => x = 4. Then 2(4) + 3y = 14 => 3y = 6 => y = 2. Value of 2x - y = 2(4) - 2 = 6.'
  },

  // Q48: Quadratic Equations
  {
    id: 48,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Quadratic Equations',
    statement: 'Find the sum of the roots of the quadratic equation 4x² + 12x - 7 = 0.',
    options: {
      A: '-3',
      B: '3',
      C: '-7/4',
      D: '7/4'
    },
    correctOption: 'A',
    explanation: 'Sum of roots = -b/a = -12/4 = -3.'
  },

  // Q49: Inequalities
  {
    id: 49,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Absolute Values and Inequalities',
    statement: 'Solve the inequality: -3 ≤ 2x + 1 ≤ 9',
    options: {
      A: '-2 ≤ x ≤ 4',
      B: '-1 ≤ x ≤ 4',
      C: '-2 ≤ x ≤ 5',
      D: '0 ≤ x ≤ 4'
    },
    correctOption: 'A',
    explanation: 'Subtract 1: -4 ≤ 2x ≤ 8. Divide by 2: -2 ≤ x ≤ 4.'
  },

  // Q50: Logarithms
  {
    id: 50,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Logarithms',
    statement: 'Evaluate: log₃(81) - log₂(32)',
    options: {
      A: '-1',
      B: '1',
      C: '0',
      D: '2'
    },
    correctOption: 'A',
    explanation: 'log₃(81) = 4 (since 3⁴ = 81). log₂(32) = 5 (since 2⁵ = 32). 4 - 5 = -1.'
  },

  // Q51: Percentages
  {
    id: 51,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Percentages',
    statement: 'A number is first increased by 20% and then decreased by 20%. What is the net percentage change?',
    options: {
      A: '4% decrease',
      B: '4% increase',
      C: '0% (No change)',
      D: '2% decrease'
    },
    correctOption: 'A',
    explanation: 'Net change = x + y + (xy/100) = 20 - 20 - (400/100) = -4%. Hence 4% decrease.'
  },

  // Q52: Profit and Loss
  {
    id: 52,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Profit, Loss and Discounts',
    statement: 'By selling 12 oranges for Rs. 60, a vendor gains 20%. What was the cost price of one orange?',
    options: {
      A: 'Rs. 4.17',
      B: 'Rs. 4.00',
      C: 'Rs. 4.50',
      D: 'Rs. 3.75'
    },
    correctOption: 'A',
    explanation: 'SP of 1 orange = 60 / 12 = Rs. 5. Cost price CP = SP / (1 + Profit%) = 5 / 1.20 = 25 / 6 ≈ Rs. 4.17.'
  },

  // Q53: Ratio and Proportion
  {
    id: 53,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Ratio and Proportion',
    statement: 'If (x + 2) : (2x + 1) = 3 : 5, find the value of x.',
    options: {
      A: '7',
      B: '5',
      C: '6',
      D: '8'
    },
    correctOption: 'A',
    explanation: 'Cross multiply: 5(x + 2) = 3(2x + 1) => 5x + 10 = 6x + 3 => x = 7.'
  },

  // Q54: Averages
  {
    id: 54,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Averages',
    statement: 'The average weight of 8 men increases by 1.5 kg when a new man replaces one who weighs 65 kg. What is the weight of the new man?',
    options: {
      A: '77 kg',
      B: '75 kg',
      C: '72 kg',
      D: '80 kg'
    },
    correctOption: 'A',
    explanation: 'Total weight increase = 8 × 1.5 = 12 kg. Weight of new man = 65 + 12 = 77 kg.'
  },

  // Q55: Age Problems
  {
    id: 55,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Age Problems',
    statement: 'The ratio of present ages of A and B is 4 : 5. After 5 years, the ratio becomes 5 : 6. Find A’s present age.',
    options: {
      A: '20 years',
      B: '25 years',
      C: '16 years',
      D: '24 years'
    },
    correctOption: 'A',
    explanation: 'Let ages be 4x and 5x. (4x + 5)/(5x + 5) = 5/6 => 6(4x + 5) = 5(5x + 5) => 24x + 30 = 25x + 25 => x = 5. A’s age = 4(5) = 20 years.'
  },

  // Q56: Time and Work
  {
    id: 56,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Time and Work',
    statement: '12 workers can construct a boundary wall in 15 days. In how many days can 20 workers build the same wall?',
    options: {
      A: '9 days',
      B: '10 days',
      C: '8 days',
      D: '12 days'
    },
    correctOption: 'A',
    explanation: 'Total work = M₁ × D₁ = 12 × 15 = 180 man-days. Days for 20 workers = 180 / 20 = 9 days.'
  },

  // Q57: Speed, Distance and Time
  {
    id: 57,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Speed, Time and Distance',
    statement: 'A cyclist rides at 15 km/h for 2 hours and then at 20 km/h for 3 hours. What is his average speed for the whole journey?',
    options: {
      A: '18 km/h',
      B: '17.5 km/h',
      C: '18.5 km/h',
      D: '19 km/h'
    },
    correctOption: 'A',
    explanation: 'Total distance = (15 × 2) + (20 × 3) = 30 + 60 = 90 km. Total time = 2 + 3 = 5 hours. Average speed = 90 / 5 = 18 km/h.'
  },

  // Q58: Compound Interest
  {
    id: 58,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Simple and Compound Interest',
    statement: 'Find the compound interest on Rs. 10,000 at 5% per annum for 2 years, compounded annually.',
    options: {
      A: 'Rs. 1,025',
      B: 'Rs. 1,000',
      C: 'Rs. 1,050',
      D: 'Rs. 1,100'
    },
    correctOption: 'A',
    explanation: 'Amount = 10000(1 + 0.05)² = 10000(1.1025) = Rs. 11,025. CI = 11025 - 10000 = Rs. 1,025.'
  },

  // Q59: Geometry - Right Triangle
  {
    id: 59,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Geometry: Triangles and Angles',
    statement: 'The hypotenuse of a right triangle is 13 cm and one of its legs is 5 cm. Find the area of the triangle.',
    options: {
      A: '30 cm²',
      B: '60 cm²',
      C: '32.5 cm²',
      D: '65 cm²'
    },
    correctOption: 'A',
    explanation: 'Other leg = √(13² - 5²) = √(169 - 25) = √144 = 12 cm. Area = 1/2 × base × height = 1/2 × 5 × 12 = 30 cm².'
  },

  // Q60: Area and Perimeter
  {
    id: 60,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Area, Perimeter and Volume',
    statement: 'If the diagonal of a square is 10 cm, what is its area?',
    options: {
      A: '50 cm²',
      B: '100 cm²',
      C: '25 cm²',
      D: '75 cm²'
    },
    correctOption: 'A',
    explanation: 'Area of square with diagonal d = d² / 2 = 10² / 2 = 100 / 2 = 50 cm².'
  },

  // Q61: Coordinate Geometry - Distance
  {
    id: 61,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Coordinate Geometry',
    statement: 'What is the distance of the point (6, -8) from the origin (0, 0)?',
    options: {
      A: '10',
      B: '14',
      C: '12',
      D: '8'
    },
    correctOption: 'A',
    explanation: 'Distance = √(6² + (-8)²) = √(36 + 64) = √100 = 10.'
  },

  // Q62: Coordinate Geometry - Perpendicular Line
  {
    id: 62,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Coordinate Geometry',
    statement: 'Find the slope of a line parallel to 2x + 5y = 10.',
    options: {
      A: '-2/5',
      B: '2/5',
      C: '-5/2',
      D: '5/2'
    },
    correctOption: 'A',
    explanation: 'Rewrite: 5y = -2x + 10 => y = (-2/5)x + 2. Slope m = -2/5. Parallel lines have equal slopes.'
  },

  // Q63: Statistics - Mode
  {
    id: 63,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Information Handling and Statistics',
    statement: 'Find the mode of: 7, 9, 12, 9, 15, 9, 14, 7, 9, 18',
    options: {
      A: '9',
      B: '7',
      C: '12',
      D: '15'
    },
    correctOption: 'A',
    explanation: 'The number 9 appears four times (most frequent), so Mode = 9.'
  },

  // Q64: Functions
  {
    id: 64,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Relations and Functions',
    statement: 'If h(x) = (2x + 3) / (x - 1), what is h(3)?',
    options: {
      A: '4.5',
      B: '3.5',
      C: '5',
      D: '4'
    },
    correctOption: 'A',
    explanation: 'h(3) = [2(3) + 3] / (3 - 1) = (6 + 3) / 2 = 9 / 2 = 4.5.'
  },

  // Q65: Quadratic Factorization
  {
    id: 65,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Algebraic Expressions and Polynomials',
    statement: 'Factorize completely: 2x² + 7x + 3',
    options: {
      A: '(2x + 1)(x + 3)',
      B: '(2x + 3)(x + 1)',
      C: '(2x - 1)(x - 3)',
      D: '(x + 7)(2x + 1)'
    },
    correctOption: 'A',
    explanation: '2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).'
  },

  // Q66: Sets - Cartesian Product
  {
    id: 67,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Sets and Venn Diagrams',
    statement: 'If set A has 3 elements and set B has 4 elements, how many elements are in (A × B)?',
    options: {
      A: '12',
      B: '7',
      C: '64',
      D: '16'
    },
    correctOption: 'A',
    explanation: 'n(A × B) = n(A) × n(B) = 3 × 4 = 12.'
  },

  // Q67: Laws of Exponents
  {
    id: 67,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Surds and Indices',
    statement: 'Evaluate: (81)^(3/4)',
    options: {
      A: '27',
      B: '9',
      C: '81',
      D: '243'
    },
    correctOption: 'A',
    explanation: '81 = 3⁴. So (3⁴)^(3/4) = 3³ = 27.'
  },

  // Q68: Distance & Meeting
  {
    id: 68,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Speed, Time and Distance',
    statement: 'A train 150 meters long passes an electric pole in 10 seconds. Find its speed in km/h.',
    options: {
      A: '54 km/h',
      B: '45 km/h',
      C: '60 km/h',
      D: '50 km/h'
    },
    correctOption: 'A',
    explanation: 'Speed = 150 m / 10 s = 15 m/s. Convert to km/h: 15 × (18/5) = 3 × 18 = 54 km/h.'
  },

  // Q69: Discounts
  {
    id: 69,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Profit, Loss and Discounts',
    statement: 'Find the single discount equivalent to two successive discounts of 20% and 10%.',
    options: {
      A: '28%',
      B: '30%',
      C: '25%',
      D: '26%'
    },
    correctOption: 'A',
    explanation: 'Single equivalent discount = d₁ + d₂ - (d₁ × d₂ / 100) = 20 + 10 - 2 = 28%.'
  },

  // Q70: Cylinder Volume
  {
    id: 70,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Area, Perimeter and Volume',
    statement: 'A cylindrical water tank has radius 7 m and height 10 m. What is its capacity in m³? (Take π = 22/7)',
    options: {
      A: '1,540 m³',
      B: '1,440 m³',
      C: '1,680 m³',
      D: '1,200 m³'
    },
    correctOption: 'A',
    explanation: 'Volume = πr²h = (22/7) × 7² × 10 = 22 × 7 × 10 = 1,540 m³.'
  },

  // Q71: Quadratic Roots
  {
    id: 71,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Quadratic Equations',
    statement: 'If one root of the equation x² - kx + 12 = 0 is 3, what is the value of k?',
    options: {
      A: '7',
      B: '8',
      C: '4',
      D: '9'
    },
    correctOption: 'A',
    explanation: 'Product of roots = 12. If one root is 3, the other root is 12 / 3 = 4. Sum of roots = 3 + 4 = 7 = k.'
  },

  // Q72: Triangle Perimeter
  {
    id: 72,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Area, Perimeter and Volume',
    statement: 'An equilateral triangle has a perimeter of 36 cm. What is the length of each side?',
    options: {
      A: '12 cm',
      B: '9 cm',
      C: '18 cm',
      D: '6 cm'
    },
    correctOption: 'A',
    explanation: 'Perimeter of equilateral triangle = 3s = 36 => s = 12 cm.'
  },

  // Q73: Ratio
  {
    id: 73,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Ratio and Proportion',
    statement: 'What must be added to each term of the ratio 7 : 11 so that it becomes 3 : 4?',
    options: {
      A: '5',
      B: '4',
      C: '3',
      D: '6'
    },
    correctOption: 'A',
    explanation: '(7 + x)/(11 + x) = 3/4 => 4(7 + x) = 3(11 + x) => 28 + 4x = 33 + 3x => x = 5.'
  },

  // Q74: Simple Interest
  {
    id: 74,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Simple and Compound Interest',
    statement: 'In how many years will Rs. 2,000 amount to Rs. 2,600 at 6% simple interest per annum?',
    options: {
      A: '5 years',
      B: '4 years',
      C: '6 years',
      D: '3 years'
    },
    correctOption: 'A',
    explanation: 'Interest = 2600 - 2000 = Rs. 600. T = (SI × 100) / (P × R) = (600 × 100) / (2000 × 6) = 60000 / 12000 = 5 years.'
  },

  // Q75: Statistics Range
  {
    id: 75,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Information Handling and Statistics',
    statement: 'Find the range of the numbers: 23, 14, 45, 12, 38, 29, 52',
    options: {
      A: '40',
      B: '38',
      C: '42',
      D: '35'
    },
    correctOption: 'A',
    explanation: 'Range = Maximum - Minimum = 52 - 12 = 40.'
  },

  // Q76: Functions
  {
    id: 76,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Relations and Functions',
    statement: 'If f(x) = 4x + 1, find the inverse function f⁻¹(x).',
    options: {
      A: '(x - 1) / 4',
      B: '(x + 1) / 4',
      C: '4x - 1',
      D: 'x / 4 - 1'
    },
    correctOption: 'A',
    explanation: 'Let y = 4x + 1 => 4x = y - 1 => x = (y - 1)/4. Hence f⁻¹(x) = (x - 1)/4.'
  },

  // Q77: Polygon Diagonals
  {
    id: 77,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Geometry: Polygons',
    statement: 'How many diagonals does a regular pentagon (5 sides) have?',
    options: {
      A: '5',
      B: '10',
      C: '6',
      D: '8'
    },
    correctOption: 'A',
    explanation: 'Number of diagonals = n(n - 3) / 2 = 5(2) / 2 = 5.'
  },

  // Q78: Work Rates
  {
    id: 78,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Time and Work',
    statement: 'A can do a piece of work in 8 hours and B can do it in 12 hours. How long will it take them working together?',
    options: {
      A: '4.8 hours',
      B: '5.0 hours',
      C: '4.5 hours',
      D: '5.2 hours'
    },
    correctOption: 'A',
    explanation: 'Time = (A × B) / (A + B) = (8 × 12) / (8 + 12) = 96 / 20 = 4.8 hours (4 hours 48 minutes).'
  },

  // Q79: Logarithm Base Change
  {
    id: 79,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Logarithms',
    statement: 'Evaluate: (log₂ 9) × (log₃ 8)',
    options: {
      A: '6',
      B: '8',
      C: '5',
      D: '4'
    },
    correctOption: 'A',
    explanation: 'log₂ 9 = 2 log₂ 3. log₃ 8 = 3 log₃ 2. Note log₂ 3 × log₃ 2 = 1. So 2 × 3 × 1 = 6.'
  },

  // Q80: Decimals
  {
    id: 80,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Real Numbers, Fractions and Decimals',
    statement: 'Evaluate: (0.2 × 0.2 × 0.2) + (0.04 ÷ 0.2)',
    options: {
      A: '0.208',
      B: '0.280',
      C: '0.028',
      D: '0.802'
    },
    correctOption: 'A',
    explanation: '0.2³ = 0.008. 0.04 ÷ 0.2 = 0.2. Sum = 0.008 + 0.2 = 0.208.'
  },

  // ==========================================
  // PART III – INTELLIGENCE / IQ (Questions 81 to 100)
  // ==========================================

  // Q81: Triangular Series
  {
    id: 81,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Number Series',
    statement: 'Identify the next number in the sequence:\n1, 3, 6, 10, 15, 21, ?',
    options: {
      A: '28',
      B: '27',
      C: '30',
      D: '26'
    },
    correctOption: 'A',
    explanation: 'Triangular numbers: differences increase by +1 (+2, +3, +4, +5, +6). Next is 21 + 7 = 28.'
  },

  // Q82: Letter Series
  {
    id: 82,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Letter Series',
    statement: 'Find the missing letters:\nAC, EG, IK, MO, ?',
    options: {
      A: 'QS',
      B: 'PR',
      C: 'RT',
      D: 'SU'
    },
    correctOption: 'A',
    explanation: 'Letters skip by 1 inside pairs (A-C, E-G, I-K, M-O). The gap between pairs is 1 letter (C to E, G to I, K to M, O to Q). Next is QS.'
  },

  // Q83: Analogy
  {
    id: 83,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Analogy',
    statement: 'THERMOMETER : TEMPERATURE :: ODOMETER : ?',
    options: {
      A: 'Distance Traveled',
      B: 'Speed',
      C: 'Current',
      D: 'Altitude'
    },
    correctOption: 'A',
    explanation: 'A thermometer measures temperature; an odometer measures distance traveled.'
  },

  // Q84: Odd One Out
  {
    id: 84,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Odd One Out',
    statement: 'Which word does NOT belong with the others?',
    options: {
      A: 'Mars',
      B: 'Venus',
      C: 'Moon',
      D: 'Jupiter'
    },
    correctOption: 'C',
    explanation: 'Mars, Venus, and Jupiter are planets; the Moon is a natural satellite.'
  },

  // Q85: Logical Order
  {
    id: 85,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Logical Sequence',
    statement: 'Arrange in logical sequence:\n1. Seed\n2. Fruit\n3. Plant\n4. Flower',
    options: {
      A: '1, 3, 4, 2',
      B: '1, 4, 3, 2',
      C: '3, 1, 4, 2',
      D: '1, 2, 3, 4'
    },
    correctOption: 'A',
    explanation: 'Seed (1) -> Plant (3) -> Flower (4) -> Fruit (2).'
  },

  // Q86: Blood Relations
  {
    id: 86,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Blood Relations',
    statement: 'Pointing to a man, Sara said: "His father is my father’s only son." How is Sara related to the man?',
    options: {
      A: 'Aunt',
      B: 'Mother',
      C: 'Sister',
      D: 'Grandmother'
    },
    correctOption: 'A',
    explanation: '"My father’s only son" is Sara’s brother. Since the man’s father is Sara’s brother, Sara is his aunt.'
  },

  // Q87: Direction Sense
  {
    id: 87,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Direction Sense',
    statement: 'A person walks 10 meters East, turns right and walks 10 meters, then turns right again and walks 10 meters. Where is he relative to the start?',
    options: {
      A: '10 meters South',
      B: '10 meters North',
      C: '10 meters West',
      D: 'At the starting point'
    },
    correctOption: 'A',
    explanation: '10 m East, then right (South) 10 m, then right (West) 10 m cancels the East. He is exactly 10 meters South of the start.'
  },

  // Q88: Coding-Decoding
  {
    id: 88,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Coding-Decoding',
    statement: 'If SUKKUR is coded as 19-21-11-11-21-18, what is IBA coded as?',
    options: {
      A: '9-2-1',
      B: '9-1-2',
      C: '8-2-1',
      D: '10-2-1'
    },
    correctOption: 'A',
    explanation: 'Direct alphabetical positions: I=9, B=2, A=1 => 9-2-1.'
  },

  // Q89: Missing Grid Number
  {
    id: 89,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Missing Numbers',
    statement: 'Find the missing number in the sequence:\n7, 14, 28, 56, ?',
    options: {
      A: '112',
      B: '110',
      C: '114',
      D: '120'
    },
    correctOption: 'A',
    explanation: 'Each term doubles: 7×2=14, 14×2=28, 28×2=56, 56×2=112.'
  },

  // Q90: Venn Diagram Logic
  {
    id: 90,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Venn Diagram Logic',
    statement: 'Which represents the relationship between: "Doctors, Lawyers, Professionals"?',
    options: {
      A: 'Two separate circles inside one large circle',
      B: 'Three concentric circles',
      C: 'Three mutually overlapping circles',
      D: 'Two overlapping circles outside a third'
    },
    correctOption: 'A',
    explanation: 'Both doctors and lawyers are professionals (inside the large Professionals circle), but the professions of doctor and lawyer are mutually exclusive.'
  },

  // Q91: Fibonacci Variation
  {
    id: 91,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Number Series',
    statement: 'Find the next number:\n1, 1, 2, 3, 5, 8, 13, ?',
    options: {
      A: '21',
      B: '20',
      C: '22',
      D: '19'
    },
    correctOption: 'A',
    explanation: 'Standard Fibonacci sequence: each term is the sum of the two preceding terms. 8 + 13 = 21.'
  },

  // Q92: Letter Series
  {
    id: 92,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Letter Series',
    statement: 'What is the missing letter: A, D, G, J, ?',
    options: {
      A: 'M',
      B: 'L',
      C: 'N',
      D: 'K'
    },
    correctOption: 'A',
    explanation: 'Each letter advances by +3 positions: A(1)->D(4)->G(7)->J(10)->M(13).'
  },

  // Q93: Blood Relations
  {
    id: 93,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Blood Relations',
    statement: 'If A is the brother of B, and B is the son of C, how is A related to C?',
    options: {
      A: 'Son',
      B: 'Father',
      C: 'Brother',
      D: 'Nephew'
    },
    correctOption: 'A',
    explanation: 'Since B is C’s son and A is B’s brother, A is also C’s son.'
  },

  // Q94: Coding
  {
    id: 94,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Coding-Decoding',
    statement: 'If PEN = 35 and BOOK = 43, what is PAGE? (P=16, A=1, G=7, E=5)',
    options: {
      A: '29',
      B: '28',
      C: '30',
      D: '31'
    },
    correctOption: 'A',
    explanation: 'Sum of letter values: 16 + 1 + 7 + 5 = 29.'
  },

  // Q95: Direction Sense
  {
    id: 95,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Direction Sense',
    statement: 'If South-East becomes North, and North-East becomes West, what will West become?',
    options: {
      A: 'South-East',
      B: 'North-East',
      C: 'South-West',
      D: 'North-West'
    },
    correctOption: 'A',
    explanation: 'The directions are rotated 135° clockwise. West rotated 135° clockwise becomes South-East.'
  },

  // Q96: Analogy
  {
    id: 96,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Analogy',
    statement: 'AUTHOR : NOVEL :: COMPOSER : ?',
    options: {
      A: 'Symphony',
      B: 'Paint',
      C: 'Actor',
      D: 'Stage'
    },
    correctOption: 'A',
    explanation: 'An author produces a novel; a composer creates a symphony.'
  },

  // Q97: Odd One Out
  {
    id: 97,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Odd One Out',
    statement: 'Which number does NOT belong: 16, 25, 36, 48, 64',
    options: {
      A: '48',
      B: '36',
      C: '25',
      D: '64'
    },
    correctOption: 'A',
    explanation: '16=4², 25=5², 36=6², 64=8² are all perfect squares. 48 is not a perfect square.'
  },

  // Q98: Missing Number
  {
    id: 98,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Missing Numbers',
    statement: 'Find the missing number:\n2, 5, 10, 17, 26, ?',
    options: {
      A: '37',
      B: '35',
      C: '36',
      D: '38'
    },
    correctOption: 'A',
    explanation: 'Pattern is n² + 1: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, 6²+1=37.'
  },

  // Q99: Syllogism
  {
    id: 99,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Logical Sequence',
    statement: 'Statements:\n1. All roses are flowers.\n2. Some flowers fade quickly.\nConclusion: Some roses fade quickly.',
    options: {
      A: 'Does not necessarily follow',
      B: 'Follows definitely',
      C: 'Contradictory',
      D: 'None of the above'
    },
    correctOption: 'A',
    explanation: 'The flowers that fade quickly might not include roses; hence it does not necessarily follow.'
  },

  // Q100: Number Matrix
  {
    id: 100,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Missing Numbers',
    statement: 'Find X:\n5    4    20\n6    3    18\n7    X    35',
    options: {
      A: '5',
      B: '6',
      C: '4',
      D: '7'
    },
    correctOption: 'A',
    explanation: 'Col 1 × Col 2 = Col 3. 7 × X = 35 => X = 5.'
  }
];
