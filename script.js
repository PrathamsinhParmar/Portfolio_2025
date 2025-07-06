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



