(function () {
  function detectColorScheme() {
    var theme = "light";

    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "dark") {
        var theme = "dark";
      }
    } else if (!window.matchMedia) {
      return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      var theme = "dark";
    }

    if (theme == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
  detectColorScheme();

  const switchBtn = document.querySelectorAll('.buttons-wrapper');

  function switchThemeLight(e) {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
  function switchThemeDark(e) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }

  switchBtn.forEach(elem => {
    elem.addEventListener('click', () => {
      if (localStorage.getItem('theme') == null) {
        switchThemeDark();
      }
      else if (localStorage.getItem('theme') == 'light') {
        switchThemeDark();
      }
      else {
        switchThemeLight();
      }
    })
  })
})();

function casesTab() {
  const casesButton = document.querySelectorAll('.cases-button');
  const casesTab = document.querySelectorAll('.cases__tab');

  function tabs(casesTab, casesButton) {
    casesButton.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
        for (let i = 0; i < casesButton.length; i++) {
          casesButton[i].classList.remove('tabs-navigation__item--active');
          e.target.classList.add('tabs-navigation__item--active');
          casesTab[i].classList.remove('tab--active');
        }
        casesTab[index].classList.add('tab--active');
      })
    })
  }

  tabs(casesTab, casesButton);
}
casesTab()

function tabBody() {
  function tabs(tabItem, tabNavItem) {
    tabNavItem.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
        for (let i = 0; i < tabNavItem.length; i++) {
          tabNavItem[i].classList.remove('tabs-navigation__item--active');
          e.target.classList.add('tabs-navigation__item--active');
          tabItem[i].classList.remove('tab--active');
        }
        tabItem[index].classList.add('tab--active');
      })
    })
  }

  tabs(tabItem, tabNavItem);
}