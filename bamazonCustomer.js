var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: 'root',
  //password not included in push
  password: '',
  database: 'bamazon_DB'
});

connection.connect(function(err){
  if(err) throw err;
  function addCart(){
    var query = connection.query("SELECT * from products", 
      function(err, res){
      if (err) throw err;
      console.table("Store availablity: ");
      for (i = 0; i < res.length; ++i){
        console.table(res[i]);
      }
      inquirer.prompt([
        {
            name: "id",
            type: "input",
          message: "ID of the product: "
        },
        {
        name: "quantity",
            type: "input",
          message: "how many units of the product you would like to buy? : "
        }
      ]).then(function(user){
        var orderId = user.id;
        var orderQuantity = parseInt(user.quantity);

        if (orderQuantity <= res[(orderId - 1)].stock_quantity){
          console.log("Your items have been purchased.")
          var updateQuery = connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: res[(orderId-1)].stock_quantity -= orderQuantity
              },
              {
                item_id: orderId
              }
            ], function(err, resTwo){            })
            console.log("Total cost: $"+ ((res[(orderId-1)]).price * orderQuantity));
            console.log("The backroom is lighter!: ");
            console.table(res[(orderId-1)]);
            buyAgain();
        }
      else{
        console.log("Not in stock");
        buyAgain();
    }
    })
  });
}
  function buyAgain() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "confirm",
            message: "Buy something else?"
        }
        ]).then(function(shopAgain){
            if (shopAgain.confirm){
                addCart();
            }
            else{
              console.log("**********Come again!**********");
                connection.end();
            }
        })
  }
  addCart();
});