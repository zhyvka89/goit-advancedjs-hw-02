import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', e => handleFormSubmit(e));

function handleFormSubmit(e) {
  e.preventDefault();

  const delayMs = e.target.elements.delay.value;
  const state = e.target.elements.state.value;

  makePromise(delayMs, state)
    .then(value =>
      iziToast.show({
        title: 'Success',
        message: `✅ Fulfilled promise in ${value}ms`,
        position: 'topRight',
        color: 'green',
      })
    )
    .catch(error =>
      iziToast.show({
        title: 'Error',
        message: `❌ Rejected promise in ${error}ms`,
        position: 'topRight',
        color: 'red',
      })
    );
}

function makePromise(delayMs, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delayMs);
      }
      if (state === 'rejected') {
        reject(delayMs);
      }
    }, delayMs);
  });
}
