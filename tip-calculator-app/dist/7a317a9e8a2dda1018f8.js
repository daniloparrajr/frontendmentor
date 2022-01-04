import{getTipAmountPerPerson,getTotalPerPerson,getTip,displayErrorMessage,removeErrorMessages,setFieldState,updateFormState,resetForm}from"./modules/helper.js";import"../scss/main.scss";document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#bill"),t=document.querySelector("#number-of-people"),r=document.querySelectorAll('input[name="tip"]'),n=document.querySelector("#tip-custom"),i=document.querySelector("#tip-form"),o=document.querySelector("#tip-amount-per-person"),s=document.querySelector("#total-per-person"),a=document.querySelector("#tipFieldSet"),d=function(){var r=getTipAmountPerPerson(e.value,getTip(),t.value);o.textContent="$".concat(r.toFixed(2)),s.textContent="$".concat(getTotalPerPerson(e.value,t.value,r).toFixed(2))};t.addEventListener("input",d),e.addEventListener("input",d),n.addEventListener("input",d),r.forEach((function(e){e.addEventListener("input",(function(){n.value="",d(),updateFormState()}))})),i.addEventListener("reset",(function(){o.textContent="$0.00",s.textContent="$0.00",resetForm(),i.querySelector('input[type="reset"]').setAttribute("disabled","disabled")})),i.querySelectorAll("input").forEach((function(e){e.addEventListener("input",(function(){updateFormState()}))})),n.addEventListener("input",(function(){r.forEach((function(e){e.checked=!1}))})),n.addEventListener("input",(function(){var e=a.getAttribute("id"),t=n.getAttribute("id");n.validity.valid?(setFieldState("success",t),removeErrorMessages(e)):(setFieldState("error",t),displayErrorMessage(e,n.validationMessage,"beforeend"))})),e.addEventListener("input",(function(){var t=e.getAttribute("id");e.validity.valid?(setFieldState("success",t),removeErrorMessages(t)):(setFieldState("error",t),displayErrorMessage(t,e.validationMessage))})),t.addEventListener("input",(function(){var e=t.getAttribute("id");t.validity.valid?(setFieldState("success",e),removeErrorMessages(e)):(setFieldState("error",e),displayErrorMessage(e,t.validationMessage))}))}));