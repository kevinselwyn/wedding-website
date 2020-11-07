// wedding date
((() => {
    const wedding_date_content = document.querySelector('.section--hero .section__content');
    const wedding_date_heading = wedding_date_content.querySelector('h1');
    const wedding_date_el = wedding_date_content.querySelector('time');
    const wedding_date = new Date(wedding_date_el.innerHTML);
    const days_until_el = document.createElement('p');
    const days_until = Math.round((wedding_date.getTime() - Date.now()) / (60 * 60 * 24 * 1000));

    if (days_until < 0) {
        wedding_date_heading.innerHTML = 'We got married!';

        return;
    }

    days_until_el.innerHTML = ((() => {
        switch (days_until) {
        case 0:
            return 'It\'s the day of the show, y\'all!';
        case 1:
            return 'Tomorrow\'s the day!'
        default:
            return `${days_until} days to go!`;
        }
    })());

    wedding_date_content.appendChild(days_until_el);
})());

// carousel
((() => {
    const slides = [...document.querySelectorAll('.section__slide')];
    const controls = [...document.querySelectorAll('.section__control')];
    let slide_index = 0;
    let tm = null;
    const start_slideshow = () => {
        tm = clearInterval(tm);
        tm = setInterval(() => {
            slide_index = (slide_index + 1) % slides.length;

            show_slide();
        }, 5000);
    };
    const show_slide = () => {
        slides.forEach((slide, i) => {
            if (i === slide_index) {
                slide.classList.add('is-showing');
            } else {
                slide.classList.remove('is-showing');
            }
        });

        controls.forEach((control, i) => {
            if (i === slide_index) {
                control.classList.add('is-selected');
            } else {
                control.classList.remove('is-selected');
            }
        });
    };

    controls.forEach((control, i) => {
        control.addEventListener('click', () => {
            slide_index = i;

            show_slide();
            start_slideshow();
        });
    });

    start_slideshow();
})());

// footer
((() => {
    const footer = document.querySelector('.footer');

    footer.addEventListener('click', () => {
        footer.classList.add('is-selected');
    });
})());
