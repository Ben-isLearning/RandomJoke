let personArray = [
  "Brad Pitt",
  "Christian Bale",
  "Charlie Chaplin",
  "Hugo Weaving",
  "Micheal Caine",
  "Tom Hanks",
  "Leonardo DiCaprio",
  "Morgan Freeman",
  "Samuel L. Jackson",
  "Robert De Niro",
];

let actionArray = [
  "laugh at",
  "dance on",
  "jump through",
  "kick the",
  "lie to",
  "drink the",
  "eat some",
  "paint a",
  "draw the",
  "ravage some",
];

let thingArray = [
  "children",
  "lamp",
  "cat",
  "bridge",
  "oscar",
  "flowers",
  "animal",
  "sasquach",
  "beavers",
  "toast",
];

function findPerson() {
  let personIndex = Math.floor(Math.random() * 10);
  return personArray[personIndex];
}
findPerson();

function findAction() {
  let actionIndex = Math.floor(Math.random() * 10);
  return actionArray[actionIndex];
}
findAction();

function findThing() {
  let thingIndex = Math.floor(Math.random() * 10);
  return thingArray[thingIndex];
}
findThing();

function combineJoke() {
  document.getElementById(
    "test"
  ).innerHTML = `Why did ${findPerson()}, ${findAction()} ${findThing()}?`;
  console.log(`Why did ${findPerson()}, ${findAction()} ${findThing()}?`);
}
combineJoke();
// output "Why did the X, Y the Z?"
