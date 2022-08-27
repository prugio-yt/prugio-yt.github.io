const popupBtn = document.getElementById('popup-btn');
const closeBtn = document.getElementById('close-popup');
const popupWrapper = document.getElementById('popup-wrapper');
const popupBody = document.getElementById('popup-body');

closeBtn.addEventListener("click", () => {
    popupWrapper.classList.add('popup-wrapper-hide');
    popupWrapper.classList.remove('popup-wrapper-show');
    popupBody.scrollTop = 0;
    document.body.classList.remove('scroll-stop');
})

popupBtn.addEventListener("click", () => {
    document.body.classList.add('scroll-stop');
    popupWrapper.classList.add('popup-wrapper-show');
    popupWrapper.classList.remove('popup-wrapper-hide');
})