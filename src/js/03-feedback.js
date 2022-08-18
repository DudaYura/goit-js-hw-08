import throttle from 'lodash.throttle';

const STATE_STORAGE_KEY = 'feedback-form-state';

const feedbackFormRef = document.querySelector('.feedback-form');

feedbackFormRef.addEventListener('input', throttle(saveFormState, 500));
feedbackFormRef.addEventListener('submit', onformSubmit);

retrieveFormState(feedbackFormRef);

function saveFormState(evt) {
    const formRef = evt.target.closest('form');
    const formState = {
        email: formRef.email.value,
        message: formRef.message.value,
    };
    localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(formState));
};

function onformSubmit(evt) {
    evt.preventDefault();

    const formState = {
        email: evt.currentTarget.email.value,
        message: evt.currentTarget.message.value,
    };

    console.log(formState);
        
    evt.currentTarget.reset();

    clearFormState();
};

function retrieveFormState(formRef) {
    if (!localStorage.getItem(STATE_STORAGE_KEY)) return;

    const { email, message } = JSON.parse(
      localStorage.getItem(STATE_STORAGE_KEY)
    );
    formRef.email.value = email;
    formRef.message.value = message;
};

function clearFormState() {
    localStorage.removeItem(STATE_STORAGE_KEY);
}