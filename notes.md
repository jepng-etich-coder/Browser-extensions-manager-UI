/_=============== Variables ===============_/
:root {
--Green1: hsl(148, 38%, 91%);
--Green: hsl(169, 82%, 27%);
--Red: hsl(0, 66%, 54%);
--White: hsl(0, 0%, 100%);
--Grey1: hsl(186, 15%, 59%);
--Grey: hsl(187, 24%, 22%);
--font-main: "Karla", sans-serif;
--font-size: 1rem;
--font-size2: 0.9rem;
--border-radius: 10px;
}

/_=============== Base Reset ===============_/

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &::before,
  &::after {
  box-sizing: inherit;
  }
  }

fieldset {
border: 0;
margin: 0;
padding: 0;
}

body {
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: var(--font-main);
font-size: var(--font-size);
background-color: var(--Green1);

h1 {
font-family: var(--font-main);
font-size: var(--font-size);
}
}

.toast-hidden,
.error-msg,
.consent-text {
display: none;
font-size: var(--font-size2);
}

.toast-hidden {
background-color: var(--Grey);
color: var(--White);
padding: 1rem;
border-radius: var(--border-radius);
}

.error-msg {
color: var(--Red);
}

.consent-text {
color: var(--Grey);
}

.highlight-green {
color: var(--Green);
}

.input-error {
border: 2px solid var(--Red);
}

.asterix {
color: var(--Green);
}

form {
max-width: 600px;
width: 100%;
background-color: var(--White);
padding: 1.5rem;
display: flex;
flex-direction: column;
border-radius: var(--border-radius);

.form-label,
.form-query,
.toast-text,
.form-message {
margin-top: 1.5rem;
}

.form-input,
.query-wrapper,
.btn {
border: 1px solid var(--Grey1);
padding: 0.5rem;
border-radius: 8px;

    &:hover {
      border: 1px solid var(--Green);
    }

    &:focus,
    &:active {
      outline: none;
      border: 1px solid var(--Green);
      cursor: pointer;
    }

}

.form-input,
.query-wrapper {
margin-top: 0.5rem;
}

.form-username-wrapper,
.query-wrapper-container,
.toast-hidden-container {
display: flex;
gap: 0.5rem;
}

.query-wrapper-container {
align-content: center;
}

.query-wrapper,
.form-username,
.form-email-address {
flex-grow: 1;
}

.form-username,
.form-email-address {
display: flex;
flex-direction: column;
}

.form-consent,
.btn {
margin-top: 2rem;
}
}

textarea {
max-width: 100%;
width: 100%;
resize: none;
box-sizing: border-box;
}

.radio-label {
display: flex;
align-items: center;
margin-left: 0.5rem;
gap: 0.2rem;
font-size: var(--font-size);
cursor: pointer;
}

input[type="radio"],
input[type="checkbox"] {
width: 16px;
height: 16px;
cursor: pointer;

&:checked {
accent-color: var(--Green);
}
}

.checkbox-label {
display: flex;
align-items: center;
gap: 0.5rem;
font-size: var(--font-size);
cursor: pointer;
position: relative;
}

.btn {
color: var(--White);
background-color: var(--Green);

&:hover {
background-color: var(--Grey);
}
}

@media (min-width: 320px) and (max-width: 480px) {
.form-input,
.btn {
padding: 1rem 0;
}

form {
max-width: 300px;
width: 100%;

    .form-username-wrapper,
    .query-wrapper-container {
      flex-direction: column;
    }

}

.toast-hidden {
max-width: 200px;
width: 100%;
font-size: 0.8rem;
}

.icon-check {
width: 15px;
}
}
