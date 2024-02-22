// Seat a1
function preventDoubleClickA1() {
    //   add color
    setBackgroundColorById("seat-number-a1");
  
    // decrease the seat amount
    const totalSeat = getElementValueById("seat-count");
    const seatLeft = totalSeat - 1;
    setElementValueById("seat-count", seatLeft);
  
    const seatName = getElementNameById("a1");
    const newDiv = document.createElement("div");
  
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
  
    p1.textContent = seatName;
    p2.textContent = "Economy";
    p3.textContent = "550";
  
    p3.id = "seat-price";
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
  
    newDiv.classList.add("flex", "justify-between", "py-4", "text-gray-400");
  
    document.getElementById("seat-details").appendChild(newDiv);
  
    // set total price
    const ticketPrice = getElementValueById("seat-price");
    const totalPrice = getElementValueById("total-price");
    const finalTotalPrice = ticketPrice + totalPrice;
    setElementValueById("total-price", finalTotalPrice);
  
    // set grand total
    setElementValueById("grand-total", finalTotalPrice);
  
    //   increase seat count
    const seatCount = getElementValueById("selected-seat");
    const totalSeatCount = seatCount + 1;
    setElementValueById("selected-seat", totalSeatCount);
  
    document
      .getElementById("seat-number-a1")
      .removeEventListener("click", preventDoubleClickA1);
  }
  
  document
    .getElementById("seat-number-a1")
    .addEventListener("click", preventDoubleClickA1);
  
  // // seat a2
  function preventDoubleClickA2() {
    //   add color
    setBackgroundColorById("seat-number-a2");
  
    // decrease the seat amount
    const totalSeat = getElementValueById("seat-count");
    const seatLeft = totalSeat - 1;
    setElementValueById("seat-count", seatLeft);
  
    const seatName = getElementNameById("a2");
    const newDiv = document.createElement("div");
  
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
  
    p1.textContent = seatName;
    p2.textContent = "Economy";
    p3.textContent = "550";
  
    p3.id = "seat-price";
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
  
    newDiv.classList.add("flex", "justify-between", "py-4", "text-gray-400");
  
    document.getElementById("seat-details").appendChild(newDiv);
  
    // set total price
    const ticketPrice = getElementValueById("seat-price");
    const totalPrice = getElementValueById("total-price");
    const finalTotalPrice = ticketPrice + totalPrice;
    setElementValueById("total-price", finalTotalPrice);
  
    // set grand total
    setElementValueById("grand-total", finalTotalPrice);
  
    //   increase seat count
    const seatCount = getElementValueById("selected-seat");
    const totalSeatCount = seatCount + 1;
    setElementValueById("selected-seat", totalSeatCount);
  
    document
      .getElementById("seat-number-a2")
      .removeEventListener("click", preventDoubleClickA2);
  }
  
  document
    .getElementById("seat-number-a2")
    .addEventListener("click", preventDoubleClickA2);
  
  // // seat a3
  function preventDoubleClickA3() {
    //   add color
    setBackgroundColorById("seat-number-a3");
  
    // decrease the seat amount
    const totalSeat = getElementValueById("seat-count");
    const seatLeft = totalSeat - 1;
    setElementValueById("seat-count", seatLeft);
  
    const seatName = getElementNameById("a3");
    const newDiv = document.createElement("div");
  
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
  
    p1.textContent = seatName;
    p2.textContent = "Economy";
    p3.textContent = "550";
  
    p3.id = "seat-price";
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
  
    newDiv.classList.add("flex", "justify-between", "py-4", "text-gray-400");
  
    document.getElementById("seat-details").appendChild(newDiv);
  
    // set total price
    const ticketPrice = getElementValueById("seat-price");
    const totalPrice = getElementValueById("total-price");
    const finalTotalPrice = ticketPrice + totalPrice;
    setElementValueById("total-price", finalTotalPrice);
  
    // set grand total
    setElementValueById("grand-total", finalTotalPrice);
  
    //   increase seat count
    const seatCount = getElementValueById("selected-seat");
    const totalSeatCount = seatCount + 1;
    setElementValueById("selected-seat", totalSeatCount);
  
    document
      .getElementById("seat-number-a3")
      .removeEventListener("click", preventDoubleClickA3);
  }
  
  document
    .getElementById("seat-number-a3")
    .addEventListener("click", preventDoubleClickA3);
  
  // // seat a4
  function preventDoubleClickA4() {
    //   add color
    setBackgroundColorById("seat-number-a4");
  
    // decrease the seat amount
    const totalSeat = getElementValueById("seat-count");
    const seatLeft = totalSeat - 1;
    setElementValueById("seat-count", seatLeft);
  
    const seatName = getElementNameById("a4");
    const newDiv = document.createElement("div");
  
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
  
    p1.textContent = seatName;
    p2.textContent = "Economy";
    p3.textContent = "550";
  
    p3.id = "seat-price";
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
  
    newDiv.classList.add("flex", "justify-between", "py-4", "text-gray-400");
  
    document.getElementById("seat-details").appendChild(newDiv);
  
    // set total price
    const ticketPrice = getElementValueById("seat-price");
    const totalPrice = getElementValueById("total-price");
    const finalTotalPrice = ticketPrice + totalPrice;
    setElementValueById("total-price", finalTotalPrice);
  
    // set grand total
    setElementValueById("grand-total", finalTotalPrice);
  
    //   increase seat count
    const seatCount = getElementValueById("selected-seat");
    const totalSeatCount = seatCount + 1;
    setElementValueById("selected-seat", totalSeatCount);
  
    document
      .getElementById("seat-number-a4")
      .removeEventListener("click", preventDoubleClickA4);
  }
  
  document
    .getElementById("seat-number-a4")
    .addEventListener("click", preventDoubleClickA4);
  
  // // seat b1
  function preventDoubleClickB1() {
    //   add color
    setBackgroundColorById("seat-number-b1");
  
    // decrease the seat amount
    const totalSeat = getElementValueById("seat-count");
    const seatLeft = totalSeat - 1;
    setElementValueById("seat-count", seatLeft);
  
    const seatName = getElementNameById("b1");
    const newDiv = document.createElement("div");
  
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
  
    p1.textContent = seatName;
    p2.textContent = "Economy";
    p3.textContent = "550";
  
    p3.id = "seat-price";
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
  
    newDiv.classList.add("flex", "justify-between", "py-4", "text-gray-400");
  
    document.getElementById("seat-details").appendChild(newDiv);
  
    // set total price
    const ticketPrice = getElementValueById("seat-price");
    const totalPrice = getElementValueById("total-price");
    const finalTotalPrice = ticketPrice + totalPrice;
    setElementValueById("total-price", finalTotalPrice);
  
    // set grand total
    setElementValueById("grand-total", finalTotalPrice);
  
    //   increase seat count
    const seatCount = getElementValueById("selected-seat");
    const totalSeatCount = seatCount + 1;
    setElementValueById("selected-seat", totalSeatCount);
  
    document
      .getElementById("seat-number-b1")
      .removeEventListener("click", preventDoubleClickB1);
  }
  
  document
    .getElementById("seat-number-b1")
    .addEventListener("click", preventDoubleClickB1);
  
  // // seat B2
  function preventDoubleClickB2() {
    //   add color
    setBackgroundColorById("seat-number-b2");
  
    // decrease the seat amount
    const totalSeat = getElementValueById("seat-count");
    const seatLeft = totalSeat - 1;
    setElementValueById("seat-count", seatLeft);
  
    const seatName = getElementNameById("b2");
    const newDiv = document.createElement("div");
  
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
  
    p1.textContent = seatName;
    p2.textContent = "Economy";
    p3.textContent = "550";
  
    p3.id = "seat-price";
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
  
    newDiv.classList.add("flex", "justify-between", "py-4", "text-gray-400");
  
    document.getElementById("seat-details").appendChild(newDiv);
  
    // set total price
    const ticketPrice = getElementValueById("seat-price");
    const totalPrice = getElementValueById("total-price");
    const finalTotalPrice = ticketPrice + totalPrice;
    setElementValueById("total-price", finalTotalPrice);
  
    // set grand total
    setElementValueById("grand-total", finalTotalPrice);
  
    //   increase seat count
    const seatCount = getElementValueById("selected-seat");
    const totalSeatCount = seatCount + 1;
    setElementValueById("selected-seat", totalSeatCount);
  
    document
      .getElementById("seat-number-b2")
      .removeEventListener("click", preventDoubleClickB2);
  }
  
  document
    .getElementById("seat-number-b2")
    .addEventListener("click", preventDoubleClickB2);
  
  // // seat b3
  function preventDoubleClickB3() {
    //   add color
    setBackgroundColorById("seat-number-b3");
  
    // decrease the seat amount
    const totalSeat = getElementValueById("seat-count");
    const seatLeft = totalSeat - 1;
    setElementValueById("seat-count", seatLeft);
  
    const seatName = getElementNameById("b3");
    const newDiv = document.createElement("div");
  
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
  
    p1.textContent = seatName;
    p2.textContent = "Economy";
    p3.textContent = "550";
  
    p3.id = "seat-price";
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
  
    newDiv.classList.add("flex", "justify-between", "py-4", "text-gray-400");
  
    document.getElementById("seat-details").appendChild(newDiv);
  
    // set total price
    const ticketPrice = getElementValueById("seat-price");
    const totalPrice = getElementValueById("total-price");
    const finalTotalPrice = ticketPrice + totalPrice;
    setElementValueById("total-price", finalTotalPrice);
  
    // set grand total
    setElementValueById("grand-total", finalTotalPrice);
  
    //   increase seat count
    const seatCount = getElementValueById("selected-seat");
    const totalSeatCount = seatCount + 1;
    setElementValueById("selected-seat", totalSeatCount);
  
    document
      .getElementById("seat-number-b3")
      .removeEventListener("click", preventDoubleClickB3);
  }
  
  document
    .getElementById("seat-number-b3")
    .addEventListener("click", preventDoubleClickB3);
  
  // // seat b4
  function preventDoubleClickB4() {
    //   add color
    setBackgroundColorById("seat-number-b4");
  
    // decrease the seat amount
    const totalSeat = getElementValueById("seat-count");
    const seatLeft = totalSeat - 1;
    setElementValueById("seat-count", seatLeft);
  
    const seatName = getElementNameById("b4");
    const newDiv = document.createElement("div");
  
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
  
    p1.textContent = seatName;
    p2.textContent = "Economy";
    p3.textContent = "550";
  
    p3.id = "seat-price";
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
  
    newDiv.classList.add("flex", "justify-between", "py-4", "text-gray-400");
  
    document.getElementById("seat-details").appendChild(newDiv);
  
    // set total price
    const ticketPrice = getElementValueById("seat-price");
    const totalPrice = getElementValueById("total-price");
    const finalTotalPrice = ticketPrice + totalPrice;
    setElementValueById("total-price", finalTotalPrice);
  
    // set grand total
    setElementValueById("grand-total", finalTotalPrice);
  
    //   increase seat count
    const seatCount = getElementValueById("selected-seat");
    const totalSeatCount = seatCount + 1;
    setElementValueById("selected-seat", totalSeatCount);
  
    document
      .getElementById("seat-number-b4")
      .removeEventListener("click", preventDoubleClickB4);
  }
  
  document
    .getElementById("seat-number-b4")
    .addEventListener("click", preventDoubleClickB4);
  
  // coupon part starts
  const couponApply = document.getElementById("coupon-apply");
  
  couponApply.addEventListener("click", function disappearApply() {
    const coupon = document.getElementById("coupon");
    const couponCode = coupon.value;
  
    if (couponCode === "NEW15" || couponCode === "Couple 20") {
      const couponField = document.getElementById("coupon-field");
  
      if (couponCode === "NEW15") {
        // give the discount
        const grandTotal = getElementValueById("grand-total");
        const discountAmount = (grandTotal * 15) / 100;
        const finalGrandTotal = grandTotal - discountAmount;
  
        // set grand total
        setElementValueById("grand-total", finalGrandTotal);
        console.log(finalGrandTotal);
  
        // hide the input field
  
        couponField.classList.add("hidden");
  
        // give discount amount
        const discountField = document.getElementById("discount-amount");
        const discountText = document.createElement("p");
        discountText.textContent = "(-) Off 15% ";
        discountField.appendChild(discountText);
      }
      if (couponCode === "Couple 20") {
        // give the discount
        const grandTotal = getElementValueById("grand-total");
        const discountAmount = (grandTotal * 20) / 100;
        const finalGrandTotal = grandTotal - discountAmount;
  
        // set grand total
        setElementValueById("grand-total", finalGrandTotal);
        console.log(finalGrandTotal);
  
        // hide the input field
  
        couponField.classList.add("hidden");
  
        // give discount amount
        const discountField = document.getElementById("discount-amount");
        const discountText = document.createElement("p");
        discountText.textContent = "(-) Off 20% ";
        discountField.appendChild(discountText);
      }
    } else {
      // give invalid message
      const invalidCouponField = document.getElementById("invalid-coupon");
      const invalidCoupon = document.createElement("p");
      invalidCoupon.textContent = "*Invalid Coupon";
      invalidCouponField.appendChild(invalidCoupon);
      document
        .getElementById("coupon-apply")
        .removeEventListener("click", disappearApply);
    }
  });
  
  // utility
  function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-green-400");
  }
  
  function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
  }
  
  function getElementNameById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return elementText;
  }
  
  function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
  }