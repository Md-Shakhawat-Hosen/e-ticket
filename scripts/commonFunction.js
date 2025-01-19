function getElement(idField){
    const elementId = document.getElementById(idField);

    return elementId;
}
function setSelectedColor(){
    const selectedId = document.getElementById('selected');
    selectedId.classList.add("text-[#1DD100]");
}

function setPriceList(seat,count){
    const price_id = document.getElementById("price-id");
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

}

let count = 0;
function takeSeat(event){
    count += 1;
    //  console.log(event.target.innerText)
    //  console.log(count)

     const clickedSeat = event.target.innerText;

     if (count === 1){
        setSelectedColor();
     }

     if (count > 4){
        
        
        console.log("you cant't purchase above 4 seat")
     }
     else{
        setSeatColor(clickedSeat);
        setPriceList(clickedSeat,count);
     }
}

function setSeatColor(clickedSeat){
        const element = getElement(clickedSeat);
        element.classList.remove("bg-[#F7F8F8]");
        element.classList.add("bg-[#1DD100]", "text-white");

        console.log(element.innerText);
}