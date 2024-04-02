const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const address = document.querySelector('#address').value;
  const gpa = document.querySelector('#gpa').value;
  const scholarship = document.querySelector('#scholarship').value;

  // Validate the form data

  if (name === '') {
    alert('Please enter your name');
    return;
  }

  if (email === '') {
    alert('Please enter your email');
    return;
  }

  if (phone === '') {
    alert('Please enter your phone number');
    return;
  }

  if (address === '') {
    alert('Please enter your address');
    return;
  }

  if (gpa === '') {
    alert('Please enter your GPA');
    return;
  }

  if (scholarship === 'none') {
    alert('Please select a scholarship');
    return;
  }

  // Submit the form data

  const data = {
    name,
    email,
    phone,
    address,
    gpa,
    scholarship
  };

  // TODO: Submit the data to a server
});