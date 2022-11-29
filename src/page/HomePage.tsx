import React from 'react';
import styles from './HomePage.module.scss';
import { CreatePopup } from './CreatePopup/CreatePopup'
import { Button } from '../components/Button/Button'
import { Table } from '../components/Table/Table';
import { MOCK_DATA } from './MOCK_DATA';

export function HomePage(): JSX.Element {
    const [showModal, setShowModal] = React.useState<boolean>(false)

    if (!localStorage.getItem('data')) {
        localStorage.setItem('data', JSON.stringify(MOCK_DATA))
    }

    function getData() {
        const data = localStorage.getItem('data');

        if (data) {
            return JSON.parse(data)
        }

        return null
    }

    function openModal() {
        setShowModal(true)
    }

    function closeModal() {
        setShowModal(false)
    }

    const data = getData()

    return (
        <div className={styles['container']}>
            <Table data={data} />
            <div className={styles['container__footer']}>
                <Button theme='red' size='long' onClick={openModal}>
                    New item
                </Button>
            </div>
            {showModal && <CreatePopup onClose={closeModal} />}
        </div>
    );
}
