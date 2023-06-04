const firstPage = document.getElementById("firstPage");
const lastPage = document.getElementById("lastPage");
const values = document.getElementById("values");
const errorMessage = document.getElementById("error-message");
const totalPages = document.getElementById("totalPages");
const numberOfNeeds = document.getElementById("numberOfNeeds");
const printPageNumber = document.getElementById("printPageNumber");
const frontPage = document.getElementById("front-page");
const backPage = document.getElementById("back-page");

function errorMessageFunc() {
  errorMessage.style.display = "block";

  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 7000);
}

values.addEventListener("click", () => {
  frontPage.value = ``;
  backPage.value = ``;
  if (firstPage.value > 0 || lastPage.value > firstPage.value) {
    totalPages.value = lastPage.value - firstPage.value + 1;
    if (totalPages.value % 4 === 0) {
      numberOfNeeds.value = 0;
    } else {
      numberOfNeeds.value = 4 - (totalPages.value % 4);
    }
    printPageNumber.value = (+totalPages.value + +numberOfNeeds.value) / 4;
    if (totalPages.value % 4 === 0) {
      let frontArr = [];
      let backArr = [];
      let newLastPage = +lastPage.value;
      let newFirstPage = +firstPage.value;
      for (let i = 0; i < +totalPages.value / 4; i++) {
        frontArr.push(newLastPage);
        frontArr.push(newFirstPage);
        newLastPage = newLastPage - 2;
        newFirstPage = newFirstPage + 2;
      }
      for (let i = 0; i < +totalPages.value / 4; i++) {
        backArr.push(newLastPage);
        backArr.push(newFirstPage);
        newLastPage = newLastPage - 2;
        newFirstPage = newFirstPage + 2;
      }
      frontArr.forEach((item) => {
        frontPage.value += `${item},`;
      });
      backArr.forEach((item) => {
        backPage.value += `${item},`;
      });
    } else {
      errorMessageFunc();
    }
  } else {
    errorMessageFunc();
  }
});
