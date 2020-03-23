import React from 'react'
import {Link} from 'react-router-dom';
import {UseContext} from '../context';

const Info = ({item, showInfo}) => {

    return (
       
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card">
                    <img src={ item.img } className="card-img-top" alt={ item.headerTitle } />
                    <div className="card-body">
                        <h3 className="card-title text-uppercase">{ item. headerTitle }</h3>
                        <h5 className="card-title">{ item. headerSubTitle }</h5>
                        <p className="card-text">{ item.headerText }</p>
                        <Link to="/details" className="btn btn-outline-primary" onClick={() => showInfo(item)} >MORE INFO</Link>
                    </div>
                </div>
            </div>
       
    )
}

export default Info
