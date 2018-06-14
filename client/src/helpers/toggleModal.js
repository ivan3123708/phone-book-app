export default () => {
  const modal = document.getElementsByClassName('add-modal')[0];
  const shadow = document.getElementById('shadow');

  if (modal.classList.contains('modal-closed')) {
    modal.classList.remove('modal-closed');
    modal.classList.add('modal-open');

    shadow.classList.remove('shadow-off');
    shadow.classList.add('shadow-on');
  } else {
    modal.classList.remove('modal-open');
    modal.classList.add('modal-closed');

    shadow.classList.remove('shadow-on');
    shadow.classList.add('shadow-off');
  }
};
