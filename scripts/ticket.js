const virtualKeys = document.querySelectorAll('.seat-btn');
virtualKeys.forEach((key) =>{
    key.addEventListener('click', takeSeat)
})