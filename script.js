 let skill = document.querySelector('#skill')
    let education = document.querySelector('#edu')

    let skillsClass = document.querySelector('.skills')
    let educationClass = document.querySelector('.education')


    skill.addEventListener('click', function () {
        skillsClass.style.display = 'block';
        educationClass.style.display = 'none';
        skillsClass.style.transition = '0.3s all'
        skillsClass.style.animation = ''
    })

    education.addEventListener('click', function () {
        educationClass.style.display = 'block';
        skillsClass.style.display = 'none';
        educationClass.style.transition = '0.3s all'

    })



    const form = document.querySelector('.contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = form.action;
        const response = await fetch(action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.textContent = "Thank you! Your message has been sent.";
            form.reset();
        } else {
            status.textContent = "Oops! There was a problem submitting your form.";
        }
    });
