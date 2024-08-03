requestIdleCallback(() => {
  createButtons();
  clickBtnRight();
  // updateButtonBrightness();
});

// event listener for main button
function clickBtnRight() {
  const btnRight = document.querySelector('.btn-right');

  if (btnRight) {
    btnRight.addEventListener('click', () => {
      const btnJumpExists = document.querySelector('.btn-jump');

      if (btnJumpExists) {
        showMistralPosts();
        fullUserPosts();
        removeBtnJump();
      } else {
        hideMistralPosts();
        shortUserPosts();
        btnJump();
        clickBtnJump();
      }
    });
  }
}

// event listener for buttons next to user's posts
function clickBtnJump() {
  document.addEventListener('click', function (event) {
    if (event.target.closest('.btn-jump')) {
      showMistralPosts();
      fullUserPosts();

      let nametagParent = event.target.closest(
        '.group.relative.flex.w-full.gap-4.border-l'
      );
      if (nametagParent) {
        requestAnimationFrame(() => {
          nametagParent.scrollIntoView({ behavior: 'instant' });
        });

        removeBtnJump();
      }
    }
  });
}

// hide Mistral's posts
function hideMistralPosts() {
  const mistralPosts = document.querySelectorAll(
    '.group.flex.w-full.gap-4:not(.relative)'
  );

  mistralPosts.forEach((post) => {
    post.classList.add('hidden');
  });
}

// show Mistral's posts
function showMistralPosts() {
  const mistralPosts = document.querySelectorAll(
    '.group.flex.w-full.gap-4:not(.relative)'
  );

  mistralPosts.forEach((post) => {
    post.classList.remove('hidden');
  });
}

// shorten user posts
function shortUserPosts() {
  const innerUserPosts = document.querySelectorAll(
    '.group.relative.flex.w-full.gap-4.border-l p'
  );

  innerUserPosts.forEach((innerUserPost) => {
    innerUserPost.classList.add('short-post');
  });
}

// restore user posts to full length
function fullUserPosts() {
  const innerUserPosts = document.querySelectorAll(
    '.group.relative.flex.w-full.gap-4.border-l p'
  );

  innerUserPosts.forEach((innerUserPost) => {
    innerUserPost.classList.remove('short-post');
  });
}

// remove btn-jump
function removeBtnJump() {
  const jumpButtons = document.querySelectorAll('.btn-jump');

  jumpButtons.forEach((button) => {
    button.parentElement.removeChild(button);
  });
}

// create container for the buttons, create buttons and give them classes
function createButtons() {
  const svgRight = `<svg class="btn-right" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M5 4v5.022a5.48 5.48 0 0 0-1 .185V4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H9.743c.253-.307.474-.642.657-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1m8.5 11h-2.522a5.586 5.586 0 0 0 0-1H13.5a.5.5 0 0 1 0 1m0-2h-2.707a5.467 5.467 0 0 0-.393-1h3.1a.5.5 0 0 1 0 1m0-2H9.743a5.533 5.533 0 0 0-1.08-1H13.5a.5.5 0 0 1 0 1m1.293-4L11 3.207V6.5a.5.5 0 0 0 .5.5zM5.5 19a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m-2.353-4.854l-.003.003a.498.498 0 0 0-.144.348v.006a.498.498 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L4.707 15H7.5a.5.5 0 0 0 0-1H4.707l1.147-1.146a.5.5 0 0 0-.708-.708z"/></svg>`;

  const containerContainer = document.createElement('div');
  containerContainer.className = 'container-container';

  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';
  btnContainer.innerHTML = svgRight;
  containerContainer.appendChild(btnContainer);
  document.body.appendChild(containerContainer);
}

// create buttons next to user's posts
function btnJump() {
  const userPosts = document.querySelectorAll(
    '.group.relative.flex.w-full.gap-4.border-l'
  );
  svgBtnJump = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h10.195a4.474 4.474 0 0 1 1.323-.732a1.51 1.51 0 0 1 .068-.268zm7.86 5.475a1.5 1.5 0 0 1-.274-.475H2.5a.5.5 0 0 0 0 1h8.775l-.007-.018a1.5 1.5 0 0 1-.908-.507m5.14.025a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1.5h-.551A3.487 3.487 0 0 0 16 11.051V10.5a.5.5 0 0 0-1 0v.551A3.487 3.487 0 0 0 12.051 14H11.5a.5.5 0 0 0 0 1h.551A3.487 3.487 0 0 0 15 17.949v.551a.5.5 0 0 0 1 0v-.551A3.487 3.487 0 0 0 18.949 15h.551a.5.5 0 0 0 0-1m-2.232 2.268a2.5 2.5 0 1 1-3.536-3.535a2.5 2.5 0 0 1 3.536 3.535"/></svg>`;

  userPosts.forEach((post) => {
    post.style.position = 'relative';

    const btnJump = document.createElement('div');
    btnJump.className = 'btn-jump';
    btnJump.innerHTML = svgBtnJump;
    post.appendChild(btnJump);
  });
}

// adjust button hover brighteness dependong on dark/light theme
function updateButtonBrightness() {
  const htmlElement = document.querySelector('html');
  const styleElement = document.createElement('style');
  document.head.appendChild(styleElement);

  function applyStyles() {
    const isDark = htmlElement.classList.contains('dark');
    const isLight = htmlElement.classList.contains('light');
    let css = '';

    if (isDark) {
      css = `
              .btn-jump svg:hover,
              .btn-right:hover,
              .btn-tobottom:hover,
              .btn-tomid:hover,
              .btn-totop:hover {
                  filter: brightness(150%);
                  transition: 0.2s;
              }
          `;
    } else if (isLight) {
      css = `
              .btn-jump svg:hover,
              .btn-right:hover,
              .btn-tobottom:hover,
              .btn-tomid:hover,
              .btn-totop:hover {
                  filter: brightness(50%);
                  transition: 0.2s;
              }
          `;
    }

    styleElement.textContent = css;
  }

  // mutation observer for switching dark/light theme after initial load
  const observer = new MutationObserver(applyStyles);
  observer.observe(htmlElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  applyStyles();
}
