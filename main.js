let hidden = document.querySelector('.hidden');
let i = document.querySelector('.i');
let ul = document.querySelector('.ul');

hidden.addEventListener('click', function(){
    i.classList.toggle('fa-xmark')
    if(
        ul.classList.contains('blockgroup')
    ){
        ul.classList.remove('blockgroup')
    } else {
        ul.classList.add('blockgroup')
    }
})