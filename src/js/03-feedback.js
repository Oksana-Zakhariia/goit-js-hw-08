import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    // textarea: document.querySelector('textarea'),
    // input: document.querySelector('input'),
}
const formData = {
    
}
const STORAGE_KEY = 'feedback-form-state'

refs.form.addEventListener('input', throttle(onFormInput, 500))

refs.form.addEventListener('submit', onFormSubmit)

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    console.log(localStorage.getItem(STORAGE_KEY));   
}
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
    console.log(formData)
}
 function onUpdatePage() {
    const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if ( savedInfo ) {
        form.email.value = savedInfo.message 
        form.input.value = savedInfo.email
    }
 }
onUpdatePage()









