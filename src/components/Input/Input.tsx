import styles from './Input.module.scss';

type Props = {
    onChange: (value: string) => void;
    type: 'text' | 'number';
    placeholder?: string;
}

export function Input(props: Props): JSX.Element {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        props.onChange(event.currentTarget.value)
    }

    return (
        <input
            className={styles['input']}
            placeholder={props.placeholder}
            type={props.type}
            onChange={handleChange} />
    );
}
