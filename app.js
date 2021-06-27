'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var allStores = [];
// var referencelist = document.getElementById('salamon');
// var Total = 0;
// var hourlyTotal = [];

//Object for Seattle
let Seattle =
{
  Min:23,
  Max:65,
  AvgCookie:6.3,
  hourlySales:[],
  dailySales:0,
 

  hourly : function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  HourlyTotals: function() {
    for ( var i = 0; i < hours.length; i++) {
      this.Total.push(Math.ceil(this.hourly( Seattle.Min,Seattle.Max) * AvgCookie));
    }

  },



   getRandomInt: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  },

  random1 :function () {
    var range=Seattle.Max-Seattle.Min;
     var count=Math.random() * range+Seattle.Min;
     return Math.ceil(count);
  },


  hourlyDailySales :function () {
    for (var i=0;i<hours.length;i++){
        var  number1= Math.ceil(Seattle.random1*Seattle.AvgCookie);
        Seattle.hourlySales.push(number1);
        Seattle.dailySales += number1;
    }

    },

}
//  hourlyDailySales 
//console.log(Seattle.hourlyDailySales())



//Random Number
console.log(Seattle.getRandomInt(Seattle.Min,Seattle.Max));
// acess object Seattle
console.log(Seattle);

console.log(Seattle.HourlyTotals())

//Object for Tokyo
let Tokyo =
{
  Min:3,
  Max:24,
  AvgCookie:1.2,
  hourlySales:[],
  dailySales:0,
 
  getRandomIntTokyo: function(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 },


}


//Random Number
console.log(Tokyo.getRandomIntTokyo(Tokyo.Min,Tokyo.Max));
// acess object Tokyo
console.log(Tokyo);

//Object for Dubai
let Dubai =
{
  Min:11,
  Max:38,
  AvgCookie:3.7,
  hourlySales:[],
  dailySales:0,
 
  getRandomIntDubai: function(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 },


}


//Random Number
console.log(Dubai.getRandomIntDubai(Dubai.Min,Dubai.Max));
// acess object Dubai
console.log(Dubai);

//Object for Paris
let Paris =
{
  Min:20,
  Max:38,
  AvgCookie:2.3,
  hourlySales:[],
  dailySales:0,
 
  getRandomIntParis: function(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 },


}

//Random Number
console.log(Paris.getRandomIntParis(Paris.Min,Paris.Max));
// acess object Paris
console.log(Paris);

//Object for Lima
let Lima =
{
  Min:2,
  Max:16,
  AvgCookie:4.6,
  hourlySales:[],
  dailySales:0,
 
  getRandomIntLima: function(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 },


}

//Random Number 
console.log(Lima.getRandomIntLima(Lima.Min,Lima.Max));
// acess object Lima
console.log(Lima);