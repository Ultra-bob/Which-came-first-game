const events = [
    { name: "Schlieffen Plan Developed", date: new Date("1905-01-01") },
    { name: "Assassination of Archduke Franz Ferdinand", date: new Date("1914-06-28") },
    { name: "First Battle of the Ypres", date: new Date("1914-10-19") },
    { name: "Battle of the Somme", date: new Date("1916-07-01") },
    { name: "Passchendaele", date: new Date("1917-07-31") },
    { name: "Vimy Ridge", date: new Date("1917-04-09") },
    { name: "Third Battle of the Ypres", date: new Date("1917-07-31") },
    { name: "Armistice of WW1", date: new Date("1918-11-11") },
    { name: "Spanish Flu", date: new Date("1918-01-01") }, // (1918-20)
    { name: "Winnipeg General Strike", date: new Date("1919-01-01") }, // (1919)
    { name: "Paris Peace Conference & Treaty of Versailles", date: new Date("1919-01-01") }, // (1919)
    { name: "Prohibition", date: new Date("1920-01-17") }, // (January 17, 1920-33)
    { name: "Black Tuesday", date: new Date("1929-10-29") },
    { name: "Persons Case", date: new Date("1928-01-01") }, // (1928)
    { name: "First Relief Camp Established in Canada", date: new Date("1932-01-01") }, // (1932)
    { name: "Munich Agreement", date: new Date("1938-09-30") }, // (1930s)
    { name: "Rise of New Political Parties", date: new Date("1930-01-01") }, // (1930s)
    { name: "Hitler becomes Chancellor", date: new Date("1933-01-01") },
    { name: "Nuremberg Laws", date: new Date("1935-01-01") },
    { name: "S.S. St. Louis", date: new Date("1939-05-13") },
    { name: "Hitler invades Poland", date: new Date("1939-09-01") },
    { name: "Mobile Killing Units", date: new Date("1939-01-01") }, // (1939-41)
    { name: "Liquidation of the Ghettos", date: new Date("1943-01-01") }, // (1943)
    { name: "Night of the Long Knives", date: new Date("1934-06-30") },
    { name: "Kristallnacht", date: new Date("1938-11-09") },
    { name: "Dieppe", date: new Date("1942-08-19") },
    { name: "Italian Campaign", date: new Date("1943-07-10") },
    { name: "VE Day", date: new Date("1945-05-08") },
    { name: "Hiroshima", date: new Date("1945-08-06") },
    { name: "Nagasaki", date: new Date("1945-08-09") },
    { name: "VJ Day", date: new Date("1945-08-15") },
    { name: "WW2 Ends", date: new Date("1945-09-02") },
    { name: "Suez Canal Crisis", date: new Date("1956-10-01") },
    { name: "Sputnik", date: new Date("1957-10-04") },
    { name: "Soviet Union Technology Exposition", date: new Date("1958-01-01") }, // (1958-9)
    { name: "Cuban Missile Crisis", date: new Date("1962-10-16") },
    { name: "Canada becomes Bilingual", date: new Date("1969-01-01") },
    { name: "FLQ/October Crisis", date: new Date("1970-01-01") },
    { name: "Berlin Wall Falls", date: new Date("1989-01-01") }
];


let currentEvents = [];
let clickable = true;

let shuffledEvents = []

function getRandomEvents() {
    if (shuffledEvents.length < 2) {
        shuffledEvents = events.slice().sort(() => Math.random() - 0.5);
    }

    // 90% chance to pick two events within 10 years of each other
    let event1 = shuffledEvents.pop();
    let event2;
    
    const within10Years = Math.random() < 0.9;

    if (within10Years) {
        // Find another event that is within 10 years of event1
        event2 = shuffledEvents.find(e => Math.abs(e.date - event1.date) <= 10 * 365 * 24 * 60 * 60 * 1000); // 10 years in milliseconds
        if (!event2) {
            // If no event is found, just pick another random event
            event2 = shuffledEvents.pop();
        }
    } else {
        // Otherwise, just pick a completely random event
        event2 = shuffledEvents.pop();
    }

    return [event1, event2];
}

function displayEvents() {
    currentEvents = getRandomEvents();   

    document.getElementById('event1').textContent = currentEvents[0].name;
    document.getElementById('event2').textContent = currentEvents[1].name;
    document.getElementById('date1').style.opacity = 0;
    document.getElementById('date2').style.opacity = 0;
    document.getElementById('event1container').style.backgroundColor = '#00bcd4';
    document.getElementById('event2container').style.backgroundColor = '#f44336';
    clickable = true;
}

function checkGuess(guess) {    
    if (!clickable) return;
    clickable = false;
    const [event1, event2] = currentEvents;
    const correct = event1.date < event2.date ? 'Event 1' : 'Event 2';

    const options = {
        year: 'numeric',
        month: 'long',
    };

    document.getElementById('date1').style.opacity = 1
    document.getElementById('date2').style.opacity = 1
    document.getElementById('date1').textContent = event1.date.toLocaleDateString("en-US", options);
    document.getElementById('date2').textContent = event2.date.toLocaleDateString("en-US", options);
    if (guess === correct) {
        document.getElementById('event1container').style.backgroundColor = '#3ac71e';
        document.getElementById('event2container').style.backgroundColor = '#3ac71e';
    } else {
        document.getElementById('event1container').style.backgroundColor = '#ed3a2d';
        document.getElementById('event2container').style.backgroundColor = '#ed3a2d';
    }
    setTimeout(displayEvents, 2000);
}

displayEvents();