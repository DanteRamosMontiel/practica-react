import styles from "./Card.module.css"

export default function Card({ userName, name, isFollowing }) {
    return (
        <div className={styles['tw-card']}>
            <div className={styles['tw-card-header']}>
                <img
                    className={styles['tw-card-avatar']}
                    src={`https://unavatar.io/x/${userName}`}
                    alt="Avatar"
                />
                <div className={styles['tw-card-info']}>
                    <strong>{name}</strong>
                    <span className={styles['tw-card-info-username']}>{`@${userName}`}</span>
                </div>
            </div>
            <button className={styles['tw-card-button']}>
                {isFollowing ? 'Following' : 'Follow'}
            </button>
        </div>
    )
}