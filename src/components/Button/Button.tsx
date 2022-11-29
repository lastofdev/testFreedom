import styles from './Button.module.scss';
import classnames from 'classnames';

type Props = {
    theme: 'red' | 'gray';
    size: 'long' | 'short';
    children: string;
    onClick?: () => void;
}

export function Button(props: Props): JSX.Element {
    const buttonStyles = classnames(
        styles['button'],
        styles[`button_${props.theme}`],
        styles[`button_${props.size}`]
    );

    return (
        <button className={buttonStyles} type='button' onClick={props.onClick}>
            {props.children}
        </button>
    );
}
