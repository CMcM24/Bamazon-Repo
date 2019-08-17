var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    showStock(queryUser);

    
});

const showStock = (inq) => {
    connection.query("SELECT * FROM products", function (err, data) {
        if (err) throw err;
        console.table(data);
        inq();
    })
};

const queryUser = () => {

    inquirer.prompt([
        {
            name: "product_choice",
            type: "input",
            message: "What item would you like to buy? (Input the ID# of the item):"
        },
        {
            name: "product_amount",
            type: "input",
            message: "How many would you like to buy?"
        }
    ]).then(function (answer) {
        var userChoice = answer.product_choice;
        var quantity = parseInt(answer.product_amount);
        connection.query("SELECT stock_quantity FROM products WHERE id = ?", [userChoice], function (err, data) {
            if (err) throw err;
            console.log(data);
            console.log(quantity);
            var newQuan = data - quantity;
            console.log(newQuan);
            if (newQuan >= 0) {
                connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: newQuan }, { id: userChoice }], function (err, res) {
                    if (err) throw err;
                    console.log(res);
                });
            }
            else{
                console.log("Insufficient Quantity!");
            };

        });
        connection.end();
    });
};
