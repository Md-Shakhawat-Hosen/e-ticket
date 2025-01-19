const virtualKeys = document.querySelectorAll('.seat-btn');
virtualKeys.forEach((key) =>{
    key.addEventListener('click', takeSeat)
})

 function enableApplyButton(total_ticket_price){

    // console.log(discount_price,total_ticket_price);
     const apply_id = getElement("apply-btn");
     apply_id.removeAttribute('disabled');
     apply_id.classList.remove("opacity-35");


    //  let discount_price_four = (total_ticket_price * discount_price) / 100;

    //  const discount = getElement('discount');
    //  const grand_total = getElement("grand-total");

    //  discount.innerText = discount_price_four;
    //  grand_total.innerText = total_ticket_price - discount_price_four;

 }
 let discount_for_4 = 20

function setDiscountPrice(){
  const total_price_id = getElement("total-price");
  const total_price = parseInt(total_price_id.innerText);
  let discount_price = (total_price * discount_for_4) / 100;
  const discount = getElement("discount");
   const grand_total = getElement("grand-total");
  discount.innerText = discount_price;
  grand_total.innerText = total_price - discount_price;


}

function applyBtn(){
    // e.preventDefault();
    const input_id = getElement('input-id');

    const coupon_value = input_id.value;

    if (coupon_value === 'NEW15' || coupon_value === 'Couple 20'){
        setDiscountPrice();
    }
    else {
        console.log('please provide valid coupon code');
    }
    // console.log(input_id.value)
    // console.log('btn clicked')

    
}


function checkValidPhoneNumber(){
  // JavaScript for validating phone number
  const phoneForm = document.getElementById("phoneForm");
  const phoneInput = document.getElementById("phone");
  const message = document.getElementById("message");
   const nextButton = document.getElementById("next-btn");

  phoneForm.addEventListener("input", function (event) {
    event.preventDefault(); // Prevent form submission

    const phoneNumber = phoneInput.value.trim();

    // Regular expression for a valid phone number (example for Bangladeshi format or general formats)
    const phoneRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;

    if (phoneRegex.test(phoneNumber)) {
      message.textContent = "Valid phone number!";
      message.style.color = "green";
      nextButton.disabled = false;
      nextButton.classList.remove("opacity-35");
      message.textContent = ""; // Clear error message
    } else {
      message.textContent =
        "Invalid phone number. Please enter a valid phone number.";
      message.style.color = "red";
      nextButton.disabled = true;
      nextButton.classList.add("opacity-35");
    }
  });
}