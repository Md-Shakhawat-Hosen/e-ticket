const virtualKeys = document.querySelectorAll('.seat-btn');
virtualKeys.forEach((key) =>{
    key.addEventListener('click', takeSeat)
})

 function enableApplyButton(total_ticket_price){
     const apply_id = getElement("apply-btn");
     apply_id.removeAttribute('disabled');
     apply_id.classList.remove("opacity-35");

 }

function applyBtn(){
    // e.preventDefault();
    const input_id = getElement('input-id');
    console.log(input_id.value)
    console.log('btn clicked')

    
}