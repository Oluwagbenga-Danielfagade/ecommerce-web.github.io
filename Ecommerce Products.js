document.addEventListener("DOMContentLoaded",function(){
    const AddtocartBtn = document.querySelectorAll(".add-to-cart");
    const checkout = document.getElementById("checkout-btn");
    const cartitem = document.getElementById("CartItem");
    AddtocartBtn.forEach(button =>{
        button.addEventListener("click",()=>{
            const item = button.parentElement;
            const itemName = item.querySelector("h2").textContent;
            const itemPrice = item.querySelector("p").textContent;
            const cartItem = document.createElement("li");
            cartItem.style.listStyleType = "none";
            cartItem.textContent = `${itemName}  ${itemPrice}`; 
            cartitem.appendChild(cartItem);
    })
})
    checkout.addEventListener("click",()=>{
        alert("Redirecting payment method");
        window.open("image")
    })
})