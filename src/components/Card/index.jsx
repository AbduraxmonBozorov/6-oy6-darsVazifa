import React from 'react';
import styles from './index.module.css';

function Card(props) {
    const { thumbnailUrl, title, url, albumId } = props.data
    return (
        <div className={styles.card}>
            <img src={thumbnailUrl} alt="" />
            <h3>{albumId}</h3>
            <p>{title}</p>
        </div>
    )
}

export default Card
