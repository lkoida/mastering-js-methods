/**
 * @typedef Tag
 * @type {String}
 * @property {string}
 */

/**
 * @typedef Friend
 * @type {Object}
 * @property {number} id
 * @property {string} firstName
 * @property {string} surname
 * @property {string} greeting
 * @property {string} favoriteFruit
 */

/**
 * @typedef User
 * @type {Object}
 * @property {string} _id
 * @property {number} index
 * @property {string} guid
 * @property {boolean} isActive
 * @property {string} balance
 * @property {string} picture
 * @property {number} age
 * @property {string} eyeColor
 * @property {string} firstName
 * @property {string} surname
 * @property {string} gender
 * @property {string} company
 * @property {string} email
 * @property {string} phone
 * @property {string} address
 * @property {string} about
 * @property {string} registered
 * @property {number} latitude
 * @property {number} longitude
 * @property {Tag[]} tags
 * @property {Friend[]} friends
 * @property {string} greeting
 * @property {string} favoriteFruit
 */

/**
 *
 * @type {User[]} users
 */
export const users = [
  {
    _id: "6609132533c5a8fd7bfa7be6",
    index: 0,
    guid: "c70d603a-c2b7-4cfb-aa0b-ff589c833123",
    isActive: false,
    balance: "$1,213.00",
    picture: "http://placehold.it/32x32",
    age: 32,
    eyeColor: "blue",
    firstName: "Mendoza",
    surname: "Trujillo",
    gender: "male",
    company: "ACUSAGE",
    email: "mendozatrujillo@acusage.com",
    phone: "+1 (912) 548-3236",
    address: "291 Woodside Avenue, Nelson, Mississippi, 9885",
    about:
      "Est esse eiusmod id qui pariatur minim ullamco sint veniam dolore. Exercitation commodo sint reprehenderit minim sint cillum quis. Deserunt culpa reprehenderit cupidatat eu ad aliqua.\r\n",
    registered: "2015-06-28T09:56:54 -03:00",
    latitude: -32.098329,
    longitude: -150.209054,
    tags: [
      "magna",
      "ex",
      "sit",
      "Lorem",
      "deserunt",
      "non",
      "eiusmod",
      "ut",
      "ullamco",
      "dolor",
      "laborum",
      "consequat",
    ],
    friends: [
      {
        id: 0,
        firstName: "Lidia",
        surname: "Pearson",
        greeting: "Hello, Lidia! You have 10 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 1,
        firstName: "Dina",
        surname: "Gibson",
        greeting: "Hello, Dina! You have 3 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 2,
        firstName: "Jaime",
        surname: "Kim",
        greeting: "Hello, Jaime! You have 4 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 3,
        firstName: "Shari",
        surname: "Shields",
        greeting: "Hello, Shari! You have 1 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 4,
        firstName: "Phillips",
        surname: "Guerra",
        greeting: "Hello, Phillips! You have 7 unread messages.",
        favoriteFruit: "apple",
      },
    ],
    greeting: "Hello, Mendoza! You have 10 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "66091325c9ca3a42798248ae",
    index: 1,
    guid: "c97fd89f-10d5-4db5-b65a-3b9c203d6c0b",
    isActive: true,
    balance: "$2,614.18",
    picture: "http://placehold.it/32x32",
    age: 49,
    eyeColor: "green",
    firstName: "Barnett",
    surname: "Odonnell",
    gender: "male",
    company: "KEENGEN",
    email: "barnettodonnell@keengen.com",
    phone: "+1 (973) 440-3351",
    address: "687 Vanderveer Place, Wawona, West Virginia, 3770",
    about:
      "Ad sunt labore culpa exercitation ea laborum voluptate reprehenderit. Voluptate consectetur duis velit id. Eiusmod labore quis est ullamco qui deserunt dolor nulla reprehenderit enim. Proident officia ullamco commodo eiusmod voluptate sint Lorem duis ad aliquip esse fugiat velit pariatur.\r\n",
    registered: "2018-08-17T05:51:30 -03:00",
    latitude: -2.128585,
    longitude: -125.971507,
    tags: [
      "veniam",
      "consectetur",
      "duis",
      "ut",
      "Lorem",
      "reprehenderit",
      "ea",
      "labore",
    ],
    friends: [
      {
        id: 0,
        firstName: "Tonya",
        surname: "Acosta",
        greeting: "Hello, Tonya! You have 10 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 1,
        firstName: "Kirby",
        surname: "Kinney",
        greeting: "Hello, Kirby! You have 9 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 2,
        firstName: "Herminia",
        surname: "Gill",
        greeting: "Hello, Herminia! You have 4 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 3,
        firstName: "Yesenia",
        surname: "Henson",
        greeting: "Hello, Yesenia! You have 4 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 4,
        firstName: "Whitley",
        surname: "Rich",
        greeting: "Hello, Whitley! You have 6 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 5,
        firstName: "Audrey",
        surname: "Sanford",
        greeting: "Hello, Audrey! You have 6 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 6,
        firstName: "Betsy",
        surname: "Carroll",
        greeting: "Hello, Betsy! You have 7 unread messages.",
        favoriteFruit: "apple",
      },
    ],
    greeting: "Hello, Barnett! You have 4 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "66091325e9f857afff8d0f3f",
    index: 2,
    guid: "b969e770-2f67-419d-b02b-3e25be8779fa",
    isActive: true,
    balance: "$1,560.60",
    picture: "http://placehold.it/32x32",
    age: 48,
    eyeColor: "green",
    firstName: "Ashlee",
    surname: "Hubbard",
    gender: "female",
    company: "DOGTOWN",
    email: "ashleehubbard@dogtown.com",
    phone: "+1 (844) 483-3397",
    address: "550 Canda Avenue, Stollings, Alabama, 9193",
    about:
      "Dolore labore dolore duis Lorem elit nisi nisi laborum do. Veniam velit anim culpa reprehenderit ex quis. Anim cillum magna sint sit elit velit aliqua dolore nostrud anim. Nisi excepteur incididunt ut non veniam esse elit ipsum irure. Velit cillum exercitation culpa et. Occaecat nisi eiusmod excepteur culpa excepteur excepteur cillum id nulla sunt.\r\n",
    registered: "2015-04-08T07:13:39 -03:00",
    latitude: 33.455114,
    longitude: 2.540596,
    tags: ["veniam", "adipisicing", "esse", "magna", "exercitation"],
    friends: [
      {
        id: 0,
        firstName: "Anderson",
        surname: "Puckett",
        greeting: "Hello, Anderson! You have 9 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 1,
        firstName: "Traci",
        surname: "Allen",
        greeting: "Hello, Traci! You have 1 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 2,
        firstName: "Blackwell",
        surname: "Rice",
        greeting: "Hello, Blackwell! You have 3 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 3,
        firstName: "Nunez",
        surname: "Baldwin",
        greeting: "Hello, Nunez! You have 2 unread messages.",
        favoriteFruit: "strawberry",
      },
    ],
    greeting: "Hello, Ashlee! You have 3 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "660913251d9c85d13ed2431a",
    index: 3,
    guid: "bd616cdf-5ec7-4a41-92b3-09bb5db7d8cd",
    isActive: false,
    balance: "$3,833.35",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    firstName: "Kathy",
    surname: "Mcgowan",
    gender: "female",
    company: "AQUASURE",
    email: "kathymcgowan@aquasure.com",
    phone: "+1 (860) 480-3804",
    address: "374 Miami Court, Bridgetown, Arkansas, 860",
    about:
      "Pariatur quis proident ad nisi ullamco ex ut fugiat dolor laboris do laborum. Aliquip aliqua ut laborum occaecat incididunt incididunt deserunt. Qui ad minim commodo ad deserunt est voluptate eu officia officia cupidatat.\r\n",
    registered: "2017-05-10T07:56:18 -03:00",
    latitude: -42.354589,
    longitude: 93.27984,
    tags: [
      "culpa",
      "aliqua",
      "ut",
      "officia",
      "et",
      "officia",
      "tempor",
      "culpa",
      "mollit",
      "commodo",
    ],
    friends: [
      {
        id: 0,
        firstName: "Strickland",
        surname: "Pickett",
        greeting: "Hello, Strickland! You have 3 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 1,
        firstName: "Noelle",
        surname: "Williams",
        greeting: "Hello, Noelle! You have 3 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 2,
        firstName: "Wilda",
        surname: "Nichols",
        greeting: "Hello, Wilda! You have 8 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 3,
        firstName: "Francesca",
        surname: "Mcleod",
        greeting: "Hello, Francesca! You have 1 unread messages.",
        favoriteFruit: "strawberry",
      },
    ],
    greeting: "Hello, Kathy! You have 1 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "660913259f46114d2b8cb4f0",
    index: 4,
    guid: "2065b80e-0f55-4b71-8830-89b626ce2435",
    isActive: true,
    balance: "$2,519.75",
    picture: "http://placehold.it/32x32",
    age: 26,
    eyeColor: "green",
    firstName: "Tammi",
    surname: "Jennings",
    gender: "female",
    company: "VANTAGE",
    email: "tammijennings@vantage.com",
    phone: "+1 (882) 560-3882",
    address: "546 Henderson Walk, Weeksville, Louisiana, 8489",
    about:
      "Exercitation nostrud exercitation enim Lorem nisi cupidatat tempor et commodo est. Eu labore enim occaecat magna do laborum veniam est officia est sint et. Sint pariatur incididunt fugiat duis id officia minim non Lorem. Culpa fugiat deserunt Lorem esse sit nisi ullamco ut culpa elit ea sint. Commodo in quis amet veniam est in. Proident adipisicing elit cupidatat ad esse qui est est magna proident. Ea nisi Lorem ea dolor enim reprehenderit minim anim anim Lorem do aliqua et ad.\r\n",
    registered: "2015-02-21T09:06:13 -02:00",
    latitude: -45.171273,
    longitude: 154.505274,
    tags: ["sunt", "officia", "quis"],
    friends: [
      {
        id: 0,
        firstName: "Shawn",
        surname: "Orr",
        greeting: "Hello, Shawn! You have 2 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 1,
        firstName: "Molina",
        surname: "Galloway",
        greeting: "Hello, Molina! You have 4 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 2,
        firstName: "Cooper",
        surname: "Barnett",
        greeting: "Hello, Cooper! You have 9 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 3,
        firstName: "Lara",
        surname: "Houston",
        greeting: "Hello, Lara! You have 3 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 4,
        firstName: "Nash",
        surname: "Fowler",
        greeting: "Hello, Nash! You have 7 unread messages.",
        favoriteFruit: "strawberry",
      },
    ],
    greeting: "Hello, Tammi! You have 2 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "6609132594433fbad9050daf",
    index: 5,
    guid: "416e9d48-803f-43a4-ae28-3f76c8581b61",
    isActive: false,
    balance: "$3,712.26",
    picture: "http://placehold.it/32x32",
    age: 31,
    eyeColor: "blue",
    firstName: "Bartlett",
    surname: "Rosales",
    gender: "male",
    company: "ZEDALIS",
    email: "bartlettrosales@zedalis.com",
    phone: "+1 (999) 403-2469",
    address: "668 Forest Place, Cedarville, Wisconsin, 9359",
    about:
      "Velit amet magna anim voluptate eiusmod amet anim cupidatat esse. Veniam consequat sint laboris pariatur ut excepteur aliquip. Adipisicing id cupidatat laboris id. Deserunt ut in mollit dolore ut anim.\r\n",
    registered: "2023-11-22T08:56:36 -02:00",
    latitude: -71.242242,
    longitude: 9.659532,
    tags: [
      "minim",
      "aute",
      "esse",
      "laboris",
      "quis",
      "sit",
      "id",
      "sunt",
      "officia",
    ],
    friends: [
      {
        id: 0,
        firstName: "Compton",
        surname: "Hyde",
        greeting: "Hello, Compton! You have 9 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 1,
        firstName: "Kate",
        surname: "Gross",
        greeting: "Hello, Kate! You have 3 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 2,
        firstName: "Dorsey",
        surname: "Bryan",
        greeting: "Hello, Dorsey! You have 1 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 3,
        firstName: "Cynthia",
        surname: "Delgado",
        greeting: "Hello, Cynthia! You have 10 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 4,
        firstName: "Miller",
        surname: "Baxter",
        greeting: "Hello, Miller! You have 6 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 5,
        firstName: "Chandler",
        surname: "Nicholson",
        greeting: "Hello, Chandler! You have 9 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 6,
        firstName: "Dawson",
        surname: "Powell",
        greeting: "Hello, Dawson! You have 3 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 7,
        firstName: "Parrish",
        surname: "Hernandez",
        greeting: "Hello, Parrish! You have 1 unread messages.",
        favoriteFruit: "apple",
      },
    ],
    greeting: "Hello, Bartlett! You have 9 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "660913252a0a5bcc9523630b",
    index: 6,
    guid: "a4a1a9ba-0331-4b4f-b045-86b9c72f16a1",
    isActive: false,
    balance: "$2,566.47",
    picture: "http://placehold.it/32x32",
    age: 33,
    eyeColor: "green",
    firstName: "Sutton",
    surname: "Walls",
    gender: "male",
    company: "MALATHION",
    email: "suttonwalls@malathion.com",
    phone: "+1 (963) 410-3768",
    address: "419 Herbert Street, Cascades, Missouri, 137",
    about:
      "Occaecat culpa nostrud incididunt voluptate mollit sit nisi dolor dolor ut id culpa. Ipsum ad elit consectetur consectetur esse pariatur minim ut culpa. Dolore non tempor sunt et laborum labore.\r\n",
    registered: "2017-12-26T05:50:07 -02:00",
    latitude: -25.521592,
    longitude: -177.733203,
    tags: [
      "consectetur",
      "culpa",
      "id",
      "ea",
      "occaecat",
      "non",
      "nisi",
      "quis",
      "minim",
      "nulla",
      "incididunt",
    ],
    friends: [
      {
        id: 0,
        firstName: "Marlene",
        surname: "Zimmerman",
        greeting: "Hello, Marlene! You have 1 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 1,
        firstName: "Levine",
        surname: "Washington",
        greeting: "Hello, Levine! You have 10 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 2,
        firstName: "Garrison",
        surname: "Sanders",
        greeting: "Hello, Garrison! You have 9 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 3,
        firstName: "Kerri",
        surname: "Foster",
        greeting: "Hello, Kerri! You have 8 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 4,
        firstName: "Angel",
        surname: "Woodard",
        greeting: "Hello, Angel! You have 2 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 5,
        firstName: "Lucille",
        surname: "Campbell",
        greeting: "Hello, Lucille! You have 2 unread messages.",
        favoriteFruit: "strawberry",
      },
    ],
    greeting: "Hello, Sutton! You have 5 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "66091325b2045cdc12393f6e",
    index: 7,
    guid: "63ed10df-68b1-4387-abed-f2e8abda872a",
    isActive: false,
    balance: "$2,833.84",
    picture: "http://placehold.it/32x32",
    age: 20,
    eyeColor: "green",
    firstName: "Hyde",
    surname: "Mayer",
    gender: "male",
    company: "XELEGYL",
    email: "hydemayer@xelegyl.com",
    phone: "+1 (801) 548-2400",
    address: "701 Grand Street, Neibert, Delaware, 3602",
    about:
      "Cupidatat dolore ea irure sit sit Lorem. Nulla in anim minim proident nulla consectetur veniam dolor quis laboris. Incididunt sit in minim cillum cupidatat cupidatat. Incididunt irure ea irure cupidatat ad Lorem. Irure eu laborum officia minim nulla laborum eu non aliqua sunt. Enim enim ut labore duis magna aliquip in adipisicing mollit ex est et est. Dolor nostrud aute laboris reprehenderit commodo magna culpa id.\r\n",
    registered: "2020-05-06T10:00:19 -03:00",
    latitude: -26.838104,
    longitude: 114.857387,
    tags: ["minim", "est", "sunt", "duis", "elit", "cillum", "in", "ut", "non"],
    friends: [
      {
        id: 0,
        firstName: "Thelma",
        surname: "Mejia",
        greeting: "Hello, Thelma! You have 3 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 1,
        firstName: "Elba",
        surname: "Stevens",
        greeting: "Hello, Elba! You have 6 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 2,
        firstName: "Lindsay",
        surname: "Stanton",
        greeting: "Hello, Lindsay! You have 3 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 3,
        firstName: "Caldwell",
        surname: "Mccormick",
        greeting: "Hello, Caldwell! You have 8 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 4,
        firstName: "Rosalie",
        surname: "Barlow",
        greeting: "Hello, Rosalie! You have 7 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 5,
        firstName: "Sloan",
        surname: "Hopper",
        greeting: "Hello, Sloan! You have 1 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 6,
        firstName: "Irma",
        surname: "Morrow",
        greeting: "Hello, Irma! You have 4 unread messages.",
        favoriteFruit: "strawberry",
      },
    ],
    greeting: "Hello, Hyde! You have 4 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "66091325b5f0cb3067764622",
    index: 8,
    guid: "c629cc4d-9ffe-48f8-b57b-135596a74cd1",
    isActive: true,
    balance: "$3,100.95",
    picture: "http://placehold.it/32x32",
    age: 32,
    eyeColor: "brown",
    firstName: "Hood",
    surname: "Rivas",
    gender: "male",
    company: "POWERNET",
    email: "hoodrivas@powernet.com",
    phone: "+1 (954) 499-3145",
    address: "599 Kensington Street, Carlos, Rhode Island, 7173",
    about:
      "Id id duis magna aute et non enim do qui culpa sint. Est sint ad adipisicing cillum consequat. Deserunt dolore occaecat exercitation exercitation reprehenderit excepteur cupidatat. Laboris sint ad veniam aliquip. Reprehenderit veniam nostrud enim eiusmod qui aute sit excepteur aute minim ex est. Occaecat veniam sit nisi magna do est eiusmod amet eiusmod ut.\r\n",
    registered: "2018-05-01T02:49:39 -03:00",
    latitude: -31.598594,
    longitude: -99.059386,
    tags: ["consequat", "proident", "non", "eiusmod", "velit", "do", "fugiat"],
    friends: [
      {
        id: 0,
        firstName: "Christie",
        surname: "Johns",
        greeting: "Hello, Christie! You have 6 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 1,
        firstName: "Atkinson",
        surname: "Salazar",
        greeting: "Hello, Atkinson! You have 2 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 2,
        firstName: "Decker",
        surname: "Velazquez",
        greeting: "Hello, Decker! You have 10 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 3,
        firstName: "Julie",
        surname: "Warren",
        greeting: "Hello, Julie! You have 8 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 4,
        firstName: "Vonda",
        surname: "Preston",
        greeting: "Hello, Vonda! You have 2 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 5,
        firstName: "Billie",
        surname: "Shaw",
        greeting: "Hello, Billie! You have 5 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 6,
        firstName: "Atkins",
        surname: "Chambers",
        greeting: "Hello, Atkins! You have 2 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 7,
        firstName: "Acevedo",
        surname: "Rodriguez",
        greeting: "Hello, Acevedo! You have 6 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 8,
        firstName: "Muriel",
        surname: "Bond",
        greeting: "Hello, Muriel! You have 4 unread messages.",
        favoriteFruit: "apple",
      },
    ],
    greeting: "Hello, Hood! You have 10 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "66091325310a925aac5d367d",
    index: 9,
    guid: "6ce5190e-dfd4-4fa3-b12f-c1aa4ad58fae",
    isActive: true,
    balance: "$1,830.59",
    picture: "http://placehold.it/32x32",
    age: 48,
    eyeColor: "brown",
    firstName: "Beasley",
    surname: "Hurley",
    gender: "male",
    company: "APEXTRI",
    email: "beasleyhurley@apextri.com",
    phone: "+1 (820) 414-3560",
    address: "519 Bowne Street, Lisco, South Carolina, 3080",
    about:
      "Et consequat sit dolor do eiusmod duis ex. Voluptate incididunt pariatur labore elit pariatur do labore officia qui est laborum pariatur non. Irure aliqua eiusmod ad qui officia sint aliquip adipisicing aute reprehenderit est ea. Incididunt nulla proident duis aliquip nisi aliqua dolor officia pariatur ut laboris. Irure amet occaecat sit mollit irure in.\r\n",
    registered: "2018-08-08T12:47:00 -03:00",
    latitude: 20.127999,
    longitude: -50.207492,
    tags: [
      "qui",
      "consectetur",
      "ex",
      "mollit",
      "voluptate",
      "eiusmod",
      "dolore",
      "consequat",
      "non",
      "enim",
      "do",
      "in",
    ],
    friends: [
      {
        id: 0,
        firstName: "Parker",
        surname: "Larsen",
        greeting: "Hello, Parker! You have 4 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 1,
        firstName: "Leon",
        surname: "Dorsey",
        greeting: "Hello, Leon! You have 8 unread messages.",
        favoriteFruit: "apple",
      },
      {
        id: 2,
        firstName: "Danielle",
        surname: "Castaneda",
        greeting: "Hello, Danielle! You have 1 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 3,
        firstName: "Rowe",
        surname: "Macdonald",
        greeting: "Hello, Rowe! You have 1 unread messages.",
        favoriteFruit: "banana",
      },
      {
        id: 4,
        firstName: "Hess",
        surname: "Byers",
        greeting: "Hello, Hess! You have 8 unread messages.",
        favoriteFruit: "strawberry",
      },
      {
        id: 5,
        firstName: "Barrett",
        surname: "Brewer",
        greeting: "Hello, Barrett! You have 5 unread messages.",
        favoriteFruit: "banana",
      },
    ],
    greeting: "Hello, Beasley!",
    favoriteFruit: "strawberry",
  },
];