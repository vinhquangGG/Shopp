const dnhapBtn = document.querySelector('.Login_link');
const dkiBtn = document.querySelector('.Register_link');
const dki = document.querySelector('.Register_form');
const dnhap = document.querySelector('.Login_form');
dnhapBtn.onclick = function(){
    dki.style.display = 'none';
    dnhap.style.display= 'flex';
}

dkiBtn.onclick = function(){
    dnhap.style.display = 'none';
    dki.style.display= 'flex';
}

// Mobile

const dki_mobile = document.querySelector('.dki');
const dnhap_mobile = document.querySelector('.dnhap');
dnhap_mobile.onclick = function(){
    dki.style.display = 'none';
    dnhap.style.display= 'flex';
}

dki_mobile.onclick = function(){
    dnhap.style.display = 'none';
    dki.style.display= 'flex';
}
function Validate(inputElement, rule){
    var messageElement = inputElement.parentElement.querySelector(".message");
    var erorrM  = rule.test(inputElement.value);
    if(erorrM){
        messageElement.innerText = erorrM;
    }
    else {
        messageElement.innerText = "";
    }
}
function Validator(options){
    
    var formElement = document.querySelector(options.form);
    if(formElement)
    {
        formElement.onsubmit = function(e)
        {
            e.preventDefault();
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                Validate(inputElement, rule)
            })
        }
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement){
                inputElement.onblur = function() {
                    
                }
                inputElement.oninput = function() {
                    var messageElement = inputElement.parentElement.querySelector('.message ');
                    messageElement.innerText = '';
                }
            }
        })
    }
}

Validator.isRequired = function(selector){
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined: "Vui lòng không để trống"
        }
    }
}
Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value) {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(value) ? undefined : "Email không chính xác"
        }
    }
}
Validator.isPass = function(selector){
    return {
        selector: selector,
        test: function(value) {
            var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            return value.match(decimal) ? undefined : "1 hoa, 1 thường, 1 số, 1 đặc biệt"
        }
    }
}