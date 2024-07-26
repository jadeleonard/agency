interface DivProps {
    id?: string;
    className?: string;
    style?: Partial<CSSStyleDeclaration>;
    role?: string;
    ariaLabel?: string;
    children?: (HTMLElement|Text)[];
}
export const  Div = (props: DivProps): HTMLDivElement => {
    const div = document.createElement('div');

    if (props.id) div.id = props.id;
    if (props.className) div.className = props.className;
    if (props.style) Object.assign(div.style, props.style);
    if (props.role) div.setAttribute('role', props.role);
    if (props.ariaLabel) div.setAttribute('aria-label', props.ariaLabel);
    if (props.children) {
        props.children.forEach(child => div.appendChild(child));
    }







    return div;
}


