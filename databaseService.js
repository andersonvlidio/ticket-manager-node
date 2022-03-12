class DatabaseService {
    save(email, price, timestamp) {
        console.log(`Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`);
    }
}

module.exports = DatabaseService
