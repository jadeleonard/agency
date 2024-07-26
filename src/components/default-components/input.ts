interface InputProps {
    id?: string;
    className?: string;  // 'class' is a reserved keyword in TypeScript, so use 'className'
    type?: 'email' | 'password' | 'text' | 'number' | 'url' | 'tel' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'radio' | 'checkbox';
    name?: string;
    value?: string | number;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (event: Event) => void;
}

export const createInput = (props: InputProps): HTMLInputElement => {
    const input = document.createElement('input');

    if (props.id) input.id = props.id;
    if (props.className) input.className = props.className;
    if (props.type) input.type = props.type;
    if (props.name) input.name = props.name;
    if (props.value) input.value = props.value.toString();
    if (props.placeholder) input.placeholder = props.placeholder;
    if (props.required) input.required = props.required;
    if (props.disabled) input.disabled = props.disabled;
    if (props.readonly) input.readOnly = props.readonly;
    if (props.onChange) input.addEventListener('change', props.onChange);

    return input;
}
