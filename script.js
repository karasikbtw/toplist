let lists = [
    [ // first list
        [ // levels
            { "name": "spakr", "creator": "karasikbtw", "id": "?" },
            { "name": "UnderWorse", "creator": "DECAdence", "id": "145" },
            { "name": "?", "creator": "noone", "id": "?" },
            { "name": "?", "creator": "noone", "id": "?" },
            { "name": "?", "creator": "noone", "id": "?" }
        ],
        { name: "Список невозможных уровней - TopList", enum: 0 }
    ]
];

lists.forEach(list => {
    let levels = list[0];
    let globEnum = list[1].enum;
    let listname = list[1].name;

    if (listname == document.title) {
        levels.forEach(element => {
            const div_content = document.createElement("div");
            div_content.id = "level";
            div_content.className = "level";
            document.getElementById("levels").appendChild(div_content);
        
            globEnum += 1;
            let name = element.name;
            let creator = element.creator;
            let id = element.id;
        
            const pp = document.createElement("h1");
            pp.textContent = "#"+globEnum+" - "+name+" ("+id+")"; // #1 - Test (616)
            div_content.appendChild(pp);
        
            const p_blw = document.createElement("h3");
            p_blw.textContent = "выложено "+creator; // published by karasikbtw
            p_blw.style = "color: rgb(87, 87, 87, 0.75)";
            div_content.appendChild(p_blw);
        
            console.log("test element created");
        });
    };
});
