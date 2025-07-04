const codes = document.querySelectorAll('.code');

function validationForEmail() {
  codes[0].focus();
  codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
      codes[idx].value = '';
      if (e.key >= 0 && e.key <= 9) {
        setTimeout(() => codes[idx + 1].focus(), 10);
      } else if (e.key === 'Backspace') {
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
    });
  });
}

function init() {
  validationForEmail();
}

document.addEventListener('DOMContentLoaded', init);
