// ===== ARE YOU COOKED? - APP LOGIC =====

// ===== CHARACTER CLASSES =====
const CHARACTER_CLASSES = [
  {
    id: 'student',
    emoji: '📚',
    name: 'Student',
    desc: 'Uni / college / school life',
    color: '#C8FF00'
  },
  {
    id: 'worker',
    emoji: '💼',
    name: '9-to-5 Worker',
    desc: 'Grinding the corporate ladder',
    color: '#00E5FF'
  },
  {
    id: 'entrepreneur',
    emoji: '🚀',
    name: 'Entrepreneur',
    desc: 'Self-employed / startup life',
    color: '#FF2D78'
  },
  {
    id: 'tradesperson',
    emoji: '🔧',
    name: 'Trades / Manual',
    desc: 'Hands-on physical work',
    color: '#FF6B00'
  },
  {
    id: 'creative',
    emoji: '🎨',
    name: 'Creative',
    desc: 'Art, music, content, media',
    color: '#FFE000'
  },
  {
    id: 'unemployed',
    emoji: '🛋️',
    name: 'Currently… Free',
    desc: 'Between opportunities rn',
    color: '#D0D0D0'
  },
  {
    id: 'parent',
    emoji: '👶',
    name: 'Parent',
    desc: 'Raising tiny humans somehow',
    color: '#FFB3C6'
  },
  {
    id: 'gym',
    emoji: '💪',
    name: 'Gym Bro/Girl',
    desc: 'Gym is your whole personality',
    color: '#A8FF78'
  }
];

