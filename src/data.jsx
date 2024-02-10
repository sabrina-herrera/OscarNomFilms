const films = [
    {
        id: 1,
        poster: "/OPPENHEIMER.jpg",
        title: "Oppenheimer",
        director: "Christopher Nolan",
        starring: "Cillian Murphy, Emily Blunt, Matt Damon",
        synopsis: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
        awards: [
            {
                id: 101,
                awardName: "ACTOR IN A LEADING ROLE",
                awardedTo: "Cillian Murphy",
                winner: false
            },
            {
                id: 102,
                awardName: "ACTOR IN A SUPPORTING ROLE",
                awardedTo: "Robert Downey Jr.",
                winner: false
            },
            {
                id: 103,
                awardName: "ACTRESS IN A SUPPORTING ROLE",
                awardedTo: "Emily Blunt",
                winner: false
            },
            {
                id: 104,
                awardName: "CINEMATOGRAPHY",
                awardedTo: "Hoyte van Hoytema",
                winner: false
            },
            {
                id: 105,
                awardName: "COSTUME DESIGN",
                awardedTo: "Ellen Mirojnick",
                winner: false
            },
            {
                id: 106,
                awardName: "DIRECTING",
                awardedTo: "Christopher Nolan",
                winner: false
            },
            {
                id: 107,
                awardName: "FILM EDITING",
                awardedTo: "Jennifer Lame",
                winner: false
            },
            {
                id: 108,
                awardName: "MAKEUP AND HAIRSTYLING",
                awardedTo: "Luisa Abel",
                winner: false
            },
            {
                id: 109,
                awardName: "MUSIC (ORIGINAL SCORE)",
                awardedTo: "Ludwig Göransson",
                winner: false
            },
            {
                id: 110,
                awardName: "BEST PICTURE",
                awardedTo: "Emma Thomas, Charles Roven and Christopher Nolan, Producers",
                winner: false
            },
            {
                id: 111,
                awardName: "PRODUCTION DESIGN",
                awardedTo: "Production Design: Ruth De Jong; Set Decoration: Claire Kaufman",
                winner: false
            },
            {
                id: 112,
                awardName: "SOUND",
                awardedTo: "Willie Burton, Richard King, Gary A. Rizzo and Kevin O'Connell",
                winner: false
            },
            {
                id: 113,
                awardName: "WRITING (ADAPTED SCREENPLAY)",
                awardedTo: "Written for the screen by Christopher Nolan",
                winner: false
            }
        ]
    },
    {
        id: 2,
        poster: "/POORTHINGS.JPEG",
        title: "Poor Things",
        director: "Yorgos Lanthimos",
        starring: "Emma Stone, Willem Dafoe, Mark Ruffalo",
        synopsis: "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
        awards: [
            {
                id: 201,
                awardName: "ACTOR IN A SUPPORTING ROLE",
                awardedTo: "Mark Ruffalo",
                winner: false
            },
            {
                id: 202,
                awardName: "ACTRESS IN A LEADING ROLE",
                awardedTo: "Emma Stone",
                winner: false
            },
            {
                id: 203,
                awardName: "CINEMATOGRAPHY",
                awardedTo: "Robbie Ryan",
                winner: false
            },
            {
                id: 204,
                awardName: "COSTUME DESIGN",
                awardedTo: "Holly Waddington",
                winner: false
            },
            {
                id: 205,
                awardName: "DIRECTING",
                awardedTo: "Yorgos Lanthimos",
                winner: false
            },
            {
                id: 206,
                awardName: "FILM EDITING",
                awardedTo: "Yorgos Mavropsaridis",
                winner: false
            },
            {
                id: 207,
                awardName: "MAKEUP AND HAIRSTYLING",
                awardedTo: "Nadia Stacey, Mark Coulier and Josh Weston",
                winner: false
            },
            {
                id: 208,
                awardName: "MUSIC (ORIGINAL SCORE)",
                awardedTo: "Jerskin Fendrix",
                winner: false
            },
            {
                id: 209,
                awardName: "BEST PICTURE",
                awardedTo: "Ed Guiney, Andrew Lowe, Yorgos Lanthimos and Emma Stone, Producers",
                winner: false
            },
            {
                id: 210,
                awardName: "PRODUCTION DESIGN",
                awardedTo: "Production Design: James Price and Shona Heath; Set Decoration: Zsuzsa Mihalek",
                winner: false
            },
            {
                id: 211,
                awardName: "WRITING (ADAPTED SCREENPLAY)",
                awardedTo: "Screenplay by Tony McNamara",
                winner: false
            }
        ]
    },
    {
        id: 3,
        poster: "/KillersoftheFlowerMoon.jpg",
        title: "Killers of the Flower Moon",
        director: "Martin Scorsese",
        starring: "Leonardo DiCaprio, Lily Gladstone, Robert De Niro",
        synopsis: "Real love crosses paths with unspeakable betrayal as Mollie Burkhart, a member of the Osage Nation, tries to save her community from a spree of murders fueled by oil and greed.",
        awards: [
            {
                id: 301,
                awardName: "ACTOR IN A SUPPORTING ROLE",
                awardedTo: "Robert de Niro",
                winner: false
            },
            {
                id: 302,
                awardName: "ACTRESS IN A LEADING ROLE",
                awardedTo: "Lily Gladstone",
                winner: false
            },
            {
                id: 303,
                awardName: "CINEMATOGRAPHY",
                awardedTo: "Rodrigo Prieto",
                winner: false
            },
            {
                id: 304,
                awardName: "COSTUME DESIGN",
                awardedTo: "Jacqueline West",
                winner: false
            },
            {
                id: 305,
                awardName: "DIRECTING",
                awardedTo: "Martin Scorsese",
                winner: false
            },
            {
                id: 306,
                awardName: "FILM EDITING",
                awardedTo: "Thelma Schoonmaker",
                winner: false
            },
            {
                id: 307,
                awardName: "MUSIC (ORIGINAL SCORE)",
                awardedTo: "Robbie Robertson",
                winner: false
            },
            {
                id: 308,
                awardName: "MUSIC (ORIGINAL SONG)",
                awardedTo: "Wahzhazhe (A Song for My People) Music and Lyric by Scott George",
                winner: false
            },
            {
                id: 309,
                awardName: "BEST PICTURE",
                awardedTo: "Dan Friedkin, Bradley Thomas, Martin Scorsese and Daniel Lupi, Producers",
                winner: false
            },
            {
                id: 310,
                awardName: "PRODUCTION DESIGN",
                awardedTo: "Production Design: Jack Fisk; Set Decoration: Adam Willis",
                winner: false
            }
        ]
    },
    {
        id: 4,
        poster: "/Barbie.jpg",
        title: "Barbie",
        director: "Greta Gerwig",
        starring: "Margot Robbie, Ryan Gosling, America Ferrera",
        synopsis: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        awards: [
            {
                id: 401,
                awardName: "ACTOR IN A SUPPORTING ROLE",
                awardedTo: "Ryan Gosling",
                winner: false
            },
            {
                id: 402,
                awardName: "ACTRESS IN A SUPPORTING ROLE",
                awardedTo: "America Ferrera",
                winner: false
            },
            {
                id: 403,
                awardName: "COSTUME DESIGN",
                awardedTo: "Jacqueline Durran",
                winner: false
            },
            {
                id: 404,
                awardName: "MUSIC (ORIGINAL SONG)",
                awardedTo: "'What Was I Made For?' Music and Lyric by Billie Eilish and Finneas O'Connell",
                winner: false
            },
            {
                id: 405,
                awardName: "MUSIC (ORIGINAL SONG)",
                awardedTo: "'I'm Just Ken' Music and Lyric by Mark Ronson and Andrew Wyatt",
                winner: false
            },
            {
                id: 406,
                awardName: "BEST PICTURE",
                awardedTo: "David Heyman, Margot Robbie, Tom Ackerley and Robbie Brenner, Producers",
                winner: false
            },
            {
                id: 407,
                awardName: "PRODUCTION DESIGN",
                awardedTo: "Production Design: Sarah Greenwood; Set Decoration: Katie Spencer",
                winner: false
            },
            {
                id: 408,
                awardName: "WRITING (ADAPTED SCREENPLAY)",
                awardedTo: "Written by Greta Gerwig & Noah Baumbach",
                winner: false
            }
        ]
    },
    {
        id: 5,
        poster: "/Maestro.jpg",
        title: "Maestro",
        director: "Bradley Cooper ",
        starring: "Bradley Cooper, Carey Mulligan, Matt Bomer",
        synopsis: "On the verge of securing a golden opportunity, American conductor Leonard Bernstein begins a tumultuous relationship with actress Felicia Montealegre, upturning their lives.",
        awards: [
            {
                id: 501,
                awardName: "ACTOR IN A LEADING ROLE",
                awardedTo: "Bradley Cooper",
                winner: false
            },
            {
                id: 502,
                awardName: "ACTRESS IN A LEADING ROLE",
                awardedTo: "Carey Mulligan",
                winner: false
            },
            {
                id: 503,
                awardName: "CINEMATOGRAPHY",
                awardedTo: "Matthew Libatique",
                winner: false
            },
            {
                id: 504,
                awardName: "MAKEUP AND HAIRSTYLING",
                awardedTo: "Kazu Hiro, Kay Georgiou and Lori McCoy-Bell",
                winner: false
            },
            {
                id: 505,
                awardName: "BEST PICTURE",
                awardedTo: "Bradley Cooper, Steven Spielberg, Fred Berner, Amy Durning and Kristie Macosko Krieger, Producers",
                winner: false
            },
            {
                id: 506,
                awardName: "SOUND",
                awardedTo: "Steven A. Morrow, Richard King, Jason Ruder, Tom Ozanich and Dean Zupancic",
                winner: false
            },
            {
                id: 507,
                awardName: "WRITING (ORIGINAL SCREENPLAY)",
                awardedTo: "Written by Bradley Cooper & Josh Singer",
                winner: false
            }
        ]
    },
    {
        id: 6,
        poster: "/AmericanFiction.jpg",
        title: "American Fiction",
        director: "Cord Jefferson",
        starring: "Jeffrey Wright, Tracee Ellis Ross, John Ortiz",
        synopsis: "Monk is a frustrated novelist who's fed up with the establishment that profits from Black entertainment that relies on tired and offensive tropes. To prove his point, he uses a pen name to write an outlandish Black book of his own, a book that propels him to the heart of hypocrisy and the madness he claims to disdain.",
        awards: [
            {
                id: 601,
                awardName: "ACTOR IN A LEADING ROLE",
                awardedTo: "Jeffrey Wright",
                winner: false
            },
            {
                id: 602,
                awardName: "ACTOR IN A SUPPORTING ROLE",
                awardedTo: "Sterling K. Brown",
                winner: false
            },
            {
                id: 603,
                awardName: "MUSIC (ORIGINAL SCORE)",
                awardedTo: "Laura Karpman",
                winner: false
            },
            {
                id: 604,
                awardName: "BEST PICTURE",
                awardedTo: "Ben LeClair, Nikos Karamigios, Cord Jefferson and Jermaine Johnson, Producers",
                winner: false
            },
            {
                id: 605,
                awardName: "WRITING (ADAPTED SCREENPLAY)",
                awardedTo: "Written for the screen by Cord Jefferson",
                winner: false
            }
        ]
    },
    {
        id: 7,
        poster: "/AnatomyofaFall.jpg",
        title: "Anatomy of a Fall",
        director: "Justine Triet",
        starring: "Sandra Hüller, Swann Arlaud, Milo Machado Graner",
        synopsis: "For the past year, Sandra, her husband Samuel, and their eleven-year-old son Daniel have lived a secluded life in a remote town in the French Alps. When Samuel is found dead in the snow below their chalet, the police question whether he was murdered or committed suicide. Samuel's suspicious death is presumed murder, and Sandra becomes the main suspect. What follows is not just an investigation into the circumstances of Samuel's death but an unsettling psychological journey into the depths of Sandra and Samuel's conflicted relationship.",
        awards: [
            {
                id: 701,
                awardName: "ACTRESS IN A LEADING ROLE",
                awardedTo: "Sandra Hüller",
                winner: false
            },
            {
                id: 701,
                awardName: "DIRECTING",
                awardedTo: "Justine Triet",
                winner: false
            },
            {
                id: 703,
                awardName: "FILM EDITING",
                awardedTo: "Laurent Sénéchal",
                winner: false
            },
            {
                id: 704,
                awardName: "BEST PICTURE",
                awardedTo: "Marie-Ange Luciani and David Thion, Producers",
                winner: false
            },
            {
                id: 705,
                awardName: "WRITING (ORIGINAL SCREENPLAY)",
                awardedTo: "Screenplay - Justine Triet and Arthur Harari",
                winner: false
            }
        ]
    },
    {
        id: 8,
        poster: "/TheHoldovers.jpg",
        title: "The Holdovers",
        director: "Alexander Payne",
        starring: "Paul Giamatti, Da'Vine Joy Randolph, Dominic Sessa",
        synopsis: "A curmudgeonly instructor at a New England prep school remains on campus during Christmas break to babysit a handful of students with nowhere to go. He soon forms an unlikely bond with a brainy but damaged troublemaker, and with the school's head cook, a woman who just lost a son in the Vietnam War.",
        awards: [
            {
                id: 801,
                awardName: "ACTOR IN A LEADING ROLE",
                awardedTo: "Paul Giamatti",
                winner: false
            },
            {
                id: 802,
                awardName: "ACTRESS IN A SUPPORTING ROLE",
                awardedTo: "Da'vine Joy Randolph",
                winner: false
            },
            {
                id: 803,
                awardName: "FILM EDITING",
                awardedTo: "Kevin Tent",
                winner: false
            },
            {
                id: 804,
                awardName: "BEST PICTURE",
                awardedTo: "Mark Johnson, Producer",
                winner: false
            },
            {
                id: 805,
                awardName: "WRITING (ORIGINAL SCREENPLAY)",
                awardedTo: "Written by David Hemingson",
                winner: false
            }
        ]
    },
    {
        id: 9,
        poster: "/TheZoneofInterest.jpg",
        title: "The Zone of Interest",
        director: "Jonathan Glazer",
        starring: "Christian Friedel, Sandra Hüller, Medusa Knopf",
        synopsis: "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
        awards: [
            {
                id: 901,
                awardName: "DIRECTING",
                awardedTo: "Jonathan Glazer",
                winner: false
            },
            {
                id: 902,
                awardName: "INTERNATIONAL FEATURE FILM",
                awardedTo: "United Kingdom",
                winner: false
            },
            {
                id: 903,
                awardName: "BEST PICTURE",
                awardedTo: "James Wilson, Producer",
                winner: false
            },
            {
                id: 904,
                awardName: "SOUND",
                awardedTo: "Tarn Willers and Johnnie Burn",
                winner: false
            },
            {
                id: 905,
                awardName: "WRITING (ADAPTED SCREENPLAY)",
                awardedTo: "Written by Jonathan Glazer",
                winner: false
            }
        ]
    },
    {
        id: 10,
        poster: "/Napoleon.jpg",
        title: "Napoleon",
        director: "Ridley Scott",
        starring: "Joaquin Phoenix, Vanessa Kirby, Ben Miles",
        synopsis: "A look at the military commander's origins and his swift, ruthless climb to emperor, viewed through the prism of his addictive and often volatile relationship with his wife and one true love, Josephine.",
        awards: [
            {
                id: 1001,
                awardName: "COSTUME DESIGN",
                awardedTo: "Janty Yates and Dave Crossman",
                winner: false
            },
            {
                id: 1002,
                awardName: "PRODUCTION DESIGN",
                awardedTo: "Production Design: Arthur Max; Set Decoration: Elli Griff",
                winner: false
            },
            {
                id: 1003,
                awardName: "VISUAL EFFECTS",
                awardedTo: "Charley Henley, Luc-Ewen Martin-Fenouillet, Simone Coco and Neil Corbould",
                winner: false
            }
        ]
    },
    {
        id: 11,
        poster: "/TheCreator.jpg",
        title: "The Creator",
        director: "Gareth Edwards",
        starring: "John David Washington, Gemma Chan, Ken Watanabe",
        synopsis: "As a future war between the human race and artificial intelligence rages on, ex-special forces agent Joshua is recruited to hunt down and kill the Creator, the elusive architect of advanced AI. The Creator has developed a mysterious weapon that has the power to end the war and all of mankind. As Joshua and his team of elite operatives venture into enemy-occupied territory, they soon discover the world-ending weapon is actually an AI in the form of a young child.",
        awards: [
            {
                id: 1101,
                awardName: "SOUND",
                awardedTo: "Ian Voigt, Erik Aadahl, Ethan Van der Ryn, Tom Ozanich and Dean Zupancic",
                winner: false
            },
            {
                id: 1102,
                awardName: "VISUAL EFFECTS",
                awardedTo: "Jay Cooper, Ian Comley, Andrew Roberts and Neil Corbould",
                winner: false
            }
        ]
    },
    {
        id: 12,
        poster: "/MISSIONIMPOSSIBLE.jpg",
        title: "Mission: Impossible - Dead Reckoning",
        director: "Christopher McQuarrie",
        starring: "Tom Cruise, Hayley Atwell, Ving Rhames",
        synopsis: "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most.",
        awards: [
            {
                id: 1201,
                awardName: "SOUND",
                awardedTo: "Chris Munro, James H. Mather, Chris Burdon and Mark Taylor",
                winner: false
            },
            {
                id: 1202,
                awardName: "VISUAL EFFECTS",
                awardedTo: "Alex Wuttke, Simone Coco, Jeff Sutherland and Neil Corbould",
                winner: false
            }
        ]
    },
    {
        id: 13,
        poster: "/Nyad.jpg",
        title: "Nyad",
        director: "Elizabeth Chai Vasarhelyi, Jimmy Chin",
        starring: "Annette Bening, Jodie Foster, Rhys Ifans",
        synopsis: "A remarkable true story of tenacity, friendship and the triumph of the human spirit, NYAD recounts a riveting chapter in the life of world-class athlete Diana Nyad. Three decades after giving up marathon swimming in exchange for a prominent career as a sports journalist, at the age of 60, Diana (four-time Academy Award nominee Annette Bening) becomes obsessed with completing an epic swim that always eluded her: the 110 mile trek from Cuba to Florida, often referred to as the \"Mount Everest\" of swims. Determined to become the first person to finish the swim without a shark cage, Diana goes on a thrilling, four-year journey with her best friend and coach Bonnie Stoll (two-time Academy Award winner Jodie Foster) and a dedicated sailing team.",
        awards: [
            {
                id: 1301,
                awardName: "ACTRESS IN A LEADING ROLE",
                awardedTo: "Annette Bening",
                winner: false
            },
            {
                id: 1302,
                awardName: "ACTRESS IN A SUPPORTING ROLE",
                awardedTo: "Jodie Foster",
                winner: false
            }
        ]
    },
    {
        id: 14,
        poster: "/PastLives.jpg",
        title: "Past Lives",
        director: "Celine Song",
        starring: "Greta Lee, Teo Yoo, John Magaro",
        synopsis: "Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora's family emigrates from South Korea. Decades later, they are reunited for one fateful week as they confront destiny, love and the choices that make a life.",
        awards: [
            {
                id: 1401,
                awardName: "BEST PICTURE",
                awardedTo: "David Hinojosa, Christine Vachon and Pamela Koffler, Producers",
                winner: false
            },
            {
                id: 1402,
                awardName: "WRITING (ORIGINAL SCREENPLAY)",
                awardedTo: "Written by Celine Song",
                winner: false
            }
        ]
    },
    {
        id: 15,
        poster: "/SocietyoftheSnow.jpg",
        title: "Society of the Snow",
        director: "J. A. Bayona",
        starring: "Enzo Vogrincic, Matías Recalt, Agustín Pardella",
        synopsis: "In 1972, Uruguayan Air Force Flight 571, which had been chartered to fly a rugby team to Chile, crashed in the heart of the Andes. Only 29 of its 45 passengers survived the accident. Trapped in one of the most hostile and inaccessible environments on the planet, they have to resort to extreme measures to stay alive",
        awards: [
            {
                id: 1501,
                awardName: "INTERNATIONAL FEATURE FILM",
                awardedTo: "Spain",
                winner: false
            },
            {
                id: 1502,
                awardName: "MAKEUP AND HAIRSTYLING",
                awardedTo: "Ana López-Puigcerver, David Martí and Montse Ribé",
                winner: false
            }
        ]
    },
    {
        id: 16,
        poster: "/Rustin.jpg",
        title: "Rustin",
        director: "George C. Wolfe",
        starring: "Colman Domingo, Chris Rock, Jeffrey Wright",
        synopsis: "Bayard Rustin, advisor to Martin Luther King Jr., dedicates his life to the quest for racial equality, human rights and worldwide democracy. However, as an openly gay Black man, he is all but erased from the civil rights movement he helped build.",
        awards: [
            {
                id: 1601,
                awardName: "ACTOR IN A LEADING ROLE",
                awardedTo: "Coleman Domingo",
                winner: false
            }
        ]
    },
    {
        id: 17,
        poster: "/TheColorPurple.jpg",
        title: "The Color Purple",
        director: "Blitz Bazawule",
        starring: "Taraji P. Henson, Danielle Brooks, Colman Domingo",
        synopsis: "Torn apart from her sister and her children, Celie faces many hardships in life, including an abusive husband. With support from a sultry singer named Shug Avery, as well as her stand-her-ground stepdaughter, Celie ultimately finds extraordinary strength in the unbreakable bonds of a new kind of sisterhood.",
        awards: [
            {
                id: 1701,
                awardName: "ACTRESS IN A SUPPORTING ROLE",
                awardedTo: "Danielle Brooks",
                winner: false
            }
        ]
    },
    {
        id: 18,
        poster: "/TheBoyandtheHeron.jpg",
        title: "The Boy and the Heron",
        director: "Hayao Miyazaki",
        starring: "Soma Santoki, Masaki Suda, Aimyon",
        synopsis: "Mahito, a young 12-year-old boy, struggles to settle in a new town after his mother's death. However, when a talking heron informs Mahito that his mother is still alive, he enters an abandoned tower in search of her, which takes him to another world.",
        awards: [
            {
                id: 1801,
                awardName: "ANIMATED FEATURE FILM",
                awardedTo: "Hayao Miyazaki and Toshio Suzuki",
                winner: false
            }
        ]
    },
    {
        id: 19,
        poster: "/MayDecember.jpg",
        title: "May December",
        director: "Todd Haynes",
        starring: "Natalie Portman, Julianne Moore, Charles Melton",
        synopsis: "Twenty years after their notorious tabloid romance gripped the nation, Gracie Atherton-Yu and her husband Joe (twenty-three years her junior) brace themselves for their twins to graduate from high school. When Hollywood actress Elizabeth Berry comes to spend time with the family to better understand Gracie, who she will be playing in a film, family dynamics unravel under the pressure of the outside gaze. Joe, never having processed what happened in his youth, starts to confront the reality of life as an empty-nester at thirty-six. And as Elizabeth and Gracie study each other, the similarities and differences between the two women begin to ebb and flow. Set in picturesque and comfortable Savannah, Georgia, May December is an exploration of truth, storytelling, and the difficulties (or impossibility) of fully understanding another person.",
        awards: [
            {
                id: 1901,
                awardName: "WRITING (ORIGINAL SCREENPLAY)",
                awardedTo: "Screenplay by Samy Burch; Story by Samy Burch & Alex Mechanik",
                winner: false
            }
        ]
    },
    {
        id: 20,
        poster: "/Elemental.jpg",
        title: "Elemental",
        director: "Peter Sohn",
        starring: "Leah Lewis, Mamoudou Athie, Ronnie del Carmen",
        synopsis: "Disney and Pixar's \"Elemental\", an all-new, original feature film set in Element City, where fire-, water-, land- and air-residents live together. The story introduces Ember, a tough, quick-witted and fiery young woman, whose friendship with a fun, sappy, go-with-the-flow guy named Wade challenges her beliefs about the world they live in.",
        awards: [
            {
                id: 2001,
                awardName: "ANIMATED FEATURE FILM",
                awardedTo: "Peter Sohn and Denise Ream",
                winner: false
            }
        ]
    },
    {
        id: 21,
        poster: "/Nimona.jpg",
        title: "Nimona",
        director: "Nick Bruno, Troy Quane",
        starring: "Chloë Grace Moretz, Riz Ahmed, Eugene Lee Yang",
        synopsis: "When Ballister Boldheart (Riz Ahmed), a knight in a futuristic medieval world, is framed for a crime he didn't commit, the only one who can help him prove his innocence is Nimona (Chloë Grace Moretz), a mischievous teen with a taste for mayhem -- who also happens to be a shapeshifting creature Ballister has been trained to destroy. But with the entire kingdom out to get him, Nimona's the best (or technically the only) sidekick Ballister can hope for. And as the lines between heroes, villains, and monsters start to blur, the two of them set out to wreak serious havoc -- for Ballister to clear his name once and for all, and for Nimona to... just wreak serious havoc.",
        awards: [
            {
                id: 2101,
                awardName: "ANIMATED FEATURE FILM",
                awardedTo: "Nick Bruno, Troy Quane, Karen Ryan and Julie Zackary",
                winner: false
            }
        ]
    },
    {
        id: 22,
        poster: "/RobotDreams.jpg",
        title: "Robot Dreams",
        director: "Pablo Berger",
        starring: "",
        synopsis: "DOG lives in Manhattan and he's tired of being alone. One day he decides to build himself a robot, a companion. Their friendship blossoms, until they become inseparable, to the rhythm of 80's NYC. One summer night, DOG, with great sadness, is forced to abandon ROBOT at the beach. Will they ever meet again?",
        awards: [
            {
                id: 2201,
                awardName: "ANIMATED FEATURE FILM",
                awardedTo: "Pablo Berger, Ibon Cormenzana, Ignasi Estapé and Sandra Tapia Díaz",
                winner: false
            }
        ]
    },
    {
        id: 23,
        poster: "/SPIDERMAN.jpg",
        title: "Spider-man: Across the Spider-verse",
        director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
        starring: "Shameik Moore, Hailee Steinfeld, Brian Tyree Henry",
        synopsis: "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.",
        awards: [
            {
                id: 2301,
                awardName: "ANIMATED FEATURE FILM",
                awardedTo: "Kemp Powers, Justin K. Thompson, Phil Lord, Christopher Miller and Amy Pascal",
                winner: false
            }
        ]
    },
    {
        id: 24,
        poster: "/ElConde.jpg",
        title: "El Conde",
        director: "Pablo Larraín",
        starring: "Jaime Vadell, Gloria Münchmeyer, Alfredo Castro",
        synopsis: "El Conde is a dark comedy/horror that imagines a parallel universe inspired by the recent history of Chile. The film portrays Augusto Pinochet, a symbol of world fascism, as a vampire who lives hidden in a ruined mansion in the cold southern tip of the continent. Feeding his appetite for evil to sustain his existence. After two hundred and fifty years of life, Pinochet has decided to stop drinking blood and abandon the privilege of eternal life. He can no longer bear that the world remembers him as a thief. Despite the disappointing and opportunistic nature of his family, he finds new inspiration to continue living a life of vital and counterrevolutionary passion through an unexpected relationship.",
        awards: [
            {
                id: 2401,
                awardName: "CINEMATOGRAPHY",
                awardedTo: "Edward Lachman",
                winner: false
            }
        ]
    },
    {
        id: 25,
        poster: "/BOBIWINE.jpeg",
        title: "Bobi Wine: The People's President",
        director: "Christopher Sharp, Moses Bwayo",
        starring: "Bobi Win, Barbie Kyagulanyi, Robert Ssentamu",
        synopsis: "This gripping documentary charts the inspiring activism of Bobi Wine, the pop star-turned-politician seeking to end Uganda's brutal dictatorship. Rising from the ghetto slums of Kampala to be one of the country's most beloved superstars, Bobi begins to use his music to call out corruption, then becomes an Independent Member of Parliament to defend the rights of his people. The country's institutions are controlled by President Museveni, an autocratic tyrant who has held power since 1986. Bobi and his wife Barbie choose to risk their careers, their family, and their lives to challenge him and bring democracy to their country. But the state is determined to silence not only them, but anyone who supports their cause.",
        awards: [
            {
                id: 2501,
                awardName: "DOCUMENTARY FEATURE FILM",
                awardedTo: "Moses Bwayo, Christopher Sharp and John Battsek",
                winner: false
            }
        ]
    },
    {
        id: 26,
        poster: "/TheEternalMemory.jpg",
        title: "The Eternal Memory",
        director: "Maite Alberdi",
        starring: "Augusto Góngora, Paulina Urrutia",
        synopsis: "Augusto and Paulina have been together and in love for 25 years. Eight years ago, he was diagnosed with Alzheimer’s disease, and his wife has since become his caretaker. As one of Chile's most prominent cultural commentators and television presenters, Augusto is no stranger to building an archive of memory, having been responsible for that herculean task following the Pinochet dictatorship and its systematic erasure of collective consciousness. Now he turns that work to his own life, trying to hold on to his identity with the help of his beloved. Day by day, the couple face this challenge head-on, adapting to the disruptions brought on by the taxing disease while relying on the tender affection and sense of humor shared between them that remains intact.",
        awards: [
            {
                id: 2601,
                awardName: "DOCUMENTARY FEATURE FILM",
                awardedTo: "",
                winner: false
            }
        ]
    },
    {
        id: 27,
        poster: "/FourDaughters.jpg",
        title: "Four Daughters",
        director: "Kaouther Ben Hania",
        starring: "Hend Sabry, Olfa Hamrouni, Eya Chikahoui",
        synopsis: "This riveting exploration of rebellion, memory, and sisterhood reconstructs the story of Olfa Hamrouni and her four daughters, unpacking a complex family history through intimate interviews and performance to examine how the Tunisian woman's two eldest were radicalized by Islamic extremists. Casting professional actresses as the missing daughters, along with acclaimed Egyptian-Tunisian actress Hend Sabri as Olfa, award-winning director Kaouther Ben Hania (The Man Who Sold His Skin) restages pivotal moments in the family's life. These scenes are interwoven with confessions and reflections from Olfa and her younger daughters, offering the women agency to tell their own story and capturing moments of joy, loss, violence, and heartache. Winner of four prizes including L'Oeil d'Or (Best Documentary) when it screened in competition at the Cannes Film Festival, Four Daughters is a compelling portrait of five women and a unique and ambitious work of nonfiction cinema that explores the nature of memory, the weight of inherited trauma, and the ties that bind mothers and daughters.",
        awards: [
            {
                id: 2701,
                awardName: "DOCUMENTARY FEATURE FILM",
                awardedTo: "Kaouther Ben Hania and Nadim Cheikhrouha",
                winner: false
            }
        ]
    },
    {
        id: 28,
        poster: "/ToKillaTiger.jpg",
        title: "To Kill a Tiger",
        director: "Nisha Pahuja",
        starring: "",
        synopsis: "In a small Indian village, Ranjit wakes up to find that his 13-year-old daughter has not returned from a family wedding. A few hours later, she's found stumbling home. After being abducted into the woods, she was sexually assaulted by three men. Ranjit goes to the police, and the men are arrested. But Ranjit's relief is short-lived, as the villagers and their leaders launch a sustained campaign to force the family to drop the charges. A cinematic documentary, To Kill a Tiger follows Ranjit's uphill battle to find justice for his child. In India, where a rape is reported every 20 minutes and conviction rates are less than 30 percent, Ranjit's decision to support his daughter is virtually unheard of. With tremendous access, we witness the emotional journey of an ordinary man facing extraordinary circumstances. A father whose love for his daughter forces a social reckoning that will reverberate for years to come.",
        awards: [
            {
                id: 2801,
                awardName: "DOCUMENTARY FEATURE FILM",
                awardedTo: "Nisha Pahuja, Cornelia Principe and David Oppenheim",
                winner: false
            }
        ]
    },
    {
        id: 29,
        poster: "/20DaysinMariupol.jpg",
        title: "20 Days in Mariupol",
        director: "Mstyslav Chernov",
        starring: "",
        synopsis: "The film documents the twenty days Chernov spent with his colleagues during the battle of Mariupol in 2022. As the Russian invasion begins, the team of Ukrainian journalists become trapped in the besieged city and struggle to continue their work documenting the war.",
        awards: [
            {
                id: 2901,
                awardName: "DOCUMENTARY FEATURE FILM",
                awardedTo: "Mstyslav Chernov, Michelle Mizner and Raney Aronson-Rath",
                winner: false
            }
        ]
    },
    {
        id: 30,
        poster: "/THEABCS.jpg",
        title: "The ABCs of Book Banning",
        director: "Trish Adlesic, Nazenet Habtezghi, Sheila Nevins",
        starring: "",
        synopsis: "The film features people discussing the mass banning of books relating to LGBT topics and issues of race, specifically in Florida.",
        awards: [
            {
                id: 3001,
                awardName: "DOCUMENTARY SHORT FILM",
                awardedTo: "Sheila Nevins and Trish Adlesic",
                winner: false
            }
        ]
    },
    {
        id: 31,
        poster: "/TheBarberofLittleRock.jpg",
        title: "The Barber of Little Rock",
        director: "John Hoffman, Christine Turner",
        starring: "",
        synopsis: "Barber Arlo Washington forms a nonprofit community bank, with a visionary approach to a just economy that could reshape the future of banking. The People Trust fosters economic progress for underserved residents in Little Rock, Ark.",
        awards: [
            {
                id: 3101,
                awardName: "DOCUMENTARY SHORT FILM",
                awardedTo: "John Hoffman and Christine Turner",
                winner: false
            }
        ]
    },
    {
        id: 32,
        poster: "/IslandinBetween.jpg",
        title: "Island in Between",
        director: "S. Leo Chiang",
        starring: "",
        synopsis: "S. Leo Chiang reflects on his relationship with Taiwan, the United States and China from the islands of Kinmen, just a few miles from mainland China.",
        awards: [
            {
                id: 3201,
                awardName: "DOCUMENTARY SHORT FILM",
                awardedTo: "S. Leo Chiang and Jean Tsien",
                winner: false
            }
        ]
    },
    {
        id: 33,
        poster: "/TheLastRepairShop.jpg",
        title: "The Last Repair Shop",
        director: "Ben Proudfoot, Kris Bowers",
        starring: "Dana Atkinson, Paty Moreno, Duane Michaels",
        synopsis: "In Los Angeles, a few devoted craftspeople keep over 80,000 student instruments in good repair.",
        awards: [
            {
                id: 3301,
                awardName: "DOCUMENTARY SHORT FILM",
                awardedTo: "Ben Proudfoot and Kris Bowers",
                winner: false
            }
        ]
    },
    {
        id: 34,
        poster: "/NAINAI.jpg",
        title: "Nǎi Nai & Wài Pó",
        director: "Sean Wang",
        starring: "Yi Yan Fuei, Zhang Li Hua",
        synopsis: "A personal love letter from director Sean Wang to his Nai Nai and Wài Pó, a grandma super team that dances, stretches, and farts their sorrows away.",
        awards: [
            {
                id: 3401,
                awardName: "DOCUMENTARY SHORT FILM",
                awardedTo: "Sean Wang and Sam Davis",
                winner: false
            }
        ]
    },
    {
        id: 35,
        poster: "/IoCapitano.jpg",
        title: "Io Capitano",
        director: "Matteo Garrone",
        starring: "Seydou Sarr, Moustapha Fall",
        synopsis: "Two Senegalese teenagers, Seydou and Moussa, travel from Dakar to Europe in the hope of becoming pop stars in Europe, finding danger, heartbreak and unexpected joy along the way.",
        awards: [
            {
                id: 3501,
                awardName: "INTERNATIONAL FEATURE FILM",
                awardedTo: "Italy",
                winner: false
            }
        ]
    },
    {
        id: 36,
        poster: "/PerfectDays.jpg",
        title: "Perfect Days",
        director: "Wim Wenders",
        starring: "Kōji Yakusho, Tokio Emoto, Arisa Nakano",
        synopsis: "Hirayama seems utterly content with his simple life as a cleaner of toilets in Tokyo. Outside of his very structured everyday routine he enjoys his passion for music and for books. And he loves trees and takes photos of them. A series of unexpected encounters gradually reveal more of his past. A deeply moving and poetic reflection on finding beauty in the everyday world around us.",
        awards: [
            {
                id: 3601,
                awardName: "INTERNATIONAL FEATURE FILM",
                awardedTo: "Japan",
                winner: false
            }
        ]
    },
    {
        id: 37,
        poster: "/TheTeachersLounge.jpg",
        title: "The Teachers' Lounge",
        director: "Ilker Çatak",
        starring: "Leonie Benesch, Michael Klammer, Rafael Stachowiak",
        synopsis: "Carla Nowak, a dedicated sports and math teacher, starts her first job at a high school. She stands out among the new staff because of her idealism. When a series of thefts occur at the school and one of her students is suspected, she decides to get to the bottom of the matter on her own. Carla tries to mediate between outraged parents, opinionated colleagues and aggressive students, but is relentlessly confronted with the structures of the school system. The more desperately she tries to do everything right, the more the young teacher threatens to break.",
        awards: [
            {
                id: 3701,
                awardName: "INTERNATIONAL FEATURE FILM",
                awardedTo: "Germany",
                winner: false
            }
        ]
    },
    {
        id: 38,
        poster: "/Golda.jpg",
        title: "Golda",
        director: "Guy Nattiv",
        starring: "Helen Mirren, Camille Cottin, Liev Schreiber",
        synopsis: "Golda is a ticking-clock thriller set during the tense 19 days of the Yom Kippur War in 1973. Israeli Prime Minister Golda Meir (Helen Mirren), faced with the potential of Israel's complete destruction, must navigate overwhelming odds, a skeptical cabinet, and a complex relationship with US Secretary of State Henry Kissinger (Liev Schreiber), with millions of lives in the balance. Her tough leadership and compassion would ultimately decide the fate of her nation and leave her with a controversial legacy around the world.",
        awards: [
            {
                id: 3801,
                awardName: "MAKEUP AND HAIRSTYLING",
                awardedTo: "Karen Hartley Thomas, Suzi Battersby and Ashra Kelly-Blue",
                winner: false
            }
        ]
    },
    {
        id: 39,
        poster: "/INDIANAJONES.jpg",
        title: "Indiana Jones and the Dial of Destiny",
        director: "James Mangold",
        starring: "Harrison Ford, Phoebe Waller-Bridge, Antonio Banderas",
        synopsis: "Daredevil archaeologist Indiana Jones races against time to retrieve a legendary dial that can change the course of history. Accompanied by his goddaughter, he soon finds himself squaring off against Jürgen Voller, a former Nazi who works for NASA.",
        awards: [
            {
                id: 3901,
                awardName: "MUSIC (ORIGINAL SCORE)",
                awardedTo: "John Williams",
                winner: false
            }
        ]
    },
    {
        id: 40,
        poster: "/FlaminHot.jpg",
        title: "Flamin' Hot",
        director: "Eva Longoria",
        starring: "Jesse Garcia, Annie Gonzalez, Dennis Haysbert",
        synopsis: "Richard Montanez, the son of a Mexican immigrant, was a janitor at Frito Lay when he came up with the idea for Flamin' Hot Cheetos. His creation, inspired by the flavours of his community, revitalises Frito-Lay and disrupts the food industry.",
        awards: [
            {
                id: 4001,
                awardName: "MUSIC (ORIGINAL SONG)",
                awardedTo: "'The Fire Inside' Music and Lyric by Diane Warren",
                winner: false
            }
        ]
    },
    {
        id: 41,
        poster: "/AmericanSymphony.jpg",
        title: "American Symphony",
        director: "Matthew Heineman",
        starring: "Jon Batiste, Suleika Jaouad",
        synopsis: "Early in 2022, multi-instrumentalist Jon Batiste finds himself the most celebrated artist of the year with eleven Grammy nominations including Album of the Year. In the midst of that triumph, Jon is immersed in his most ambitious challenge yet: composing American Symphony, an original symphony that reimagines the traditions of the classical form, bringing together an expansive and inclusive diaspora of music for a performance at storied Carnegie Hall. This extraordinary trajectory is upended when Batiste's life partner -- best-selling author Suleika Jaouad -- learns that her long-dormant cancer has returned. In the intimate AMERICAN SYMPHONY, Academy Award-nominated and Emmy Award-winning director Matthew Heineman (Cartel Land, The First Wave, Retrograde) delivers a portrait of two inimitable artists at a crossroads and a profound meditation on art, love, and the creative process.",
        awards: [
            {
                id: 4101,
                awardName: "MUSIC (ORIGINAL SONG)",
                awardedTo: "'It Never Went Away' Music and Lyric by Jon Batiste and Dan Wilson",
                winner: false
            }
        ]
    },
    {
        id: 42,
        poster: "/LettertoaPig.jpg",
        title: "Letter to a Pig",
        director: "Tal Kantor",
        starring: "",
        synopsis: "On 'Memorial Day', a Holocaust survivor reads a letter he wrote to the pig who saved his life to a classroom full of teenagers.  Whilst listening to his testimony, a young schoolgirl sinks into a twisted dream where she confronts questions of collective trauma, memory and identity.",
        awards: [
            {
                id: 4201,
                awardName: "ANIMATED SHORT FILM",
                awardedTo: "Tal Kantor and Amit R. Gicelter",
                winner: false
            }
        ]
    },
    {
        id: 43,
        poster: "/NinteyFiveSenses.jpg",
        title: "Nintey-Five Senses",
        director: "Jared Hess, Jerusha Hess",
        starring: "Tim Blake Nelson",
        synopsis: "An ode to the body's five senses delivered by a man with little time left to enjoy them.",
        awards: [
            {
                id: 4301,
                awardName: "ANIMATED SHORT FILM",
                awardedTo: "Jerusha Hess and Jared Hess",
                winner: false
            }
        ]
    },
    {
        id: 44,
        poster: "/OURUNIFORM.jpg",
        title: "Our Uniform",
        director: "Yegane Moghaddam",
        starring: "",
        synopsis: "An Iranian girl unfolds her school memories on the wrinkles and fabrics of her old uniform.",
        awards: [
            {
                id: 4401,
                awardName: "ANIMATED SHORT FILM",
                awardedTo: "Yegane Moghaddam",
                winner: false
            }
        ]
    },
    {
        id: 45,
        poster: "/Pachyderme.jpg",
        title: "Pachyderme",
        director: "Stephanie Clement",
        starring: "Christa Théret",
        synopsis: "Louise stays with her grandparents in the countryside for a few days during the summer holidays.",
        awards: [
            {
                id: 4501,
                awardName: "ANIMATED SHORT FILM",
                awardedTo: "Stéphanie Clément and Marc Rius",
                winner: false
            }
        ]
    },
    {
        id: 46,
        poster: "/WARISOVER.jpg",
        title: "War is Over! Inspired by the Music of John & Yoko",
        director: "Dave Mullins",
        starring: "",
        synopsis: "In an alternate WWI reality, a heroic pigeon delivers messages across the battlefield, from one side to the other. The messages are exchanged by two soldiers on opposite sides, who, unaware of who their opponent is, are playing a game of chess against each other. As the fighting and the game both escalate, they continue to exchange their chess moves, delivered by the brave pigeon. Whoever wins the game, what's certain is that there are no winners in war.",
        awards: [
            {
                id: 4601,
                awardName: "ANIMATED SHORT FILM",
                awardedTo: "Dave Mullins and Brad Booker",
                winner: false
            }
        ]
    },
    {
        id: 47,
        poster: "/TheAfter.jpg",
        title: "The After",
        director: "Misan Harriman",
        starring: "David Oyelowo, Jessica Plummer, Sule Rumi",
        synopsis: "After losing a family member to a violent crime, a shattered ride-share driver picks up a passenger who forces him to confront his grief.",
        awards: [
            {
                id: 4701,
                awardName: "LIVE ACTION SHORT FILM",
                awardedTo: "Misan Harriman and Nicky Bentham",
                winner: false
            }
        ]
    },
    {
        id: 48,
        poster: "/Invincible.jpg",
        title: "Invincible",
        director: "Vincent René-Lortie",
        starring: "Léokim Beaumier-Lépine, Isabelle Blais, Ralph Prosper",
        synopsis: "Inspired by a true story, the thirty-minute short stars Léokim Beaumier-Lépine as Marc-André Bernier, a troubled young man who has been incarcerated in a youth detention centre; after spending a weekend with his family on a furlough, he is willing to go to any lengths necessary to avoid having to return to the facility.",
        awards: [
            {
                id: 4801,
                awardName: "LIVE ACTION SHORT FILM",
                awardedTo: "Vincent René-Lortie and Samuel Caron",
                winner: false
            }
        ]
    },
    {
        id: 49,
        poster: "/KnightofFortune.jpg",
        title: "Knight of Fortune",
        director: "Lasse Lyskjær Noer",
        starring: "Leif Andrée, Jens Jørn Spottag, Jesper Lohmann",
        synopsis: "Karl arrives at a chapel to say goodbye to his recently deceased wife, but he cannot bring himself to open the casket and acknowledge his loss.",
        awards: [
            {
                id: 4901,
                awardName: "LIVE ACTION SHORT FILM",
                awardedTo: "Lasse Lyskjær Noer and Christian Norlyk",
                winner: false
            }
        ]
    },
    {
        id: 50,
        poster: "/RedWhiteandBlue.jpg",
        title: "Red, White, and Blue",
        director: "Nazrin Choudhury",
        starring: "Brittany Snow, Juliet Donnefield, Redding Munsel",
        synopsis: "Rachel (Brittany Snow) is a single parent living paycheck to paycheck. When an unexpected pregnancy threatens to unravel her already precarious position, she's forced to cross state lines in search of an abortion. As Rachel contemplates the series of events that necessitated this journey and the obstacles placed in her path, we learn a heartbreaking truth that means her life will never be the same again.",
        awards: [
            {
                id: 5001,
                awardName: "LIVE ACTION SHORT FILM",
                awardedTo: "Nazrin Choudhury and Sara McFarlane",
                winner: false
            }
        ]
    },
    {
        id: 51,
        poster: "/HENRYSUGAR.jpg",
        title: "The Wonderful Story of Henry Sugar",
        director: "Wes Anderson",
        starring: "Ralph Fiennes, Benedict Cumberbatch, Dev Patel",
        synopsis: "The Wonderful Story of Henry Sugar: A rich man learns about a guru who can see without using his eyes. He sets out to master the skill in order to cheat at gambling. Extremely faithfully adapted from Roald Dahl’s long short story.",
        awards: [
            {
                id: 5101,
                awardName: "LIVE ACTION SHORT FILM",
                awardedTo: "Wes Anderson and Steven Rales",
                winner: false
            }
        ]
    },
    {
        id: 52,
        poster: "/GUARDIANS.jpg",
        title: "Guardians of the Galaxy Vol. 3",
        director: "",
        starring: "",
        synopsis: "In Marvel Studios 'Guardians of the Galaxy Vol. 3' our beloved band of misfits are looking a bit different these days. Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        awards: [
            {
                id: 5201,
                awardName: "VISUAL EFFECTS",
                awardedTo: "Stephane Ceretti, Alexis Wajsbrot, Guy Williams and Theo Bialek",
                winner: false
            }
        ]
    },
    {
        id: 53,
        poster: "/GODZILLA.jpg",
        title: "Godzilla Minus One",
        director: "Takashi Yamazaki",
        starring: "Ryunosuke Kamiki, Minami Hamabe, Yuki Yamada",
        synopsis: "Japan is already devastated by the war when a new crisis emerges in the form of a giant monster",
        awards: [
            {
                id: 5301,
                awardName: "VISUAL EFFECTS",
                awardedTo: "Takashi Yamazaki, Kiyoko Shibuya, Masaki Takahashi and Tatsuji Nojima",
                winner: false
            }
        ]
    }
]

export default films