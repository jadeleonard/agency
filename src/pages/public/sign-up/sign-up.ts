import './sign-up.css';
import { Button } from '../../../components/default-components/button';
import { Input } from '../../../components/default-components/input';
import { Div } from '../../../components/default-components/div';

interface Props {
    email: string;
    name: string;
    password: string;
}

export const SignUp = (): HTMLDivElement => {
    const signup = document.createElement('div') as HTMLDivElement;
    const cardSignUp = Div({
        className: 'signUpCard',
    });

    const emailInput = Input({
        placeholder: 'Email',
        type: 'email',
        value: '',
        onChange: (e: Event) => {
            const target = e.target as HTMLInputElement;
            emailInput.value = target.value;
        }
    });

    const nameInput = Input({
        placeholder: 'Name',
        type: 'text',
        value: '',
        onChange: (e: Event) => {
            const target = e.target as HTMLInputElement;
            nameInput.value = target.value;
        }
    });

    const passwordInput = Input({
        placeholder: 'Password',
        type: 'password',
        value: '',
        onChange: (e: Event) => {
            const target = e.target as HTMLInputElement;
            passwordInput.value = target.value;
        }
    });



    const submitButton = Button({
        textContent: 'Submit',
        type: 'submit',

    });
    submitButton.addEventListener('click',(e: Event) => {
        e.preventDefault();
        const userData = {
            email: emailInput.value,
            name: nameInput.value,
            password: passwordInput.value,
        };
        window.localStorage.setItem('userData', JSON.stringify(userData));

    })

    cardSignUp.appendChild(emailInput);
    cardSignUp.appendChild(nameInput);
    cardSignUp.appendChild(passwordInput);
    cardSignUp.appendChild(submitButton);

    signup.appendChild(cardSignUp);

    return signup;
};