// ===== QUESTION BANK =====
// Each question has: id, category, categoryEmoji, text, options (text, score 0-4, emoji)
// score 0 = not cooked, 4 = fully cooked for that option
const UNIVERSAL_QUESTIONS = [
  // --- SLEEP ---
  {
    id: 'sleep_hours',
    category: 'Sleep',
    categoryEmoji: '😴',
    text: 'How many hours of sleep did you get last night?',
    options: [
      { text: '8+ hours, well rested', score: 0, emoji: '😇' },
      { text: '6–7 hours, manageable', score: 1, emoji: '🙂' },
      { text: '4–5 hours, running on fumes', score: 3, emoji: '😵' },
      { text: 'Under 4 hours or I lost count', score: 4, emoji: '☠️' }
    ]
  },
  {
    id: 'sleep_time',
    category: 'Sleep',
    categoryEmoji: '😴',
    text: 'What time did you actually go to sleep last night?',
    options: [
      { text: 'Before midnight like a functional human', score: 0, emoji: '✅' },
      { text: '12–1am, a bit late', score: 1, emoji: '🌙' },
      { text: '2–4am, deep in the void', score: 3, emoji: '🌑' },
      { text: 'I saw sunrise. Again.', score: 4, emoji: '🌅' }
    ]
  },
  {
    id: 'sleep_schedule',
    category: 'Sleep',
    categoryEmoji: '😴',
    text: 'Do you have a consistent sleep schedule?',
    options: [
      { text: 'Yes, same time every day roughly', score: 0, emoji: '📅' },
      { text: 'Weekdays yes, weekends no', score: 1, emoji: '🤷' },
      { text: 'Not really, it varies a lot', score: 2, emoji: '😬' },
      { text: 'My body clock is beyond repair', score: 4, emoji: '💀' }
    ]
  },

  // --- FINANCE ---
  {
    id: 'bank_balance',
    category: 'Finance',
    categoryEmoji: '💰',
    text: 'How does your bank account look right now? Be honest.',
    options: [
      { text: 'Healthy, I have actual savings', score: 0, emoji: '💪' },
      { text: 'Okay, living within my means', score: 1, emoji: '🙂' },
      { text: 'Scraping by until payday', score: 3, emoji: '😬' },
      { text: 'Negative or dangerously close to it', score: 4, emoji: '💀' }
    ]
  },
  {
    id: 'savings',
    category: 'Finance',
    categoryEmoji: '💰',
    text: 'Do you have any savings or emergency fund?',
    options: [
      { text: 'Yes, 3+ months of expenses saved', score: 0, emoji: '🏦' },
      { text: 'A little bit, not much', score: 1, emoji: '🫙' },
      { text: 'I keep meaning to start saving', score: 3, emoji: '😅' },
      { text: 'My overdraft is my emergency fund', score: 4, emoji: '🔥' }
    ]
  },
  {
    id: 'impulse_buy',
    category: 'Finance',
    categoryEmoji: '💰',
    text: 'When did you last make an impulse purchase you regretted?',
    options: [
      { text: 'Rarely, I think before I spend', score: 0, emoji: '🧠' },
      { text: 'A few weeks ago', score: 1, emoji: '🛍️' },
      { text: 'This week honestly', score: 3, emoji: '😬' },
      { text: 'Earlier today', score: 4, emoji: '💸' }
    ]
  },
  {
    id: 'subscriptions',
    category: 'Finance',
    categoryEmoji: '💰',
    text: 'How many subscriptions are you paying for that you forgot about?',
    options: [
      { text: 'None, I track all my subscriptions', score: 0, emoji: '📊' },
      { text: 'Maybe 1 or 2', score: 1, emoji: '🤔' },
      { text: 'Probably 3–5 I should cancel', score: 3, emoji: '😬' },
      { text: 'I genuinely have no idea', score: 4, emoji: '💀' }
    ]
  },

  // --- HEALTH ---
  {
    id: 'water',
    category: 'Health',
    categoryEmoji: '💧',
    text: 'How much water have you drunk today?',
    options: [
      { text: '2+ litres, I\'m hydrated', score: 0, emoji: '💧' },
      { text: 'About 1 litre', score: 1, emoji: '🙂' },
      { text: 'A coffee and a fizzy drink', score: 3, emoji: '☕' },
      { text: 'Water? Bold assumption.', score: 4, emoji: '🏜️' }
    ]
  },
  {
    id: 'exercise',
    category: 'Health',
    categoryEmoji: '💧',
    text: 'How often do you exercise each week?',
    options: [
      { text: '4+ times, consistent', score: 0, emoji: '💪' },
      { text: '2–3 times', score: 1, emoji: '🏃' },
      { text: 'Once if I\'m lucky', score: 2, emoji: '😅' },
      { text: 'The walk to the fridge counts right?', score: 4, emoji: '🛋️' }
    ]
  },
  {
    id: 'diet',
    category: 'Health',
    categoryEmoji: '💧',
    text: 'How would you describe your diet lately?',
    options: [
      { text: 'Balanced, hitting my protein and veg', score: 0, emoji: '🥗' },
      { text: 'Mostly okay with some junk', score: 1, emoji: '🍗' },
      { text: 'Mostly takeaways and snacks', score: 3, emoji: '🍟' },
      { text: 'Ultra-processed everything, no shame', score: 4, emoji: '🍕' }
    ]
  },
  {
    id: 'mental_health',
    category: 'Mental Health',
    categoryEmoji: '🧠',
    text: 'How\'s your mental health been this week, honestly?',
    options: [
      { text: 'Pretty good, feeling balanced', score: 0, emoji: '😊' },
      { text: 'Up and down, managing it', score: 1, emoji: '😐' },
      { text: 'Struggling a bit more than usual', score: 3, emoji: '😔' },
      { text: 'Not great, running on empty', score: 4, emoji: '💀' }
    ]
  },
  {
    id: 'screen_time',
    category: 'Health',
    categoryEmoji: '💧',
    text: 'What\'s your average daily screen time?',
    options: [
      { text: 'Under 3 hours', score: 0, emoji: '✅' },
      { text: '3–5 hours', score: 1, emoji: '📱' },
      { text: '6–8 hours', score: 3, emoji: '😬' },
      { text: '8+ hours, my phone is my personality', score: 4, emoji: '📲' }
    ]
  },

  // --- PRODUCTIVITY ---
  {
    id: 'deadlines',
    category: 'Productivity',
    categoryEmoji: '📋',
    text: 'Do you have any deadlines or important tasks overdue right now?',
    options: [
      { text: 'No, I\'m on top of everything', score: 0, emoji: '✅' },
      { text: 'One or two I\'m working on', score: 1, emoji: '🔄' },
      { text: 'Several I\'ve been avoiding', score: 3, emoji: '😬' },
      { text: 'I\'ve lost track of what\'s overdue', score: 4, emoji: '☠️' }
    ]
  },
  {
    id: 'to_do_list',
    category: 'Productivity',
    categoryEmoji: '📋',
    text: 'How long has something been on your to-do list without getting done?',
    options: [
      { text: 'I get things done within days', score: 0, emoji: '⚡' },
      { text: 'A couple of weeks max', score: 1, emoji: '🙂' },
      { text: 'A month or more for some things', score: 3, emoji: '😅' },
      { text: 'There\'s stuff from last year on there', score: 4, emoji: '💀' }
    ]
  },
  {
    id: 'procrastination',
    category: 'Productivity',
    categoryEmoji: '📋',
    text: 'Right now, is there something important you should be doing instead of this?',
    options: [
      { text: 'No, I have time for this', score: 0, emoji: '😇' },
      { text: 'Sort of, but it\'s not urgent', score: 1, emoji: '🤷' },
      { text: 'Yes, absolutely there is', score: 3, emoji: '😬' },
      { text: 'Multiple things. I am actively avoiding them.', score: 4, emoji: '☠️' }
    ]
  },

  // --- SOCIAL LIFE ---
  {
    id: 'friends_contact',
    category: 'Social Life',
    categoryEmoji: '👥',
    text: 'When did you last properly catch up with a close friend?',
    options: [
      { text: 'This week', score: 0, emoji: '🤝' },
      { text: 'Within the last month', score: 1, emoji: '📞' },
      { text: 'A few months ago', score: 2, emoji: '😬' },
      { text: 'I can\'t remember, and that concerns me', score: 4, emoji: '👻' }
    ]
  },
  {
    id: 'social_battery',
    category: 'Social Life',
    categoryEmoji: '👥',
    text: 'How\'s your social energy been lately?',
    options: [
      { text: 'Good, I enjoy being around people', score: 0, emoji: '😄' },
      { text: 'Selective, I pick my moments', score: 1, emoji: '🙂' },
      { text: 'Low, I\'ve been avoiding most things', score: 2, emoji: '😐' },
      { text: 'I\'ve gone full hermit mode', score: 4, emoji: '🐚' }
    ]
  },

  // --- LIFE ADMIN ---
  {
    id: 'inbox',
    category: 'Life Admin',
    categoryEmoji: '📬',
    text: 'How many unread emails or messages do you have right now?',
    options: [
      { text: 'Under 20, I stay on top of it', score: 0, emoji: '📧' },
      { text: '50–200, getting there', score: 1, emoji: '🙈' },
      { text: '200–1000, it\'s a mess', score: 3, emoji: '😬' },
      { text: '1000+, I declared inbox bankruptcy', score: 4, emoji: '☠️' }
    ]
  },
  {
    id: 'bedroom',
    category: 'Life Admin',
    categoryEmoji: '📬',
    text: 'What does your living space / bedroom look like right now?',
    options: [
      { text: 'Clean and organised', score: 0, emoji: '🏠' },
      { text: 'A bit messy but functional', score: 1, emoji: '🏡' },
      { text: 'Quite chaotic, I know where things are though', score: 2, emoji: '😅' },
      { text: 'It\'s giving archaeological dig vibes', score: 4, emoji: '🗑️' }
    ]
  },
  {
    id: 'doctors',
    category: 'Life Admin',
    categoryEmoji: '📬',
    text: 'Is there something health-related you\'ve been putting off booking/checking?',
    options: [
      { text: 'No, I stay on top of my health', score: 0, emoji: '🩺' },
      { text: 'Maybe one thing I should look into', score: 1, emoji: '🤔' },
      { text: 'Yes, there\'s something I\'ve been ignoring', score: 3, emoji: '😬' },
      { text: 'Multiple things, I\'m scared to find out', score: 4, emoji: '💀' }
    ]
  },

  // --- VIBE CHECK ---
  {
    id: 'lying_to_yourself',
    category: 'Vibe Check',
    categoryEmoji: '🪞',
    text: 'Are you currently lying to yourself about something important?',
    options: [
      { text: 'No, I\'m being real with myself', score: 0, emoji: '💯' },
      { text: 'Maybe a small thing', score: 1, emoji: '🤏' },
      { text: 'Yeah there\'s something I\'m avoiding', score: 3, emoji: '🫣' },
      { text: 'Everything is fine. (It is not fine.)', score: 4, emoji: '🙂🔥' }
    ]
  },
  {
    id: 'plan',
    category: 'Vibe Check',
    categoryEmoji: '🪞',
    text: 'Do you have a clear plan for where your life is going?',
    options: [
      { text: 'Yes, I know what I\'m working toward', score: 0, emoji: '🗺️' },
      { text: 'A rough idea, still figuring it out', score: 1, emoji: '🧭' },
      { text: 'Not really, I\'m winging it', score: 2, emoji: '🤷' },
      { text: 'What is a plan? What is life?', score: 4, emoji: '🌀' }
    ]
  },
  {
    id: 'happiness',
    category: 'Vibe Check',
    categoryEmoji: '🪞',
    text: 'On a scale of emotion, how would you describe your general mood this week?',
    options: [
      { text: 'Genuinely good, feeling positive', score: 0, emoji: '😄' },
      { text: 'Neutral, getting through it', score: 1, emoji: '😐' },
      { text: 'A bit low, stressed or overwhelmed', score: 3, emoji: '😔' },
      { text: 'Running on stress fumes alone', score: 4, emoji: '💨' }
    ]
  }
];

