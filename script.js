// script.js

let moderators = [
    "karasikbtw"
];

let lists = [
    [ // first list
        [ // levels
            { "name": "spakr", "creator": "karasikbtw", "id": "?", "verifed": false, },
            { "name": "OfLight", "creator": "yaskripts", "id": "242", "verifed": false },
            { "name": "UnderWorse", "creator": "DECAdence", "id": "145", "verifed": false },
            { "name": "?", "creator": "noone", "id": "?", "verifed": false },
            { "name": "?", "creator": "noone", "id": "?", "verifed": false }
        ],
        { name: "Список невозможных уровней - TopList", enum: 0, "href": "index.html", "displayname": " Список невозможных уровней ", "raterequired": false }
    ],
    [
        [ // levels
            { "name": "19", "creator": "Taujaan", "id": "151", "verifed": false },
            { "name": "?", "creator": "noone", "id": "?", "verifed": false },
            { "name": "?", "creator": "noone", "id": "?", "verifed": false },
            { "name": "?", "creator": "noone", "id": "?", "verifed": false },
            { "name": "?", "creator": "noone", "id": "?", "verifed": false }
        ],
        { name: "Список сложных платформеров - TopList", enum: 0, "href": "hard-platformer-list.html", "displayname": " Список сложных платформеров ", "raterequired": true }
    ],
    [
        [ // levels
            { "name": "Diamond Trip", "creator": "alduk9", "id": "163", "verifed": false },
            { "name": "TT world", "creator": "bikchi", "id": "136", "verifed": false },
            { "name": "grimuar", "creator": "redyzzz", "id": "223", "verifed": false },
            { "name": "ThisIsLikeThatSound", "creator": "Taujaan", "id": "117", "verifed": false },
            { "name": "Nautilos", "creator": "kituh0777", "id": "171", "verifed": false }
        ],
        { name: "Список сложных уровней - TopList", enum: 0, "href": "hard-levels-list.html", "displayname": " Список сложных уровней ", "raterequired": true }
    ],
    [
        [ // levels
            { "name": "Hayate", "creator": "Taujaan", "id": "123", "verifed": false },
            { "name": "1st DUHA5656 lvl", "creator": "DUHA5656", "id": "120", "verifed": false },
            { "name": "16 SECONDS HELL", "creator": "Honder", "id": "213", "verifed": false },
            { "name": "new word", "creator": "eray14", "id": "103", "verifed": false },
            { "name": "?", "creator": "noone", "id": "?" }
        ],
        { name: "Список челленджей - TopList", enum: 0, "href": "challenge-list.html", "displayname": " Список челленджей ", "raterequired": false }
    ]
];

const div_boxes = document.createElement("div");
div_boxes.className = "boxes";
document.body.appendChild(div_boxes);

const div_boxes_box_moderators = document.createElement("div");
div_boxes_box_moderators.className = "box";
div_boxes_box_moderators.id = "moderators";
div_boxes.appendChild(div_boxes_box_moderators);

const div_boxes_box_moderators_h2 = document.createElement("h2");
div_boxes_box_moderators_h2.textContent = "Список модераторов";
div_boxes_box_moderators.appendChild(div_boxes_box_moderators_h2);

moderators.forEach(moderator => {
    const pp = document.createElement("p");
    pp.textContent = moderator;
    document.getElementById("moderators").appendChild(pp);

    console.log("moderator created");
});

const div_boxes_box_raterequired = document.createElement("div");
div_boxes_box_raterequired.className = "box";
div_boxes.appendChild(div_boxes_box_raterequired);

const div_boxes_box_raterequired_h2 = document.createElement("h2");
div_boxes_box_raterequired_h2.textContent = "Оценка необходима?";
div_boxes_box_raterequired.appendChild(div_boxes_box_raterequired_h2);

lists.forEach(list => {
    let levels = list[0];
    let globEnum = list[1].enum;
    let listname = list[1].name;
    let listhref = list[1].href;
    let listdisplayname = list[1].displayname;
    let listraterequired = list[1].raterequired;
    
    if (listname != document.title) {
        const button = document.createElement("a");
        button.textContent = listdisplayname;
        button.href = listhref;
        button.className = "button";
        document.getElementById("buttons").appendChild(button);
    };
    
    if (listname == document.title) {
        if (listraterequired == true) {
            const div_boxes_box_raterequired_value = document.createElement("p");
            div_boxes_box_raterequired_value.textContent = "Да";
            div_boxes_box_raterequired.appendChild(div_boxes_box_raterequired_value);
        };
        else {
            const div_boxes_box_raterequired_value = document.createElement("p");
            div_boxes_box_raterequired_value.textContent = "Нет";
            div_boxes_box_raterequired.appendChild(div_boxes_box_raterequired_value);
        };
    
        levels.forEach(element => {
            const div_content = document.createElement("div");
            div_content.id = "level";
            div_content.className = "level";
            document.getElementById("levels").appendChild(div_content);
            if (element.verifed == true) {
                div_content.style = "background-color: rgb(185, 255, 255)";
            };
        
            globEnum += 1;
            let name = element.name;
            let creator = element.creator;
            let id = element.id;
        
            const pp = document.createElement("h1");
            pp.textContent = "#"+globEnum+" - "+name+" ("+id+")"; // #1 - Test (616)
            div_content.appendChild(pp);
        
            const p_blw = document.createElement("h3");
            p_blw.textContent = "создатель: "+creator; // published by karasikbtw
            if (element.verifed == true) {
                p_blw.textContent += " | Подтверждено";
            };
            p_blw.style = "color: rgb(87, 87, 87, 0.75)";
            div_content.appendChild(p_blw);
        
            console.log("test element created");
        });
    };
});
