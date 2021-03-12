
import React, {useContext} from 'react';
import { MealDetailsModalContext } from '../contexts/MealDetailsModalContext';

import styles from '../styles/components/MealDetailsModal.module.css';

export default function MealDetailsModal() {
    const {toggleModalOpen} = useContext(MealDetailsModalContext)
    return(
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <a href="#" onClick={toggleModalOpen}>X</a>
            </div>
        </div>
    )
}