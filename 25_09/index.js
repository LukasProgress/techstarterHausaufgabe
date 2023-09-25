let list =[];

let addToList = (item) => {
    list.push(item)
}

let deleteItem = (item) => {
    list = list.filter(x => x !== item);
}


addToList("Kapern");
addToList("Senf");
addToList("Butter");
addToList("Eier");
addToList("Hackfleisch");
addToList("Kartoffeln");
addToList("Zwiebeln");
addToList('Tofu');

console.log(list);

deleteItem('Tofu');

console.log(list);

