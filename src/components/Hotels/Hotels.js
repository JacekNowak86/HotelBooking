import React, {Component} from "react";
import Hotel from './Hotel/Hotel.js';
import styles from './Hotels.module.css'

class Hotels extends Component{
    render(){
        return (
            <div className={`${styles.hotelsContainer} container`}>
                 <h2 className={styles.title}>Oferty:</h2>
                 <Hotel/>
                 <Hotel/>
            </div>
        );
    }
}


export default Hotels;