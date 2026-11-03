const statusText = document.querySelector('[data-status]');
const footerYear = document.querySelector('[data-year]');

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

const statusMessages = [
  'Learning • Building • Solving',
  'ML • Java • SQL',
  'Researching • Designing • Coding',
  'Looking ahead • Growing • Creating'
];

let statusIndex = 0;

if (statusText) {
  setInterval(() => {
    statusIndex = (statusIndex + 1) % statusMessages.length;
    statusText.textContent = statusMessages[statusIndex];
  }, 2200);
}

const skillChips = document.querySelectorAll('.skill-chip');

skillChips.forEach((chip) => {
  chip.addEventListener('mouseenter', () => {
    chip.style.borderColor = 'rgba(255, 255, 255, 0.55)';
  });

  chip.addEventListener('mouseleave', () => {
    chip.style.borderColor = 'rgba(255, 255, 255, 0.18)';
  });
});