// Class-specific questions (10 questions per class)
const CLASS_QUESTIONS = {
  student: [
    {
      id: 'stu_assignments',
      category: 'Student Life',
      categoryEmoji: '📚',
      text: 'How many assignments or coursework pieces are currently overdue?',
      options: [
        { text: 'None, I\'m completely up to date', score: 0, emoji: '😇' },
        { text: '1–2, I\'m handling it', score: 1, emoji: '😅' },
        { text: '3–5, it\'s not great', score: 3, emoji: '😬' },
        { text: '5+ or I stopped counting', score: 4, emoji: '☠️' }
      ]
    },
    {
      id: 'stu_attendance',
      category: 'Student Life',
      categoryEmoji: '📚',
      text: 'What\'s your attendance like this term?',
      options: [
        { text: 'Near perfect, always there', score: 0, emoji: '✅' },
        { text: 'Mostly good with some missed days', score: 1, emoji: '🙂' },
        { text: 'Below 80%, getting risky', score: 3, emoji: '😬' },
        { text: 'What even is attendance', score: 4, emoji: '👻' }
      ]
    },
    {
      id: 'stu_notes',
      category: 'Student Life',
      categoryEmoji: '📚',
      text: 'Are your notes up to date and actually useful?',
      options: [
        { text: 'Yes, organised and reviewed', score: 0, emoji: '📓' },
        { text: 'Mostly, a few gaps', score: 1, emoji: '📝' },
        { text: 'Barely, they\'re a mess', score: 3, emoji: '🗒️' },
        { text: 'I rely on other people\'s notes entirely', score: 4, emoji: '👀' }
      ]
    },
    {
      id: 'stu_exam',
      category: 'Student Life',
      categoryEmoji: '📚',
      text: 'Do you know what your upcoming exams or deadlines actually are?',
      options: [
        { text: 'Yes, I have a full revision schedule', score: 0, emoji: '📅' },
        { text: 'Roughly yes, I check as they come', score: 1, emoji: '🙂' },
        { text: 'Vaguely, I should probably check', score: 3, emoji: '😬' },
        { text: 'No and I\'m too scared to look', score: 4, emoji: '🫣' }
      ]
    },
    {
      id: 'stu_revision',
      category: 'Student Life',
      categoryEmoji: '📚',
      text: 'How far in advance do you normally start revising or preparing?',
      options: [
        { text: 'Weeks before, I pace myself', score: 0, emoji: '🧠' },
        { text: 'About a week before', score: 1, emoji: '📅' },
        { text: 'A day or two before', score: 3, emoji: '😬' },
        { text: 'The night before or the morning of', score: 4, emoji: '☠️' }
      ]
    }
  ],
  worker: [
    {
      id: 'work_overtime',
      category: 'Work Life',
      categoryEmoji: '💼',
      text: 'How much unpaid overtime have you done this week?',
      options: [
        { text: 'None, I clock off on time', score: 0, emoji: '🕔' },
        { text: 'An hour or two', score: 1, emoji: '⏰' },
        { text: '3–6 hours of unpaid time', score: 3, emoji: '😬' },
        { text: 'I\'ve lost count and so has my employer', score: 4, emoji: '💀' }
      ]
    },
    {
      id: 'work_emails',
      category: 'Work Life',
      categoryEmoji: '💼',
      text: 'Do you check work emails or messages outside of work hours?',
      options: [
        { text: 'Never, strict boundaries', score: 0, emoji: '🚫' },
        { text: 'Occasionally when urgent', score: 1, emoji: '📧' },
        { text: 'Regularly in the evenings', score: 3, emoji: '😬' },
        { text: 'Constantly, including on weekends', score: 4, emoji: '📱' }
      ]
    },
    {
      id: 'work_enjoy',
      category: 'Work Life',
      categoryEmoji: '💼',
      text: 'How much do you actually enjoy what you do for work?',
      options: [
        { text: 'I genuinely like my job', score: 0, emoji: '😄' },
        { text: 'It\'s okay, pays the bills', score: 1, emoji: '🙂' },
        { text: 'Not really, just showing up', score: 3, emoji: '😐' },
        { text: 'I fantasise about quitting daily', score: 4, emoji: '🔥' }
      ]
    },
    {
      id: 'work_sunday',
      category: 'Work Life',
      categoryEmoji: '💼',
      text: 'Do you get Sunday dread? That sinking feeling before the week starts?',
      options: [
        { text: 'No, I look forward to the week', score: 0, emoji: '😊' },
        { text: 'A little, but it\'s manageable', score: 1, emoji: '🙂' },
        { text: 'Yeah, it\'s pretty bad', score: 3, emoji: '😬' },
        { text: 'Saturday is already ruined by it', score: 4, emoji: '💀' }
      ]
    },
    {
      id: 'work_career',
      category: 'Work Life',
      categoryEmoji: '💼',
      text: 'Do you feel like you\'re progressing in your career?',
      options: [
        { text: 'Yes, growing and moving forward', score: 0, emoji: '📈' },
        { text: 'Slowly, but I can see the path', score: 1, emoji: '🐢' },
        { text: 'Stagnant, not sure what\'s next', score: 3, emoji: '😐' },
        { text: 'I\'ve gone backwards if anything', score: 4, emoji: '📉' }
      ]
    }
  ],
  entrepreneur: [
    {
      id: 'ent_revenue',
      category: 'Business',
      categoryEmoji: '🚀',
      text: 'Is your business/side hustle actually making money right now?',
      options: [
        { text: 'Yes, profitable and growing', score: 0, emoji: '💸' },
        { text: 'Breaking even or close', score: 1, emoji: '⚖️' },
        { text: 'Not yet, still in build mode', score: 2, emoji: '🔨' },
        { text: 'Losing money but telling myself it\'s investment', score: 4, emoji: '🔥' }
      ]
    },
    {
      id: 'ent_clients',
      category: 'Business',
      categoryEmoji: '🚀',
      text: 'How\'s your pipeline / client situation looking?',
      options: [
        { text: 'Solid, consistent work coming in', score: 0, emoji: '📊' },
        { text: 'Some leads, working on it', score: 1, emoji: '🔍' },
        { text: 'Dry right now, getting worried', score: 3, emoji: '😬' },
        { text: 'What pipeline', score: 4, emoji: '🏜️' }
      ]
    },
    {
      id: 'ent_taxes',
      category: 'Business',
      categoryEmoji: '🚀',
      text: 'Are your accounts and taxes sorted?',
      options: [
        { text: 'Yes, all tracked and filed properly', score: 0, emoji: '📁' },
        { text: 'Mostly, needs some tidying', score: 1, emoji: '🗂️' },
        { text: 'Behind on this, slightly stressed', score: 3, emoji: '😬' },
        { text: 'HMRC who? (They know who I am)', score: 4, emoji: '⚠️' }
      ]
    },
    {
      id: 'ent_sleep',
      category: 'Business',
      categoryEmoji: '🚀',
      text: 'Have you sacrificed sleep to work on your business this week?',
      options: [
        { text: 'No, I protect my sleep', score: 0, emoji: '😴' },
        { text: 'Once or twice', score: 1, emoji: '🌙' },
        { text: 'Several nights', score: 3, emoji: '😵' },
        { text: 'Sleep is for people without visions', score: 4, emoji: '💀' }
      ]
    },
    {
      id: 'ent_plan',
      category: 'Business',
      categoryEmoji: '🚀',
      text: 'Do you have a proper business plan and clear goals?',
      options: [
        { text: 'Yes, detailed and reviewed regularly', score: 0, emoji: '📋' },
        { text: 'A rough one I update sometimes', score: 1, emoji: '📝' },
        { text: 'Vibes-based strategy mostly', score: 3, emoji: '🤷' },
        { text: 'The plan IS the vibe', score: 4, emoji: '✨' }
      ]
    }
  ],
  tradesperson: [
    {
      id: 'trade_body',
      category: 'Physical Health',
      categoryEmoji: '🔧',
      text: 'How does your body feel from the physical demands of your work?',
      options: [
        { text: 'Good, I look after myself properly', score: 0, emoji: '💪' },
        { text: 'A few aches but managing', score: 1, emoji: '🙂' },
        { text: 'Regularly sore, probably ignoring it', score: 3, emoji: '😬' },
        { text: 'I\'ve become immune to pain', score: 4, emoji: '🪨' }
      ]
    },
    {
      id: 'trade_ppe',
      category: 'Physical Health',
      categoryEmoji: '🔧',
      text: 'Do you use proper PPE and safety equipment every time?',
      options: [
        { text: 'Always, no compromises on safety', score: 0, emoji: '⛑️' },
        { text: 'Usually, sometimes cut corners a bit', score: 1, emoji: '🤷' },
        { text: 'Often skip it, feels excessive', score: 3, emoji: '😬' },
        { text: 'PPE is for people who plan to be here long term', score: 4, emoji: '💀' }
      ]
    },
    {
      id: 'trade_tools',
      category: 'Trade',
      categoryEmoji: '🔧',
      text: 'Are your tools, vehicle, and equipment properly maintained?',
      options: [
        { text: 'Yes, everything is in great shape', score: 0, emoji: '🔩' },
        { text: 'Mostly, a few things need attention', score: 1, emoji: '🔧' },
        { text: 'One tool crisis away from disaster', score: 3, emoji: '😬' },
        { text: 'Currently held together by cable ties and hope', score: 4, emoji: '🆘' }
      ]
    },
    {
      id: 'trade_money',
      category: 'Trade',
      categoryEmoji: '🔧',
      text: 'Is your work income consistent and enough to live on?',
      options: [
        { text: 'Yes, stable and good earnings', score: 0, emoji: '💰' },
        { text: 'Variable but mostly okay', score: 1, emoji: '📊' },
        { text: 'Inconsistent, some lean periods', score: 3, emoji: '😬' },
        { text: 'Currently underwater financially', score: 4, emoji: '🌊' }
      ]
    },
    {
      id: 'trade_certs',
      category: 'Trade',
      categoryEmoji: '🔧',
      text: 'Are all your certifications and qualifications up to date?',
      options: [
        { text: 'Yes, all current', score: 0, emoji: '📜' },
        { text: 'Mostly, one might be lapsing', score: 1, emoji: '🤔' },
        { text: 'A couple need renewing and I\'ve been putting it off', score: 3, emoji: '😬' },
        { text: 'I\'m operating on expired certs and confidence', score: 4, emoji: '💀' }
      ]
    }
  ],
  creative: [
    {
      id: 'cre_income',
      category: 'Creative Career',
      categoryEmoji: '🎨',
      text: 'Is your creative work generating sustainable income?',
      options: [
        { text: 'Yes, living from my creative work', score: 0, emoji: '💸' },
        { text: 'Supplementary income, growing', score: 1, emoji: '📈' },
        { text: 'Barely, still in the hustle phase', score: 3, emoji: '😬' },
        { text: 'Passion project funded by a day job I hate', score: 4, emoji: '🎭' }
      ]
    },
    {
      id: 'cre_block',
      category: 'Creative Career',
      categoryEmoji: '🎨',
      text: 'How\'s your creative output and inspiration been lately?',
      options: [
        { text: 'Flowing, I\'m in a productive phase', score: 0, emoji: '🌊' },
        { text: 'Inconsistent but still creating', score: 1, emoji: '🎲' },
        { text: 'Creative block hit hard recently', score: 3, emoji: '🧱' },
        { text: 'I haven\'t made anything in weeks', score: 4, emoji: '🏜️' }
      ]
    },
    {
      id: 'cre_compare',
      category: 'Creative Career',
      categoryEmoji: '🎨',
      text: 'Do you compare yourself to other creatives and feel bad about it?',
      options: [
        { text: 'Rarely, I run my own race', score: 0, emoji: '🏃' },
        { text: 'Sometimes but I manage it', score: 1, emoji: '🙂' },
        { text: 'Often, it knocks me down', score: 3, emoji: '😔' },
        { text: 'Instagram is my nemesis', score: 4, emoji: '📱' }
      ]
    },
    {
      id: 'cre_portfolio',
      category: 'Creative Career',
      categoryEmoji: '🎨',
      text: 'How up to date is your portfolio or public creative presence?',
      options: [
        { text: 'Current and actively maintained', score: 0, emoji: '✨' },
        { text: 'A bit outdated, need to update', score: 1, emoji: '🕰️' },
        { text: 'Very outdated, been meaning to fix', score: 3, emoji: '😬' },
        { text: 'My portfolio is a crime scene from 3 years ago', score: 4, emoji: '💀' }
      ]
    },
    {
      id: 'cre_project',
      category: 'Creative Career',
      categoryEmoji: '🎨',
      text: 'Do you have unfinished passion projects that have been sitting there?',
      options: [
        { text: 'No, I finish what I start', score: 0, emoji: '✅' },
        { text: 'One or two, I\'ll get back to them', score: 1, emoji: '⏳' },
        { text: 'A graveyard of unfinished ideas', score: 3, emoji: '⚰️' },
        { text: 'My hard drive is a museum of abandoned dreams', score: 4, emoji: '🏛️' }
      ]
    }
  ],
  unemployed: [
    {
      id: 'une_applying',
      category: 'Job Hunt',
      categoryEmoji: '🛋️',
      text: 'How many jobs have you applied to this week?',
      options: [
        { text: '10+, I\'m actively hunting', score: 0, emoji: '🎯' },
        { text: '3–9, making progress', score: 1, emoji: '📧' },
        { text: '1–2, barely trying', score: 3, emoji: '😬' },
        { text: 'None this week, it\'s been a vibe', score: 4, emoji: '🛋️' }
      ]
    },
    {
      id: 'une_routine',
      category: 'Job Hunt',
      categoryEmoji: '🛋️',
      text: 'Do you have any structure or routine to your day?',
      options: [
        { text: 'Yes, I keep a schedule even without work', score: 0, emoji: '📅' },
        { text: 'Loose routine, gets me through', score: 1, emoji: '🕰️' },
        { text: 'Barely any structure lately', score: 3, emoji: '😬' },
        { text: 'My bed and I are inseparable', score: 4, emoji: '🛏️' }
      ]
    },
    {
      id: 'une_cv',
      category: 'Job Hunt',
      categoryEmoji: '🛋️',
      text: 'Is your CV and LinkedIn/profile up to date and ready?',
      options: [
        { text: 'Yes, polished and ready to go', score: 0, emoji: '📄' },
        { text: 'Mostly, needs a few tweaks', score: 1, emoji: '✏️' },
        { text: 'Needs a serious update', score: 3, emoji: '😬' },
        { text: 'My CV is from a different era of my life', score: 4, emoji: '🦕' }
      ]
    },
    {
      id: 'une_finance',
      category: 'Job Hunt',
      categoryEmoji: '🛋️',
      text: 'How long can you financially survive without income?',
      options: [
        { text: 'Several months, I planned for this', score: 0, emoji: '🏦' },
        { text: 'A month or two', score: 1, emoji: '💰' },
        { text: 'A few weeks at best', score: 3, emoji: '😬' },
        { text: 'I\'m already at the emergency fund stage', score: 4, emoji: '🆘' }
      ]
    },
    {
      id: 'une_attitude',
      category: 'Job Hunt',
      categoryEmoji: '🛋️',
      text: 'How are you feeling mentally about the job search?',
      options: [
        { text: 'Confident and motivated', score: 0, emoji: '💪' },
        { text: 'Okay, taking it day by day', score: 1, emoji: '🙂' },
        { text: 'Getting demoralised honestly', score: 3, emoji: '😔' },
        { text: 'Every rejection hits like a freight train', score: 4, emoji: '🚂' }
      ]
    }
  ],
  parent: [
    {
      id: 'par_sleep',
      category: 'Parent Life',
      categoryEmoji: '👶',
      text: 'How much uninterrupted sleep are you getting?',
      options: [
        { text: 'Surprisingly decent lately', score: 0, emoji: '😴' },
        { text: '5–6 hours in chunks', score: 1, emoji: '🌙' },
        { text: '4 hours max, running on autopilot', score: 3, emoji: '😵' },
        { text: 'Sleep is a distant memory', score: 4, emoji: '👻' }
      ]
    },
    {
      id: 'par_time',
      category: 'Parent Life',
      categoryEmoji: '👶',
      text: 'When did you last have actual time to yourself?',
      options: [
        { text: 'This week, I make time for me', score: 0, emoji: '🧘' },
        { text: 'A few weeks ago', score: 1, emoji: '🤔' },
        { text: 'Over a month ago', score: 3, emoji: '😬' },
        { text: '2019', score: 4, emoji: '💀' }
      ]
    },
    {
      id: 'par_mental',
      category: 'Parent Life',
      categoryEmoji: '👶',
      text: 'How are you actually coping with the mental load of parenting?',
      options: [
        { text: 'Really well, feel supported and balanced', score: 0, emoji: '🌟' },
        { text: 'Managing it most days', score: 1, emoji: '🙂' },
        { text: 'Barely holding it together some days', score: 3, emoji: '😬' },
        { text: 'I am the load-bearing wall and I am cracking', score: 4, emoji: '🏚️' }
      ]
    },
    {
      id: 'par_support',
      category: 'Parent Life',
      categoryEmoji: '👶',
      text: 'Do you have a good support system around you?',
      options: [
        { text: 'Yes, family and friends help a lot', score: 0, emoji: '🤝' },
        { text: 'Some support but could use more', score: 1, emoji: '🙂' },
        { text: 'Mostly doing this alone', score: 3, emoji: '😬' },
        { text: 'Solo parenting in the trenches', score: 4, emoji: '🪖' }
      ]
    },
    {
      id: 'par_identity',
      category: 'Parent Life',
      categoryEmoji: '👶',
      text: 'Do you still feel like yourself outside of being a parent?',
      options: [
        { text: 'Yes, I maintain my own identity well', score: 0, emoji: '🪞' },
        { text: 'Mostly, with some effort', score: 1, emoji: '🙂' },
        { text: 'Rarely feel like myself anymore', score: 3, emoji: '😔' },
        { text: 'The parent has consumed the person', score: 4, emoji: '🫥' }
      ]
    }
  ],
  gym: [
    {
      id: 'gym_consistency',
      category: 'Gym Life',
      categoryEmoji: '💪',
      text: 'How consistent have you been with training this month?',
      options: [
        { text: 'Hitting every session, no excuses', score: 0, emoji: '💪' },
        { text: 'Mostly consistent, a few skips', score: 1, emoji: '🏋️' },
        { text: 'Patchy, been in a funk', score: 3, emoji: '😬' },
        { text: 'I pay for the gym and that\'s my exercise', score: 4, emoji: '💳' }
      ]
    },
    {
      id: 'gym_diet',
      category: 'Gym Life',
      categoryEmoji: '💪',
      text: 'Is your nutrition dialled in and supporting your goals?',
      options: [
        { text: 'Yes, tracking and hitting my macros', score: 0, emoji: '🥗' },
        { text: 'Pretty good, not perfect', score: 1, emoji: '🍗' },
        { text: 'Training hard but eating like trash', score: 3, emoji: '🍟' },
        { text: 'I lift hard so I eat whatever I want (I\'m wrong)', score: 4, emoji: '🍕' }
      ]
    },
    {
      id: 'gym_sleep_rec',
      category: 'Gym Life',
      categoryEmoji: '💪',
      text: 'Are you prioritising sleep and recovery properly?',
      options: [
        { text: 'Yes, 8 hours and active recovery', score: 0, emoji: '😴' },
        { text: 'Mostly, recovery is decent', score: 1, emoji: '🙂' },
        { text: 'Sleeping 5–6 hours and wondering why I\'m not progressing', score: 3, emoji: '🤔' },
        { text: 'No rest days, no sleep, maximum grind', score: 4, emoji: '💀' }
      ]
    },
    {
      id: 'gym_progress',
      category: 'Gym Life',
      categoryEmoji: '💪',
      text: 'Are you actually making measurable progress toward your goals?',
      options: [
        { text: 'Yes, tracking and seeing results', score: 0, emoji: '📈' },
        { text: 'Slow progress, moving in right direction', score: 1, emoji: '🐢' },
        { text: 'Plateaued for a while now', score: 2, emoji: '📊' },
        { text: 'Same weights for 6 months, I blame genetics', score: 4, emoji: '🧬' }
      ]
    },
    {
      id: 'gym_obsession',
      category: 'Gym Life',
      categoryEmoji: '💪',
      text: 'Does gym have healthy balance in your life, or has it become everything?',
      options: [
        { text: 'Healthy balance, gym fits my life', score: 0, emoji: '⚖️' },
        { text: 'It\'s important but I have other things too', score: 1, emoji: '🙂' },
        { text: 'Gym is a big part of my identity, maybe too much', score: 2, emoji: '🤔' },
        { text: 'I cancel plans to train. I have no regrets.', score: 3, emoji: '🏋️' }
      ]
    }
  ]
};

