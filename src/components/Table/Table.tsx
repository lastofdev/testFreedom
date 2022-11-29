import styles from './Table.module.scss';

type ItemTable = {
    id: number;
    title: string;
    price: string;
    date: string;
}

type Props = {
    data: ItemTable[];
    onClick?: () => void;
}

export function Table(props: Props): JSX.Element {
    return (
        <div className={styles['grid']}>
            <p className={styles['grid_bold']}>#</p>
            <p className={styles['grid_bold']}>Title</p>
            <p className={styles['grid_bold']}>Price, USD</p>
            <p className={styles['grid_bold']}>Date and time</p>
            {props.data.map((item) => {
                return (
                    <>
                        <p className={styles['grid_bold']}>{item.id}</p>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <p>{item.date}</p>
                    </>
                )
            })}
        </div>
    );
}
