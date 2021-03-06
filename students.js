var students = [
  {
    // id: unique id for each student
    id: 1,
    // name: unique name for each student (first name, last name)
    name: 'Holden Appell',
    // nickname: unique nickname asserted by student
    nickname: "Holdie",
    // grade: unique grade for each student
    grade: 9,
    // age: unique age for each student
    age: 15,
    // bio: unique birthday
    birthday: "1/20/2007",
    // bio: unique discription for each student written by student
    bio: "I am alive. I am breathing. I will probably not stop breathing soon, and I don't have any plans to accelerate to the day I stop.",
    // tags: hashtags to group individuals together
    tags: ["#fitnessgramPacertest"]
  },
  {
    id: 2,
    name: 'Ruthie Parham',
    nickname: "Ru",
    grade: 10,
    age: 15,
    birthday: "6/24/2006",
    bio: "I love Jesus, Brooke, and the tramp.",
    tags: ["#groot", "#food", "#gymnastics"]
  },
  {
    id: 3,
    name: "Brooke Leonard",
    nickname: "Brookie",
    grade: 11,
    age: 17,
    birthday: "9/7/2004",
    bio: "Second generation of dad jokes.",
    tags: ["#volleyball", "#traveling", "#myMazda", "#ru"]
  },
  {
    id: 4,
    name: 'Katarina Smith',
    nickname: "Kat",
    grade: 11,
    age: 16,
    birthday: "10/7/2005",
    bio: "I love to play videogames such as Destiny and Borderlands. I watch a lot of anime and also enjoy playing DnD when I get a chance. My favorite food is sushi, and my favorite type of music is electronic music, specifically EDM, video game music, and electropop.",
    tags: ["#cats", "#coffee", "#videogames"]
  },
  {
    id: 5,
    name: 'Madeline Hassan',
    nickname: "Maddy",
    grade: 10,
    age: 16,
    birthday: "1/17/2006",
    bio: "'Nobody is coming to save you. Get up.'",
    tags: ["#writing", "#reading", "#anime", "#poetry"]
  },
  {
    id: 6,
    name: 'Kate Doyle',
    nickname: "Kate",
    grade: 10,
    age: 16,
    birthday: "1/7/2006",
    bio: "'A little lost, a lot found.'",
    tags: ["#soccer", "#running", "#reading", "#painting", "#music"]
  },
  {
    id: 7,
    name: 'Ava Harkey',
    nickname: "Ava",
    grade: 9,
    age: 15,
    birthday: "3/12/2007",
    bio: "I???m Ava and I love taking pictures of people when they don???t know I am taking pictures of them so you better watch out??? Besides that, I play guitar, I love to hike, and I love gardening.",
    tags: ["#music", "#guitar", "#photography", "#art", "#plants", "#gardening", "#mycology", "#thaicountrykitchen", "#cooking", "#hiking"]
   },
   {
     id: 8,
     name: "Isaac Levinson",
     nickname: "Home Slice, Joseph",
     grade: 12,
     age: 18,
     birthday: "",
     bio: "'It is not how much time you have, it is how you use it.'",
     tags: ["#skateboarding", "#snowboarding", "#saxophone", "#videogames", "#dirtbikeriding"]
   },
   {
     id: 9,
     name: "Jordan Saunders",
     nickname: "Jordan",
     grade: 11,
     age: 17,
     birthday: "",
     bio: "'Success is not luck. It is practicality and a result of preparation, passion, persistent, and perseverance.'",
     tags: ["#running", "#baking", "#photography", "#nature", "#theocean"]
   },
   {
     id: 10,
     name: "John Schenk",
     nickname: "John",
     grade: 11,
     age: 17,
     birthday: "",
     bio: "My favorite classes are math and science. I want to be an engineer.",
     tags: ["#movies", "#golf"]
   },
   {
     id: 11,
     name: "Skylar Mitchell",
     nickname: "Mr. Mitchell",
     grade: "teacher",
     age: 31,
     birthday: "",
     bio: "Just like a single cell, the character of our lives is determined not by our genes but by our responses to the environmental signals that propel life.",
     tags: ["#track", "#basketball", "#DnD"]
   },
   {
     id: 12,
     name: 'John Fadlovich',
     nickname: "Jack",
     grade: 12,
     age: 18,
     birthday: "",
     bio: "Life moves pretty fast. If you don't stop and look around once in a while you could miss it. - Ferris Burller",
     tags: ["#gaming","#sports","#esports"]
   },
   {
     id: 13,
     name: 'Ella Alt',
     nickname: "Jollyranger",
     grade: 10,
     age: "",
     birthday: "",
     bio: "My name is Ella and I???m a sophomore. I???ve been at TFS, since I was in preschool. I like playing volleyball and basketball. I started playing volleyball in 8th grade for our school. I just decided to join because some of my friends were playing and I???ve grown to really love volleyball! I???ve played basketball recreationally since about 3rd or 4th grade. I love going thrifting and second hand shopping. When I first meet people I???m usually pretty quiet, but when you get to know me I get a lot more talkative!",
     tags: ["#volleyball","#basketball","#painting", "#beingoutside", "#thrifting", "#makeupandskincare", "#picnics", "#photoswithfriends"]
   },
   {
     id: 14,
     name: 'Ryan Schenk',
     nickname: "Ryan",
     grade: 9,
     age: "",
     birthday: "",
     bio: "I like league and yogioh and hanging out with friends.",
     tags: ["#legendsoflegends","#yugioh"]
   },
   {
     id: 15,
     name: 'Luke Lannert',
     nickname: "Luke",
     grade: 11,
     age: 17,
     birthday: "",
     bio: "When you start driving, GO TO QT.",
     tags: ["#baseball","#music"]
   },
   {
     id: 16,
     name: 'Adam Levinson',
     nickname: "Adam",
     grade: 11,
     age: 17,
     birthday: "",
     bio: "Surviving highschool with the bare minimum grades.",
     tags: ["#videogames","#messingaroundwithfriends"]
   },
   {
     id: 17,
     name: 'Spencer Culling',
     nickname: "Spenca",
     grade: 8,
     age: 14,
     birthday: "01/03/2008",
     bio: "'Shake and bake time. - Ricky Bobby'",
     tags: ["#basketball","#football","#fishing", "#golfing"]
   },
   {
     id: 18,
     name: 'Bryce Mertens',
     nickname: "Bice",
     grade: 11,
     age: 17,
     birthday: "",
     bio: "My goal is to make it big in the User interface department.",
     tags: ["#videogames"]
   },
   {
     id: 19,
     name: 'Lily Leonard',
     nickname: "Lily",
     grade: 8,
     age: 14,
     birthday: "11/30/2007",
     bio: "Goal = travel the world.",
     tags: ["#basketball","#soccer", "#football", "#sleeping", "#workingout", "#eating"]
   },
   {
     id: 20,
     name: 'George Douglass',
     nickname: "George",
     grade: 12,
     age: 18,
     birthday: "1/23/2003",
     bio: "I do lots of sports I like to talk. I also like to make things.",
     tags: ["#golf","#soccer", "#basketball", "#videogames", "#makingstuff"]
   },
   {
     id: 21,
     name: 'Rachel Fledderjohn',
     nickname: "Rae",
     grade: 12,
     age: "",
     birthday: "",
     bio: "Good things come to those who Believe, better things come to those who are Patient, and the best things come to those who Don't Give Up. - Unknown.",
     tags: ["#volleyball", "#soccer", "#cooking", "#baking", "#sportsmanager","#crafts"]
   },
   {
     id: 22,
     name: 'Sofia Casalone',
     nickname: "Sofia",
     grade: 10,
     age: 15,
     birthday: "6/24/2006",
     bio: "Failing to prepare, is preparing to fail.",
     tags: ["#horseriding", "#crossfit"]
   },
   {
    id: 24,
    name: 'Joy Dunne',
    nickname: "Joy Joy",
    grade: 11,
    age: 16,
    birthday: "6/13/2005",
    bio: "",
    tags: [""]
  },
  {
    id: 25,
    name: 'James Dunne',
    nickname: "James",
    grade: 12,
    age: 18,
    birthday: "8/31/2003",
    bio: "",
    tags: [""]
  },
  {
    id: 26,
    name: 'Andrew Harkey',
    nickname: "Andrew",
    grade: 11,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 27,
    name: 'Caleb Parham',
    nickname: "Lub",
    grade: 12,
    age: 18,
    birthday: "7/13/2003",
    bio: "",
    tags: [""]
  },
  {
    id: 28,
    name: 'Kristina Fulton',
    nickname: "Kristina",
    grade: 12,
    age: 18,
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 29,
    name: 'Ana Martinez Requena',
    nickname: "Ana",
    grade: 11,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 30,
    name: 'Darian Downes',
    nickname: "Darian",
    grade: 11,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 31,
    name: 'Maya Christian',
    nickname: "Maya",
    grade: 11,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 32,
    name: 'Dobby Zhang',
    nickname: "Dobby",
    grade: 10,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 33,
    name: 'Blas Urbano',
    nickname: "Blas",
    grade: 10,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 34,
    name: 'Zoe Smith',
    nickname: "Zoe",
    grade: 10,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 36,
    name: 'Charlotte Poinsenet Agudo',
    nickname: "Charlotte",
    grade: 10,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 37,
    name: 'Alex Nienhaus',
    nickname: "AJ",
    grade: 10,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 38,
    name: 'Sam Leeker',
    nickname: "Sam",
    grade: 10,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 39,
    name: 'Andrew Komadina',
    nickname: "Andrew",
    grade: 10,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 40,
    name: 'Coen Key',
    nickname: "Coen",
    grade: 10,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 41,
    name: 'Starley Hurtte',
    nickname: "Starley",
    grade: 10,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 42,
    name: 'Hali Christian',
    nickname: "Hali",
    grade: 10,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 43,
    name: 'Julian Tockman',
    nickname: "Julian",
    grade: 9,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 44,
    name: 'Mary Laws',
    nickname: "Mary",
    grade: 9,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 45,
    name: 'Liam Tockman',
    nickname: "Liam",
    grade: 8,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 46,
    name: 'Miles Smith',
    nickname: "Miles",
    grade: 7,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 47,
    name: 'Damien Smith',
    nickname: "Damien",
    grade: 7,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 48,
    name: 'Ben Hoskins',
    nickname: "Ben",
    grade: 8,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 49,
    name: 'Lizzy Hoskins',
    nickname: "Lizzy",
    grade: 11,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 50,
    name: 'Maybelle Hahn',
    nickname: "Maybelle",
    grade: 8,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 51,
    name: 'Abri Fleischli',
    nickname: "Abri",
    grade: 7,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 52,
    name: 'Will Doyle',
    nickname: "Will",
    grade: 8,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
  {
    id: 53,
    name: 'Sally Armstrong',
    nickname: "Sally",
    grade: 8,
    age: "",
    birthday: "",
    bio: "",
    tags: [""]
  },
]