// ===== RESULTS TIERS =====
const RESULT_TIERS = [
  {
    min: 0, max: 20,
    tier: 'fine',
    emoji: '😇',
    title: 'Surprisingly Uncooked',
    score_label: 'Raw',
    desc: 'Okay wait... you\'re actually not cooked at all? Either you\'re living your best life or you\'re the world\'s best liar. Either way, respect. Touch grass anyway just to be safe.',
    advice_title: '🌟 Keep doing what you\'re doing',
    advice: 'Seriously though — whatever your system is, protect it. Most people are out here burning. You\'re not. Stay disciplined, stay consistent, and check in on a friend who might need this quiz more than you did.'
  },
  {
    min: 21, max: 38,
    tier: 'toasted',
    emoji: '🍞',
    title: 'Slightly Toasted',
    score_label: 'Warm',
    desc: 'You\'re doing okay but there\'s definitely some smoke in the air. Nothing is on fire yet, but you\'ve got a few areas that need some attention before they become actual problems.',
    advice_title: '🔧 Small tweaks needed',
    advice: 'The good news? You\'re not far off. Pick the two or three areas where you scored worst and make one small change each. You\'re toast, not burnt toast. Still salvageable.'
  },
  {
    min: 39, max: 57,
    tier: 'medium',
    emoji: '🔥',
    title: 'Medium Cooked',
    score_label: 'Cooking',
    desc: 'Okay so you are definitely getting cooked. Multiple areas of your life are simmering on the heat and you\'ve been ignoring some warning signs. The pot is boiling, but it hasn\'t overflowed yet.',
    advice_title: '⚠️ Time to take stock',
    advice: 'You need to sit down and actually deal with your top 3 problem areas this week — not next week, this week. The longer you leave it the worse it gets. You know what needs fixing. Do it.'
  },
  {
    min: 58, max: 75,
    tier: 'done',
    emoji: '💀',
    title: 'Well Done (Not a Compliment)',
    score_label: 'Cooked',
    desc: 'You are well and truly cooked. This isn\'t a situation where you\'re slightly off track — multiple things are going wrong simultaneously and you\'ve normalised it. The frog is boiling in the pot.',
    advice_title: '🚨 Serious reset needed',
    advice: 'Don\'t try to fix everything at once — you\'ll burn out harder. Pick ONE thing from your worst category and focus exclusively on fixing that for two weeks. Then the next. You can get out of this. But you have to actually start.'
  },
  {
    min: 76, max: 100,
    tier: 'cremated',
    emoji: '☠️',
    title: 'Absolutely Cremated',
    score_label: 'RIP',
    desc: 'There is nothing left. You are ash. The chef didn\'t just overcook you — they forgot you in the oven, went on holiday, and came back three weeks later. Somehow you\'re still walking around. Respect for the survival honestly.',
    advice_title: '🆘 Emergency intervention',
    advice: 'Listen — rock bottom is actually a solid foundation. You now know exactly where you are. Start with sleep and water. That\'s it. Two things. Don\'t try to fix your finances, your work, your social life and your health all at once. Sleep. Water. Tomorrow.'
  }
];

