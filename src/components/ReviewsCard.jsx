import React from 'react'

function ReviewsCard(props) {

    const { name, avatar, comment} = props.review;
    return (
        <div className="media mb-3">
            <img src={ avatar } class="mr-3" alt={ name} width="60" />
            <div className="media-body">
                <h5 className="mt-0">{ name }</h5>
                <p>{ comment }</p>
            </div>
        </div>
    )
}

export default ReviewsCard
