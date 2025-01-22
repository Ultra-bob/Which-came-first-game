const events = [
    { name: "Assassination of Archduke", date: new Date("1914-06-28") },
    { name: "Austria-Hungary Declares War", date: new Date("1914-07-28") },
    { name: "Canada Joins WWI", date: new Date("1914-08-01") },
    { name: "Schlieffen Plan", date: new Date("1914-01-01") },
    { name: "Trench Warfare Begins", date: new Date("1915-01-01") },
    { name: "Second Battle of Ypres", date: new Date("1915-04-22") },
    { name: "Battle of the Somme", date: new Date("1916-07-01") },
    { name: "Battle of Vimy Ridge", date: new Date("1917-04-09") },
    { name: "Battle of Passchendaele", date: new Date("1917-07-01") },
    { name: "WWI Armistice", date: new Date("1918-11-11") },
    { name: "Treaty of Versailles", date: new Date("1919-01-01") },
    { name: "Stock Market Crash", date: new Date("1929-10-29") },
    { name: "Rise of New Parties", date: new Date("1930-01-01") },
    { name: "Statute of Westminster", date: new Date("1931-01-01") },
    { name: "Hitler Rises to Power", date: new Date("1933-01-01") },
    { name: "Munich Agreement", date: new Date("1938-01-01") },
    { name: "Germany Invades Poland", date: new Date("1939-09-01") },
    { name: "Dunkirk", date: new Date("1940-05-26") },
    { name: "Pearl Harbor", date: new Date("1941-12-07") },
    { name: "Battle of Midway", date: new Date("1942-06-04") },
    { name: "Dieppe Raid", date: new Date("1942-08-19") },
    { name: "Battle of Stalingrad", date: new Date("1942-08-23") },
    { name: "Italian Campaign", date: new Date("1943-07-10") },
    { name: "Liberation of Netherlands", date: new Date("1944-09-01") },
    { name: "D-Day", date: new Date("1944-06-06") },
    { name: "Atomic Bombings", date: new Date("1945-08-06") },
    { name: "Cuban Missile Crisis", date: new Date("1962-10-16") },
    { name: "Bilingual/Official Languages Act", date: new Date("1969-01-20") },
    { name: "Berlin Wall Falls", date: new Date("1989-11-09") },
    { name: "Canada Act", date: new Date("1982-01-01") }
];

let currentEvents = [];
let clickable = true;

let shuffledEvents = []

function getRandomEvents() {
    if (shuffledEvents.length < 2) {
        shuffledEvents = events.toSorted(() => 0.5 - Math.random());
    }
    return [shuffledEvents.pop(), shuffledEvents.pop()];
}

function displayEvents() {
    currentEvents = getRandomEvents();
    document.getElementById('event1').textContent = currentEvents[0].name;
    document.getElementById('event2').textContent = currentEvents[1].name;
    document.getElementById('event1').style.backgroundColor = '#00bcd4';
    document.getElementById('event2').style.backgroundColor = '#f44336';
    clickable = true;
}

function checkGuess(guess) {
    if (!clickable) return;
    clickable = false;
    const [event1, event2] = currentEvents;
    const correct = event1.date < event2.date ? 'Event 1' : 'Event 2';
    if (guess === correct) {
        document.getElementById('event1').style.backgroundColor = '#3ac71e';
        document.getElementById('event2').style.backgroundColor = '#3ac71e';
    } else {
        document.getElementById('event1').style.backgroundColor = '#ed3a2d';
        document.getElementById('event2').style.backgroundColor = '#ed3a2d';
    }
    setTimeout(displayEvents, 1000);
}

displayEvents();
