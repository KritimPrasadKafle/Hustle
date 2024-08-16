let isOrderAccepted = false;
let isValetFound = false;
let hasrestaurantSeenYourOrder = false;
let restaurantTimer = null;

//Zomato App - Boot up/ Power Up/ Start

window.addEventListener('load', function () {
  document.getElementById('acceptOrder').addEventListener('click', function () {
    askRestaurantToAcceptOrReject();
    checkIfOrderAcceptedFromRestaurantOrNot()
      .then(res => {
        console.log('Updated from restaurant - ', isOrderAccepted);

        //Step - Start Preparing
        if (isOrderAccepted) startPreparingOrder();

        //Step3 - Order Rejected
        else alert("Sorry restaurant couldn't accept your order! Returning your amount with zomato shares");
      })
      .catch(err => {
        console.error(err);
        alert("Something went wrong! Please try again");

      })

  });
})


//step 1 - Check whether restaurant order or not
function askRestaurantToAcceptOrReject() {
  //callback
  setTimeout(() => {
    console.log('Checking if order is accepted or not');
    isOrderAccepted = confirm('Should restaurant accept or Reject?')
    hasrestaurantSeenYourOrder = true;

  }, 1000);


}


//Step 2 - Check if Restaurant has accepted order

function checkIfOrderAcceptedFromRestaurantOrNot() {

  //Promise - resolve or reject
  return new Promise((resolve, reject) => {
    restaurantTimer = setInterval(() => {
      console.log('Checking if order is accepted or not');
      if (!hasrestaurantSeenYourOrder) return;
      if (isOrderAccepted) resolve(true);
      else resolve(false);

      clearInterval(restaurantTimer);

    }, 2000);

  });

}



//step 4 - start preparing
function startPreparingOrder() {
  Promise.all([
    updateOrderStatus(),
    updateMapView(),
    // startSearchingForValets(),
    // checkForOrderDelivery()
  ])
    .then(res => {
      console.log(res);
      setTimeout(() => {
        alert("How was your your food? Rate your food and delivery partner");
      }, 2000);

    }).catch(err => {
      console.error(err);
    })

}

//Helper Functions - Pure Functions
function updateOrderStatus() {
  document.getElementById('currentStatus').innerText = 'Preparing Your Order';
}
function updateMapView() {
  //Fake delay to get data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById('mapview').style.opacity = '1';
      resolve('map initialized');
    }, 1000);

  });
}


//Promise - then, catch, Callback - resolve, reject
//Types of promise.
//1.Promise all  -> All the operations would be called parallely, if one fails, promise all fails
//2.Promise.allsettled -> All the operations would be called parallely, if one fails, don't give a damn, promise.allsettles  passes
//3.Promise.race - for one
//4.Promise.any  - for one





