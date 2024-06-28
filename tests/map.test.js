import {describe, it, beforeEach} from "node:test";
import assert from "node:assert";
import {users, famousInventors, people} from "../data/index.js";
import {
    mapBalance,
    mapTagsAndFriends,
    getFirstLastNameOfInventors,
    peopleFlippedFirstLastName,
    getArrayOfTheFirstNames,
    getArrayOfTheLastNames,
    getFirstLastNameAsArrayOfObjects,
    getArrayOfFirstLastName,
    getArrayOfUpperCased,
    getArrayOfLowerCased,
    getArrayOfFirstLastLength,
    getArrayOfFirstLetterFromPersonLastName,
    getArrayOfFirstLetterFromPersonFirstName,
    getArrayOfLengthForFirstAndLastName,
    getArrayOfReversedNames,
    getArrayOfInitials,
    getArrayOfNamesLastNameCapitalized,
    getArrayOfNamesFirstNameCapitalized,
    getArrayOfNameReversedOrder,
    getArrayWithNameAndLength,
    getArrayOfTheFullNamesAndInitials,
    getArrayOfLastNameUpperAndFirstNameLower,
    getArrayOfNamesWithTheFirstNameInRoundBrackets,
} from "../exercises/array-collection/map.js";

describe("map", () => {

    describe("map-users", () => {
        let mockUsers;
        beforeEach(() => {
            mockUsers = JSON.parse(JSON.stringify(users));
        });
        it("mapBalance", () => {
            const mappedUsersBalance = mapBalance(mockUsers);

            mappedUsersBalance.forEach((user) => {
                assert.strictEqual(user.balance.symbol, "$");
                assert.strictEqual(typeof user.balance.amount, "number");
            });
        });

        it("mapTagsAndFriends", () => {
            const mappedTagsAndFriends = mapTagsAndFriends(mockUsers);
            mappedTagsAndFriends.forEach((user, index) => {
                assert.strictEqual(typeof user.tags, "number");
                assert.strictEqual(typeof user.friends, "number");

                assert.strictEqual(users[index].tags.length, user.tags);
                assert.strictEqual(users[index].friends.length, user.friends);
            });
        });
    })

    describe('mapped-inventors', () => {
        it("getFirstLastNameOfInventors", () => {
        });
        const expected = ["Isaac Newton", "Marie Curie", "Johannes Kepler", "Galileo Galilei", "Max Planck", "Albert Einstein", "Hanna Hammarström", "Lise Meitner", "Nicolaus Copernicus", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode",];
        const inventorsNames = getFirstLastNameOfInventors(famousInventors);

        assert.deepStrictEqual(expected, inventorsNames);
    });

    describe('mapped-people', () => {
        it("peopleFlippedFirstLastName", () => {
            const expected = ["Sandra, Bernhard", "Erin, Bethea", "Carl, Becker", "Lloyd, Bentsen", "Samuel, Beckett", "William, Blake", "Ric, Berger", "Mick, Beddoes", "Ludwig, Beethoven", "Hilaire, Belloc", "Menachem, Begin", "Saul, Bellow", "Robert, Benchley", "Robert, Blair", "Peter, Benenson", "Walter, Benjamin", "Irving, Berlin", "Tony, Benn", "Leana, Benson", "Silas, Bent", "Milton, Berle", "Halle, Berry", "Steve, Biko", "Glenn, Beck", "Ingmar, Bergman", "Elk, Black", "Luciano, Berio", "Eric, Berne", "Yogi, Berra", "Wendell, Berry", "Aneurin, Bevan", "David, Ben-Gurion", "Ken, Bevel", "Joseph, Biden", "Chester, Bennington", "Ambrose, Bierce", "Josh, Billings", "Augustine, Birrell", "Tony, Blair", "Henry, Beecher", "Frank, Biondo",];
            const actual = peopleFlippedFirstLastName(people);

            assert.deepStrictEqual(expected, actual);
        });

        it("getArrayOfTheFirstNames", () => {
            const expected = ['Sandra', 'Erin', 'Carl', 'Lloyd', 'Samuel', 'William', 'Ric', 'Mick', 'Ludwig', 'Hilaire', 'Menachem', 'Saul', 'Robert', 'Robert', 'Peter', 'Walter', 'Irving', 'Tony', 'Leana', 'Silas', 'Milton', 'Halle', 'Steve', 'Glenn', 'Ingmar', 'Elk', 'Luciano', 'Eric', 'Yogi', 'Wendell', 'Aneurin', 'David', 'Ken', 'Joseph', 'Chester', 'Ambrose', 'Josh', 'Augustine', 'Tony', 'Henry', 'Frank']
            const result = getArrayOfTheFirstNames(people)

            assert.deepStrictEqual(result, expected)
        })

        it("getArrayOfTheLastNames", () => {
            const expected = ['Bernhard', 'Bethea', 'Becker', 'Bentsen', 'Beckett', 'Blake', 'Berger', 'Beddoes', 'Beethoven', 'Belloc', 'Begin', 'Bellow', 'Benchley', 'Blair', 'Benenson', 'Benjamin', 'Berlin', 'Benn', 'Benson', 'Bent', 'Berle', 'Berry', 'Biko', 'Beck', 'Bergman', 'Black', 'Berio', 'Berne', 'Berra', 'Berry', 'Bevan', 'Ben-Gurion', 'Bevel', 'Biden', 'Bennington', 'Bierce', 'Billings', 'Birrell', 'Blair', 'Beecher', 'Biondo']
            const result = getArrayOfTheLastNames(people)

            assert.deepStrictEqual(result, expected)
        })

        it("getFirstLastNameAsArrayOfObjects", () => {
            const expect = [{
                "firstName": "Sandra", "lastName": "Bernhard"
            }, {
                "firstName": "Erin", "lastName": "Bethea"
            }, {
                "firstName": "Carl", "lastName": "Becker"
            }, {
                "firstName": "Lloyd", "lastName": "Bentsen"
            }, {
                "firstName": "Samuel", "lastName": "Beckett"
            }, {
                "firstName": "William", "lastName": "Blake"
            }, {
                "firstName": "Ric", "lastName": "Berger"
            }, {
                "firstName": "Mick", "lastName": "Beddoes"
            }, {
                "firstName": "Ludwig", "lastName": "Beethoven"
            }, {
                "firstName": "Hilaire", "lastName": "Belloc"
            }, {
                "firstName": "Menachem", "lastName": "Begin"
            }, {
                "firstName": "Saul", "lastName": "Bellow"
            }, {
                "firstName": "Robert", "lastName": "Benchley"
            }, {
                "firstName": "Robert", "lastName": "Blair"
            }, {
                "firstName": "Peter", "lastName": "Benenson"
            }, {
                "firstName": "Walter", "lastName": "Benjamin"
            }, {
                "firstName": "Irving", "lastName": "Berlin"
            }, {
                "firstName": "Tony", "lastName": "Benn"
            }, {
                "firstName": "Leana", "lastName": "Benson"
            }, {
                "firstName": "Silas", "lastName": "Bent"
            }, {
                "firstName": "Milton", "lastName": "Berle"
            }, {
                "firstName": "Halle", "lastName": "Berry"
            }, {
                "firstName": "Steve", "lastName": "Biko"
            }, {
                "firstName": "Glenn", "lastName": "Beck"
            }, {
                "firstName": "Ingmar", "lastName": "Bergman"
            }, {
                "firstName": "Elk", "lastName": "Black"
            }, {
                "firstName": "Luciano", "lastName": "Berio"
            }, {
                "firstName": "Eric", "lastName": "Berne"
            }, {
                "firstName": "Yogi", "lastName": "Berra"
            }, {
                "firstName": "Wendell", "lastName": "Berry"
            }, {
                "firstName": "Aneurin", "lastName": "Bevan"
            }, {
                "firstName": "David", "lastName": "Ben-Gurion"
            }, {
                "firstName": "Ken", "lastName": "Bevel"
            }, {
                "firstName": "Joseph", "lastName": "Biden"
            }, {
                "firstName": "Chester", "lastName": "Bennington"
            }, {
                "firstName": "Ambrose", "lastName": "Bierce"
            }, {
                "firstName": "Josh", "lastName": "Billings"
            }, {
                "firstName": "Augustine", "lastName": "Birrell"
            }, {
                "firstName": "Tony", "lastName": "Blair"
            }, {
                "firstName": "Henry", "lastName": "Beecher"
            }, {
                "firstName": "Frank", "lastName": "Biondo"
            }]
            const result = getFirstLastNameAsArrayOfObjects(people)
            assert.deepStrictEqual(result, expect)
        })

        it("getArrayOfFirstLastName", () => {
            const expect = ["Sandra Bernhard", "Erin Bethea", "Carl Becker", "Lloyd Bentsen", "Samuel Beckett", "William Blake", "Ric Berger", "Mick Beddoes", "Ludwig Beethoven", "Hilaire Belloc", "Menachem Begin", "Saul Bellow", "Robert Benchley", "Robert Blair", "Peter Benenson", "Walter Benjamin", "Irving Berlin", "Tony Benn", "Leana Benson", "Silas Bent", "Milton Berle", "Halle Berry", "Steve Biko", "Glenn Beck", "Ingmar Bergman", "Elk Black", "Luciano Berio", "Eric Berne", "Yogi Berra", "Wendell Berry", "Aneurin Bevan", "David Ben-Gurion", "Ken Bevel", "Joseph Biden", "Chester Bennington", "Ambrose Bierce", "Josh Billings", "Augustine Birrell", "Tony Blair", "Henry Beecher", "Frank Biondo",]
            const result = getArrayOfFirstLastName(people)
            assert.deepStrictEqual(result, expect)
        })

        it("getArrayOfUpperCased", () => {
            const expect = ["BERNHARD, SANDRA", "BETHEA, ERIN", "BECKER, CARL", "BENTSEN, LLOYD", "BECKETT, SAMUEL", "BLAKE, WILLIAM", "BERGER, RIC", "BEDDOES, MICK", "BEETHOVEN, LUDWIG", "BELLOC, HILAIRE", "BEGIN, MENACHEM", "BELLOW, SAUL", "BENCHLEY, ROBERT", "BLAIR, ROBERT", "BENENSON, PETER", "BENJAMIN, WALTER", "BERLIN, IRVING", "BENN, TONY", "BENSON, LEANA", "BENT, SILAS", "BERLE, MILTON", "BERRY, HALLE", "BIKO, STEVE", "BECK, GLENN", "BERGMAN, INGMAR", "BLACK, ELK", "BERIO, LUCIANO", "BERNE, ERIC", "BERRA, YOGI", "BERRY, WENDELL", "BEVAN, ANEURIN", "BEN-GURION, DAVID", "BEVEL, KEN", "BIDEN, JOSEPH", "BENNINGTON, CHESTER", "BIERCE, AMBROSE", "BILLINGS, JOSH", "BIRRELL, AUGUSTINE", "BLAIR, TONY", "BEECHER, HENRY", "BIONDO, FRANK",]
            const result = getArrayOfUpperCased(people)
            assert.deepStrictEqual(result, expect)
        })

        it("getArrayOfLowerCased", () => {
            const expect = ["bernhard, sandra", "bethea, erin", "becker, carl", "bentsen, lloyd", "beckett, samuel", "blake, william", "berger, ric", "beddoes, mick", "beethoven, ludwig", "belloc, hilaire", "begin, menachem", "bellow, saul", "benchley, robert", "blair, robert", "benenson, peter", "benjamin, walter", "berlin, irving", "benn, tony", "benson, leana", "bent, silas", "berle, milton", "berry, halle", "biko, steve", "beck, glenn", "bergman, ingmar", "black, elk", "berio, luciano", "berne, eric", "berra, yogi", "berry, wendell", "bevan, aneurin", "ben-gurion, david", "bevel, ken", "biden, joseph", "bennington, chester", "bierce, ambrose", "billings, josh", "birrell, augustine", "blair, tony", "beecher, henry", "biondo, frank",]
            const result = getArrayOfLowerCased(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfFirstLastLength", () => {
            const expect = [16, 12, 12, 14, 15, 14, 11, 13, 17, 15, 15, 12, 16, 13, 15, 16, 14, 10, 13, 11, 13, 12, 11, 11, 15, 10, 14, 11, 11, 14, 14, 17, 10, 13, 19, 15, 14, 18, 11, 14, 13]
            const result = getArrayOfFirstLastLength(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfFirstLetterFromPersonLastName", () => {
            const expect = ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
            const result = getArrayOfFirstLetterFromPersonLastName(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfFirstLetterFromPersonFirstName", () => {
            const expect = ['S', 'E', 'C', 'L', 'S', 'W', 'R', 'M', 'L', 'H', 'M', 'S', 'R', 'R', 'P', 'W', 'I', 'T', 'L', 'S', 'M', 'H', 'S', 'G', 'I', 'E', 'L', 'E', 'Y', 'W', 'A', 'D', 'K', 'J', 'C', 'A', 'J', 'A', 'T', 'H', 'F']
            const result = getArrayOfFirstLetterFromPersonFirstName(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfLengthForFirstAndLastName", () => {
            const expect = [{
                "firstNameLength": 6, "lastNameLength": 8
            }, {
                "firstNameLength": 4, "lastNameLength": 6
            }, {
                "firstNameLength": 4, "lastNameLength": 6
            }, {
                "firstNameLength": 5, "lastNameLength": 7
            }, {
                "firstNameLength": 6, "lastNameLength": 7
            }, {
                "firstNameLength": 7, "lastNameLength": 5
            }, {
                "firstNameLength": 3, "lastNameLength": 6
            }, {
                "firstNameLength": 4, "lastNameLength": 7
            }, {
                "firstNameLength": 6, "lastNameLength": 9
            }, {
                "firstNameLength": 7, "lastNameLength": 6
            }, {
                "firstNameLength": 8, "lastNameLength": 5
            }, {
                "firstNameLength": 4, "lastNameLength": 6
            }, {
                "firstNameLength": 6, "lastNameLength": 8
            }, {
                "firstNameLength": 6, "lastNameLength": 5
            }, {
                "firstNameLength": 5, "lastNameLength": 8
            }, {
                "firstNameLength": 6, "lastNameLength": 8
            }, {
                "firstNameLength": 6, "lastNameLength": 6
            }, {
                "firstNameLength": 4, "lastNameLength": 4
            }, {
                "firstNameLength": 5, "lastNameLength": 6
            }, {
                "firstNameLength": 5, "lastNameLength": 4
            }, {
                "firstNameLength": 6, "lastNameLength": 5
            }, {
                "firstNameLength": 5, "lastNameLength": 5
            }, {
                "firstNameLength": 5, "lastNameLength": 4
            }, {
                "firstNameLength": 5, "lastNameLength": 4
            }, {
                "firstNameLength": 6, "lastNameLength": 7
            }, {
                "firstNameLength": 3, "lastNameLength": 5
            }, {
                "firstNameLength": 7, "lastNameLength": 5
            }, {
                "firstNameLength": 4, "lastNameLength": 5
            }, {
                "firstNameLength": 4, "lastNameLength": 5
            }, {
                "firstNameLength": 7, "lastNameLength": 5
            }, {
                "firstNameLength": 7, "lastNameLength": 5
            }, {
                "firstNameLength": 5, "lastNameLength": 10
            }, {
                "firstNameLength": 3, "lastNameLength": 5
            }, {
                "firstNameLength": 6, "lastNameLength": 5
            }, {
                "firstNameLength": 7, "lastNameLength": 10
            }, {
                "firstNameLength": 7, "lastNameLength": 6
            }, {
                "firstNameLength": 4, "lastNameLength": 8
            }, {
                "firstNameLength": 9, "lastNameLength": 7
            }, {
                "firstNameLength": 4, "lastNameLength": 5
            }, {
                "firstNameLength": 5, "lastNameLength": 7
            }, {
                "firstNameLength": 5, "lastNameLength": 6
            }]
            const result = getArrayOfLengthForFirstAndLastName(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfReversedNames", () => {
            const expect = ["ardnaS ,drahnreB", "nirE ,aehteB", "lraC ,rekceB", "dyolL ,nestneB", "leumaS ,ttekceB", "mailliW ,ekalB", "ciR ,regreB", "kciM ,seoddeB", "giwduL ,nevohteeB", "erialiH ,colleB", "mehcaneM ,nigeB", "luaS ,wolleB", "treboR ,yelhcneB", "treboR ,rialB", "reteP ,nosneneB", "retlaW ,nimajneB", "gnivrI ,nilreB", "ynoT ,nneB", "anaeL ,nosneB", "saliS ,tneB", "notliM ,elreB", "ellaH ,yrreB", "evetS ,okiB", "nnelG ,kceB", "ramgnI ,namgreB", "klE ,kcalB", "onaicuL ,oireB", "cirE ,enreB", "igoY ,arreB", "lledneW ,yrreB", "niruenA ,naveB", "divaD ,noiruG-neB", "neK ,leveB", "hpesoJ ,nediB", "retsehC ,notgninneB", "esorbmA ,ecreiB", "hsoJ ,sgnilliB", "enitsuguA ,llerriB", "ynoT ,rialB", "yrneH ,rehceeB", "knarF ,odnoiB"]
            const result = getArrayOfReversedNames(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfInitials", () => {
            const expect = ["S.B.", "E.B.", "C.B.", "L.B.", "S.B.", "W.B.", "R.B.", "M.B.", "L.B.", "H.B.", "M.B.", "S.B.", "R.B.", "R.B.", "P.B.", "W.B.", "I.B.", "T.B.", "L.B.", "S.B.", "M.B.", "H.B.", "S.B.", "G.B.", "I.B.", "E.B.", "L.B.", "E.B.", "Y.B.", "W.B.", "A.B.", "D.B.", "K.B.", "J.B.", "C.B.", "A.B.", "J.B.", "A.B.", "T.B.", "H.B.", "F.B."]
            const result = getArrayOfInitials(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfNamesLastNameCapitalized", () => {
            const expect = ['BERNHARD, Sandra', 'BETHEA, Erin', 'BECKER, Carl', 'BENTSEN, Lloyd', 'BECKETT, Samuel', 'BLAKE, William', 'BERGER, Ric', 'BEDDOES, Mick', 'BEETHOVEN, Ludwig', 'BELLOC, Hilaire', 'BEGIN, Menachem', 'BELLOW, Saul', 'BENCHLEY, Robert', 'BLAIR, Robert', 'BENENSON, Peter', 'BENJAMIN, Walter', 'BERLIN, Irving', 'BENN, Tony', 'BENSON, Leana', 'BENT, Silas', 'BERLE, Milton', 'BERRY, Halle', 'BIKO, Steve', 'BECK, Glenn', 'BERGMAN, Ingmar', 'BLACK, Elk', 'BERIO, Luciano', 'BERNE, Eric', 'BERRA, Yogi', 'BERRY, Wendell', 'BEVAN, Aneurin', 'BEN-GURION, David', 'BEVEL, Ken', 'BIDEN, Joseph', 'BENNINGTON, Chester', 'BIERCE, Ambrose', 'BILLINGS, Josh', 'BIRRELL, Augustine', 'BLAIR, Tony', 'BEECHER, Henry', 'BIONDO, Frank']
            const result = getArrayOfNamesLastNameCapitalized(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfNamesFirstNameCapitalized", () => {
            const expect = ['Bernhard, SANDRA', 'Bethea, ERIN', 'Becker, CARL', 'Bentsen, LLOYD', 'Beckett, SAMUEL', 'Blake, WILLIAM', 'Berger, RIC', 'Beddoes, MICK', 'Beethoven, LUDWIG', 'Belloc, HILAIRE', 'Begin, MENACHEM', 'Bellow, SAUL', 'Benchley, ROBERT', 'Blair, ROBERT', 'Benenson, PETER', 'Benjamin, WALTER', 'Berlin, IRVING', 'Benn, TONY', 'Benson, LEANA', 'Bent, SILAS', 'Berle, MILTON', 'Berry, HALLE', 'Biko, STEVE', 'Beck, GLENN', 'Bergman, INGMAR', 'Black, ELK', 'Berio, LUCIANO', 'Berne, ERIC', 'Berra, YOGI', 'Berry, WENDELL', 'Bevan, ANEURIN', 'Ben-Gurion, DAVID', 'Bevel, KEN', 'Biden, JOSEPH', 'Bennington, CHESTER', 'Bierce, AMBROSE', 'Billings, JOSH', 'Birrell, AUGUSTINE', 'Blair, TONY', 'Beecher, HENRY', 'Biondo, FRANK']
            const result = getArrayOfNamesFirstNameCapitalized(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfNameReversedOrder", () => {
            const expect = ['Sandra Bernhard', 'Erin Bethea', 'Carl Becker', 'Lloyd Bentsen', 'Samuel Beckett', 'William Blake', 'Ric Berger', 'Mick Beddoes', 'Ludwig Beethoven', 'Hilaire Belloc', 'Menachem Begin', 'Saul Bellow', 'Robert Benchley', 'Robert Blair', 'Peter Benenson', 'Walter Benjamin', 'Irving Berlin', 'Tony Benn', 'Leana Benson', 'Silas Bent', 'Milton Berle', 'Halle Berry', 'Steve Biko', 'Glenn Beck', 'Ingmar Bergman', 'Elk Black', 'Luciano Berio', 'Eric Berne', 'Yogi Berra', 'Wendell Berry', 'Aneurin Bevan', 'David Ben-Gurion', 'Ken Bevel', 'Joseph Biden', 'Chester Bennington', 'Ambrose Bierce', 'Josh Billings', 'Augustine Birrell', 'Tony Blair', 'Henry Beecher', 'Frank Biondo']
            const result = getArrayOfNameReversedOrder(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayWithNameAndLength", () => {
            const expect = ['Bernhard, Sandra (16)', 'Bethea, Erin (12)', 'Becker, Carl (12)', 'Bentsen, Lloyd (14)', 'Beckett, Samuel (15)', 'Blake, William (14)', 'Berger, Ric (11)', 'Beddoes, Mick (13)', 'Beethoven, Ludwig (17)', 'Belloc, Hilaire (15)', 'Begin, Menachem (15)', 'Bellow, Saul (12)', 'Benchley, Robert (16)', 'Blair, Robert (13)', 'Benenson, Peter (15)', 'Benjamin, Walter (16)', 'Berlin, Irving (14)', 'Benn, Tony (10)', 'Benson, Leana (13)', 'Bent, Silas (11)', 'Berle, Milton (13)', 'Berry, Halle (12)', 'Biko, Steve (11)', 'Beck, Glenn (11)', 'Bergman, Ingmar (15)', 'Black, Elk (10)', 'Berio, Luciano (14)', 'Berne, Eric (11)', 'Berra, Yogi (11)', 'Berry, Wendell (14)', 'Bevan, Aneurin (14)', 'Ben-Gurion, David (17)', 'Bevel, Ken (10)', 'Biden, Joseph (13)', 'Bennington, Chester (19)', 'Bierce, Ambrose (15)', 'Billings, Josh (14)', 'Birrell, Augustine (18)', 'Blair, Tony (11)', 'Beecher, Henry (14)', 'Biondo, Frank (13)']
            const result = getArrayWithNameAndLength(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfTheFullNamesAndInitials", () => {
            const expect = [{
                "fullName": "Bernhard, Sandra", "initials": "S.B."
            }, {
                "fullName": "Bethea, Erin", "initials": "E.B."
            }, {
                "fullName": "Becker, Carl", "initials": "C.B."
            }, {
                "fullName": "Bentsen, Lloyd", "initials": "L.B."
            }, {
                "fullName": "Beckett, Samuel", "initials": "S.B."
            }, {
                "fullName": "Blake, William", "initials": "W.B."
            }, {
                "fullName": "Berger, Ric", "initials": "R.B."
            }, {
                "fullName": "Beddoes, Mick", "initials": "M.B."
            }, {
                "fullName": "Beethoven, Ludwig", "initials": "L.B."
            }, {
                "fullName": "Belloc, Hilaire", "initials": "H.B."
            }, {
                "fullName": "Begin, Menachem", "initials": "M.B."
            }, {
                "fullName": "Bellow, Saul", "initials": "S.B."
            }, {
                "fullName": "Benchley, Robert", "initials": "R.B."
            }, {
                "fullName": "Blair, Robert", "initials": "R.B."
            }, {
                "fullName": "Benenson, Peter", "initials": "P.B."
            }, {
                "fullName": "Benjamin, Walter", "initials": "W.B."
            }, {
                "fullName": "Berlin, Irving", "initials": "I.B."
            }, {
                "fullName": "Benn, Tony", "initials": "T.B."
            }, {
                "fullName": "Benson, Leana", "initials": "L.B."
            }, {
                "fullName": "Bent, Silas", "initials": "S.B."
            }, {
                "fullName": "Berle, Milton", "initials": "M.B."
            }, {
                "fullName": "Berry, Halle", "initials": "H.B."
            }, {
                "fullName": "Biko, Steve", "initials": "S.B."
            }, {
                "fullName": "Beck, Glenn", "initials": "G.B."
            }, {
                "fullName": "Bergman, Ingmar", "initials": "I.B."
            }, {
                "fullName": "Black, Elk", "initials": "E.B."
            }, {
                "fullName": "Berio, Luciano", "initials": "L.B."
            }, {
                "fullName": "Berne, Eric", "initials": "E.B."
            }, {
                "fullName": "Berra, Yogi", "initials": "Y.B."
            }, {
                "fullName": "Berry, Wendell", "initials": "W.B."
            }, {
                "fullName": "Bevan, Aneurin", "initials": "A.B."
            }, {
                "fullName": "Ben-Gurion, David", "initials": "D.B."
            }, {
                "fullName": "Bevel, Ken", "initials": "K.B."
            }, {
                "fullName": "Biden, Joseph", "initials": "J.B."
            }, {
                "fullName": "Bennington, Chester", "initials": "C.B."
            }, {
                "fullName": "Bierce, Ambrose", "initials": "A.B."
            }, {
                "fullName": "Billings, Josh", "initials": "J.B."
            }, {
                "fullName": "Birrell, Augustine", "initials": "A.B."
            }, {
                "fullName": "Blair, Tony", "initials": "T.B."
            }, {
                "fullName": "Beecher, Henry", "initials": "H.B."
            }, {
                "fullName": "Biondo, Frank", "initials": "F.B."
            }]
            const result = getArrayOfTheFullNamesAndInitials(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfLastNameUpperAndFirstNameLower", () => {
            const expect = ['BERNHARD, sandra', 'BETHEA, erin', 'BECKER, carl', 'BENTSEN, lloyd', 'BECKETT, samuel', 'BLAKE, william', 'BERGER, ric', 'BEDDOES, mick', 'BEETHOVEN, ludwig', 'BELLOC, hilaire', 'BEGIN, menachem', 'BELLOW, saul', 'BENCHLEY, robert', 'BLAIR, robert', 'BENENSON, peter', 'BENJAMIN, walter', 'BERLIN, irving', 'BENN, tony', 'BENSON, leana', 'BENT, silas', 'BERLE, milton', 'BERRY, halle', 'BIKO, steve', 'BECK, glenn', 'BERGMAN, ingmar', 'BLACK, elk', 'BERIO, luciano', 'BERNE, eric', 'BERRA, yogi', 'BERRY, wendell', 'BEVAN, aneurin', 'BEN-GURION, david', 'BEVEL, ken', 'BIDEN, joseph', 'BENNINGTON, chester', 'BIERCE, ambrose', 'BILLINGS, josh', 'BIRRELL, augustine', 'BLAIR, tony', 'BEECHER, henry', 'BIONDO, frank']
            const result = getArrayOfLastNameUpperAndFirstNameLower(people);
            assert.deepStrictEqual(result, expect);
        })

        it("getArrayOfNamesWithTheFirstNameInRoundBrackets", () => {
            const expect = ['Bernhard (Sandra)', 'Bethea (Erin)', 'Becker (Carl)', 'Bentsen (Lloyd)', 'Beckett (Samuel)', 'Blake (William)', 'Berger (Ric)', 'Beddoes (Mick)', 'Beethoven (Ludwig)', 'Belloc (Hilaire)', 'Begin (Menachem)', 'Bellow (Saul)', 'Benchley (Robert)', 'Blair (Robert)', 'Benenson (Peter)', 'Benjamin (Walter)', 'Berlin (Irving)', 'Benn (Tony)', 'Benson (Leana)', 'Bent (Silas)', 'Berle (Milton)', 'Berry (Halle)', 'Biko (Steve)', 'Beck (Glenn)', 'Bergman (Ingmar)', 'Black (Elk)', 'Berio (Luciano)', 'Berne (Eric)', 'Berra (Yogi)', 'Berry (Wendell)', 'Bevan (Aneurin)', 'Ben-Gurion (David)', 'Bevel (Ken)', 'Biden (Joseph)', 'Bennington (Chester)', 'Bierce (Ambrose)', 'Billings (Josh)', 'Birrell (Augustine)', 'Blair (Tony)', 'Beecher (Henry)', 'Biondo (Frank)']
            const result = getArrayOfNamesWithTheFirstNameInRoundBrackets(people);
            assert.deepStrictEqual(result, expect);
        })
    });
});
