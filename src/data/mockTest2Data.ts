import { Question } from '../types/exam';

export const MOCK2_PASSAGE_1 = `The transition toward sustainable energy across Pakistan has thrust the arid plains of southeastern Sindh into the epicenter of national decarbonization discourse. While the exploitation of the Thar lignite coal reserves historically promised fiscal respite from crippling energy import bills, environmental scientists consistently warn of irreversible aquifer depletion and intensified greenhouse gas emissions. Concurrently, the coastal corridor extending through Jhimpir and Gharo presents one of South Asia’s most formidable wind energy resource corridors. Harnessing this persistent aerodynamic potential requires modernized grid stabilization and substantial capital allocations into decentralized high-voltage transmission lines. Economists argue that perpetuating public subsidies for legacy fossil infrastructure merely delays the imperative structural pivot toward clean renewables, compromising long-term ecological balance and climate resilience.`;

export const MOCK2_PASSAGE_2 = `Pedagogical research universally reinforces that early cognitive comprehension and foundational literacy flourish when primary instruction is delivered in the student's mother tongue. Across multilingual regions, the premature imposition of a non-indigenous medium of instruction frequently impairs analytical inquiry and alienates rural learners. Cognitive psychologists demonstrate that children assimilate complex abstract notions—particularly in basic mathematics and spatial reasoning—far more seamlessly when linguistic hurdles do not compound conceptual difficulty. Nevertheless, regional socio-economic stratifications frequently propagate the misconception that early mother-tongue education curtails subsequent economic mobility. To harmonize cultural identity with global competitiveness, progressive educational policy must balance mother-tongue primary instruction with a structured, scaffolded transition toward national and international languages in secondary schooling.`;

