interface SectionProps {
    id?: string;
    className?: string;
    style?: Partial<CSSStyleDeclaration>;
    role?: string;
    ariaLabel?: string;
    children?: HTMLElement[];
}

export const  Section = (props: SectionProps): HTMLElement => {
    const section = document.createElement('section');

    if (props.id) section.id = props.id;
    if (props.className) section.className = props.className;
    if (props.style) Object.assign(section.style, props.style);
    if (props.role) section.setAttribute('role', props.role);
    if (props.ariaLabel) section.setAttribute('aria-label', props.ariaLabel);
    if (props.children) props.children.forEach(child => section.appendChild(child));

    return section;
}

