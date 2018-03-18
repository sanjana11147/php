var emailPattern = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
var email = document.forms['userRegForm'].email;
var password = document.forms['userRegForm'].password;
var passwordConfirm = document.forms[0].passwordConfirm;
var Name = document.forms['userRegForm'].Name;
var emailLengthPattern = new RegExp($(email).attr('pattern'));
var passwordPattern = new RegExp($(password).attr('pattern'));

$('input[required]').popover({
  placement: 'bottom',
  container: 'body',
  trigger: 'manual',
  selector: 'true',
  content: function() {
  return $(this).attr('title');
  },
  template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
}).focus(function() {
  $(this).popover('hide');
});

function validateForm(form) {
  if (!emailPattern.test(email.value) || !emailLengthPattern.test(email.value)) {
    $(email).popover('show');
    return false;
  } else {
    $(email).addClass('valid')
  }

  if (!passwordPattern.test(password.value)) {
    $(password).popover('show');
    return false;
   }

  if (!passwordPattern.test(passwordConfirm.value)) {
   $(passwordConfirm).popover('show');
   return false;
  }

  if (password.value !== passwordConfirm.value) {
   $(passwordConfirm).popover('show');
   return false;
  }

  alert('Submitted successfully');
  return false;
}

function validateEmail(input) {
  if (emailPattern.test(input.value) && emailLengthPattern.test(input.value)) {
    $(input).addClass('valid')
  } else {
    $(input).removeClass('valid');
  }
}

function validatePassword(input) {
  if (input.setCustomValidity) {
    input.setCustomValidity('');
    if (input.validity && !input.validity.valid) {
      input.setCustomValidity(input.title);
    }
   }
  if (passwordConfirm.setCustomValidity) {
    if (password.value !== passwordConfirm.value) {
      passwordConfirm.setCustomValidity(passwordConfirm.title);
    } else {
      passwordConfirm.setCustomValidity('');
    }
  } else {
    if (passwordPattern.test(input.value)) {
      $(input).addClass('valid');
      if (password.value === passwordConfirm.value) {
        $(passwordConfirm).addClass('valid');
      } else {
        $(passwordConfirm).removeClass('valid');
      }
    } else {
      $(input).removeClass('valid');
    }
  }
}

function validateRequired(input) {
  if (input.setCustomValidity) {
    input.setCustomValidity('');
    if (input.validity && !input.validity.valid) {
      input.setCustomValidity(input.title);
    }
  }
  if (input.value.length > 0) {
    $(input).addClass('valid');
  } else {
    $(input).removeClass('valid');
  }
}
