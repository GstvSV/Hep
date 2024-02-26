
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.scroll-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                behavior: 'smooth'
                });
            }
        });
    });
});

let checkbox = document.getElementById('checkbox-menu');
let menu = document.getElementById('menu');

function clickMenu(){
    if(checkbox.checked){
        menu.style.opacity='1';
        menu.style.transform = 'translate(0%)';

    }else{
        menu.style.opacity='0';
        menu.style.transform = 'translate(600%)';
    }

}