// ===== CATEGORIES FOR BREAKDOWN =====
const CATEGORIES = ['Finance', 'Sleep', 'Health', 'Productivity', 'Mental Health', 'Life Admin', 'Vibe Check'];

// ===== STATE =====
let state = {
  selectedClass: null,
  questions: [],
  currentQ: 0,
  answers: {},
  score: 0,
  maxScore: 0
};

// ===== SCREEN MANAGEMENT =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(id);
  screen.classList.add('active');
  window.scrollTo(0, 0);
}

// ===== RENDER CLASS SELECT =====
function renderClassSelect() {
  const grid = document.getElementById('class-grid');
  grid.innerHTML = CHARACTER_CLASSES.map(cls => `
    <div class="class-card" data-id="${cls.id}" onclick="selectClass('${cls.id}')">
      <span class="class-emoji">${cls.emoji}</span>
      <span class="class-name">${cls.name}</span>
      <span class="class-desc">${cls.desc}</span>
    </div>
  `).join('');
}

function selectClass(id) {
  state.selectedClass = id;
  document.querySelectorAll('.class-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.id === id);
  });
  // Auto advance after short delay
  setTimeout(() => startQuiz(), 400);
}

// ===== BUILD QUESTION SET =====
function buildQuestions(classId) {
  const classQs = CLASS_QUESTIONS[classId] || [];
  // Universal questions + class specific (shuffle universal, pick 15, then add 5 class specific)
  const shuffled = [...UNIVERSAL_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 15);
  const classSelection = [...classQs].sort(() => Math.random() - 0.5).slice(0, 5);
  return [...shuffled, ...classSelection].sort(() => Math.random() - 0.5);
}

