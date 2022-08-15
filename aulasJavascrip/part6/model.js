


const buttomOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttomOpenModal.onclick = function() {
    console.log('ee')
    modalWrapper.classList.remove('invisible')
}

document.addEventListener("keydown" , function(event) {
    const isEscKey = event.key === 'Escape'
   
    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})