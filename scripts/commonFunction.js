
function setLeftSeat(count){
    const left_seat_id = getElement('left-seat');
    const left_seat_value = parseInt(left_seat_id.innerText);

    left_seat_id.innerText = left_seat_value - count;
}
function getElement(idField){
    const elementId = document.getElementById(idField);

    return elementId;
}
function setSelectedColor(){
    const selectedId = document.getElementById('selected');
    selectedId.classList.add("text-[#1DD100]");
}

function setPriceList(seat,count,ticket_price){
    const price_id = getElement("price-id");
    const total_price = getElement("total-price");
    const grand_total = getElement('grand-total');
    const div = document.createElement('div');
    div.classList.add('flex','justify-between','mt-4');
     div.innerHTML = `
     <span>${seat}</span>
                                <h1>Economy</h1>
                                <span>550</span>
     
     `;

     price_id.appendChild(div);

     const dynamic_seat = document.getElementById("dynamic-seat");
     dynamic_seat.innerText = count;
     total_price.innerText = ticket_price;
     grand_total.innerText = ticket_price;

}

let count = 0;
let total_ticket_price = 0;
function takeSeat(event){
    count += 1;
    total_ticket_price += 550;
    //  console.log(event.target.innerText)
    //  console.log(count)

     const clickedSeat = event.target.innerText;

     if (count === 1){
        setSelectedColor();
     }

     if ( count === 4){
            enableApplyButton(
              total_ticket_price,
              
            );
     }

     if (count > 4){
        
        
        console.log("you cant't purchase above 4 seat")
     }
     else{
         
        setSeatColor(clickedSeat);
        setPriceList(clickedSeat,count,total_ticket_price);
        checkValidPhoneNumber()
        setLeftSeat(count);
        
     }
}

function setSeatColor(clickedSeat){
        const element = getElement(clickedSeat);
        element.classList.remove("bg-[#F7F8F8]");
        element.classList.add("bg-[#1DD100]", "text-white");

        // console.log(element.innerText);
}