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