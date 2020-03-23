import React from 'react'
import {Link} from 'react-router-dom'

function NewsCard(props) {
    const { newsTitle, newsText} = props.item
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{ newsTitle }</h5>
                <p className="card-text">{ newsText }</p>
                <Link to="/" className="card-link">Read More >></Link>
            </div>
        </div>
    )
}

export default NewsCard