// ===== START QUIZ =====
function startQuiz() {
  state.questions = buildQuestions(state.selectedClass);
  state.currentQ = 0;
  state.answers = {};
  state.score = 0;
  state.maxScore = state.questions.length * 4;
  showScreen('screen-questions');
  renderQuestion();
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  const q = state.questions[state.currentQ];
  const total = state.questions.length;

  document.getElementById('q-step-badge').textContent = `Question ${state.currentQ + 1} of ${total}`;
  document.getElementById('q-number').textContent = `Q${state.currentQ + 1} / ${total}`;
  document.getElementById('q-category').textContent = `${q.categoryEmoji} ${q.category}`;
  document.getElementById('q-text').textContent = q.text;
  document.getElementById('q-counter').textContent = `${state.currentQ + 1} / ${total}`;

  // Options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = q.options.map((opt, i) => `
    <button class="option-btn ${state.answers[q.id] === i ? 'selected' : ''}"
      onclick="selectOption(${i}, ${opt.score})">
      <span class="opt-emoji">${opt.emoji}</span>
      <span>${opt.text}</span>
    </button>
  `).join('');

  // Update heat bar
  updateHeatBar();

  // Animate card
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'cardIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';

  // Prev button
  document.getElementById('btn-prev').style.visibility = state.currentQ === 0 ? 'hidden' : 'visible';
}

// ===== SELECT OPTION =====
function selectOption(optIndex, score) {
  const q = state.questions[state.currentQ];
  state.answers[q.id] = optIndex;

  // Highlight selected
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === optIndex);
  });

  // Auto advance after delay
  setTimeout(() => {
    if (state.currentQ < state.questions.length - 1) {
      state.currentQ++;
      renderQuestion();
    } else {
      showResult();
    }
  }, 350);
}

// ===== UPDATE HEAT BAR =====
function updateHeatBar() {
  const answered = Object.keys(state.answers).length;
  const total = state.questions.length;
  const progress = answered / total;

  // Calculate running cook score
  let runningScore = 0;
  let runningMax = answered * 4;
  state.questions.forEach(q => {
    if (state.answers[q.id] !== undefined) {
      runningScore += q.options[state.answers[q.id]].score;
    }
  });

  const cookPct = runningMax > 0 ? (runningScore / runningMax) * 100 : 0;

  const bar = document.getElementById('heat-bar');
  bar.style.width = `${Math.max(progress * 100, 2)}%`;

  // Update temp display
  const tempEmoji = document.getElementById('temp-emoji');
  const tempLabel = document.getElementById('temp-label');

  if (cookPct < 20) { tempEmoji.textContent = '😇'; tempLabel.textContent = 'Barely Cooked'; }
  else if (cookPct < 38) { tempEmoji.textContent = '🍞'; tempLabel.textContent = 'Getting Warm'; }
  else if (cookPct < 57) { tempEmoji.textContent = '🔥'; tempLabel.textContent = 'Cooking...'; }
  else if (cookPct < 75) { tempEmoji.textContent = '💀'; tempLabel.textContent = 'Well Done'; }
  else { tempEmoji.textContent = '☠️'; tempLabel.textContent = 'CREMATED'; }
}

// ===== CALCULATE RESULT =====
function calculateResult() {
  let totalScore = 0;
  let totalMax = 0;

  // Category breakdown
  const catScores = {};
  const catMaxes = {};

  state.questions.forEach(q => {
    const ansIdx = state.answers[q.id];
    const score = ansIdx !== undefined ? q.options[ansIdx].score : 0;
    const max = 4;
    totalScore += score;
    totalMax += max;

    const cat = q.category;
    catScores[cat] = (catScores[cat] || 0) + score;
    catMaxes[cat] = (catMaxes[cat] || 0) + max;
  });

  const percentage = Math.round((totalScore / totalMax) * 100);

  // Category percentages
  const breakdown = Object.keys(catScores).map(cat => ({
    cat,
    pct: Math.round((catScores[cat] / catMaxes[cat]) * 100)
  })).sort((a, b) => b.pct - a.pct).slice(0, 5);

  return { percentage, breakdown };
}

// ===== SHOW RESULT =====
function showResult() {
  const { percentage, breakdown } = calculateResult();
  const tier = RESULT_TIERS.find(t => percentage >= t.min && percentage <= t.max) || RESULT_TIERS[RESULT_TIERS.length - 1];

  showScreen('screen-result');

  // Animate score
  const scoreEl = document.getElementById('result-score');
  let count = 0;
  const target = percentage;
  const interval = setInterval(() => {
    count = Math.min(count + 2, target);
    scoreEl.textContent = count + '%';
    if (count >= target) clearInterval(interval);
  }, 20);

  document.getElementById('result-emoji').textContent = tier.emoji;
  document.getElementById('result-title').textContent = tier.title;
  document.getElementById('result-desc').textContent = tier.desc;

  // Apply tier class
  const card = document.getElementById('result-card');
  card.className = 'result-card tier-' + tier.tier;

  // Breakdown
  const breakdownGrid = document.getElementById('breakdown-grid');
  breakdownGrid.innerHTML = breakdown.map(item => `
    <div class="breakdown-item">
      <span class="breakdown-cat">${getCatEmoji(item.cat)} ${item.cat}</span>
      <div class="breakdown-bar-wrap">
        <div class="breakdown-bar-fill" style="width: 0%" data-target="${item.pct}"></div>
      </div>
      <span class="breakdown-pct">${item.pct}%</span>
    </div>
  `).join('');

  // Animate breakdown bars
  setTimeout(() => {
    document.querySelectorAll('.breakdown-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.target + '%';
    });
  }, 400);

  // Advice
  document.getElementById('result-advice').innerHTML = `
    <h4>${tier.advice_title}</h4>
    <p>${tier.advice}</p>
  `;

  // Share links
  const shareText = `I just found out I'm ${percentage}% cooked (${tier.title}) 🔥💀 Are YOU cooked? Find out:`;
  const shareUrl = window.location.href;
  document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  document.getElementById('share-whatsapp').href = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;

  // Save count to localStorage (fake social proof that grows)
  let count2 = parseInt(localStorage.getItem('quiz_count') || '47291');
  count2++;
  localStorage.setItem('quiz_count', count2);
}

