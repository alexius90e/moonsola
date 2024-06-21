const tokenMainCopyElem = document.querySelector('.token__main-copy');
const tokenMainCodeElem = document.querySelector('.token__main-code');

if (tokenMainCopyElem && tokenMainCodeElem) {
  tokenMainCopyElem.addEventListener('click', () => {
    const code = tokenMainCodeElem.getAttribute('title');
    navigator.clipboard.writeText(code);
    tokenMainCopyElem.classList.add('active');
  });
}
