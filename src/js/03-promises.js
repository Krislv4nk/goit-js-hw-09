import Notiflix from 'notiflix';



// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`Fulfilled promise ${position}`, `Resolved in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`Rejected promise ${position}`, `Rejected in ${delay}ms`);
//   });




// це треш) але дуже цікаво !!!

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  // console.log("Form submitted");
  const amount = parseInt(document.getElementById("amount").value);
const delay = parseFloat(document.getElementById("delay").value);
const step = parseFloat(document.getElementById("step").value); 

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position}, Resolved in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position}, Rejected in ${delay}ms`);
      });
  }
});






