import express from "express"; // khai bao express

let configViewEngine = (app) => {
    app.use(express.static(".src/public")) // lay tai lieu trong thu muc public
    app.set("view engine", "ejs"); // dung de go logic trong file HTMl nhu if else... nhung js vao html co the hieu nhu vay
    app.set("views", "./src/views")  // hien thi o trong folder views
}

module.exports = configViewEngine;