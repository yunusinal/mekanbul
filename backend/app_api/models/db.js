var mongoose = require('mongoose');

var dbURI = "mongodb://localhmongodb+srv://yunus:1234@cluster0.9k0pz.mongodb.net/?retryWrites=true&w=majority&appName=cluster0ost:27017/mekanbul";
mongoose.connect(dbURI);
mongoose.connection.on("connected", function () {
    console.log(dbURI + " adresine bağlandı");
});
mongoose.connection.on("disconnected", function () {
    console.log(dbURI + " bağlantısı koptu");
});

process.on("SIGINT", function () {
    mongoose.connection.close();
    console.log("Bağlantı kapatıldı");
    process.exit(0);
});
require("./venue");
