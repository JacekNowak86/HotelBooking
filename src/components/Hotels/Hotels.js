import PropTypes from 'prop-types'
import React, {Component} from "react";
import Hotel from './Hotel/Hotel.js';
import styles from './Hotels.module.css'

const propTypes ={
    hotel: PropTypes.array.isRequired
}

class Hotels extends Component{
    render(){
        return (
            <div className={`${styles.hotelsContainer} container`}>
                 <h2 className={styles.title}>Oferty:</h2>
                 {this.props.hotels.map(hotel=> <Hotel key={hotel.id} {...hotel}/>)}
                 {/* <Hotel/>
                 <Hotel/> */}
            </div>
        );
    }
}

Hotels.propTypes = propTypes;

export default Hotels;