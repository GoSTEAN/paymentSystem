const paymentTtype = document.getElementById("payment-type");
const paymentMessage = document.getElementById("payment-message");
const paymentForm = document.getElementById("payment-form");
const cvv = document.getElementById("cvv");
const paymentAmount = document.getElementById("payment-amount");
const expiryDate = document.getElementById("expiry-date");
const cardNumber = document.getElementById("card-number");
const cardholderName = document.getElementById("cardholder-name");
const studentNames = document.getElementById("student-name");
const matNumber = document.getElementById("mat-num");


function setPaymentAmount() {
  if (paymentTtype.value === 'nascos_payment') {
    paymentAmount.value = 3000;
  } else if (paymentTtype.value === 'books') {
    paymentAmount.value = 12000;
  } else {
    paymentAmount.value = '';
  }
}



document.addEventListener("DOMContentLoaded", () => {
  if (paymentForm) {
    paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const cardDetail = {
          studentName: studentNames.value,
          matricNuumber: matNumber.value,
          cardName: cardholderName.value,
          number: cardNumber.value,
          cvvnum: cvv.value,
          date: expiryDate.value,
        }
      

      paymentMessage.textContent = `Thank you, ${cardDetail.studentName} with matric number of ${cardDetail.matricNuumber}! Your payment of ${paymentAmount.value} has been successfully processed.`;

      setTimeout(() => {
        paymentForm.reset();
      }, 2000);
    });
  }
});

paymentType.addEventListener('change', setPaymentAmount); // Update amount on payment type change



