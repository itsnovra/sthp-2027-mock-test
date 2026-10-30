import { Question } from '../types/exam';

export const PASSAGE_1 = `The Indus River basin, spanning the heart of Sindh, has nurtured agrarian civilizations for over five millennia. However, contemporary climate volatility and archaic canal infrastructure have exacerbated acute water stress across the lower riparian zone. Agricultural productivity in the province remains predominantly reliant on flood irrigation, a technique notorious for catastrophic evaporative loss and widespread waterlogging. To mitigate these dual crises, agronomists advocate for a paradigm shift toward precision water management, such as drip and subsurface micro-irrigation systems. Concurrently, soil salinization, precipitated by poor drainage and unmetered groundwater extraction, threatens the arable integrity of millions of hectares. While infrastructural modernization requires substantial capital investment, the socio-economic dividends of safeguarding food security and rehabilitating degraded soil ecosystems far outweigh the fiscal inertia currently stalling reform.`;

export const PASSAGE_2 = `Artificial Intelligence (AI) and automated algorithmic governance are rapidly transforming the delivery of public utilities and pedagogical frameworks in emerging economies. Proponents contend that automated platforms democratize access to elite educational curricula, enabling disenfranchised rural students to circumvent traditional institutional barriers. Nonetheless, technocratic optimism often obfuscates severe digital divides: erratic electrification, dearth of broadband connectivity, and the absence of localized pedagogical content tailored to indigenous dialects. Furthermore, excessive reliance on automated pedagogical evaluation risks reducing cognitive engagement to algorithmic pattern recognition rather than cultivating critical synthesis, empirical inquiry, and ethical deliberation. If educational disparity is to be truly bridged, technological intervention must serve as a catalyst for human-centric mentorship rather than an austere, automated replacement for the pedagogical relationship between teacher and scholar.`;

