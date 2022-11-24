// Just giving main section a minimum height calculated by viewport minus header and footer heights, nothing special:

const setMainSectionHeight = () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  main.style.minHeight = `calc(100vh - ${
    header.offsetHeight + footer.offsetHeight
  }px)`;
};

addEventListener("resize", (event) => {
  setMainSectionHeight();
});

setMainSectionHeight();
