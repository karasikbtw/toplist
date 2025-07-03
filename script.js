// script.js ver2

function genElement(element, initBody, textContent = "", className = "", id = null, href = "", style = "") {
    const gen_ = document.createElement(element);
    gen_.textContent = textContent;
    gen_.className = className;
    gen_.id = id;
    gen_.href = href;
    gen_.style = style;
    initBody.appendChild(gen_);
    return gen_;
}

let moderators = [
    "karasikbtw",
    "DUHA5656"
];

let lists = [
    [ // first list
        [],
        { name: "Impossible лист - TopList", enum: 0, "href": "impossible-list.html", "displayname": " Impossible лист ", "raterequired": false },
        { "rate": true, "moderators": true, "p_tag": true } // visibility
    ],
    [
        [ // levels
            { "name": "OfLight", "below": "создатели: yaskripts", "id": "242", "verifed": false },
            { "name": "Evil Test", "below": "создатели: WazalOwner", "id": "257", "verifed": false},
            { "name": "UnderWorse", "below": "создатели: DECAdence", "id": "145", "verifed": false },
        ],
        { name: "Анрейт Demon лист - TopList", enum: 0, "href": "unrate-demon-list.html", "displayname": " Анрейт Demon лист ", "raterequired": false },
        { "rate": true, "moderators": true, "p_tag": true } // visibility
    ],
    [
        [ // levels
            { "name": "Evil Test", "below": "создатели: WazalOwner | верификатор: Prilka", "id": "277", "verified": true},
            { "name": "The Maze", "below": "создатели: WazalOwner | верификатор: karasikbtw", "id": "295", "verified": true},
            { "name": "19", "below": "создатели: Taujaan", "id": "151", "verifed": false },
        ],
        { name: "Platformer Demon лист - TopList", enum: 0, "href": "hard-platformer-list.html", "displayname": " Platformer Demon лист ", "raterequired": true },
        { "rate": true, "moderators": true, "p_tag": true } // visibility
    ],
    [
        [ // levels
            //{ "name": "8o", "below": "создатели: Bikchi | верификатор: Prilka", "id": "287", "verifed": true },
            { "name": "TT world", "below": "создатели: Bikchi", "id": "136", "verifed": false },
            { "name": "grimuar", "below": "создатели: redyzzz", "id": "223", "verifed": false },
            { "name": "ThisIsLikeThatSound", "below": "создатели: Taujaan", "id": "117", "verifed": false },
            { "name": "Electron", "below": "создатели: MamaYmerla", "id": "248", "verifed": false },
            { "name": "Nautilos", "below": "создатели: kituh0777", "id": "171", "verifed": false }
        ],
        { name: "Demon лист - TopList", enum: 0, "href": "index.html", "displayname": " Demon лист ", "raterequired": true },
        { "rate": true, "moderators": true, "p_tag": true } // visibility
    ],
    [
        [ // levels
            { "name": "1st DUHA5656 lvl", "below": "создатели: DUHA5656", "id": "120", "verifed": false },
            { "name": "Hayate", "below": "создатели: Taujaan", "id": "123", "verifed": false },
            { "name": "16 SECONDS HELL", "below": "создатели: Honder", "id": "213", "verifed": false },
            { "name": "new word", "below": "создатели: eray14", "id": "103", "verifed": false },
        ],
        { name: "Список челленджей - TopList", enum: 0, "href": "challenge-list.html", "displayname": " Список челленджей ", "raterequired": false },
        { "rate": true, "moderators": true, "p_tag": true } // visibility
    ],
    [
        [ // players*
            { "name": "DUHA5656", "below": "хардест демон в ГДПС: TT world | хардест челлендж в ГДПС: 1st DUHA5656 lvl | хардест в ГД: CraZy", "id": "", "verifed": true },
        ],
        { name: "Слеер лист - TopList", enum: 0, "href": "sleer-list.html", "displayname": " Слеер лист ", "raterequired": true },
        { "rate": false, "moderators": true, "p_tag": true } // visibility
    ]
];

// for each list
lists.forEach(list => {
    let levels = list[0];
    let globEnum = list[1].enum;
    let listname = list[1].name;
    let listhref = list[1].href;
    let listdisplayname = list[1].displayname;
    let listraterequired = list[1].raterequired;
    
    if (listname != document.title) {
        genElement("a", document.getElementById("buttons"), listdisplayname, "button", "", listhref);

        console.log("button created");
    };
    
    if (listname == document.title) {
        // bottom of the page
        let div_boxes = genElement("div", document.body, "", "boxes", ""); // div: boxes

        // p tag
        if (list[2].p_tag == true) {
            genElement("p", document.body, "Для добавления в список обращаться: @dorsikm (ТГ)", "montserrat-sd", null); // p
        }

        // moderator list
        if (list[2].moderators == true) {
            let div_moderators = genElement("div", div_boxes, "", "box", "moderators"); // div: boxes.moderators
            let h2_moderators = genElement("h2", div_moderators, "Список модераторов сайта"); // h2: boxes.moderators.list
            
            // moderator list generator
            moderators.forEach(moderator => {
                genElement("p", div_moderators, moderator);
            
                console.log("moderator created");
            });
        }

        // rate required?
        if (list[2].rate == true) {
            let div_raterequired = genElement("div", div_boxes, "", "box");
            let h2_raterequired = genElement("h2", div_raterequired, "Нужен рейт?");

            if (listraterequired == true) {
                genElement("p", div_raterequired, "Да");
            }
            else {
                genElement("p", div_raterequired, "Нет");
            }
        }

        // for each level (cards generator)
        levels.forEach(element => {
            let div_content = genElement("div", document.getElementById("levels"), "", "level", "level");
            if (element.verifed == true) {
                div_content.style = "background-color: rgb(219 255 255)";
            };
        
            globEnum += 1;
            let name = element.name;
            let below = element.below;
            let id = element.id;
            let level_title;
            if (id == "") {
                level_title = "#"+globEnum+" - "+name;
            }
            else {
                level_title = "#"+globEnum+" - "+name+" ("+id+")";
            }
            let level_below = below;

            genElement("h1", div_content, level_title);

            let p_below = genElement("h3", div_content, level_below, "", "", "", "color: rgb(87, 87, 87, 0.75)");
            if (element.verifed == true) {
                p_below.textContent += " | подтверждено";
            };
        
            console.log("card created");
        });
    };
});
