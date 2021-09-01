const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener('click', function() {
        modal = document.querySelector('.modalbox');
        modal.classList.toggle('none')
})}