export const QUESTIONS_DATA: Question[] = [
  // ==========================================
  // PART I – ENGLISH (Questions 1 to 40)
  // ==========================================
  
  // Passage 1: Q1 - Q5
  {
    id: 1,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Main Idea',
    passageTitle: 'Reading Passage 1: Water Crisis and Agriculture in the Lower Indus Basin',
    passage: PASSAGE_1,
    statement: 'Which of the following best articulates the primary thesis of the passage?',
    options: {
      A: 'Sindh has had a flourishing agricultural sector for five millennia without infrastructural challenges.',
      B: 'Precision water management and systemic drainage reform are essential to overcome acute water and soil degradation in Sindh.',
      C: 'Flood irrigation is the only culturally sustainable farming method suitable for the Indus River basin.',
      D: 'Groundwater extraction should be completely outlawed across all agrarian economies in Pakistan.'
    },
    correctOption: 'B',
    explanation: 'The passage highlights that climate volatility, archaic canal infrastructure, flood irrigation, and soil salinization require a paradigm shift toward precision irrigation and drainage reform.'
  },
  {
    id: 2,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Specific Details',
    passageTitle: 'Reading Passage 1: Water Crisis and Agriculture in the Lower Indus Basin',
    passage: PASSAGE_1,
    statement: 'According to the passage, what consequence is directly attributed to flood irrigation?',
    options: {
      A: 'Complete eradication of deep groundwater reserves',
      B: 'Substantial reduction in provincial capital expenditure',
      C: 'Severe evaporative loss and extensive waterlogging',
      D: 'Instant restoration of arable soil fertility'
    },
    correctOption: 'C',
    explanation: 'The text explicitly describes flood irrigation as "a technique notorious for catastrophic evaporative loss and widespread waterlogging."'
  },
  {
    id: 3,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Vocabulary in Context',
    passageTitle: 'Reading Passage 1: Water Crisis and Agriculture in the Lower Indus Basin',
    passage: PASSAGE_1,
    statement: 'The word "precipitated" as employed in the passage most closely means:',
    options: {
      A: 'Rained down upon',
      B: 'Brought about or triggered',
      C: 'Carefully investigated',
      D: 'Gradually delayed'
    },
    correctOption: 'B',
    explanation: 'In context, "soil salinization, precipitated by poor drainage..." means brought about, triggered, or caused by poor drainage.'
  },
  {
    id: 4,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Inference',
    passageTitle: 'Reading Passage 1: Water Crisis and Agriculture in the Lower Indus Basin',
    passage: PASSAGE_1,
    statement: 'What can be logically inferred regarding "fiscal inertia" mentioned in the concluding sentence?',
    options: {
      A: 'Financial authorities have already dispersed excessive funds to farmers.',
      B: 'Reluctance or delay in allocating budgetary capital is preventing timely infrastructure modernization.',
      C: 'Modern irrigation equipment has become completely cost-free due to international aid.',
      D: 'Farmers refuse to adopt modern tools despite abundant government funding.'
    },
    correctOption: 'B',
    explanation: '"Fiscal inertia currently stalling reform" implies a sluggishness or reluctance on the part of institutions to invest necessary financial capital into canal and drainage modernization.'
  },
  {
    id: 5,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Author’s Tone & Purpose',
    passageTitle: 'Reading Passage 1: Water Crisis and Agriculture in the Lower Indus Basin',
    passage: PASSAGE_1,
    statement: 'The author’s overarching tone throughout the passage is best characterized as:',
    options: {
      A: 'Satirical and dismissive',
      B: 'Analytical and urgent',
      C: 'Unconditionally optimistic',
      D: 'Apathetic and noncommittal'
    },
    correctOption: 'B',
    explanation: 'The author systematically analyzes severe environmental and structural challenges with a clear, sober sense of urgency toward necessary policy intervention.'
  },

  // Passage 2: Q6 - Q10
  {
    id: 6,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Central Theme',
    passageTitle: 'Reading Passage 2: AI, EdTech, and Pedagogical Reality in Developing Economies',
    passage: PASSAGE_2,
    statement: 'Which statement best encapsulates the central concern raised in Passage 2?',
    options: {
      A: 'AI systems will completely replace human classroom instructors within the next decade.',
      B: 'Technological enthusiasm should not blind policy makers to underlying infrastructure deficits and the irreplaceable value of human mentorship.',
      C: 'Rural students universally outperform urban students when provided with foreign algorithmic curricula.',
      D: 'Computer algorithms have conclusively solved educational disparity in developing nations.'
    },
    correctOption: 'B',
    explanation: 'The passage explores both the promises and perils of AI education, cautioning against uncritical technocratic optimism in the face of deep digital divides and the need for human mentorship.'
  },
  {
    id: 7,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Specific Detail',
    passageTitle: 'Reading Passage 2: AI, EdTech, and Pedagogical Reality in Developing Economies',
    passage: PASSAGE_2,
    statement: 'Which of the following is NOT cited in the passage as a structural barrier in rural educational settings?',
    options: {
      A: 'Erratic electrification',
      B: 'Absence of localized pedagogical material in native dialects',
      C: 'Deficiency in broadband connectivity',
      D: 'Universal resistance by rural educators against technology'
    },
    correctOption: 'D',
    explanation: 'The passage lists erratic electrification, dearth of broadband connectivity, and absence of localized content in indigenous dialects, but never claims teachers resist technology universally.'
  },
  {
    id: 8,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Vocabulary in Context',
    passageTitle: 'Reading Passage 2: AI, EdTech, and Pedagogical Reality in Developing Economies',
    passage: PASSAGE_2,
    statement: 'In the context of the passage, the word "obfuscates" is closest in meaning to:',
    options: {
      A: 'Obscures or conceals',
      B: 'Expedites or accelerates',
      C: 'Validates and proves',
      D: 'Rectifies and cures'
    },
    correctOption: 'A',
    explanation: '"Obfuscates" means to render obscure, unclear, or hidden. Technocratic optimism obscures (masks/hides) real structural divides.'
  },
  {
    id: 9,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Critical Synthesis',
    passageTitle: 'Reading Passage 2: AI, EdTech, and Pedagogical Reality in Developing Economies',
    passage: PASSAGE_2,
    statement: 'What cognitive hazard does the passage associate with unchecked automated pedagogical evaluation?',
    options: {
      A: 'Permanent loss of eyesight among elementary pupils',
      B: 'Complete inability to decipher printed alphanumeric symbols',
      C: 'Trivializing intellectual learning into mere algorithmic pattern recognition',
      D: 'Accelerating linguistic fluency at the expense of computational mathematics'
    },
    correctOption: 'C',
    explanation: 'The passage warns that automated evaluation "risks reducing cognitive engagement to algorithmic pattern recognition rather than cultivating critical synthesis, empirical inquiry, and ethical deliberation."'
  },
  {
    id: 10,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Reading Comprehension: Author’s Conclusion',
    passageTitle: 'Reading Passage 2: AI, EdTech, and Pedagogical Reality in Developing Economies',
    passage: PASSAGE_2,
    statement: 'According to the author, what role should technological innovation ideally assume in the education sector?',
    options: {
      A: 'A total bureaucratic substitute for schools and universities',
      B: 'A profit-generating mechanism for multinational software corporations',
      C: 'A catalyst that enriches and supports human-centered mentorship',
      D: 'A standardized replacement for regional languages and cultures'
    },
    correctOption: 'C',
    explanation: 'The concluding sentence underscores that technological intervention must serve as a catalyst for human-centric mentorship.'
  },

  // Synonyms: Q11 - Q15
  {
    id: 11,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to the capitalized word:\n\nMETICULOUS',
    options: {
      A: 'Careless',
      B: 'Painstaking',
      C: 'Aggressive',
      D: 'Hasty'
    },
    correctOption: 'B',
    explanation: 'Meticulous means showing great attention to detail; very careful and precise. "Painstaking" is an exact synonym.'
  },
  {
    id: 12,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to the capitalized word:\n\nEPHEMERAL',
    options: {
      A: 'Transient',
      B: 'Perpetual',
      C: 'Immutable',
      D: 'Monolithic'
    },
    correctOption: 'A',
    explanation: 'Ephemeral means lasting for a very short time; fleeting or transient.'
  },
  {
    id: 13,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to the capitalized word:\n\nLUCID',
    options: {
      A: 'Ambiguous',
      B: 'Coherent',
      C: 'Turbid',
      D: 'Obtuse'
    },
    correctOption: 'B',
    explanation: 'Lucid means expressed clearly and easy to understand; coherent.'
  },
  {
    id: 14,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to the capitalized word:\n\nPRAGMATIC',
    options: {
      A: 'Visionary',
      B: 'Dogmatic',
      C: 'Utilitarian',
      D: 'Quixotic'
    },
    correctOption: 'C',
    explanation: 'Pragmatic means dealing with things sensibly and realistically based on practical considerations rather than theoretical ones. Utilitarian/practical is closest.'
  },
  {
    id: 15,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Synonyms',
    statement: 'Choose the word most nearly SIMILAR in meaning to the capitalized word:\n\nUBIQUITOUS',
    options: {
      A: 'Omnipresent',
      B: 'Scarce',
      C: 'Evanescent',
      D: 'Remote'
    },
    correctOption: 'A',
    explanation: 'Ubiquitous means present, appearing, or found everywhere; omnipresent.'
  },

  // Antonyms: Q16 - Q20
  {
    id: 16,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to the capitalized word:\n\nCANDID',
    options: {
      A: 'Frank',
      B: 'Disingenuous',
      C: 'Blunt',
      D: 'Ingenuous'
    },
    correctOption: 'B',
    explanation: 'Candid means truthful and straightforward. The opposite is disingenuous (deceitful, insincere).'
  },
  {
    id: 17,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to the capitalized word:\n\nMITIGATE',
    options: {
      A: 'Alleviate',
      B: 'Assuage',
      C: 'Exacerbate',
      D: 'Attenuate'
    },
    correctOption: 'C',
    explanation: 'Mitigate means to make less severe or serious. Exacerbate means to make a problem or situation worse.'
  },
  {
    id: 18,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to the capitalized word:\n\nPROLIFIC',
    options: {
      A: 'Sterile',
      B: 'Fecund',
      C: 'Productive',
      D: 'Copious'
    },
    correctOption: 'A',
    explanation: 'Prolific means producing much fruit or foliage or many works. The antonym is sterile (unproductive, barren).'
  },
  {
    id: 19,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to the capitalized word:\n\nOBSOLETE',
    options: {
      A: 'Archaic',
      B: 'Contemporary',
      C: 'Anachronistic',
      D: 'Outmoded'
    },
    correctOption: 'B',
    explanation: 'Obsolete means no longer produced or used; out of date. Contemporary means modern or currently in use.'
  },
  {
    id: 20,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Antonyms',
    statement: 'Choose the word most OPPOSITE in meaning to the capitalized word:\n\nGREGARIOUS',
    options: {
      A: 'Sociable',
      B: 'Affable',
      C: 'Reclusive',
      D: 'Convivial'
    },
    correctOption: 'C',
    explanation: 'Gregarious means fond of company; sociable. Reclusive means avoiding the company of others; solitary.'
  },

  // Prepositions: Q21 - Q25
  {
    id: 21,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition to complete the sentence:\n\n"The research scholar was completely absorbed _______ her investigation into Indus civilization ceramics."',
    options: {
      A: 'with',
      B: 'in',
      C: 'at',
      D: 'for'
    },
    correctOption: 'B',
    explanation: 'The standard idiomatic expression is "absorbed in" something (engrossed in).'
  },
  {
    id: 22,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition to complete the sentence:\n\n"The candidate’s qualification is compatible _______ the rigorous standards established by Sukkur IBA University."',
    options: {
      A: 'to',
      B: 'with',
      C: 'against',
      D: 'for'
    },
    correctOption: 'B',
    explanation: 'The adjective "compatible" takes the preposition "with".'
  },
  {
    id: 23,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition to complete the sentence:\n\n"Despite persistent queries, the vice chancellor refrained _______ commenting on ongoing policy revisions."',
    options: {
      A: 'from',
      B: 'to',
      C: 'of',
      D: 'in'
    },
    correctOption: 'A',
    explanation: 'The verb "refrain" is always followed by "from" + gerund (refrain from doing something).'
  },
  {
    id: 24,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition to complete the sentence:\n\n"The committee members were unable to arrive _______ a consensus regarding the examination schedule."',
    options: {
      A: 'on',
      B: 'at',
      C: 'in',
      D: 'to'
    },
    correctOption: 'B',
    explanation: 'One "arrives at" a decision, conclusion, or consensus.'
  },
  {
    id: 25,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Prepositions',
    statement: 'Select the appropriate preposition to complete the sentence:\n\n"He was accused of plagiarism, but the appellate committee completely exonerated him _______ all charges."',
    options: {
      A: 'of',
      B: 'from',
      C: 'with',
      D: 'by'
    },
    correctOption: 'B',
    explanation: 'The verb "exonerate" takes the preposition "from" (or sometimes "of", but standard academic English prefers "exonerate someone from an accusation/charge").'
  },

  // Error Detection: Q26 - Q30
  {
    id: 26,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment of the sentence that contains an error. If the sentence is correct as it stands, select D.\n\n"Neither the Dean nor the department faculty members [A] was present [B] at the inaugural symposium yesterday. [C] No Error [D]"',
    options: {
      A: 'Neither the Dean nor the department faculty members',
      B: 'was present',
      C: 'at the inaugural symposium yesterday.',
      D: 'No Error'
    },
    correctOption: 'B',
    explanation: 'When subjects are connected by "neither... nor...", the verb agrees with the closer subject. Since "the department faculty members" is plural, the verb must be "were present", not "was present".'
  },
  {
    id: 27,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment of the sentence containing an error:\n\n"The economic development of rural Sindh [A] is significantly dependent [B] on agriculture and it’s related agro-industries. [C] No Error [D]"',
    options: {
      A: 'The economic development of rural Sindh',
      B: 'is significantly dependent',
      C: 'on agriculture and it’s related agro-industries.',
      D: 'No Error'
    },
    correctOption: 'C',
    explanation: '"it’s" is a contraction for "it is". The possessive pronoun without an apostrophe, "its", is required: "its related agro-industries".'
  },
  {
    id: 28,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"Hardly had the invigilator [A] distributed the examination papers [B] when the emergency siren sounded. [C] No Error [D]"',
    options: {
      A: 'Hardly had the invigilator',
      B: 'distributed the examination papers',
      C: 'when the emergency siren sounded.',
      D: 'No Error'
    },
    correctOption: 'D',
    explanation: '"Hardly had... when..." is the correct correlative construction with inversion. The sentence is grammatically flawless; therefore, the answer is D (No Error).'
  },
  {
    id: 29,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"Each of the shortlisted candidates [A] were requested to present [B] their original domicile certificate upon arrival. [C] No Error [D]"',
    options: {
      A: 'Each of the shortlisted candidates',
      B: 'were requested to present',
      C: 'their original domicile certificate upon arrival.',
      D: 'No Error'
    },
    correctOption: 'B',
    explanation: 'The indefinite pronoun "Each" is singular and takes a singular verb: "was requested", not "were requested".'
  },
  {
    id: 30,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Error Detection',
    statement: 'Identify the segment containing an error:\n\n"The climate of Sukkur during summer [A] is much hotter [B] than Karachi. [C] No Error [D]"',
    options: {
      A: 'The climate of Sukkur during summer',
      B: 'is much hotter',
      C: 'than Karachi.',
      D: 'No Error'
    },
    correctOption: 'C',
    explanation: 'This is an illogical comparison error. You cannot compare "the climate of Sukkur" directly with the city "Karachi". It must be "than that of Karachi" or "than Karachi’s climate".'
  },

  // Verbs and Subject-Verb Agreement: Q31 - Q35
  {
    id: 31,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Select the verb that correctly completes the sentence:\n\n"The panel of veteran evaluators _______ submitted its final assessment report to the governing syndicate."',
    options: {
      A: 'have',
      B: 'has',
      C: 'are',
      D: 'were'
    },
    correctOption: 'B',
    explanation: 'The subject is the collective singular noun phrase "The panel" (emphasized as a single unit by the singular pronoun "its"), which requires the singular verb "has".'
  },
  {
    id: 32,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Choose the correct verb form:\n\n"Ten kilometers across the desert expanse _______ considered a strenuous hike for novice cadets."',
    options: {
      A: 'is',
      B: 'are',
      C: 'were',
      D: 'have been'
    },
    correctOption: 'A',
    explanation: 'Expressions of distance, time, and money are treated as single quantities and take singular verbs. Hence, "is considered".'
  },
  {
    id: 33,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Select the grammatically correct option:\n\n"The professor, accompanied by five graduate researchers, _______ attending the international symposium in Islamabad tomorrow."',
    options: {
      A: 'is',
      B: 'are',
      C: 'were',
      D: 'have been'
    },
    correctOption: 'A',
    explanation: 'Phrases introduced by "accompanied by", "along with", "as well as" do not alter the number of the subject. The main subject "The professor" is singular, requiring "is".'
  },
  {
    id: 34,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Choose the verb that completes the sentence:\n\n"A large number of applicants _______ disqualified due to incomplete documentary credentials."',
    options: {
      A: 'was',
      B: 'were',
      C: 'is',
      D: 'has been'
    },
    correctOption: 'B',
    explanation: '"A number of..." takes a plural verb (in contrast to "The number of...", which takes a singular verb). Thus, "were disqualified" is correct.'
  },
  {
    id: 35,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Subject-Verb Agreement',
    statement: 'Select the correct verb form:\n\n"Neither the structural engineer nor the project architects _______ satisfied with the foundation soil testing."',
    options: {
      A: 'was',
      B: 'is',
      C: 'are',
      D: 'has been'
    },
    correctOption: 'C',
    explanation: 'In "neither... nor...", the verb agrees with the closest subject. "The project architects" is plural, requiring the plural verb "are".'
  },

  // Tenses and Conditional Sentences: Q36 - Q40
  {
    id: 36,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Conditionals: Third Conditional',
    statement: 'Choose the correct form to complete the hypothetical past conditional sentence:\n\n"If the agricultural department _______ modern canal linings earlier, millions of gallons of water would have been conserved."',
    options: {
      A: 'installed',
      B: 'had installed',
      C: 'would install',
      D: 'would have installed'
    },
    correctOption: 'B',
    explanation: 'The third conditional (unfulfilled past condition) follows the structure: If + past perfect (had installed), would have + past participle.'
  },
  {
    id: 37,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Conditionals: Second Conditional',
    statement: 'Select the appropriate clause completion:\n\n"If she _______ more time to review the mathematics syllabus, she would score above 90%."',
    options: {
      A: 'had',
      B: 'has',
      C: 'will have',
      D: 'would have'
    },
    correctOption: 'A',
    explanation: 'The second conditional expresses an unreal present condition: If + simple past (had), would + base verb.'
  },
  {
    id: 38,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Tenses: Present Perfect Continuous',
    statement: 'Choose the correct verb form:\n\n"The provincial irrigation team _______ along the Rohri canal since daybreak."',
    options: {
      A: 'has been surveying',
      B: 'is surveying',
      C: 'had surveyed',
      D: 'was surveying'
    },
    correctOption: 'A',
    explanation: 'An action that began in the past and continues in the present indicated by "since daybreak" requires the present perfect continuous: "has been surveying".'
  },
  {
    id: 39,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Tenses: Future Perfect',
    statement: 'Select the verb tense that accurately completes the timeline:\n\n"By December 2027, the STHP scholarship fellows _______ their comprehensive preparatory training."',
    options: {
      A: 'will complete',
      B: 'will have completed',
      C: 'have completed',
      D: 'had completed'
    },
    correctOption: 'B',
    explanation: 'The phrase "By December 2027" marks a future completion deadline, requiring the future perfect tense: "will have completed".'
  },
  {
    id: 40,
    section: 'ENGLISH',
    sectionNumber: 1,
    topic: 'Conditionals: Inverted Conditional',
    statement: 'Choose the appropriate inversion structure:\n\n"_______ you encounter any technical discrepancy during the online examination, notify the invigilator immediately."',
    options: {
      A: 'Should',
      B: 'Were',
      C: 'Had',
      D: 'Unless'
    },
    correctOption: 'A',
    explanation: '"Should you encounter..." is an inverted conditional equivalent to "If you should encounter...", standard in formal examination guidelines.'
  },

  // ==========================================
  // PART II – MATHEMATICS (Questions 41 to 80)
  // ==========================================

  // Topic 1: Sets and Venn Diagrams
  {
    id: 41,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Sets and Venn Diagrams',
    statement: 'In an examination class of 60 students, 35 passed in English, 32 passed in Mathematics, and 12 failed in both subjects. How many students passed in BOTH subjects?',
    options: {
      A: '15',
      B: '19',
      C: '22',
      D: '25'
    },
    correctOption: 'B',
    explanation: 'Total students = 60. Students passing at least one subject = 60 - 12 = 48. By the principle of inclusion-exclusion: n(E ∪ M) = n(E) + n(M) - n(E ∩ M) => 48 = 35 + 32 - n(E ∩ M) => n(E ∩ M) = 67 - 48 = 19.'
  },

  // Topic 2: LCM and HCF
  {
    id: 42,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'LCM and HCF',
    statement: 'The HCF of two numbers is 18 and their LCM is 360. If one of the numbers is 72, find the other number.',
    options: {
      A: '80',
      B: '90',
      C: '108',
      D: '120'
    },
    correctOption: 'B',
    explanation: 'Product of two numbers = HCF × LCM. Let the second number be x. 72 × x = 18 × 360 => x = (18 × 360) / 72 = 360 / 4 = 90.'
  },

  // Topic 3: Real Numbers, Fractions and Decimals
  {
    id: 43,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Real Numbers, Fractions and Decimals',
    statement: 'Evaluate the exact fractional value of the recurring decimal 0.3̄6̄ (0.363636...):',
    options: {
      A: '4/11',
      B: '9/25',
      C: '36/100',
      D: '7/22'
    },
    correctOption: 'A',
    explanation: 'Let x = 0.363636... Then 100x = 36.363636... Subtracting gives 99x = 36 => x = 36/99 = (36 ÷ 9) / (99 ÷ 9) = 4/11.'
  },

  // Topic 4: Surds and Indices
  {
    id: 44,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Surds and Indices',
    statement: 'Simplify the expression by rationalizing the denominator: (3 + √5) / (3 - √5)',
    options: {
      A: '(7 + 3√5) / 2',
      B: '(7 + 6√5) / 4',
      C: '2 + √5',
      D: '(14 + 6√5) / 4'
    },
    correctOption: 'A',
    explanation: 'Multiply numerator and denominator by conjugate (3 + √5): (3 + √5)² / (3² - (√5)²) = (9 + 6√5 + 5) / (9 - 5) = (14 + 6√5) / 4 = (7 + 3√5) / 2.'
  },

  // Topic 5: Surds and Indices (Laws of Exponents)
  {
    id: 45,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Surds and Indices',
    statement: 'If 2^(x - 1) + 2^(x + 1) = 320, find the value of x.',
    options: {
      A: '5',
      B: '6',
      C: '7',
      D: '8'
    },
    correctOption: 'C',
    explanation: 'Factor out 2^x: 2^x (2^(-1) + 2^1) = 320 => 2^x (1/2 + 2) = 320 => 2^x (5/2) = 320 => 2^x = 320 × (2/5) = 64 × 2 = 128 = 2^7. Therefore, x = 7.'
  },

  // Topic 6: Algebraic Expressions and Polynomials
  {
    id: 46,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Algebraic Expressions and Polynomials',
    statement: 'If x + 1/x = 4, find the numerical value of x³ + 1/x³.',
    options: {
      A: '52',
      B: '64',
      C: '76',
      D: '48'
    },
    correctOption: 'A',
    explanation: 'Cube both sides: (x + 1/x)³ = x³ + 1/x³ + 3(x)(1/x)(x + 1/x) => 4³ = (x³ + 1/x³) + 3(4) => 64 = (x³ + 1/x³) + 12 => x³ + 1/x³ = 64 - 12 = 52.'
  },

  // Topic 7: Linear and Simultaneous Equations
  {
    id: 47,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Linear and Simultaneous Equations',
    statement: 'Solve the system of equations for (x, y):\n3x + 2y = 19\n2x - y = 8\nWhat is the value of x - y?',
    options: {
      A: '1',
      B: '3',
      C: '5',
      D: '7'
    },
    correctOption: 'B',
    explanation: 'From equation 2: y = 2x - 8. Substitute into equation 1: 3x + 2(2x - 8) = 19 => 3x + 4x - 16 = 19 => 7x = 35 => x = 5. Then y = 2(5) - 8 = 2. Thus x - y = 5 - 2 = 3.'
  },

  // Topic 8: Quadratic Equations
  {
    id: 48,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Quadratic Equations',
    statement: 'If α and β are the roots of the quadratic equation 2x² - 7x + 3 = 0, find the value of (α/β) + (β/α).',
    options: {
      A: '37/6',
      B: '49/12',
      C: '25/6',
      D: '13/6'
    },
    correctOption: 'A',
    explanation: 'Sum of roots: α + β = -(-7)/2 = 7/2. Product of roots: αβ = 3/2. Now (α/β) + (β/α) = (α² + β²) / (αβ) = [(α + β)² - 2αβ] / (αβ) = [(49/4) - 2(3/2)] / (3/2) = [(49/4) - 3] / (3/2) = (37/4) / (3/2) = (37/4) × (2/3) = 37/6.'
  },

  // Topic 9: Absolute Values and Inequalities
  {
    id: 49,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Absolute Values and Inequalities',
    statement: 'Find the solution set for the inequality: |2x - 5| ≤ 9',
    options: {
      A: '-2 ≤ x ≤ 7',
      B: '-7 ≤ x ≤ 2',
      C: 'x ≤ -2 or x ≥ 7',
      D: '0 ≤ x ≤ 7'
    },
    correctOption: 'A',
    explanation: '|2x - 5| ≤ 9 <=> -9 ≤ 2x - 5 ≤ 9. Add 5 to all parts: -4 ≤ 2x ≤ 14. Divide by 2: -2 ≤ x ≤ 7.'
  },

  // Topic 10: Logarithms
  {
    id: 50,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Logarithms',
    statement: 'Evaluate the value of x if log₂(x) + log₂(x - 2) = 3.',
    options: {
      A: '4',
      B: '2',
      C: '6',
      D: '-2 and 4'
    },
    correctOption: 'A',
    explanation: 'Using log rules: log₂[x(x - 2)] = 3 => x(x - 2) = 2³ = 8 => x² - 2x - 8 = 0 => (x - 4)(x + 2) = 0. Since log argument must be positive (x > 2), x = 4.'
  },

  // Topic 11: Percentages
  {
    id: 51,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Percentages',
    statement: 'If the price of petrol is increased by 25%, by what percentage must a motorist reduce consumption so that expenditure on petrol remains unchanged?',
    options: {
      A: '15%',
      B: '20%',
      C: '25%',
      D: '16.67%'
    },
    correctOption: 'B',
    explanation: 'Reduction in consumption = [r / (100 + r)] × 100% = [25 / 125] × 100% = (1/5) × 100% = 20%.'
  },

  // Topic 12: Profit, Loss and Discounts
  {
    id: 52,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Profit, Loss and Discounts',
    statement: 'A shopkeeper marks an article 40% above its cost price and offers a discount of 15% on the marked price. What is his net profit percentage?',
    options: {
      A: '19%',
      B: '22%',
      C: '25%',
      D: '28%'
    },
    correctOption: 'A',
    explanation: 'Let CP = 100. Marked Price MP = 140. Discount = 15% of 140 = 21. Selling Price SP = 140 - 21 = 119. Net profit = 119 - 100 = 19%.'
  },

  // Topic 13: Ratio and Proportion
  {
    id: 53,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Ratio and Proportion',
    statement: 'If A : B = 3 : 4 and B : C = 8 : 9, find the ratio A : B : C.',
    options: {
      A: '6 : 8 : 9',
      B: '3 : 8 : 9',
      C: '9 : 12 : 16',
      D: '3 : 4 : 9'
    },
    correctOption: 'A',
    explanation: 'A : B = 3 : 4 = 6 : 8 (multiplying by 2). B : C = 8 : 9. Since B is 8 in both, A : B : C = 6 : 8 : 9.'
  },

  // Topic 14: Averages
  {
    id: 54,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Averages',
    statement: 'The average score of 24 students in an STHP entrance test was 65. If the teacher’s score is included, the average increases by 1 mark. What was the teacher’s score?',
    options: {
      A: '88',
      B: '90',
      C: '92',
      D: '85'
    },
    correctOption: 'B',
    explanation: 'Total score of 24 students = 24 × 65 = 1560. New average of 25 individuals = 66. Total score = 25 × 66 = 1650. Teacher’s score = 1650 - 1560 = 90.'
  },

  // Topic 15: Age Problems
  {
    id: 55,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Age Problems',
    statement: 'Six years ago, a father was four times as old as his son. In six years from now, he will be twice as old as his son. What is the father’s current age?',
    options: {
      A: '36 years',
      B: '42 years',
      C: '48 years',
      D: '30 years'
    },
    correctOption: 'D',
    explanation: 'Let father’s present age be F and son’s S. Six years ago: F - 6 = 4(S - 6) => F - 4S = -18. Six years hence: F + 6 = 2(S + 6) => F - 2S = 6. Subtracting gives: 2S = 24 => S = 12. Then F = 2(12) + 6 = 30 years. (Check: 6 yrs ago father was 24, son 6 -> 4x; in 6 yrs father 36, son 18 -> 2x).'
  },

  // Topic 16: Time and Work
  {
    id: 56,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Time and Work',
    statement: 'A can complete a project in 12 days, while B can complete the same project in 18 days. If they work together for 4 days and then A leaves, in how many additional days will B finish the remaining work?',
    options: {
      A: '6 days',
      B: '8 days',
      C: '10 days',
      D: '5 days'
    },
    correctOption: 'B',
    explanation: 'Combined 1-day work = 1/12 + 1/18 = (3 + 2)/36 = 5/36. In 4 days, work completed = 4 × (5/36) = 20/36 = 5/9. Remaining work = 1 - 5/9 = 4/9. Time required by B = (4/9) ÷ (1/18) = (4/9) × 18 = 8 days.'
  },

  // Topic 17: Speed, Time and Distance
  {
    id: 57,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Speed, Time and Distance',
    statement: 'A train 180 meters long travelling at a speed of 72 km/h crosses a bridge in 24 seconds. What is the length of the bridge?',
    options: {
      A: '240 meters',
      B: '300 meters',
      C: '320 meters',
      D: '360 meters'
    },
    correctOption: 'B',
    explanation: 'Speed in m/s = 72 × (5/18) = 20 m/s. Total distance in 24 s = Speed × Time = 20 × 24 = 480 meters. Total distance = Train length + Bridge length => 180 + L = 480 => L = 300 meters.'
  },

  // Topic 18: Simple and Compound Interest
  {
    id: 58,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Simple and Compound Interest',
    statement: 'What is the compound interest on Rs. 8,000 for 2 years at 10% per annum, compounded annually?',
    options: {
      A: 'Rs. 1,600',
      B: 'Rs. 1,680',
      C: 'Rs. 1,720',
      D: 'Rs. 1,840'
    },
    correctOption: 'B',
    explanation: 'Amount = P(1 + r/100)^t = 8000(1 + 0.10)² = 8000(1.21) = Rs. 9,680. Compound Interest CI = 9680 - 8000 = Rs. 1,680.'
  },

  // Topic 19: Geometry - Triangles and Angles
  {
    id: 59,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Geometry: Triangles and Angles',
    statement: 'In triangle ABC, angle B is 90°. If AB = 8 cm and BC = 15 cm, find the length of the altitude drawn from B to the hypotenuse AC.',
    options: {
      A: '120/17 cm',
      B: '17/2 cm',
      C: '7 cm',
      D: '135/17 cm'
    },
    correctOption: 'A',
    explanation: 'Hypotenuse AC = √(8² + 15²) = √(64 + 225) = √289 = 17 cm. Area of triangle = (1/2) × base × height = (1/2) × 8 × 15 = 60 cm². Also Area = (1/2) × AC × altitude h => 60 = (1/2) × 17 × h => h = 120/17 cm.'
  },

  // Topic 20: Area, Perimeter and Volume
  {
    id: 60,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Area, Perimeter and Volume',
    statement: 'A circular garden of radius 14 meters has a running path 3.5 meters wide around its outside perimeter. Find the area of the running path (Take π = 22/7).',
    options: {
      A: '346.5 m²',
      B: '385.0 m²',
      C: '420.5 m²',
      D: '308.0 m²'
    },
    correctOption: 'A',
    explanation: 'Inner radius r = 14 m. Outer radius R = 14 + 3.5 = 17.5 m = 35/2 m. Area of path = π(R² - r²) = (22/7) × (17.5² - 14²) = (22/7) × (17.5 - 14)(17.5 + 14) = (22/7) × 3.5 × 31.5 = (22/7) × (7/2) × 31.5 = 11 × 31.5 = 346.5 m².'
  },

  // Topic 21: Coordinate Geometry
  {
    id: 61,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Coordinate Geometry',
    statement: 'Find the distance between the points P(3, -4) and Q(-2, 8) in the Cartesian plane.',
    options: {
      A: '12',
      B: '13',
      C: '15',
      D: '√145'
    },
    correctOption: 'B',
    explanation: 'Distance = √[(x₂ - x₁)² + (y₂ - y₁)²] = √[(-2 - 3)² + (8 - (-4))²] = √[(-5)² + (12)²] = √[25 + 144] = √169 = 13.'
  },

  // Topic 22: Coordinate Geometry (Slope and Lines)
  {
    id: 62,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Coordinate Geometry',
    statement: 'What is the slope of a straight line perpendicular to the line 3x - 4y + 12 = 0?',
    options: {
      A: '3/4',
      B: '-3/4',
      C: '-4/3',
      D: '4/3'
    },
    correctOption: 'C',
    explanation: 'Rewrite line in slope-intercept form: 4y = 3x + 12 => y = (3/4)x + 3. The slope m₁ = 3/4. For perpendicular lines, m₁ × m₂ = -1 => m₂ = -4/3.'
  },

  // Topic 23: Information Handling and Statistics
  {
    id: 63,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Information Handling and Statistics',
    statement: 'For the data set: 12, 15, 12, 18, 22, 15, 12, 25, 20, what is the mode and median respectively?',
    options: {
      A: 'Mode = 12, Median = 15',
      B: 'Mode = 15, Median = 15',
      C: 'Mode = 12, Median = 18',
      D: 'Mode = 15, Median = 12'
    },
    correctOption: 'A',
    explanation: 'Count frequencies: 12 appears three times (highest frequency, so Mode = 12). Arrange data in ascending order: 12, 12, 12, 15, 15, 18, 20, 22, 25 (9 items). The median is the 5th term = 15.'
  },

  // Topic 24: Relations and Functions
  {
    id: 64,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Relations and Functions',
    statement: 'If f(x) = 2x² - 3x + 5, what is the value of f(-2)?',
    options: {
      A: '7',
      B: '15',
      C: '19',
      D: '23'
    },
    correctOption: 'C',
    explanation: 'Substitute x = -2: f(-2) = 2(-2)² - 3(-2) + 5 = 2(4) + 6 + 5 = 8 + 6 + 5 = 19.'
  },

  // Topic 25: Polynomial Factorization
  {
    id: 65,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Algebraic Expressions and Polynomials',
    statement: 'Factorize completely: 4a² - 9b² + 6b - 1',
    options: {
      A: '(2a - 3b + 1)(2a + 3b - 1)',
      B: '(2a + 3b + 1)(2a - 3b - 1)',
      C: '(2a - 3b - 1)(2a + 3b + 1)',
      D: '(4a - 3b + 1)(a + 3b - 1)'
    },
    correctOption: 'A',
    explanation: 'Group the last three terms: 4a² - (9b² - 6b + 1) = (2a)² - (3b - 1)². Apply difference of squares x² - y² = (x - y)(x + y): [2a - (3b - 1)][2a + (3b - 1)] = (2a - 3b + 1)(2a + 3b - 1).'
  },

  // Topic 26: Sets and Power Sets
  {
    id: 66,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Sets and Venn Diagrams',
    statement: 'If set S = {x : x is a prime factor of 30}, how many proper subsets does set S have?',
    options: {
      A: '6',
      B: '7',
      C: '8',
      D: '15'
    },
    correctOption: 'B',
    explanation: 'Prime factors of 30 are 2, 3, 5. So n(S) = 3. Total number of subsets = 2³ = 8. Number of proper subsets = 2ⁿ - 1 = 8 - 1 = 7.'
  },

  // Topic 27: Surds and Exponent Equations
  {
    id: 67,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Surds and Indices',
    statement: 'Solve for x: 9^(x + 2) = (1/27)^(x - 1)',
    options: {
      A: '-1/5',
      B: '1/5',
      C: '-1/2',
      D: '3/5'
    },
    correctOption: 'A',
    explanation: 'Express both sides with base 3: (3²)^(x + 2) = (3^(-3))^(x - 1) => 3^(2x + 4) = 3^(-3x + 3) => 2x + 4 = -3x + 3 => 5x = -1 => x = -1/5.'
  },

  // Topic 28: Speed, Relative Speed
  {
    id: 68,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Speed, Time and Distance',
    statement: 'Two cars start simultaneously from Sukkur and Hyderabad towards each other, a distance of 330 km. Car A travels at 50 km/h and Car B at 60 km/h. After how many hours will they cross each other?',
    options: {
      A: '2.5 hours',
      B: '3.0 hours',
      C: '3.3 hours',
      D: '3.5 hours'
    },
    correctOption: 'B',
    explanation: 'Relative speed moving towards each other = 50 + 60 = 110 km/h. Time to meet = Total distance / Relative speed = 330 / 110 = 3 hours.'
  },

  // Topic 29: Profit and Mixture
  {
    id: 69,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Profit, Loss and Discounts',
    statement: 'In what ratio must rice at Rs. 90 per kg be mixed with rice at Rs. 140 per kg to obtain a mixture worth Rs. 110 per kg?',
    options: {
      A: '2 : 3',
      B: '3 : 2',
      C: '1 : 2',
      D: '3 : 4'
    },
    correctOption: 'B',
    explanation: 'By the rule of alligation: (Cost of dearer - Mean) / (Mean - Cost of cheaper) = (140 - 110) / (110 - 90) = 30 / 20 = 3 / 2. Ratio is 3 : 2.'
  },

  // Topic 30: Geometry - Circle Theorems
  {
    id: 70,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Geometry: Circles',
    statement: 'A chord of length 16 cm is at a distance of 6 cm from the center of a circle. What is the diameter of the circle?',
    options: {
      A: '10 cm',
      B: '15 cm',
      C: '20 cm',
      D: '24 cm'
    },
    correctOption: 'C',
    explanation: 'Perpendicular from center bisects chord: half chord = 8 cm. Distance d = 6 cm. Radius r = √(8² + 6²) = √(64 + 36) = √100 = 10 cm. Diameter = 2 × 10 = 20 cm.'
  },

  // Topic 31: Quadratic nature of roots
  {
    id: 71,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Quadratic Equations',
    statement: 'For what positive value of k will the quadratic equation kx² - 12x + 9 = 0 have equal real roots?',
    options: {
      A: '2',
      B: '3',
      C: '4',
      D: '6'
    },
    correctOption: 'C',
    explanation: 'Equal roots occur when discriminant D = b² - 4ac = 0. Here (-12)² - 4(k)(9) = 0 => 144 - 36k = 0 => 36k = 144 => k = 4.'
  },

  // Topic 32: Area and Volume (Cylinder)
  {
    id: 72,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Area, Perimeter and Volume',
    statement: 'Find the total surface area of a closed solid cylinder with radius 7 cm and height 10 cm (Take π = 22/7).',
    options: {
      A: '748 cm²',
      B: '440 cm²',
      C: '880 cm²',
      D: '616 cm²'
    },
    correctOption: 'A',
    explanation: 'Total surface area = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 10) = 44 × 17 = 748 cm².'
  },

  // Topic 33: Simultaneous word problems
  {
    id: 73,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Linear and Simultaneous Equations',
    statement: 'The sum of the digits of a two-digit number is 9. If 27 is subtracted from the number, the digits reverse their order. What is the original number?',
    options: {
      A: '72',
      B: '63',
      C: '54',
      D: '81'
    },
    correctOption: 'B',
    explanation: 'Let number be 10t + u. Given t + u = 9. (10t + u) - 27 = 10u + t => 9t - 9u = 27 => t - u = 3. Adding t + u = 9 and t - u = 3 gives 2t = 12 => t = 6, u = 3. Number is 63. (63 - 27 = 36).'
  },

  // Topic 34: Simple Interest
  {
    id: 74,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Simple and Compound Interest',
    statement: 'At what annual rate of simple interest will a principal sum of money double itself in 8 years?',
    options: {
      A: '10%',
      B: '12.5%',
      C: '14%',
      D: '15%'
    },
    correctOption: 'B',
    explanation: 'To double, Interest I = Principal P. Formula: I = (P × R × T) / 100 => P = (P × R × 8) / 100 => 1 = 8R / 100 => R = 100 / 8 = 12.5%.'
  },

  // Topic 35: Statistics: Mean
  {
    id: 75,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Information Handling and Statistics',
    statement: 'The mean of 5 observations is 18. If one observation is excluded, their mean becomes 16. What was the value of the excluded observation?',
    options: {
      A: '22',
      B: '24',
      C: '26',
      D: '28'
    },
    correctOption: 'C',
    explanation: 'Sum of 5 observations = 5 × 18 = 90. Sum of remaining 4 observations = 4 × 16 = 64. Excluded observation = 90 - 64 = 26.'
  },

  // Topic 36: Functions (Domain)
  {
    id: 76,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Relations and Functions',
    statement: 'What is the domain of the real-valued function f(x) = √(2x - 8)?',
    options: {
      A: 'x > 4',
      B: 'x ≥ 4',
      C: 'x ≤ 4',
      D: 'All real numbers'
    },
    correctOption: 'B',
    explanation: 'For a square root to yield real numbers, the radicand must be non-negative: 2x - 8 ≥ 0 => 2x ≥ 8 => x ≥ 4.'
  },

  // Topic 37: Geometric Polygon
  {
    id: 77,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Geometry: Polygons',
    statement: 'What is the measure of each interior angle of a regular octagon (8-sided polygon)?',
    options: {
      A: '120°',
      B: '135°',
      C: '144°',
      D: '150°'
    },
    correctOption: 'B',
    explanation: 'Each interior angle of a regular n-gon = [(n - 2) × 180°] / n. For n = 8: [(8 - 2) × 180°] / 8 = (6 × 180°) / 8 = 1080° / 8 = 135°.'
  },

  // Topic 38: Time and Work (Pipes and Cisterns)
  {
    id: 78,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Time and Work',
    statement: 'Pipe A can fill a tank in 6 hours, while Pipe B can empty it in 8 hours. If both pipes are opened simultaneously when the tank is empty, in how many hours will the tank be completely filled?',
    options: {
      A: '14 hours',
      B: '20 hours',
      C: '24 hours',
      D: '28 hours'
    },
    correctOption: 'C',
    explanation: 'Net fill rate per hour = 1/6 - 1/8 = (4 - 3)/24 = 1/24. Thus, it will take 24 hours to fill the tank.'
  },

  // Topic 39: Logarithmic evaluation
  {
    id: 79,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Logarithms',
    statement: 'If log₁₀(2) = 0.3010 and log₁₀(3) = 0.4771, calculate the value of log₁₀(15).',
    options: {
      A: '1.1761',
      B: '1.2781',
      C: '1.0791',
      D: '1.3010'
    },
    correctOption: 'A',
    explanation: 'Note that 15 = 30 / 2 = (3 × 10) / 2. So log₁₀(15) = log₁₀(3) + log₁₀(10) - log₁₀(2) = 0.4771 + 1 - 0.3010 = 1.4771 - 0.3010 = 1.1761.'
  },

  // Topic 40: Fractions and Proportions
  {
    id: 80,
    section: 'MATHEMATICS',
    sectionNumber: 2,
    topic: 'Real Numbers, Fractions and Decimals',
    statement: 'A student was asked to find 3/14 of a certain number. By mistake, he calculated 3/4 of the number and got an answer that was 150 greater than the correct answer. What was the given number?',
    options: {
      A: '240',
      B: '280',
      C: '320',
      D: '360'
    },
    correctOption: 'B',
    explanation: 'Let the number be x. Given: (3/4)x - (3/14)x = 150. Common denominator is 28: (21x - 6x)/28 = 150 => 15x / 28 = 150 => x = (150 × 28) / 15 = 10 × 28 = 280.'
  },

  // ==========================================
  // PART III – INTELLIGENCE / IQ (Questions 81 to 100)
  // ==========================================

  // Q81: Number Series
  {
    id: 81,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Number Series',
    statement: 'Find the next number in the sequence:\n4, 9, 25, 49, 121, 169, ?',
    options: {
      A: '225',
      B: '256',
      C: '289',
      D: '361'
    },
    correctOption: 'C',
    explanation: 'The numbers are squares of consecutive prime numbers: 2² = 4, 3² = 9, 5² = 25, 7² = 49, 11² = 121, 13² = 169. The next prime number is 17, and 17² = 289.'
  },

  // Q82: Letter Series
  {
    id: 82,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Letter Series',
    statement: 'Identify the missing term in the sequence:\nAZ, CX, EV, GT, ?',
    options: {
      A: 'IR',
      B: 'HS',
      C: 'JQ',
      D: 'KP'
    },
    correctOption: 'A',
    explanation: 'First letters advance by +2: A(+2) -> C(+2) -> E(+2) -> G(+2) -> I. Second letters are reverse alphabetical opposites: A-Z, C-X, E-V, G-T, I-R.'
  },

  // Q83: Verbal Analogy
  {
    id: 83,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Analogy',
    statement: 'Complete the analogy:\nARCHITECT : BLUEPRINT :: SCULPTOR : ?',
    options: {
      A: 'Chisel',
      B: 'Marble',
      C: 'Maquette',
      D: 'Museum'
    },
    correctOption: 'C',
    explanation: 'An architect creates a blueprint as a small preliminary plan/model before constructing a building. Similarly, a sculptor creates a maquette (a small scale preliminary model) before making the full sculpture.'
  },

  // Q84: Odd One Out
  {
    id: 84,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Odd One Out',
    statement: 'Which of the following numbers does NOT fit the group?',
    options: {
      A: '27',
      B: '64',
      C: '125',
      D: '144'
    },
    correctOption: 'D',
    explanation: '27 = 3³, 64 = 4³, 125 = 5³ are all cubes of integers. 144 is 12² (a square, but not a perfect cube of an integer).'
  },

  // Q85: Logical Sequence
  {
    id: 85,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Logical Sequence',
    statement: 'Arrange the following stages in a meaningful logical chronological sequence:\n1. Application\n2. Advertisement\n3. Interview\n4. Appointment Order\n5. Entrance Test',
    options: {
      A: '2, 1, 5, 3, 4',
      B: '1, 2, 5, 3, 4',
      C: '2, 1, 3, 5, 4',
      D: '5, 2, 1, 3, 4'
    },
    correctOption: 'A',
    explanation: 'The natural recruitment sequence is: 2. Advertisement -> 1. Application -> 5. Entrance Test -> 3. Interview -> 4. Appointment Order.'
  },

  // Q86: Blood Relations
  {
    id: 86,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Blood Relations',
    statement: 'Pointing to a photograph, a woman says: "His mother is the only daughter of my mother." How is the woman related to the boy in the photograph?',
    options: {
      A: 'Sister',
      B: 'Mother',
      C: 'Aunt',
      D: 'Grandmother'
    },
    correctOption: 'B',
    explanation: '"The only daughter of my mother" is the woman herself. Since "His mother is [the woman herself]", the woman is the boy’s mother.'
  },

  // Q87: Direction Sense
  {
    id: 87,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Direction Sense',
    statement: 'Rashid walks 12 km North, turns right and walks 5 km East, then turns right again and walks 12 km South. How far and in which direction is he now from his starting point?',
    options: {
      A: '5 km East',
      B: '5 km West',
      C: '12 km North',
      D: '13 km North-East'
    },
    correctOption: 'A',
    explanation: 'The 12 km North and 12 km South cancel each other along the vertical axis. Rashid is exactly 5 km East of his starting position.'
  },

  // Q88: Coding-Decoding
  {
    id: 88,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Coding-Decoding',
    statement: 'In a certain code language, if SUKKUR is coded as TVLLVS, how will TALENT be coded in that same system?',
    options: {
      A: 'UBMFOI',
      B: 'UBMEOU',
      C: 'UCMFOU',
      D: 'UBMFOU'
    },
    correctOption: 'D',
    explanation: 'Each letter is shifted forward by +1 position: S->T, U->V, K->L, K->L, U->V, R->S. For TALENT: T+1=U, A+1=B, L+1=M, E+1=F, N+1=O, T+1=U => UBMFOU.'
  },

  // Q89: Missing Number in Grid
  {
    id: 89,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Missing Numbers',
    statement: 'Find the missing number in the mathematical pattern:\nRow 1: [ 3, 5, 34 ]\nRow 2: [ 4, 6, 52 ]\nRow 3: [ 5, 7, ? ]',
    options: {
      A: '70',
      B: '72',
      C: '74',
      D: '76'
    },
    correctOption: 'C',
    explanation: 'The pattern is (First)² + (Second)² = Third. Row 1: 3² + 5² = 9 + 25 = 34. Row 2: 4² + 6² = 16 + 36 = 52. Row 3: 5² + 7² = 25 + 49 = 74.'
  },

  // Q90: Venn Diagram Logic
  {
    id: 90,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Venn Diagram Logic',
    statement: 'Which of the following best represents the relationship between: "Scholars, Teachers, and Women"?',
    options: {
      A: 'Three mutually exclusive disjoint circles',
      B: 'Three mutually intersecting circles overlapping at the center',
      C: 'One circle completely inside another with a third disjoint circle',
      D: 'Two concentric circles with one overlapping circle'
    },
    correctOption: 'B',
    explanation: 'A woman can be both a teacher and a scholar; a teacher can be a woman or a scholar; a scholar can be a teacher or a woman. Hence, three mutually intersecting circles where all three categories overlap correctly represents the relationship.'
  },

  // Q91: Number Series (Alternating Difference)
  {
    id: 91,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Number Series',
    statement: 'Identify the next number in the alternating sequence:\n2, 6, 12, 20, 30, 42, ?',
    options: {
      A: '54',
      B: '56',
      C: '58',
      D: '60'
    },
    correctOption: 'B',
    explanation: 'Differences are consecutive even integers: 6-2=4, 12-6=6, 20-12=8, 30-20=10, 42-30=12. The next difference is +14, so 42 + 14 = 56. (Also n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7, 7×8=56).'
  },

  // Q92: Letter Series (Skip pattern)
  {
    id: 92,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Letter Series',
    statement: 'Determine the missing letter:\nB, E, I, N, T, ?',
    options: {
      A: 'Z',
      B: 'Y',
      C: 'A',
      D: 'B'
    },
    correctOption: 'C',
    explanation: 'Positions in alphabet: B(2), E(5), I(9), N(14), T(20). Differences: +3, +4, +5, +6. Next difference is +7: 20 + 7 = 27 = 26 + 1 => A.'
  },

  // Q93: Blood Relations (Indirect)
  {
    id: 93,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Blood Relations',
    statement: 'A is B’s sister. C is B’s mother. D is C’s father. E is D’s mother. How is A related to D?',
    options: {
      A: 'Grandmother',
      B: 'Grandfather',
      C: 'Granddaughter',
      D: 'Daughter'
    },
    correctOption: 'C',
    explanation: 'A and B are siblings; C is their mother. D is C’s father (A’s maternal grandfather). Therefore, A is D’s granddaughter.'
  },

  // Q94: Coding-Decoding (Reverse Alphabet)
  {
    id: 94,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Coding-Decoding',
    statement: 'If DELHI is coded as 73541 and CALCUTTA as 82589662, how is CALICUT coded?',
    options: {
      A: '8251896',
      B: '8251596',
      C: '8251396',
      D: '8251296'
    },
    correctOption: 'A',
    explanation: 'Match letters to designated digits from given words: C=8, A=2, L=5, I=1 (from DELHI), C=8, U=9, T=6. Putting together: C(8) A(2) L(5) I(1) C(8) U(9) T(6) = 8251896.'
  },

  // Q95: Direction Sense (Diagonal Pythagorean)
  {
    id: 95,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Direction Sense',
    statement: 'A cyclist rides 8 km West, turns left and rides 6 km South. What is the shortest straight-line distance from his initial position to his final stop?',
    options: {
      A: '10 km',
      B: '14 km',
      C: '12 km',
      D: '9 km'
    },
    correctOption: 'A',
    explanation: 'Shortest distance = √(8² + 6²) = √(64 + 36) = √100 = 10 km.'
  },

  // Q96: Analogy (Measurement & Instruments)
  {
    id: 96,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Analogy',
    statement: 'SEISMOGRAPH : EARTHQUAKE :: ANEMOMETER : ?',
    options: {
      A: 'Atmospheric Pressure',
      B: 'Wind Speed',
      C: 'Relative Humidity',
      D: 'Ocean Currents'
    },
    correctOption: 'B',
    explanation: 'A seismograph measures earthquake vibrations; an anemometer measures wind speed.'
  },

  // Q97: Odd One Out (Word Classification)
  {
    id: 97,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Odd One Out',
    statement: 'Which word does NOT belong with the other three?',
    options: {
      A: 'Sukkur',
      B: 'Larkana',
      C: 'Quetta',
      D: 'Khairpur'
    },
    correctOption: 'C',
    explanation: 'Sukkur, Larkana, and Khairpur are major division/district cities in Sindh province. Quetta is the provincial capital of Balochistan.'
  },

  // Q98: Missing Number in Circle
  {
    id: 98,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Missing Numbers',
    statement: 'Find the missing number in the sequence:\n3, 7, 15, 31, 63, ?',
    options: {
      A: '125',
      B: '127',
      C: '129',
      D: '131'
    },
    correctOption: 'B',
    explanation: 'The pattern is 2x + 1: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63, 63×2+1 = 127. (Also 2^(n+1) - 1: 4-1, 8-1, 16-1, 32-1, 64-1, 128-1=127).'
  },

  // Q99: Logical Deduction (Syllogism)
  {
    id: 99,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Logical Sequence',
    statement: 'Statements:\n1. All scientists are hard-working.\n2. Some innovators are scientists.\nConclusions:\nI. Some innovators are hard-working.\nII. No innovator is hard-working.\nWhich conclusion logically follows?',
    options: {
      A: 'Only conclusion I follows',
      B: 'Only conclusion II follows',
      C: 'Both conclusions follow',
      D: 'Neither conclusion follows'
    },
    correctOption: 'A',
    explanation: 'Since some innovators are scientists and all scientists are hard-working, those innovators who are scientists must be hard-working. Therefore, "Some innovators are hard-working" is unconditionally valid.'
  },

  // Q100: Number Matrix Problem
  {
    id: 100,
    section: 'INTELLIGENCE',
    sectionNumber: 3,
    topic: 'Missing Numbers',
    statement: 'Find the value of X:\n8    3    24\n7    5    35\n9    X    54',
    options: {
      A: '4',
      B: '5',
      C: '6',
      D: '7'
    },
    correctOption: 'C',
    explanation: 'In each row, Column 1 × Column 2 = Column 3. Row 1: 8 × 3 = 24. Row 2: 7 × 5 = 35. Row 3: 9 × X = 54 => X = 54 / 9 = 6.'
  }
];

import { QUESTIONS_MOCK_2 } from './mockTest2Data';
import { QUESTIONS_MOCK_3 } from './mockTest3Data';

// Helper to get full questions by testId
export function getQuestionsForTest(testId: string = 'sthp-2027-mock-1'): Question[] {
  if (testId === 'sthp-2027-mock-2') return QUESTIONS_MOCK_2;
  if (testId === 'sthp-2027-mock-3') return QUESTIONS_MOCK_3;
  return QUESTIONS_DATA;
}

// Helper to provide client-safe question objects (without correctOption and explanation)
export function getClientQuestions(testId: string = 'sthp-2027-mock-1'): import('../types/exam').ClientQuestion[] {
  const dataset = getQuestionsForTest(testId);
  return dataset.map(q => ({
    id: q.id,
    section: q.section,
    sectionNumber: q.sectionNumber,
    topic: q.topic,
    passage: q.passage,
    passageTitle: q.passageTitle,
    statement: q.statement,
    options: q.options
  }));
}
