requestIdleCallback(() => {
  createButtons();
  clickBtnRight();
  goToTopMiddleBottom();
});

// event listener for main button
function clickBtnRight() {
  const btnRight = document.querySelector('.btn-right');

  if (btnRight) {
    btnRight.addEventListener('click', () => {
      const btnJumpExists = document.querySelector('.btn-jump');

      if (btnJumpExists) {
        animateVisibility();
        showMistralPosts();
        fullUserPosts();
        removeBtnJump();
      } else {
        animateVisibility();
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
      animateVisibility();
      showMistralPosts();
      fullUserPosts();

      let nametagParent = event.target.closest(
        '.group.relative.flex.w-full.gap-4.border-l'
      );
      if (nametagParent) {
        nametagParent.scrollIntoView({ behavior: 'instant' });
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
  // main button
  const svgRight = `<svg class="btn-right" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="11.5" cy="14.5" r="2.5"/><path d="M13.3 16.3L15 18"/></g></svg>`;

  // go to top
  const goTop = `<svg class="go-button go-top" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 3h14m-1 10l-6-6l-6 6m6-6v14"/></svg>`;

  // go to mid
  const goMid = `<svg class="go-button go-mid" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M7 10h10M7 14h10"/><circle cx="12" cy="12" r="10"/></g></svg>`;

  // go to bottom
  const goBottom = `<svg class="go-button go-bottom" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 17V3m-6 8l6 6l6-6m1 10H5"/></svg>`;

  const containerContainer = document.createElement('div');
  containerContainer.className = 'container-container';

  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';
  btnContainer.innerHTML = svgRight + goTop + goMid + goBottom;
  containerContainer.appendChild(btnContainer);
  document.body.appendChild(containerContainer);
}

// create buttons next to user's posts
function btnJump() {
  const userPosts = document.querySelectorAll(
    '.group.relative.flex.w-full.gap-4.border-l'
  );
  svgBtnJump = `<svg class="btn-jump" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M12 13V2l8 4l-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></g></svg>`;

  userPosts.forEach((post) => {
    post.style.position = 'relative';

    const btnJump = document.createElement('div');
    btnJump.innerHTML = svgBtnJump;
    post.appendChild(btnJump);
  });
}

// go to top, middle, and bottom of the conversation
function goToTopMiddleBottom() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.go-top')) {
      const postContainer = document.querySelector(
        '.flex.h-fit.w-full.flex-col.gap-5'
      );
      const firstPost = postContainer.firstElementChild;
      animateVisibility();
      firstPost.scrollIntoView({ behavior: 'instant', block: 'start' });
    }

    if (e.target.closest('.go-mid')) {
      const postContainer = document.querySelector(
        '.flex.h-fit.w-full.flex-col.gap-5'
      );
      const children = postContainer.children;
      const middleIndex = Math.floor(children.length / 2);
      const middlePost = children[middleIndex];

      animateVisibility();
      middlePost.scrollIntoView({ behavior: 'instant', block: 'center' });
    }

    if (e.target.closest('.go-bottom')) {
      const postContainer = document.querySelector(
        '.flex.w-full.flex-1.items-center.overflow-y-auto.pt-8.flex-col-reverse'
      );

      animateVisibility();
      postContainer.scrollTo({
        top: postContainer.scrollHeight,
        behavior: 'instant',
      });
    }
  });
}

// fade in animation after clicks
function animateVisibility() {
  const element = document.querySelector(
    '.flex.w-full.flex-1.items-center.overflow-y-auto.pt-8.flex-col-reverse'
  );

  if (element) {
    // add the fade in class to conversation area
    element.classList.add('fade-in');
    const children = element.querySelectorAll('*');
    children.forEach((child) => {
      child.classList.add('fade-in');
    });

    // remove the class after animation completion
    setTimeout(() => {
      element.classList.remove('fade-in');
      children.forEach((child) => {
        child.classList.remove('fade-in');
      });
    }, 250);
  }
}
