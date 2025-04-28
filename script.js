// Function to update the total price
function updateTotalPrice() {
  let total = 0;
  const prices = document.querySelectorAll('.item-price');
  const quantities = document.querySelectorAll('.quantity');

  prices.forEach((price, index) => {
    const itemPrice = parseFloat(price.dataset.price);
    const quantity = parseInt(quantities[index].innerText);
    total += itemPrice * quantity;
  });

  document.querySelector('.total-price').innerText = total.toFixed(2);
}

// Function to handle increase/decrease of quantity
function adjustQuantity(event) {
  const button = event.target;
  const quantityElement = button.parentElement.querySelector('.quantity');
  let quantity = parseInt(quantityElement.innerText);

  if (button.classList.contains('increase')) {
    quantity += 1;
  } else if (button.classList.contains('decrease') && quantity > 1) {
    quantity -= 1;
  }

  quantityElement.innerText = quantity;
  updateTotalPrice();
}

// Function to handle item deletion
function deleteItem(event) {
  const itemElement = event.target.closest('.cart-item');
  itemElement.remove();
  updateTotalPrice();
}

// Function to handle liking an item
function toggleLike(event) {
  const likeButton = event.target;
  likeButton.classList.toggle('liked');
  if (likeButton.classList.contains('liked')) {
    likeButton.style.color = '#ff6347'; // Change to a red color when liked
  } else {
    likeButton.style.color = '#ff4d4d'; // Change back to original color
  }
}

// Event listeners for all cart actions
document.querySelectorAll('.increase').forEach(button => {
  button.addEventListener('click', adjustQuantity);
});

document.querySelectorAll('.decrease').forEach(button => {
  button.addEventListener('click', adjustQuantity);
});

document.querySelectorAll('.delete').forEach(button => {
  button.addEventListener('click', deleteItem);
});

document.querySelectorAll('.like').forEach(button => {
  button.addEventListener('click', toggleLike);
});

// Initial total price update
updateTotalPrice();
