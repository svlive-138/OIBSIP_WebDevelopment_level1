// Typewriter effect
// const typewriter = document.getElementById('typewriter');
// const ds = [
//   "Full-stack Developer 💻",
//   "UI/UX Enthusiast 🎨",
//   "Hackathon Warrior 🏆",
//   "Automation Ninja 🤖"
// ];
// let i = 0, j = 0, current = "", isDeleting = false;

// function type() {
//   if (i < ds.length) {
//     if (!isDeleting && j <= ds[i].length) {
//       current = ds[i].substring(0, j++);
//     } else if (isDeleting && j >= 0) {
//       current = ds[i].substring(0, j--);
//     }
//     typewriter.innerHTML = current;
//     if (!isDeleting && j === ds[i].length) {
//       isDeleting = true;
//       setTimeout(type, 10000);
//     } else if (isDeleting && j === 0) {
//       isDeleting = false;
//       i = (i + 1) % ds.length;
//     }
//     setTimeout(type, isDeleting ? 100: 200);
//   }
// }
// type();

// // Scroll reveal
// ScrollReveal().reveal('section', {
//   origin: 'bottom',
//   distance: '50px',
//   duration: 800,
//   reset: true
// });

// // Dark mode toggle
// document.getElementById('darkToggle').onclick = () => {
//   document.body.classList.toggle('dark');
// };

  // Dark Mode Toggle//
  
  const toggle = document.getElementById('darkToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Smooth horizontal scroll on wheel
  document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('wheel', e => {
      e.preventDefault();
      carousel.scrollLeft += e.deltaY;
    });
  });

