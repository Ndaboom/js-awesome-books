const optionsMenu = document.querySelectorAll('.menu-option');
const aboutView = document.querySelector('.about-view');
const listView = document.querySelector('.list-view');
const formView = document.querySelector('.books-crud');
const homeTitle = document.querySelector('.home-title');
const screensArr = [listView, formView, aboutView];

function removeActive() {
  optionsMenu.forEach((option) => {
    option.classList.remove('blue');
  });
}

function manageScreens(i) {
  screensArr.forEach((option) => {
    option.classList.add('hidden');
  });
  if (i === 0) {
    homeTitle.classList.remove('hidden');
  } else {
    homeTitle.classList.add('hidden');
  }
  screensArr[i].classList.remove('hidden');
}

// Add click listener to menu options
optionsMenu.forEach((option, index) => {
  option.addEventListener('click', () => {
    removeActive();
    manageScreens(index);
    option.classList.add('blue');
  });
});