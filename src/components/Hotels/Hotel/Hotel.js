import PropTypes from 'prop-types'
import React from "react";
import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/1.jpg'

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired

};


function Hotel(props){
    return (
    <div className={`card ${styles.hotel}`}>
        <div className="card-body">
        <div className={`row container`}>
            <div className="col-4">
                <img src={hotelImg} alt="" className="img-fluid img-thumbnail"/>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col">
                        <p className={styles.title}>{props.name}</p>
                        <span className="badge badge-light text-dark">{props.city}</span>
                    </div>
                    <div className="col text-end">
                        <h5>
                            <p>Ocena: {props.rating}</p>
                            <p className="badge bg-secondary">opinie: 23</p>
                            <p><a href="#" className="btn btn-primary float-end mt-2 px-4">Pokaż</a></p>
                            
                        </h5>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
        </div>
    </div>
    
    );
}
Hotel.propTypes = propTypes;
// Hotel.defaultProps = {
//     name: ...,
//     city: ...,
//     rating: ...,
//     description: ...

// };

export default Hotel;