const popupBtn = document.getElementById('popup-btn');
const closeBtn = document.getElementById('close-popup');
const closeBtn2 = document.getElementById('close-popup2');
const popupWrapper = document.getElementById('popup-wrapper');
const popupWrapper2 = document.getElementById('popup-wrapper2');
const popupBody = document.getElementById('popup-body');

closeBtn.addEventListener("click", () => {
    popupWrapper.classList.add('popup-wrapper-hide');
    popupWrapper.classList.remove('popup-wrapper-show');
    popupBody.scrollTop = 0;
    document.body.classList.remove('scroll-stop');
})

closeBtn2.addEventListener("click", () => {
    popupWrapper2.classList.add('popup-wrapper-hide');
    popupWrapper2.classList.remove('popup-wrapper-show');
    popupBody.scrollTop = 0;
    document.body.classList.remove('scroll-stop');
})

popupBtn.addEventListener("click", () => {
    document.body.classList.add('scroll-stop');
    popupWrapper.classList.add('popup-wrapper-show');
    popupWrapper.classList.remove('popup-wrapper-hide');
})