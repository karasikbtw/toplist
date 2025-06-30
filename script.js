// script.js

function genElement(element, initBody, textContent = null, className = null, id = null, href = null, style = null) {
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
        [ // levels
            { "name": "OfLight", "creator": "yaskripts", "id": "242", "verifed": false },
            { "name": "UnderWorse", "creator": "DECAdence", "id": "145", "verifed": false },
        ],
        { name: "Impossible лист - TopList", enum: 0, "href": "index.html", "displayname": " Impossible лист ", "raterequired": false }
    ],
    [
        [ // levels
            { "name": "19", "creator": "Taujaan", "id": "151", "verifed": false },
        ],
        { name: "Platformer Demon лист - TopList", enum: 0, "href": "hard-platformer-list.html", "displayname": " Platformer Demon лист ", "raterequired": true }
    ],
    [
        [ // levels
            { "name": "Diamond Trip", "creator": "alduk9", "id": "163", "verifed": false },
            { "name": "TT world", "creator": "bikchi", "id": "136", "verifed": false },
            { "name": "grimuar", "creator": "redyzzz", "id": "223", "verifed": false },
            { "name": "ThisIsLikeThatSound", "creator": "Taujaan", "id": "117", "verifed": false },
            { "name": "Nautilos", "creator": "kituh0777", "id": "171", "verifed": false }
        ],
        { name: "Demon лист - TopList", enum: 0, "href": "hard-levels-list.html", "displayname": " Demon лист ", "raterequired": true }
    ],
    [
        [ // levels
            { "name": "Hayate", "creator": "Taujaan", "id": "123", "verifed": false },
            { "name": "1st DUHA5656 lvl", "creator": "DUHA5656", "id": "120", "verifed": false },
            { "name": "16 SECONDS HELL", "creator": "Honder", "id": "213", "verifed": false },
            { "name": "new word", "creator": "eray14", "id": "103", "verifed": false },
        ],
        { name: "Список челленджей - TopList", enum: 0, "href": "challenge-list.html", "displayname": " Список челленджей ", "raterequired": false }
    ]
];

// bottom of page
genElement("p", document.body, "Для добавления уровня в список обращаться: @dorsikm (ТГ)", "montserrat-sd", null); // p

let div_boxes = genElement("div", document.body, null, "boxes", null); // div: boxes

let div_moderators = genElement("div", div_boxes, null, "box", "moderators"); // div: boxes.moderators

let h2_moderators = genElement("h2", div_moderators, "Список модераторов"); // h2: boxes.moderators.list

// moderator list generator
moderators.forEach(moderator => {
    genElement("p", div_moderators, moderator);

    console.log("moderator created");
});

let div_raterequired = genElement("div", div_boxes, null, "box");

let h2_raterequired = genElement("h2", div_raterequired, "Нужен рейт?");

// for each list
lists.forEach(list => {
    let levels = list[0];
    let globEnum = list[1].enum;
    let listname = list[1].name;
    let listhref = list[1].href;
    let listdisplayname = list[1].displayname;
    let listraterequired = list[1].raterequired;
    
    if (listname != document.title) {
        genElement("a", document.getElementById("buttons"), listdisplayname, "button", null, listhref);

        console.log("button created");
    };
    
    if (listname == document.title) {
        if (listraterequired == true) {
            genElement("p", div_raterequired, "Да");
        }
        else {
            genElement("p", div_raterequired, "Нет");
        }

        // for each level (cards generator)
        levels.forEach(element => {
            let div_content = genElement("div", document.getElementById("levels"), null, "level", "level");
            if (element.verifed == true) {
                div_content.style = "background-color: rgb(185, 255, 255)";
            };
        
            globEnum += 1;
            let name = element.name;
            let creator = element.creator;
            let id = element.id;
            let level_title = "#"+globEnum+" - "+name+" ("+id+")";
            let level_below = "выложено: "+creator;

            genElement("h1", div_content, level_title);

            let p_below = genElement("h3", div_content, level_below, null, null, null, "color: rgb(87, 87, 87, 0.75)");
            if (element.verifed == true) {
                p_below.textContent += " | Подтверждено";
            };
        
            console.log("card created");
        });
    };
});
