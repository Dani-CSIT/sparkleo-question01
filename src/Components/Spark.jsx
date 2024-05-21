
import './Spark.css';
import React from 'react'
import Car from '../Assests/car-img.png'

const Spark = () => {
    return (
        <div className="sign-in">
            <div className='car'>
                <img src={Car} alt="" />
                <h1>Spark</h1>
            </div>
            <p>Learn more about Air Drive on Spark.pl</p>
        </div>
    );
}

export default Spark