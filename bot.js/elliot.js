// elliot/bot.js - Dein persönlicher Coding-Buddy

const elliot = {
  name: "Elliot",
  role: "Virtual Pair Programmer",
  
  greetings: [
    "Hey! Lass uns cleanen Code schreiben.",
    "Tee ist bereit. Was bauen wir?",
    "Einfach anfangen. Der Rest kommt.",
    "Atmen nicht vergessen."
  ],
  
  motivate: function() {
    const randomIndex = Math.floor(Math.random() * this.greetings.length);
    return this.greetings[randomIndex];
  },
  
  startSession: function() {
    console.log(`\n✨ ${this.name} ist da! ✨`);
    console.log(`Rolle: ${this.role}`);
    console.log(`\n${this.motivate()}\n`);
    console.log("--- Session startet ---");
  }
};

// Export für andere Dateien
if (typeof module !== 'undefined' && module.exports) {
  module.exports = elliot;
} else {

  elliot.startSession();
}