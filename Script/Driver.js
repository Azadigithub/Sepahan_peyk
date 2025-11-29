  document.querySelector('button').addEventListener('click', function(e) {
    e.preventDefault();

    const formData = new FormData();
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
      if (input.type === 'file') {
        if (input.files[0]) formData.append(input.previousElementSibling.innerText, input.files[0]);
      } else {
        formData.append(input.previousElementSibling.innerText, input.value);
      }
    });

    console.log("LOGGED DATA:");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ', pair[1]);
    }

    fetch('https://your-server.com/api/register-driver', {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(data => alert('اطلاعات با موفقیت ارسال شد'))
      .catch(err => alert('خطا در ارسال اطلاعات'));
  });