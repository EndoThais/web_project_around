export function openPopup(popup) {
  //remover o display none;
  popup.classList.add("popup_opened");
  document.addEventListener("click", function (evt) {
    console.log(evt.target);
    if (evt.target.classList.contains("popup")) {
      popupProfile.classList.remove("popup_opened");
    }
  });
}

export function closePopup() {
  const buttonCloseProfile = document.querySelector(".popup__btn-close");
  buttonCloseProfile.addEventListener("click", function () {
    popupProfile.classList.remove("popup_opened");
    //elemento HTML popup para remover o display none;
  });
}