function getCatEmoji(cat) {
  const map = {
    'Finance': '💰', 'Sleep': '😴', 'Health': '💧', 'Productivity': '📋',
    'Mental Health': '🧠', 'Life Admin': '📬', 'Vibe Check': '🪞',
    'Social Life': '👥', 'Student Life': '📚', 'Work Life': '💼',
    'Business': '🚀', 'Physical Health': '🔧', 'Trade': '🔧',
    'Creative Career': '🎨', 'Job Hunt': '🛋️', 'Parent Life': '👶', 'Gym Life': '💪'
  };
  return map[cat] || '📊';
}

// ===== SHARE =====
function shareResult() {
  const score = document.getElementById('result-score').textContent;
  const title = document.getElementById('result-title').textContent;
  const text = `I'm ${score} cooked (${title}) 🔥 Are YOU cooked? ${window.location.href}`;

  if (navigator.share) {
    navigator.share({ title: 'Are You Cooked?', text, url: window.location.href });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById('share-toast');
      toast.classList.add('visible');
      setTimeout(() => toast.classList.remove('visible'), 3000);
    });
  }
}

// ===== RESET =====
function resetQuiz() {
  state = { selectedClass: null, questions: [], currentQ: 0, answers: {}, score: 0, maxScore: 0 };
  showScreen('screen-landing');
}

// ===== INIT =====
function init() {
  renderClassSelect();

  // Animate fake taken count
  const stored = parseInt(localStorage.getItem('quiz_count') || '47291');
  document.getElementById('taken-count').textContent = stored.toLocaleString();

  // Event listeners
  document.getElementById('btn-start').addEventListener('click', () => showScreen('screen-class'));
  document.getElementById('btn-prev').addEventListener('click', () => {
    if (state.currentQ > 0) { state.currentQ--; renderQuestion(); }
  });
  document.getElementById('btn-skip').addEventListener('click', () => {
    if (state.currentQ < state.questions.length - 1) {
      state.currentQ++;
      renderQuestion();
    } else {
      showResult();
    }
  });
  document.getElementById('btn-share').addEventListener('click', shareResult);
  document.getElementById('btn-retry').addEventListener('click', resetQuiz);
}

document.addEventListener('DOMContentLoaded', init);