export const QUESTIONS_MOCK_2: Question[] = [
  // ==========================================
  // PART I – ENGLISH (Questions 1 to 40)
  // ==========================================

  // Passage 1: Q1 - Q5
  {
    id: 1,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Primary Theme',
    passageTitle: 'Reading Passage 1: Energy Transition and Climate Policy in Sindh',
    passage: MOCK2_PASSAGE_1,
    statement: 'Which statement best summarizes the main idea of the passage?',
    options: {
      A: 'Fossil fuel reliance should be permanently expanded to guarantee uninterrupted provincial industrial growth.',
      B: 'Sindh must strategically navigate between legacy coal extraction and renewable wind potential through infrastructure modernization.',
      C: 'The Jhimpir wind corridor has already completely eliminated energy deficits across southern Pakistan.',
      D: 'Environmental scientists universally oppose all forms of provincial capital investment.'
    },
    correctOption: 'B',
    explanation: 'The passage contrasts the environmental hazards of Thar lignite coal with the immense wind potential of Jhimpir/Gharo, arguing for a strategic structural pivot toward clean energy.'
  },
  {
    id: 2,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Specific Detail',
    passageTitle: 'Reading Passage 1: Energy Transition and Climate Policy in Sindh',
    passage: MOCK2_PASSAGE_1,
    statement: 'According to the author, what technological prerequisite is needed to fully harness coastal wind energy?',
    options: {
      A: 'Total reliance on foreign imported diesel generators',
      B: 'Complete drainage of deep freshwater aquifers',
      C: 'Grid stabilization and decentralized high-voltage transmission lines',
      D: 'Immediate privatization of all agricultural waterways'
    },
    correctOption: 'C',
    explanation: 'The text states that harnessing the wind potential "requires modernized grid stabilization and substantial capital allocations into decentralized high-voltage transmission lines."'
  },
  {
    id: 3,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Vocabulary in Context',
    passageTitle: 'Reading Passage 1: Energy Transition and Climate Policy in Sindh',
    passage: MOCK2_PASSAGE_1,
    statement: 'As utilized in the passage, the word "respite" most nearly denotes:',
    options: {
      A: 'A temporary relief or delay from hardship',
      B: 'A severe legal penalty',
      C: 'A permanent structural deterioration',
      D: 'An irreversible financial failure'
    },
    correctOption: 'A',
    explanation: '"Respite" means a short period of rest or relief from something difficult or unpleasant.'
  },
  {
    id: 4,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Inference',
    passageTitle: 'Reading Passage 1: Energy Transition and Climate Policy in Sindh',
    passage: MOCK2_PASSAGE_1,
    statement: 'What can be inferred from the author’s critique of "public subsidies for legacy fossil infrastructure"?',
    options: {
      A: 'Subsidies have lowered coal production costs to zero.',
      B: 'Financial support for fossil fuels distorts incentives and retards the adoption of green technologies.',
      C: 'Government subsidies are currently distributed exclusively to wind turbine manufacturers.',
      D: 'Fossil fuel companies have refused all forms of state economic assistance.'
    },
    correctOption: 'B',
    explanation: 'The author notes that perpetuating subsidies "merely delays the imperative structural pivot toward clean renewables," indicating it creates counter-productive economic incentives.'
  },
  {
    id: 5,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Tone',
    passageTitle: 'Reading Passage 1: Energy Transition and Climate Policy in Sindh',
    passage: MOCK2_PASSAGE_1,
    statement: 'The author’s perspective toward continued investment in lignite coal can best be described as:',
    options: {
      A: 'Enthusiastically supportive',
      B: 'Cautious and critically evaluative',
      C: 'Completely unconcerned',
      D: 'Nostalgic'
    },
    correctOption: 'B',
    explanation: 'The author acknowledges past financial rationales while critically noting ecological hazards and highlighting modern alternatives.'
  },

  // Passage 2: Q6 - Q10
  {
    id: 6,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Central Thesis',
    passageTitle: 'Reading Passage 2: Medium of Instruction and Foundational Cognitive Literacy',
    passage: MOCK2_PASSAGE_2,
    statement: 'The central thesis of the second passage emphasizes that:',
    options: {
      A: 'Secondary education should dispense entirely with foreign and national languages.',
      B: 'Early mother-tongue instruction enhances cognitive development and should be phased into broader language proficiency.',
      C: 'Teaching mathematics in indigenous languages prevents children from mastering abstract concepts.',
      D: 'Economic mobility is exclusively determined by eliminating local cultural dialects.'
    },
    correctOption: 'B',
    explanation: 'The author demonstrates that early instruction in one’s mother tongue fosters critical cognitive foundations, which can then be scaffolded with secondary languages.'
  },
  {
    id: 7,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Specific Detail',
    passageTitle: 'Reading Passage 2: Medium of Instruction and Foundational Cognitive Literacy',
    passage: MOCK2_PASSAGE_2,
    statement: 'According to cognitive psychologists cited in the passage, premature non-indigenous instruction:',
    options: {
      A: 'Accelerates algebraic fluency tenfold',
      B: 'Compounds conceptual difficulty with unnecessary linguistic barriers',
      C: 'Eliminates regional socioeconomic disparities',
      D: 'Produces instantaneous international fluency'
    },
    correctOption: 'B',
    explanation: 'The passage highlights that children absorb abstract notions when "linguistic hurdles do not compound conceptual difficulty."'
  },
  {
    id: 8,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Vocabulary in Context',
    passageTitle: 'Reading Passage 2: Medium of Instruction and Foundational Cognitive Literacy',
    passage: MOCK2_PASSAGE_2,
    statement: 'The word "scaffolded" as used in the concluding sentence is closest in meaning to:',
    options: {
      A: 'Rigidly dismantled',
      B: 'Systematically supported in progressive stages',
      C: 'Abruptly cancelled',
      D: 'Arbitrarily randomized'
    },
    correctOption: 'B',
    explanation: 'In pedagogy, "scaffolded" refers to structured, progressive support provided to learners as they acquire new complex competencies.'
  },
  {
    id: 9,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Inference',
    passageTitle: 'Reading Passage 2: Medium of Instruction and Foundational Cognitive Literacy',
    passage: MOCK2_PASSAGE_2,
    statement: 'What underlying factor fuels resistance against mother-tongue primary schooling in rural areas?',
    options: {
      A: 'Excessive abundance of qualified indigenous educators',
      B: 'The erroneous social perception that it impedes subsequent socioeconomic advancement',
      C: 'The total absence of indigenous alphabets across South Asia',
      D: 'Federal mandates prohibiting the publication of local books'
    },
    correctOption: 'B',
    explanation: 'The author points to the "misconception that early mother-tongue education curtails subsequent economic mobility."'
  },
  {
    id: 10,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Author’s Recommendation',
    passageTitle: 'Reading Passage 2: Medium of Instruction and Foundational Cognitive Literacy',
    passage: MOCK2_PASSAGE_2,
    statement: 'What educational framework does the author ultimately endorse?',
    options: {
      A: 'Solely monolingual foreign language immersion from infancy',
      B: 'A balanced policy blending early mother-tongue mastery with phased multilingual proficiency',
      C: 'Abolishing formal secondary examinations in all regional institutions',
      D: 'Segregating rural learners permanently into vocational schools'
    },
    correctOption: 'B',
    explanation: 'The author recommends balancing mother-tongue primary instruction with a structured, scaffolded transition toward broader languages.'
  },

  // Synonyms: Q11 - Q15
  {
    id: 11,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to:\n\nTENACIOUS',
    options: {
      A: 'Relentless and persistent',
      B: 'Feeble and timid',
      C: 'Hesitant and indecisive',
      D: 'Superficial'
    },
    correctOption: 'A',
    explanation: 'Tenacious means persistent, determined, or holding fast to a position.'
  },
  {
    id: 12,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to:\n\nFASTIDIOUS',
    options: {
      A: 'Meticulous and demanding',
      B: 'Careless',
      C: 'Generous',
      D: 'Sluggish'
    },
    correctOption: 'A',
    explanation: 'Fastidious means very attentive to and concerned about accuracy and detail; meticulous.'
  },
  {
    id: 13,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to:\n\nPERNICIOUS',
    options: {
      A: 'Harmful and destructive',
      B: 'Benevolent',
      C: 'Innocuous',
      D: 'Lucrative'
    },
    correctOption: 'A',
    explanation: 'Pernicious means having a harmful effect, especially in a gradual or subtle way.'
  },
  {
    id: 14,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to:\n\nALACRITY',
    options: {
      A: 'Eager readiness and promptness',
      B: 'Lethargy',
      C: 'Reluctance',
      D: 'Skepticism'
    },
    correctOption: 'A',
    explanation: 'Alacrity means brisk and cheerful readiness.'
  },
  {
    id: 15,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to:\n\nCOGENT',
    options: {
      A: 'Compelling and persuasive',
      B: 'Weak and incoherent',
      C: 'Elusive',
      D: 'Redundant'
    },
    correctOption: 'A',
    explanation: 'Cogent means clear, logical, and convincing.'
  },

  // Antonyms: Q16 - Q20
  {
    id: 16,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to:\n\nCURTAIL',
    options: {
      A: 'Extend and expand',
      B: 'Diminish',
      C: 'Truncate',
      D: 'Prohibit'
    },
    correctOption: 'A',
    explanation: 'Curtail means to reduce in extent or quantity; to extend/expand is the exact opposite.'
  },
  {
    id: 17,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to:\n\nTACITURN',
    options: {
      A: 'Loquacious and talkative',
      B: 'Reserved',
      C: 'Reticent',
      D: 'Laconic'
    },
    correctOption: 'A',
    explanation: 'Taciturn means saying very little; loquacious means extremely talkative.'
  },
  {
    id: 18,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to:\n\nSUPERFLUOUS',
    options: {
      A: 'Indispensable and essential',
      B: 'Excessive',
      C: 'Redundant',
      D: 'Extravagant'
    },
    correctOption: 'A',
    explanation: 'Superfluous means unnecessary, more than enough. Indispensable/essential is its antonym.'
  },
  {
    id: 19,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to:\n\nEQUIVOCAL',
    options: {
      A: 'Unambiguous and explicit',
      B: 'Cryptic',
      C: 'Obscure',
      D: 'Dubious'
    },
    correctOption: 'A',
    explanation: 'Equivocal means open to multiple interpretations or vague; unambiguous is opposite.'
  },
  {
    id: 20,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to:\n\nDILIGENT',
    options: {
      A: 'Slothful and negligent',
      B: 'Assiduous',
      C: 'Conscientious',
      D: 'Persevering'
    },
    correctOption: 'A',
    explanation: 'Diligent means having or showing care and conscientiousness; slothful/negligent is its opposite.'
  },

  // Prepositions: Q21 - Q25
  {
    id: 21,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the preposition that correctly completes the sentence:\n\n"A quiet learning atmosphere is conducive _______ effective intellectual focus."',
    options: {
      A: 'to',
      B: 'for',
      C: 'with',
      D: 'in'
    },
    correctOption: 'A',
    explanation: 'The adjective "conducive" takes the preposition "to".'
  },
  {
    id: 22,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition:\n\n"All scholars must strictly adhere _______ the university academic honor code."',
    options: {
      A: 'to',
      B: 'with',
      C: 'by',
      D: 'on'
    },
    correctOption: 'A',
    explanation: 'The verb "adhere" is followed by "to".'
  },
  {
    id: 23,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition:\n\n"The vice chancellor presided _______ the annual academic syndicate proceedings."',
    options: {
      A: 'over',
      B: 'at',
      C: 'upon',
      D: 'into'
    },
    correctOption: 'A',
    explanation: 'One "presides over" an official meeting or conference.'
  },
  {
    id: 24,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition:\n\n"Engrossed in deep mathematical derivation, the student was oblivious _______ the time."',
    options: {
      A: 'of',
      B: 'to',
      C: 'about',
      D: 'for'
    },
    correctOption: 'A',
    explanation: 'The standard formal idiom is "oblivious of" (or "oblivious to", with "of" preferred in standard formal examinations).'
  },
  {
    id: 25,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition:\n\n"Candidate examination responses must conform _______ the prescribed formatting rules."',
    options: {
      A: 'to',
      B: 'with',
      C: 'at',
      D: 'into'
    },
    correctOption: 'A',
    explanation: 'The standard preposition following "conform" is "to" (conform to standards/rules).'
  },

  // Error Detection: Q26 - Q30
  {
    id: 26,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"The director together with [A] his senior research fellows [B] are publishing a comprehensive survey. [C] No Error [D]"',
    options: {
      A: 'The director together with',
      B: 'his senior research fellows',
      C: 'are publishing a comprehensive survey.',
      D: 'No Error'
    },
    correctOption: 'C',
    explanation: '"Together with" introduces a parenthetical modifier. The true subject is singular ("The director"), so the verb must be "is publishing", not "are publishing".'
  },
  {
    id: 27,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"Between you and I, [A] the entrance examination cutoff [B] will be significantly higher this season. [C] No Error [D]"',
    options: {
      A: 'Between you and I,',
      B: 'the entrance examination cutoff',
      C: 'will be significantly higher this season.',
      D: 'No Error'
    },
    correctOption: 'A',
    explanation: '"Between" is a preposition requiring object pronouns. The correct form is "Between you and me", not "Between you and I".'
  },
  {
    id: 28,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"Neither of the two candidates [A] were able to clarify [B] the mathematical anomaly in the proof. [C] No Error [D]"',
    options: {
      A: 'Neither of the two candidates',
      B: 'were able to clarify',
      C: 'the mathematical anomaly in the proof.',
      D: 'No Error'
    },
    correctOption: 'B',
    explanation: '"Neither" used as a pronoun is singular and requires "was able to clarify", not "were able".'
  },
  {
    id: 29,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"Scarcely had the candidate [A] initiated the online test [B] than the power generator tripped. [C] No Error [D]"',
    options: {
      A: 'Scarcely had the candidate',
      B: 'initiated the online test',
      C: 'than the power generator tripped.',
      D: 'No Error'
    },
    correctOption: 'C',
    explanation: '"Scarcely had..." correlates with "when" or "before", never with "than" (which correlates with "No sooner had..."). It must be "when the power generator tripped".'
  },
  {
    id: 30,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"One must be consistent [A] in their preparation [B] if one intends to qualify for the scholarship. [C] No Error [D]"',
    options: {
      A: 'One must be consistent',
      B: 'in their preparation',
      C: 'if one intends to qualify for the scholarship.',
      D: 'No Error'
    },
    correctOption: 'B',
    explanation: 'Pronoun consistency error. When the subject pronoun is "One", the possessive must be "one’s", not "their": "in one’s preparation".'
  },

  // Verbs and Subject-Verb Agreement: Q31 - Q35
  {
    id: 31,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Select the verb form that correctly completes the sentence:\n\n"A bouquet of indigenous yellow blossoms _______ placed upon the podium by the student organizers."',
    options: {
      A: 'was',
      B: 'were',
      C: 'are',
      D: 'have been'
    },
    correctOption: 'A',
    explanation: 'The head noun is "bouquet" (singular), not the prepositional object "blossoms". Therefore, "was placed" is correct.'
  },
  {
    id: 32,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Choose the correct verb form:\n\n"Fifty thousand rupees _______ allocated as stipend for every selected STHP candidate."',
    options: {
      A: 'is',
      B: 'are',
      C: 'were',
      D: 'have been'
    },
    correctOption: 'A',
    explanation: 'A designated sum of money acting as a single unit takes a singular verb: "is allocated".'
  },
  {
    id: 33,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Choose the correct verb form:\n\n"The majority of the research funding _______ disbursed directly to rural technical institutes."',
    options: {
      A: 'has been',
      B: 'have been',
      C: 'are',
      D: 'were'
    },
    correctOption: 'A',
    explanation: '"Funding" is an uncountable mass noun; "the majority of [uncountable noun]" takes a singular verb: "has been disbursed".'
  },
  {
    id: 34,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Select the appropriate verb:\n\n"Either the departmental coordinator or the academic registrars _______ authorized to sign candidate permits."',
    options: {
      A: 'are',
      B: 'is',
      C: 'was',
      D: 'has been'
    },
    correctOption: 'A',
    explanation: 'In "either... or...", the verb agrees with the closer subject ("the academic registrars", plural), requiring "are".'
  },
  {
    id: 35,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Select the grammatically correct completion:\n\n"Every computer terminal and examination tablet _______ inspected prior to the test commencement."',
    options: {
      A: 'was',
      B: 'were',
      C: 'have been',
      D: 'are'
    },
    correctOption: 'A',
    explanation: 'Subjects preceded by "every" or "each" joined by "and" take a singular verb: "was inspected".'
  },

  // Tenses and Conditionals: Q36 - Q40
  {
    id: 36,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Conditionals',
    statement: 'Select the correct conditional completion:\n\n"Had the invigilation team detected the software discrepancy earlier, the test _______ delayed."',
    options: {
      A: 'would not have been',
      B: 'will not be',
      C: 'would not be',
      D: 'had not been'
    },
    correctOption: 'A',
    explanation: 'Inverted third conditional: "Had + subject + past participle..., subject + would have + past participle".'
  },
  {
    id: 37,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Conditionals',
    statement: 'Select the correct clause completion:\n\n"If the candidate _______ with unwavering determination, he will secure admission into the computer science faculty."',
    options: {
      A: 'prepares',
      B: 'will prepare',
      C: 'prepared',
      D: 'would prepare'
    },
    correctOption: 'A',
    explanation: 'First conditional real present condition: If + simple present (prepares), main clause uses future will + base verb.'
  },
  {
    id: 38,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Tenses',
    statement: 'Select the appropriate tense form:\n\n"By next month, our laboratory _______ renewable battery technologies for two continuous years."',
    options: {
      A: 'will have been testing',
      B: 'has been testing',
      C: 'was testing',
      D: 'had tested'
    },
    correctOption: 'A',
    explanation: 'Future point in time + duration ("By next month... for two continuous years") requires future perfect continuous: "will have been testing".'
  },
  {
    id: 39,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Tenses',
    statement: 'Choose the correct form:\n\n"The scholarly review _______ by the time the conference delegates arrived in Sukkur."',
    options: {
      A: 'had already concluded',
      B: 'has already concluded',
      C: 'concludes',
      D: 'was concluding'
    },
    correctOption: 'A',
    explanation: 'Past action completed prior to another past event ("by the time delegates arrived") requires past perfect: "had already concluded".'
  },
  {
    id: 40,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subjunctive Mood',
    statement: 'Choose the correct verb form in formal subjunctive mood:\n\n"The academic committee recommended that the applicant _______ granted a full merit scholarship."',
    options: {
      A: 'be',
      B: 'is',
      C: 'was',
      D: 'were'
    },
    correctOption: 'A',
    explanation: 'Verbs of recommendation/demand take the mandative subjunctive bare infinitive ("be granted").'
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
    statement: 'In a group of 80 students, 45 study Computer Science, 40 study Physics, and 15 study neither. How many students study BOTH subjects?',
    options: {
      A: '20',
      B: '25',
      C: '30',
      D: '15'
    },
    correctOption: 'A',
    explanation: 'Total students studying at least one subject = 80 - 15 = 65. By inclusion-exclusion: n(C ∪ P) = n(C) + n(P) - n(C ∩ P) => 65 = 45 + 40 - n(C ∩ P) => n(C ∩ P) = 85 - 65 = 20.'
  },

  // Q42: LCM and HCF
  {
    id: 42,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'LCM and HCF',
    statement: 'Three bells toll together at intervals of 9, 12, and 15 minutes respectively. If they toll together now, after how many hours will they toll together again?',
    options: {
      A: '2 hours',
      B: '3 hours',
      C: '4 hours',
      D: '5 hours'
    },
    correctOption: 'B',
    explanation: 'LCM of 9, 12, and 15: 9 = 3², 12 = 2² × 3, 15 = 3 × 5. LCM = 2² × 3² × 5 = 4 × 9 × 5 = 180 minutes. 180 minutes = 3 hours.'
  },

  // Q43: Real Numbers & Decimals
  {
    id: 43,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Real Numbers, Fractions and Decimals',
    statement: 'Convert the repeating decimal 0.2̄7̄ (0.272727...) into its simplest fractional form:',
    options: {
      A: '3/11',
      B: '27/100',
      C: '9/33',
      D: '7/22'
    },
    correctOption: 'A',
    explanation: 'Let x = 0.2727... Then 100x = 27.2727... Subtracting gives 99x = 27 => x = 27/99 = (27 ÷ 9)/(99 ÷ 9) = 3/11.'
  },

  // Q44: Surds & Indices
  {
    id: 44,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Surds and Indices',
    statement: 'Simplify: (√7 + √3) / (√7 - √3)',
    options: {
      A: '(5 + √21) / 2',
      B: '5 + √21',
      C: '(10 + √21) / 4',
      D: '2 + √21'
    },
    correctOption: 'A',
    explanation: 'Multiply numerator & denominator by conjugate (√7 + √3): (√7 + √3)² / (7 - 3) = (7 + 3 + 2√21) / 4 = (10 + 2√21) / 4 = (5 + √21) / 2.'
  },

  // Q45: Exponents
  {
    id: 45,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Surds and Indices',
    statement: 'If 3^(2x - 1) = 243, find the value of x.',
    options: {
      A: '2',
      B: '3',
      C: '4',
      D: '5'
    },
    correctOption: 'B',
    explanation: 'Note 243 = 3⁵. Thus 3^(2x - 1) = 3⁵ => 2x - 1 = 5 => 2x = 6 => x = 3.'
  },

  // Q46: Algebraic Identities
  {
    id: 46,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Algebraic Expressions and Polynomials',
    statement: 'If a + b = 7 and ab = 10, find the value of a³ + b³.',
    options: {
      A: '133',
      B: '143',
      C: '153',
      D: '173'
    },
    correctOption: 'A',
    explanation: 'Identity: a³ + b³ = (a + b)³ - 3ab(a + b) = 7³ - 3(10)(7) = 343 - 210 = 133.'
  },

  // Q47: Linear Simultaneous Equations
  {
    id: 47,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Linear and Simultaneous Equations',
    statement: 'If 4x + 3y = 25 and x - 2y = -2, find the value of x + y.',
    options: {
      A: '5',
      B: '7',
      C: '9',
      D: '11'
    },
    correctOption: 'B',
    explanation: 'From equation 2: x = 2y - 2. Substitute into equation 1: 4(2y - 2) + 3y = 25 => 8y - 8 + 3y = 25 => 11y = 33 => y = 3. Then x = 2(3) - 2 = 4. Thus x + y = 4 + 3 = 7.'
  },

  // Q48: Quadratic Equations
  {
    id: 48,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Quadratic Equations',
    statement: 'Find the product of the roots of the quadratic equation 3x² - 11x + 6 = 0.',
    options: {
      A: '2',
      B: '11/3',
      C: '-2',
      D: '6'
    },
    correctOption: 'A',
    explanation: 'For ax² + bx + c = 0, product of roots = c/a = 6/3 = 2.'
  },

  // Q49: Absolute Values & Inequalities
  {
    id: 49,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Absolute Values and Inequalities',
    statement: 'Solve the inequality for x: |3x - 4| < 8',
    options: {
      A: '-4/3 < x < 4',
      B: '-4 < x < 4',
      C: 'x < 4',
      D: '-2 < x < 4'
    },
    correctOption: 'A',
    explanation: '|3x - 4| < 8 <=> -8 < 3x - 4 < 8. Add 4: -4 < 3x < 12. Divide by 3: -4/3 < x < 4.'
  },

  // Q50: Logarithms
  {
    id: 50,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Logarithms',
    statement: 'If log₁₀(x) = 3 and log₁₀(y) = 2, find log₁₀(x² / √y).',
    options: {
      A: '5',
      B: '6',
      C: '4',
      D: '7'
    },
    correctOption: 'A',
    explanation: 'log₁₀(x² / √y) = 2 log₁₀(x) - (1/2) log₁₀(y) = 2(3) - (1/2)(2) = 6 - 1 = 5.'
  },

  // Q51: Percentages
  {
    id: 51,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Percentages',
    statement: 'A student scored 68 marks out of 80 in English and 75 marks out of 100 in Mathematics. What is his overall combined percentage?',
    options: {
      A: '79.4%',
      B: '77.5%',
      C: '81.2%',
      D: '82.5%'
    },
    correctOption: 'A',
    explanation: 'Total obtained = 68 + 75 = 143. Total maximum = 80 + 100 = 180. Combined % = (143 / 180) × 100% ≈ 79.44%.'
  },

  // Q52: Profit and Loss
  {
    id: 52,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Profit, Loss and Discounts',
    statement: 'A merchant sells an article for Rs. 540 and incurs a loss of 10%. At what price should he sell it to gain 15%?',
    options: {
      A: 'Rs. 690',
      B: 'Rs. 650',
      C: 'Rs. 720',
      D: 'Rs. 675'
    },
    correctOption: 'A',
    explanation: 'CP = SP / (1 - Loss%) = 540 / 0.90 = Rs. 600. To gain 15%: SP = CP × (1 + 0.15) = 600 × 1.15 = Rs. 690.'
  },

  // Q53: Ratio and Proportion
  {
    id: 53,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Ratio and Proportion',
    statement: 'If Rs. 3,600 is divided among A, B, and C in the ratio 2 : 3 : 4, what is B’s share?',
    options: {
      A: 'Rs. 1,200',
      B: 'Rs. 800',
      C: 'Rs. 1,600',
      D: 'Rs. 1,000'
    },
    correctOption: 'A',
    explanation: 'Total ratio parts = 2 + 3 + 4 = 9. B’s share = (3/9) × 3600 = (1/3) × 3600 = Rs. 1,200.'
  },

  // Q54: Averages
  {
    id: 54,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Averages',
    statement: 'The average of 6 numbers is 20. If one number is removed, the average of the remaining numbers becomes 17. What was the removed number?',
    options: {
      A: '35',
      B: '32',
      C: '28',
      D: '30'
    },
    correctOption: 'A',
    explanation: 'Sum of 6 numbers = 6 × 20 = 120. Sum of 5 remaining numbers = 5 × 17 = 85. Removed number = 120 - 85 = 35.'
  },

  // Q55: Age Problems
  {
    id: 55,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Age Problems',
    statement: 'The present age of a mother is three times that of her daughter. Ten years ago, the mother was five times as old as her daughter. Find the mother’s present age.',
    options: {
      A: '60 years',
      B: '45 years',
      C: '50 years',
      D: '40 years'
    },
    correctOption: 'A',
    explanation: 'Let daughter’s age be D, mother’s 3D. Ten years ago: 3D - 10 = 5(D - 10) => 3D - 10 = 5D - 50 => 2D = 40 => D = 20. Mother’s age = 3 × 20 = 60 years.'
  },

  // Q56: Time and Work
  {
    id: 56,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Time and Work',
    statement: 'A and B working together can complete a project in 6 days. If A alone takes 10 days, in how many days can B alone complete it?',
    options: {
      A: '15 days',
      B: '12 days',
      C: '18 days',
      D: '20 days'
    },
    correctOption: 'A',
    explanation: 'B’s 1-day work = 1/6 - 1/10 = (5 - 3)/30 = 2/30 = 1/15. Hence, B alone takes 15 days.'
  },

  // Q57: Speed, Time and Distance
  {
    id: 57,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Speed, Time and Distance',
    statement: 'A bus covers a distance of 180 km at an average speed of 45 km/h and returns the same distance at 60 km/h. What is the average speed for the entire round trip?',
    options: {
      A: '51.4 km/h',
      B: '52.5 km/h',
      C: '50.0 km/h',
      D: '54.2 km/h'
    },
    correctOption: 'A',
    explanation: 'Average speed for equal distances = (2 × S₁ × S₂) / (S₁ + S₂) = (2 × 45 × 60) / (45 + 60) = 5400 / 105 ≈ 51.43 km/h.'
  },

  // Q58: Simple Interest
  {
    id: 58,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Simple and Compound Interest',
    statement: 'What principal amount will yield Rs. 1,440 as simple interest in 3 years at 8% per annum?',
    options: {
      A: 'Rs. 6,000',
      B: 'Rs. 5,500',
      C: 'Rs. 6,400',
      D: 'Rs. 5,000'
    },
    correctOption: 'A',
    explanation: 'P = (SI × 100) / (R × T) = (1440 × 100) / (8 × 3) = 144000 / 24 = Rs. 6,000.'
  },

  // Q59: Geometry - Angles
  {
    id: 59,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Geometry: Triangles and Angles',
    statement: 'In an isosceles triangle ABC with AB = AC, if angle A is 40°, what is the measure of angle B?',
    options: {
      A: '70°',
      B: '65°',
      C: '60°',
      D: '80°'
    },
    correctOption: 'A',
    explanation: 'Since AB = AC, angle B = angle C. Sum of angles: 40° + 2B = 180° => 2B = 140° => B = 70°.'
  },

  // Q60: Area and Mensuration
  {
    id: 60,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Area, Perimeter and Volume',
    statement: 'The perimeter of a rectangular field is 120 meters and its length is twice its width. Find its area.',
    options: {
      A: '800 m²',
      B: '600 m²',
      C: '900 m²',
      D: '750 m²'
    },
    correctOption: 'A',
    explanation: 'Perimeter = 2(l + w) = 120 => l + w = 60. Given l = 2w => 2w + w = 60 => 3w = 60 => w = 20 m, l = 40 m. Area = l × w = 40 × 20 = 800 m².'
  },

  // Q61: Coordinate Geometry
  {
    id: 61,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Coordinate Geometry',
    statement: 'Find the coordinates of the midpoint of the line segment joining (4, -2) and (-6, 8).',
    options: {
      A: '(-1, 3)',
      B: '(1, -3)',
      C: '(-2, 6)',
      D: '(5, 3)'
    },
    correctOption: 'A',
    explanation: 'Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2) = ((4 - 6)/2, (-2 + 8)/2) = (-2/2, 6/2) = (-1, 3).'
  },

  // Q62: Coordinate Geometry - Slope
  {
    id: 62,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Coordinate Geometry',
    statement: 'What is the slope of the line passing through points A(2, 5) and B(6, 17)?',
    options: {
      A: '3',
      B: '4',
      C: '2.5',
      D: '5'
    },
    correctOption: 'A',
    explanation: 'Slope m = (y₂ - y₁) / (x₂ - x₁) = (17 - 5) / (6 - 2) = 12 / 4 = 3.'
  },

  // Q63: Statistics: Median
  {
    id: 63,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Information Handling and Statistics',
    statement: 'Find the median of the following dataset: 8, 14, 6, 21, 11, 17, 9',
    options: {
      A: '11',
      B: '14',
      C: '9',
      D: '12'
    },
    correctOption: 'A',
    explanation: 'Arrange in ascending order: 6, 8, 9, 11, 14, 17, 21. There are 7 numbers; the median is the 4th item = 11.'
  },

  // Q64: Functions
  {
    id: 64,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Relations and Functions',
    statement: 'If g(x) = 3x - 5 and f(x) = x² + 1, evaluate f(g(2)).',
    options: {
      A: '2',
      B: '5',
      C: '10',
      D: '1'
    },
    correctOption: 'A',
    explanation: 'g(2) = 3(2) - 5 = 6 - 5 = 1. Then f(g(2)) = f(1) = 1² + 1 = 2.'
  },

  // Q65: Polynomial Factorization
  {
    id: 65,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Algebraic Expressions and Polynomials',
    statement: 'Factorize the expression: x² - 5x - 24',
    options: {
      A: '(x - 8)(x + 3)',
      B: '(x + 8)(x - 3)',
      C: '(x - 6)(x + 4)',
      D: '(x - 12)(x + 2)'
    },
    correctOption: 'A',
    explanation: 'Two numbers that multiply to -24 and add to -5 are -8 and 3. Thus (x - 8)(x + 3).'
  },

  // Q66: Sets - Subsets
  {
    id: 66,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Sets and Venn Diagrams',
    statement: 'If set A has 5 elements, how many non-empty subsets does set A have?',
    options: {
      A: '31',
      B: '32',
      C: '30',
      D: '25'
    },
    correctOption: 'A',
    explanation: 'Total subsets = 2⁵ = 32. Total non-empty subsets = 2⁵ - 1 = 31.'
  },

  // Q67: Indices
  {
    id: 67,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Surds and Indices',
    statement: 'Simplify: (64)^(-2/3)',
    options: {
      A: '1/16',
      B: '1/8',
      C: '1/32',
      D: '4'
    },
    correctOption: 'A',
    explanation: '64 = 4³. So (4³)^(-2/3) = 4^(-2) = 1 / 4² = 1/16.'
  },

  // Q68: Relative Speed
  {
    id: 68,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Speed, Time and Distance',
    statement: 'Two trains of length 120 m and 180 m travel in opposite directions at 40 km/h and 50 km/h. How many seconds do they take to completely pass each other?',
    options: {
      A: '12 seconds',
      B: '15 seconds',
      C: '10 seconds',
      D: '18 seconds'
    },
    correctOption: 'A',
    explanation: 'Total distance = 120 + 180 = 300 m. Relative speed in m/s = (40 + 50) × (5/18) = 90 × (5/18) = 25 m/s. Time = 300 / 25 = 12 seconds.'
  },

  // Q69: Mixture Problem
  {
    id: 69,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Profit, Loss and Discounts',
    statement: 'A 40-liter mixture of milk and water contains 10% water. How many liters of water must be added to make water 20% of the new mixture?',
    options: {
      A: '5 liters',
      B: '4 liters',
      C: '6 liters',
      D: '8 liters'
    },
    correctOption: 'A',
    explanation: 'Initial milk = 90% of 40 = 36 L. Initial water = 4 L. In the new mixture, milk (36 L) must constitute 80%: Total new volume = 36 / 0.80 = 45 L. Water added = 45 - 40 = 5 liters.'
  },

  // Q70: Geometry - Circle
  {
    id: 70,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Geometry: Circles',
    statement: 'What is the circumference of a circle whose area is 154 cm²? (Take π = 22/7)',
    options: {
      A: '44 cm',
      B: '48 cm',
      C: '52 cm',
      D: '38 cm'
    },
    correctOption: 'A',
    explanation: 'Area = πr² = (22/7)r² = 154 => r² = (154 × 7) / 22 = 7 × 7 = 49 => r = 7 cm. Circumference = 2πr = 2 × (22/7) × 7 = 44 cm.'
  },

  // Q71: Quadratic Nature of Roots
  {
    id: 71,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Quadratic Equations',
    statement: 'For what value of m does the equation x² - 6x + m = 0 have real and equal roots?',
    options: {
      A: '9',
      B: '6',
      C: '12',
      D: '3'
    },
    correctOption: 'A',
    explanation: 'Discriminant b² - 4ac = 0 => (-6)² - 4(1)(m) = 0 => 36 - 4m = 0 => 4m = 36 => m = 9.'
  },

  // Q72: Volume of Sphere
  {
    id: 72,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Area, Perimeter and Volume',
    statement: 'Find the volume of a sphere with radius 3 cm in terms of π.',
    options: {
      A: '36π cm³',
      B: '18π cm³',
      C: '27π cm³',
      D: '54π cm³'
    },
    correctOption: 'A',
    explanation: 'Volume = (4/3)πr³ = (4/3)π(3³) = (4/3)π(27) = 36π cm³.'
  },

  // Q73: Ratio Word Problem
  {
    id: 73,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Ratio and Proportion',
    statement: 'The ratio of boys to girls in an STHP academy is 5 : 4. If there are 180 students in total, how many more boys than girls are there?',
    options: {
      A: '20',
      B: '25',
      C: '15',
      D: '30'
    },
    correctOption: 'A',
    explanation: 'Total parts = 9. Boys = (5/9) × 180 = 100. Girls = (4/9) × 180 = 80. Difference = 100 - 80 = 20.'
  },

  // Q74: Compound Interest
  {
    id: 74,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Simple and Compound Interest',
    statement: 'Find the amount after 2 years on Rs. 5,000 at 10% per annum compound interest, compounded annually.',
    options: {
      A: 'Rs. 6,050',
      B: 'Rs. 6,000',
      C: 'Rs. 5,950',
      D: 'Rs. 6,100'
    },
    correctOption: 'A',
    explanation: 'Amount = P(1 + r/100)² = 5000(1 + 0.10)² = 5000(1.21) = Rs. 6,050.'
  },

  // Q75: Statistics - Mean
  {
    id: 75,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Information Handling and Statistics',
    statement: 'If the mean of x, x+2, x+4, x+6, and x+8 is 15, find the value of x.',
    options: {
      A: '11',
      B: '12',
      C: '10',
      D: '13'
    },
    correctOption: 'A',
    explanation: 'Sum = 5x + 20. Mean = (5x + 20) / 5 = x + 4 = 15 => x = 11.'
  },

  // Q76: Function Domain
  {
    id: 76,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Relations and Functions',
    statement: 'Find the domain of f(x) = 1 / (x - 7).',
    options: {
      A: 'All real numbers except x = 7',
      B: 'x > 7',
      C: 'x < 7',
      D: 'All real numbers'
    },
    correctOption: 'A',
    explanation: 'The denominator cannot be zero: x - 7 ≠ 0 => x ≠ 7. Domain is all real numbers except 7.'
  },

  // Q77: Polygon Angles
  {
    id: 77,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Geometry: Polygons',
    statement: 'What is the sum of the interior angles of a regular hexagon (6-sided polygon)?',
    options: {
      A: '720°',
      B: '540°',
      C: '900°',
      D: '1080°'
    },
    correctOption: 'A',
    explanation: 'Sum = (n - 2) × 180° = (6 - 2) × 180° = 4 × 180° = 720°.'
  },

  // Q78: Pipes and Cisterns
  {
    id: 78,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Time and Work',
    statement: 'Two pipes A and B can fill a reservoir in 10 hours and 15 hours respectively. Working together, how many hours will they take?',
    options: {
      A: '6 hours',
      B: '5 hours',
      C: '7.5 hours',
      D: '8 hours'
    },
    correctOption: 'A',
    explanation: '1-hour work = 1/10 + 1/15 = (3 + 2)/30 = 5/30 = 1/6. Reservoir fills in 6 hours.'
  },

  // Q79: Logarithm Product Rule
  {
    id: 79,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Logarithms',
    statement: 'Simplify: log₅(125) + log₂(16)',
    options: {
      A: '7',
      B: '8',
      C: '9',
      D: '6'
    },
    correctOption: 'A',
    explanation: 'log₅(125) = log₅(5³) = 3. log₂(16) = log₂(2⁴) = 4. 3 + 4 = 7.'
  },

  // Q80: Fraction Problem
  {
    id: 80,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Real Numbers, Fractions and Decimals',
    statement: 'If 2/5 of a number exceeds 1/4 of the same number by 15, find the number.',
    options: {
      A: '100',
      B: '120',
      C: '150',
      D: '80'
    },
    correctOption: 'A',
    explanation: '(2/5)x - (1/4)x = 15 => (8x - 5x) / 20 = 15 => 3x / 20 = 15 => 3x = 300 => x = 100.'
  },

  // ==========================================
  // PART III – INTELLIGENCE / IQ (Questions 81 to 100)
  // ==========================================

  // Q81: Number Series (Cube + 1)
  {
    id: 81,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Number Series',
    statement: 'Identify the next number in the sequence:\n2, 9, 28, 65, 126, ?',
    options: {
      A: '217',
      B: '215',
      C: '216',
      D: '224'
    },
    correctOption: 'A',
    explanation: 'Pattern is n³ + 1: 1³+1=2, 2³+1=9, 3³+1=28, 4³+1=65, 5³+1=126. Next is 6³ + 1 = 216 + 1 = 217.'
  },

  // Q82: Letter Series
  {
    id: 82,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Letter Series',
    statement: 'Find the missing term:\nDF, GJ, KM, NQ, ?',
    options: {
      A: 'QT',
      B: 'RS',
      C: 'PS',
      D: 'PU'
    },
    correctOption: 'A',
    explanation: 'First letters advance by +3, +4, +3, +3: D(4)->G(7)->K(11)->N(14)->Q(17). The pair gap is +2, +3, +2, +3, +3: Q(17) + 3 = T(20) => QT.'
  },

  // Q83: Analogy
  {
    id: 83,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Analogy',
    statement: 'PEDIATRICS : CHILDREN :: GERIATRICS : ?',
    options: {
      A: 'Elderly People',
      B: 'Infants',
      C: 'Athletes',
      D: 'Plants'
    },
    correctOption: 'A',
    explanation: 'Pediatrics is the branch of medicine dealing with children; geriatrics deals with the elderly.'
  },

  // Q84: Odd One Out
  {
    id: 84,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Odd One Out',
    statement: 'Which number does NOT belong with the others?',
    options: {
      A: '51',
      B: '41',
      C: '61',
      D: '71'
    },
    correctOption: 'A',
    explanation: '41, 61, and 71 are prime numbers. 51 is composite (3 × 17 = 51).'
  },

  // Q85: Logical Sequence
  {
    id: 85,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Logical Sequence',
    statement: 'Arrange the sequence logically:\n1. Proposal\n2. Feasibility Study\n3. Approval\n4. Project Execution\n5. Final Evaluation',
    options: {
      A: '1, 2, 3, 4, 5',
      B: '2, 1, 3, 4, 5',
      C: '1, 3, 2, 4, 5',
      D: '3, 1, 2, 4, 5'
    },
    correctOption: 'A',
    explanation: '1. Proposal -> 2. Feasibility Study -> 3. Approval -> 4. Project Execution -> 5. Final Evaluation.'
  },

  // Q86: Blood Relations
  {
    id: 86,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Blood Relations',
    statement: 'A man introduces a woman saying: "Her mother is the only daughter-in-law of my father." How is the woman related to the man?',
    options: {
      A: 'Daughter',
      B: 'Sister',
      C: 'Niece',
      D: 'Wife'
    },
    correctOption: 'A',
    explanation: '"The only daughter-in-law of my father" is the man’s own wife. Her mother is his wife; thus the woman is his daughter.'
  },

  // Q87: Direction Sense
  {
    id: 87,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Direction Sense',
    statement: 'Bilal walks 15 meters South, turns left and walks 20 meters, then turns left again and walks 15 meters. How far is he from his initial spot?',
    options: {
      A: '20 meters East',
      B: '20 meters West',
      C: '30 meters South',
      D: '15 meters East'
    },
    correctOption: 'A',
    explanation: 'Turning left when facing South leads East (20 m). Turning left again heads North (15 m), neutralizing the South movement. He is 20 m East of start.'
  },

  // Q88: Coding-Decoding
  {
    id: 88,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Coding-Decoding',
    statement: 'In a code, SMART is written as TNBSU. How is SCHOLAR written in that code?',
    options: {
      A: 'TDIPMBS',
      B: 'TDIQMBS',
      C: 'RDGNKZQ',
      D: 'TEJQNCT'
    },
    correctOption: 'A',
    explanation: 'Each letter advances by +1: S->T, C->D, H->I, O->P, L->M, A->B, R->S => TDIPMBS.'
  },

  // Q89: Missing Number in Pattern
  {
    id: 89,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Missing Numbers',
    statement: 'Find the missing number:\n(2, 3) -> 13\n(3, 4) -> 25\n(4, 5) -> ?',
    options: {
      A: '41',
      B: '40',
      C: '38',
      D: '45'
    },
    correctOption: 'A',
    explanation: 'Sum of squares: 2² + 3² = 4 + 9 = 13. 3² + 4² = 9 + 16 = 25. 4² + 5² = 16 + 25 = 41.'
  },

  // Q90: Venn Diagram Logic
  {
    id: 90,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Venn Diagram Logic',
    statement: 'Which option represents the relationship between: "Mammals, Cows, Birds"?',
    options: {
      A: 'One circle completely inside another, with a third circle completely separate',
      B: 'Three mutually overlapping circles',
      C: 'Three mutually disjoint circles',
      D: 'Two concentric circles with one overlapping'
    },
    correctOption: 'A',
    explanation: 'All cows are mammals (circle of cows entirely inside mammals). Birds are entirely disjoint from mammals.'
  },

  // Q91: Number Series
  {
    id: 91,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Number Series',
    statement: 'Find the missing number in the sequence:\n3, 6, 11, 18, 27, ?',
    options: {
      A: '38',
      B: '36',
      C: '40',
      D: '39'
    },
    correctOption: 'A',
    explanation: 'Differences are consecutive odd numbers: +3, +5, +7, +9. Next difference is +11: 27 + 11 = 38 (or n² + 2).'
  },

  // Q92: Letter Series
  {
    id: 92,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Letter Series',
    statement: 'What comes next: Z, W, S, N, ?',
    options: {
      A: 'H',
      B: 'I',
      C: 'J',
      D: 'G'
    },
    correctOption: 'A',
    explanation: 'Positions in alphabet: Z(26), W(23), S(19), N(14). Differences: -3, -4, -5. Next difference is -6: 14 - 6 = 8 = H.'
  },

  // Q93: Blood Relations
  {
    id: 93,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Blood Relations',
    statement: 'Introducing a boy, a girl said: "He is the son of the daughter of the father of my uncle." How is the boy related to the girl?',
    options: {
      A: 'Brother',
      B: 'Uncle',
      C: 'Father',
      D: 'Son'
    },
    correctOption: 'A',
    explanation: '"The father of my uncle" is the girl’s grandfather. The "daughter of my grandfather" is her mother. The "son of my mother" is her brother.'
  },

  // Q94: Coding-Decoding
  {
    id: 94,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Coding-Decoding',
    statement: 'If ROAD is coded as 40 and BUS as 44, how is CAR coded? (Sum of alphabetical positions)',
    options: {
      A: '22',
      B: '20',
      C: '24',
      D: '26'
    },
    correctOption: 'A',
    explanation: 'C=3, A=1, R=18. Sum = 3 + 1 + 18 = 22.'
  },

  // Q95: Direction Sense
  {
    id: 95,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Direction Sense',
    statement: 'At sunrise, if you stand facing the sun and turn 90° clockwise, which direction are you facing?',
    options: {
      A: 'South',
      B: 'North',
      C: 'West',
      D: 'East'
    },
    correctOption: 'A',
    explanation: 'At sunrise, you are facing East. Turning 90° clockwise (right) points toward South.'
  },

  // Q96: Analogy
  {
    id: 96,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Analogy',
    statement: 'HYGROMETER : HUMIDITY :: BAROMETER : ?',
    options: {
      A: 'Atmospheric Pressure',
      B: 'Temperature',
      C: 'Wind Velocity',
      D: 'Current'
    },
    correctOption: 'A',
    explanation: 'A hygrometer measures humidity; a barometer measures atmospheric pressure.'
  },

  // Q97: Odd One Out
  {
    id: 97,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Odd One Out',
    statement: 'Which term does NOT belong in this set?',
    options: {
      A: 'Trapezoid',
      B: 'Rhombus',
      C: 'Parallelogram',
      D: 'Cube'
    },
    correctOption: 'D',
    explanation: 'Trapezoid, rhombus, and parallelogram are two-dimensional quadrilaterals; a cube is a 3-dimensional solid.'
  },

  // Q98: Missing Number
  {
    id: 98,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Missing Numbers',
    statement: 'Complete the pattern:\n3 × 4 = 14\n4 × 5 = 22\n5 × 6 = ?',
    options: {
      A: '32',
      B: '30',
      C: '34',
      D: '36'
    },
    correctOption: 'A',
    explanation: 'Pattern is (A × B) + 2: (3×4)+2=14, (4×5)+2=22, (5×6)+2 = 30 + 2 = 32.'
  },

  // Q99: Syllogism
  {
    id: 99,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Logical Sequence',
    statement: 'Statements:\n1. All books are papers.\n2. All papers are trees.\nConclusion: All books are trees.',
    options: {
      A: 'Conclusion is valid',
      B: 'Conclusion is invalid',
      C: 'Insufficient data',
      D: 'None of the above'
    },
    correctOption: 'A',
    explanation: 'By transitivity: Books ⊆ Papers ⊆ Trees => Books ⊆ Trees. Valid syllogism.'
  },

  // Q100: Number Matrix
  {
    id: 100,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Missing Numbers',
    statement: 'Find the missing number in the matrix:\n4    9    13\n5    8    13\n6    7    ?',
    options: {
      A: '13',
      B: '14',
      C: '15',
      D: '12'
    },
    correctOption: 'A',
    explanation: 'In each row, Column 1 + Column 2 = Column 3. 4+9=13, 5+8=13, 6+7=13.'
  }
];
