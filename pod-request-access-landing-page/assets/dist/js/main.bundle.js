(()=>{var e=function(e){var i=e.querySelector("#email");if(a(e),i.classList.remove("invalid","valid"),i.checkValidity())i.classList.add("valid"),i.classList.remove("invalid");else{var s=i.validationMessage;i.validity.valueMissing&&(s="Please fill out the email field."),i.validity.typeMismatch&&(s="Oops! please check your email."),i.insertAdjacentHTML("afterend",'<p class="access-form__error-message">'.concat(s,"</p>")),i.classList.add("invalid"),i.classList.remove("valid")}},a=function(e){e.querySelectorAll(".access-form__error-message").forEach((function(e){e.remove()}))};document.addEventListener("DOMContentLoaded",(function(){var a=document.querySelector("#accessForm"),i=a.querySelector("#email");a.addEventListener("submit",(function(i){i.preventDefault(),e(a)})),i.addEventListener("input",(function(){e(a)}))}))})();