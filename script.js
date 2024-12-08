const form=document.getElementById("form"),date=document.getElementById("date"),people=document.getElementById("people"),time=document.getElementById("time"),email=document.getElementById("email"),phone=document.getElementById("phone");form.addEventListener("submit",function(e){e.preventDefault();let t=validateInputs(),r=document.querySelector(".message");r&&r.remove();let s=document.createElement("div");s.className="message",s.style.marginTop="20px",s.style.textAlign="center",t?(s.textContent="Table booked",s.style.color="green",form.reset()):(s.textContent="Please correct the highlighted errors.",s.style.color="red"),form.appendChild(s)});const validateInputs=()=>{let e=date.value.trim(),t=people.value.trim(),r=time.value.trim(),s=email.value.trim(),l=phone.value.trim(),i=!0;return""===e?(setError(date,"Date is required"),i=!1):setSuccess(date),""===t||0>=parseInt(t)?(setError(people,"Enter a valid number of people"),i=!1):setSuccess(people),""===r?(setError(time,"Time is required"),i=!1):setSuccess(time),""===s?(setError(email,"Email is required"),i=!1):isValidEmail(s)?setSuccess(email):(setError(email,"Provide a valid email address"),i=!1),""===l?(setError(phone,"Phone number is required"),i=!1):isValidPhone(l)?setSuccess(phone):(setError(phone,"Provide a valid phone number"),i=!1),i},setError=(e,t)=>{let r=e.parentElement,s=r.querySelector(".error");s.innerText=t,r.classList.add("error"),r.classList.remove("success")},setSuccess=e=>{let t=e.parentElement,r=t.querySelector(".error");r.innerText="",t.classList.add("success"),t.classList.remove("error")},isValidEmail=e=>{let t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())},isValidPhone=e=>{let t=/^\+?[0-9]{7,15}$/;return t.test(String(e))};