const form = document.querySelector('form');
const firstName = document.getElementById('name');
const email = document.getElementById('price');
const comments = document.getElementById('inventory');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  checkInputs();
});

function checkInputs() {
  const name1Value = name1.value.trim();
  const priceValue = price.value.trim();
  const inventoryValue = inventory.value.trim();

  if(name1Value === '') {
    setErrorFor(name1, 'Name cannot be blank');
  } else {
    setSuccessFor(name1);
  }
  if(priceValue === '') {
    setErrorFor(price, 'Price cannot be blank');
  } else {
    setSuccessFor(price);
  }
  if(inventoryValue === '') {
    setErrorFor(inventory, 'inventory cannot be blank');
  } else {
    setSuccessFor(inventory);
  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

 
  small.innerText = message;


  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement; 


  formControl.className = 'form-control success';
}
