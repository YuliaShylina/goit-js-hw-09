document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const formData = { email: '', message: '' };

  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    Object.assign(formData, parsedFormData);
    fillFormFields(formData);
  }

  form.addEventListener('input', handleFormInput);
  form.addEventListener('submit', handleSubmit);

  function handleFormInput(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    saveFormDataToLocalStorage();
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }

    console.log(formData);
    clearLocalStorageAndForm();
  }

  function fillFormFields(data) {
    document.querySelector('input[name="email"]').value = data.email;
    document.querySelector('textarea[name="message"]').value = data.message;
  }

  function saveFormDataToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  function clearLocalStorageAndForm() {
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
  }
});
