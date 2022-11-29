import React from 'react';
import styles from './CreatePopup.module.scss';
import { Modal } from '../../components/Modal/Modal';
import { Input } from '../../components/Input/Input'

type Props = {
    onClose: () => void;
}

export function CreatePopup(props: Props): JSX.Element {

    const [date, setDate] = React.useState<string>('')
    const [title, setTitle] = React.useState<string>('')
    const [price, setPrice] = React.useState<number>()

    function handleSubmit() {
        const data = localStorage.getItem('data');

        if (data) {
            const arr = JSON.parse(data);

            const newItem = {
                id: arr.length + 2,
                title: title,
                price: price,
                date: date,
            }

            localStorage.setItem('data', JSON.stringify([...arr, newItem]))
        }

        props.onClose()
    }

    return (
        <Modal onClose={props.onClose} onSubmit={handleSubmit}>
            <div className={styles['content']}>
                <span>Title</span>
                <Input
                    type='text'
                    onChange={(value) => { setTitle(value) }}
                    placeholder='Title' />
                <span>Price, USD</span>
                <Input
                    type='number'
                    onChange={(price) => { setPrice(Number(price)) }}
                    placeholder='Price'
                />
                <span>Date and time</span>
                <Input
                    type="text"
                    onChange={(date) => { setDate(date) }}
                    placeholder='Date and Time' />
            </div>
        </Modal>
    );
}
