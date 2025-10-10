// ->Profit and Loss Calculation

let costprice = Number(prompt("enter your costprice"))
let sellprice = Number(prompt("enter your sellprice"))

if (costprice < sellprice) {
    alert("profit of " + (sellprice - costprice)); //check profit

} else if (costprice > sellprice) {
    alert("loss of" + (costprice - sellprice));    //check loss

} else {
    console.log("no profit no loss");

}
