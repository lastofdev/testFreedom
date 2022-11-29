import { ReactNode } from 'react';
import styles from './Modal.module.scss';
import { Button } from '../Button/Button';

type Props = {
    children: ReactNode;
    onClose: () => void;
    onSubmit: () => void;
}

export function Modal(props: Props): JSX.Element {
    function closeModal() {
        props.onClose()
    }

    function submit() {
        props.onSubmit()
    }

    return (
        <div className={styles['modal']}>
            <div className={styles['content']}>
                <div className={styles['content__header']}>
                    <span>New item</span>
                    <div onClick={closeModal}>x</div>
                </div>
                {props.children}
                <div className={styles['content__footer']}>
                    <Button theme='gray' size='short' onClick={closeModal}>Close</Button>
                    <Button theme='red' size='short' onClick={submit}>Add</Button>
                </div>
            </div>
        </div>
    );
}
