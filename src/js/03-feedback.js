import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');
const inputEl = document.querySelector('input');
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);
initForm();
function onFormInput(evt) {
    let savedInfo = localStorage.getItem(STORAGE_KEY);
    savedInfo = savedInfo ? JSON.parse(savedInfo) : savedInfo = {};
    savedInfo[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedInfo));
    console.log(savedInfo);
}
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    let parsedinfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(parsedinfo || {});
    localStorage.removeItem(STORAGE_KEY);
    parsedinfo = {};
};


function initForm() { 
    let parsedinfo = localStorage.getItem(STORAGE_KEY);
    if (parsedinfo) {
        parsedinfo = JSON.parse(parsedinfo);
        
    if (parsedinfo.message) {textareaEl.value = parsedinfo.message || ""        
    };
    if(parsedinfo.email){ inputEl.value = parsedinfo.email|| ""}
    };        
    }   



// import throttle from 'lodash.throttle';

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('textarea'),
//     input: document.querySelector('input'),
// }
// const STORAGE_KEY = 'feedback-form-state';
// const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY))|| "";
// let formData = {
//     message: savedInfo.message || "",
//     email: savedInfo.email || '',    
// }

// refs.form.addEventListener('input', throttle(onFormInput, 500))

// refs.form.addEventListener('submit', onFormSubmit)

// function onFormInput(evt) {
//     if (savedInfo.message) {
//         formData.message.textcontent = formData.message.value
//     };
//     if (savedInfo.email) {
//         formData.email.textcontent = formData.email.value
//     };
//     formData[evt.target.name] = evt.target.value    
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
//     console.log(localStorage.getItem(STORAGE_KEY));   
// }
// function onFormSubmit(evt) {
//     evt.preventDefault();
//     evt.currentTarget.reset()
//     localStorage.removeItem(STORAGE_KEY)
//     console.log(formData)   
// }

//  function onUpdatePage() {    
//     if ( savedInfo ) {
//         refs.textarea.value = savedInfo.message || "";
//         refs.input.value = savedInfo.email || '';
//     }
//  }
// onUpdatePage()









