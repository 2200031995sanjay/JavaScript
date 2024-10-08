const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function() {

    if(mycheckbox.checked){
          subresult.textContent = `You are Subscribed`;


    }else {
        subresult.textContent = `You are Not Subscribed`;
    }

    if(visabtn.checked){
        paymentresult.textContent = `You are paying with visa`;
    }else if(mastercardbtn.checked){
        paymentresult.textContent= `You are paying with master Card`;
    }else if(paypalbtn.checked){
        paymentresult.textContent=`You are Paying with Paypal card`
    }else
    {
        paymentresult.textContent= `you must select a payment type`;
    }

}

