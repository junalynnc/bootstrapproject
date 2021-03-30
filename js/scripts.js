/* CAROUSEL */
$(function () {
    $(".carousel").carousel({ interval: 2000 });
  });


/* LUMPIA */
  $("#quantityLumpia").change(function(){
    let quantity = $("#quantityLumpiua").val();
    let price = $("#priceLumpia").val();
    lumpiaAmount = calculateQuantityTotalAmount(quantity, price); 
    let subtotal = calculateSubTotalAmount();
    
    $("#totalAmountLumpia").val(lumpiaAmount);
    $("#subtotalAmountCart").val(subtotal);  
  });


  /* global variables to calculate total amount to pay */
let lumpiaAmount = 0.00;

/* function to calculate total amount, quantity x price */
function calculateQuantityTotalAmount(quantity, price){
  let total = parseFloat(quantity) * parseFloat(price);
  return total.toFixed(2);
}

/* function to calculate sub total, tennis + soccer + football */
function calculateSubTotalAmount(){
  let subTotal = parseFloat(lumpiaAmount);
  
  return subTotal.toFixed(2);
}