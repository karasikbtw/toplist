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
    "DUHA5656",
    "Prilka"
];
let supports = [
    "@toplist_supportbot",
    "@Nurikpenitft"
];

let lists = [
    [ // first list
        [
            { "name": "kocmoc unleashed", "below": "создатели: kisloteam | выложил: Kisl0", "id": "382", "verifed": false },
            { "name": "Appalachi", "below": "создатели: Sucka", "id": "369", "verifed": false },
            { "name": "UnderWorse", "below": "создатели: DECAdence", "id": "145", "verifed": false },
        ],
        { name: "Impossible лист - TopList", enum: 0, "href": "impossible-list.html", "displayname": " Impossible лист ", "raterequired": false },
        { "rate": true, "moderators": true, "p_tag": true, "support": true } // visibility
    ],
    [
        [ // levels
            { "name": "OfLight", "below": "создатели: yaskripts", "id": "242", "verifed": false },
        ],
        { name: "Анрейт Demon лист - TopList", enum: 0, "href": "unrate-demon-list.html", "displayname": " Анрейт Demon лист ", "raterequired": false },
        { "rate": true, "moderators": true, "p_tag": true, "support": true } // visibility
    ],
    [
        [ // levels
            { "name": "Evil Test", "below": "создатели: WazalOwner | верификатор: Prilka", "id": "277", "verifed": true },
            { "name": "The Maze", "below": "создатели: WazalOwner | верификатор: karasikbtw", "id": "295", "verifed": true },
            { "name": "19", "below": "создатели: Taujaan", "id": "151", "verifed": false },
        ],
        { name: "Platformer Demon лист - TopList", enum: 0, "href": "hard-platformer-list.html", "displayname": " Platformer Demon лист ", "raterequired": true },
        { "rate": true, "moderators": true, "p_tag": true, "support": true } // visibility
    ],
    [
        [ // levels
            { "name": "TT world", "below": "создатели: Bikchi", "id": "136", "verifed": false },
            { "name": "ordinary", "below": "создатели: anxiety team | выложил/верификатор: nevverr", "id": "310", "verifed": false },
            { "name": "grimuar", "below": "создатели: redyzzz", "id": "223", "verifed": false },
            { "name": "ThisIsLikeThatSound", "below": "создатели: Taujaan", "id": "117", "verifed": false },
            { "name": "Electron", "below": "создатели: MamaYmerla", "id": "248", "verifed": false },
            { "name": "Nautilos", "below": "создатели: kituh0777", "id": "171", "verifed": false },
        ],
        { name: "Demon лист - TopList", enum: 0, "href": "index.html", "displayname": " Demon лист ", "raterequired": true },
        { "rate": true, "moderators": true, "p_tag": true, "support": true } // visibility
    ],
    [
        [ // levels
            { "name": "1st DUHA5656 lvl", "below": "создатели: DUHA5656", "id": "120", "verifed": true },
            { "name": "3 seconds hell", "below": "создатели: komaru", "id": "339", "verifed": true },
            { "name": "30 fps spamm", "below": "создатели: DUHA5656", "id": "337", "verifed": true },
            { "name": "robotopa", "below": "создатели: komaru", "id": "343", "verifed": true },
            { "name": "16 SECONDS HELL", "below": "создатели: Honder", "id": "213", "verifed": false },
            { "name": "lolololololololololololol", "below": "создатели: DUHA5656", "id": "412", "verifed": true },
            { "name": "UwU", "below": "создатели: DUHA5656", "id": "415", "verifed": true },
        ],
        { name: "Список челленджей - TopList", enum: 0, "href": "challenge-list.html", "displayname": " Список челленджей ", "raterequired": false },
        { "rate": true, "moderators": true, "p_tag": true, "support": true } // visibility
    ],
    [
        [ // levels
            { "name": "KOCMOC", "below": "создатели: kisloteam | выложил: Kisl0", "id": "", "verifed": false },
            { "name": "firewall", "below": "создатели: kisloteam", "id": "", "verifed": false },
            { "name": "telescope", "below": "создатели: kisloteam", "id": "", "verifed": false },
        ],
        { name: "Невышедший лист - TopList", enum: 0, "href": "unloaded-list.html", "displayname": " Невышедший лист ", "raterequired": true },
        { "rate": true, "moderators": true, "p_tag": true, "support": true } // visibility
    ],
    [
        [ // players*
            { "name": "Prilka", "below": "хардест в ГДПС: 8o | хардест в ГД: Jesse Pinkman", "id": "", "verifed": true },
            { "name": "nevverr", "below": "хардест в ГДПС: ordinary | хардест в ГД: Sonic Wave", "id": "", "verifed": false },
            { "name": "DUHA5656", "below": "хардест в ГДПС: TT world | хардест в ГД: Acropolis", "id": "", "verifed": true },
            { "name": "legitovperviy", "below": "хардест в ГДПС: Phoenix A | хардест в ГД: Inane demon", "id": "", "verifed": false },
        ],
        { name: "Слеер лист - TopList", enum: 0, "href": "sleer-list.html", "displayname": " Слеер лист ", "raterequired": true },
        { "rate": false, "moderators": true, "p_tag": true, "support": true } // visibility
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
        genElement("a", document.getElementById("buttons"), listdisplayname, "button montserrat-sd", "", listhref);

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
            let div_moderators = genElement("div", div_boxes, "", "main-box montserrat-sd", "moderators"); // div: boxes.moderators
            genElement("h2", div_moderators, "Список модераторов сайта"); // h2: boxes.moderators.list
            
            // moderator list generator
            moderators.forEach(moderator => {
                genElement("p", div_moderators, moderator);
            
                console.log("moderator created");
            });
        }
        // support list
        if (list[2].support == true) {
            let div_support = genElement("div", div_boxes, "", "main-box montserrat-sd", "support"); // div: boxes.support
            genElement("h2", div_support, "В техподдержке (ТГ)"); // h2: boxes.support.list
            
            // support list generator
            supports.forEach(support => {
                genElement("p", div_support, support);
            
                console.log("support created");
            });
        }

        // rate required?
        if (list[2].rate == true) {
            let div_raterequired = genElement("div", div_boxes, "", "main-box montserrat-sd");
            genElement("h2", div_raterequired, "Нужен рейт?");

            if (listraterequired == true) {
                genElement("p", div_raterequired, "Да");
            }
            else {
                genElement("p", div_raterequired, "Нет");
            }
        }

        // for each level (cards generator)
        levels.forEach(element => {
            globEnum += 1;
            let name = element.name;
            let below = element.below;
            let id = element.id;
            let level_title;

            let div_content = genElement("div", document.getElementById("levels"), "", "main-box montserrat-sd level-box", "level");
            div_content.addEventListener("click", function() {
                if (id != "") {
                    navigator.clipboard.writeText(id);
                }
                else {
                    navigator.clipboard.writeText(name);
                }
            });
            if (element.verifed == true) {
                div_content.style = "background-color: rgb(219 255 255)";
            };
            
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
