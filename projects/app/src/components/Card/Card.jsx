import "./Card.css"
import { useState } from "react";

export default function Card({ userName, name }) {

    const [isFollowing, setIsFollowing] = useState(Math.random() >= 0.5 ? true : false);

    const following = isFollowing ? 'Following' : 'Follow';
    const buttonClass = isFollowing ? 'tw-card-button is-following' : 'tw-card-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    
    return (
        <div className="tw-card">
            <div className="tw-card-header">
                <img
                    className="tw-card-avatar"
                    src={`https://unavatar.io/x/${userName}`}
                    alt="Avatar"
                />
                <div className="tw-card-info">
                    <strong>{name}</strong>
                    <span className="tw-card-info-username">
                        @{userName}
                    </span>
                </div>

            </div>
            <button className={buttonClass} onClick={handleClick}>
                <span className="tw-card-button-text">{following}</span>
                <span className="tw-card-stop-following">Unfollow</span>
            </button>

        </div>
    )
}