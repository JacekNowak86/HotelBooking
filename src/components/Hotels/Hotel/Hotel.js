import React from "react";
import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/1.jpg'


function Hotel(){
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
                        <p className={styles.title}>Pensjonat</p>
                        <span className="badge badge-light text-dark">Warszawa</span>
                    </div>
                    <div className="col text-end">
                        <h5>
                            <p>Ocena: 8.3</p>
                            <p className="badge bg-secondary">opinie: 23</p>
                            <p><a href="#" className="btn btn-primary float-end mt-2 px-4">Pokaż</a></p>
                            
                        </h5>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <p className={styles.description}>Nulla nulla minim excepteur consequat exercitation. Nulla fugiat occaecat Lorem qui. Voluptate ex et occaecat do. Incididunt dolor tempor ut eiusmod reprehenderit mollit culpa nostrud nostrud qui. Do exercitation qui aute adipisicing sit dolore.</p>
            </div>
        </div>
        </div>
    </div>
    
    );
}

export default Hotel;