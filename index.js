const TicketManager = require("./ticketManager");
const EmailService = require("./emailService");
const DatabaseService = require("./databaseService");

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();


ticketManager.on("buy", (email, price, timestamp) => {
    emailService.send(email);
    databaseService.save(email, price, timestamp);
});

ticketManager.on("error", (error) => {
    console.error(`Gracefully handling our error: ${error}`);
});

const onBuy = () => {
    console.log("I will be removed soon");
};

ticketManager.on("buy", onBuy);

console.log(`We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount("buy")}`);
ticketManager.buy("test@email", 20);

console.log(`We have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`);
console.log(`We have ${ticketManager.listenerCount("error")} listener(s) for the error event`);

ticketManager.off("buy", onBuy);

console.log(`We now have: ${ticketManager.listenerCount("buy")} listener(s) for the buy event`);
ticketManager.buy("test@email", 20);