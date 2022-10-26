// basket
const basketStarterEl = document.querySelector(".basket-starter");
const basketEl = basketStarterEl.querySelector(".basket");
const showBasket = () => basketEl.classList.add("show");
const hideBasket = () => basketEl.classList.remove("show");

basketStarterEl.addEventListener("click", (e) => {
  e.stopPropagation();
  if (basketEl.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});
basketEl.addEventListener("click", (e) => e.stopPropagation());
window.addEventListener("click", () => hideBasket());

// search
const searchStarterEl = document.querySelector(" .search-starter");
const searchWrapEl = document.querySelector(".search-wrap");
const searchCloserEl = document.querySelector(".search-closer");
const searchShadowEl = document.querySelector(".shadow");
const searchDelayEls = [...searchWrapEl.querySelectorAll("li")];
const searchInputEl = searchWrapEl.querySelector("input");
const headerEl = document.querySelector("header");
const headerMenuEls = [...headerEl.querySelectorAll("ul.menu > li")];

const showSearch = () => {
  headerEl.classList.add("searching");
  document.documentElement.classList.add("fixed");
  headerMenuEls.reverse().forEach((el, idx) => {
    el.style.transitionDelay = (idx * 0.4) / headerMenuEls.length + "s";
  });
  searchDelayEls.forEach((el, idx) => {
    el.style.transitionDelay = (idx * 0.4) / headerMenuEls.length + "s";
  });
  setTimeout(() => {
    searchInputEl.focus();
  }, 600);
};
const hideSearch = () => {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");
  headerMenuEls.reverse().forEach((el, idx) => {
    el.style.transitionDelay = (idx * 0.4) / headerMenuEls.length + "s";
  });
  searchDelayEls.reverse().forEach((el, idx) => {
    el.style.transitionDelay = (idx * 0.4) / headerMenuEls.length + "s";
  });
  searchDelayEls.reverse();
  searchInputEl.value = "";
};

searchStarterEl.addEventListener("click", () => showSearch());
searchCloserEl.addEventListener("click", () => hideSearch());
searchShadowEl.addEventListener("click", () => hideSearch());
