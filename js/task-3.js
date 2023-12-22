const nameInput = document.getElementById(`name-input`);
const nameUser = document.getElementById(`name-output`);

const helloName = event => {
  nameUser.textContent = event.currentTarget.value.trim();

  if (!nameUser.textContent) {
    nameUser.textContent = 'Anonymous';
  }
};

nameInput.addEventListener('input', helloName);
