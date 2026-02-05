let messages = {
  "-whistle": " 'Vergiss nicht, warum du dieses Projekt liebst. -E'",
  "-says": " 'Eine Sache fertig ist besser als zehn angefangen. -E'",
  "-reminds": "Reminder: 'Atmen. Trinken. Pause. -E'",
  "-request": "Request: 'Was ist dein heutiges Highlight? -E'",
  "-motivates": "You can Do it: 'Der erste Commit ist der schwerste. -E'"
};

// console.log("BIN VOR PROBLEM");

let arg = process.argv[2];
// let arg = null;

// console.log("BIN NACH PROBLEM");


const hour = new Date().getHours();
let greeting = "Guten Tag";

if (hour < 6) greeting = "Gute Nacht";
else if (hour < 12) greeting = "Guten Morgen";
else if (hour < 18) greeting = "Hey Sonja";
else greeting = "Guten Abend";

if (!arg || !messages[arg]) {
  console.log(`
✨ ${greeting}! ✨

Elliot wartet auf ein Keyword:
  -whistle
  -says
  -reminds
  -request
  -motivates
`);
  // BROWSER MODE
  process.exit(0);
}

console.log(`\n✨ ${greeting}! ✨`);
console.log(messages[arg]);
console.log("---\n");



// node elliot.js -whistle
// node elliot.js -says
// node elliot.js -reminds
// node elliot.js -request
// node elliot.js -motivates

// function elliot { node .\elliot.js @args }

 elliot -whistle
 elliot -says
 elliot -reminds
 elliot -request
 elliot -motivates

// node .\elliot.js -whistle
// node .\elliot.js -says
// node .\elliot.js -reminds
// node .\elliot.js -request
// node .\elliot.js -motivates
