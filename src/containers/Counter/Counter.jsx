import styles from "./Counter.module.scss";

const Counter = ({ setCount, count }) => {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.count}>{count}</p>
                <div className={styles.counter}>
                    <button
                        className={styles.counter__button}
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                    <br />
                    <button
                        className={styles.counter__button}
                        onClick={() => {
                            if (!false && count === 1) {
                                return;
                            }
                            setCount(count - 1);
                        }}
                    >
                        -
                    </button>
                </div>
                <br />
            </div>
        </>
    );
};

export default Counter;
