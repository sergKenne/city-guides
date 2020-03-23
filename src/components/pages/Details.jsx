import React, { Component } from 'react';
import {UseContext} from '../../context';
import styled from 'styled-components'
import ReviewsCard from '../ReviewsCard';

class Details extends Component {
    render() {
        return (
            <div>
                <div>
                    <UseContext.Consumer> 
                        {
                            (data) => {
                                const {headerTitle, headerSubTitle,  headerText, title, description, img, maps} = data.detailInfo;
                               
                                return (
                                    <React.Fragment>
                                        <HeaderDatails className="container-fluid text-center">
                                            <div className="container">
                                                <h1 className="text-uppercase font-weight-bold display-3">{ headerTitle }</h1>
                                                <h4>{ headerSubTitle }</h4>
                                                <p>{ headerText }</p>
                                                <ul className="list-unstyled row">
                                                    <li className="col-lg-2 col-md-4 col-sm-6 mb-5"><a href="#" className="text-dark h2"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li className="col-lg-2 col-md-4 col-sm-6 mb-5"><a href="#" className="text-dark h2"><i className="fab fa-twitter"></i></a></li>
                                                    <li className="col-lg-2 col-md-4 col-sm-6 mb-5"><a href="#" className="text-dark h2"><i className="fab fa-google-plus-g"></i></a></li>
                                                    <li className="col-lg-2 col-md-4 col-sm-6 mb-5"><a href="#" className="text-dark h2"><i className="fab fa-reddit"></i></a></li>
                                                    <li className="col-lg-2 col-md-4 col-sm-6 mb-5"><a href="#" className="text-dark h2"><i className="fab fa-whatsapp"></i></a></li>
                                                    <li className="col-lg-2 col-md-4 col-sm-6 mb-5"><a href="#" className="text-dark h2"><i className="fab fa-facebook-messenger"></i></a></li>
                                                </ul>
                                             </div>    
                                        </HeaderDatails>    
                                        <div className="container">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">About place</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="map-tab" data-toggle="tab" href="#map" role="tab" aria-controls="map" aria-selected="false">Map</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content my-5" id="myTabContent">
                                                <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                                                    <h1 className="">{ title }</h1>
                                                    <p>{ description }</p>
                                                    <img src={ img } alt={ title } className="img-thumbnail" />
                                                </div>
                                                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                                    {
                                                        data.reviews.map (review => {
                                                            return <ReviewsCard review={review} key={review.id} />
                                                        })
                                                    }
                                                   
                                                </div>
                                                <div className="tab-pane fade" id="map" role="tabpanel" aria-labelledby="map-tab">
                                                    <iframe src={maps} style={{
                                                        border: "0",
                                                        width: "100%",
                                                        height: "280",
                                                        frameborder: "0"
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        }
                    </UseContext.Consumer>
                   
                    
                </div>
            </div>
        )
    }
}
export default Details;

const HeaderDatails = styled.header`
    background: linear-gradient( rgba(109, 109, 109), rgba(255, 255, 255) );
    height: 100vh;

    h1 {
        padding-top: 10%;
    }

    h4 {
        color: #000;
    }

    p {
        padding-left: 10%;
        padding-right: 10%;
        margin-bottom: 10%;
    }

    i {
        font-size: 1.875rem;
        color: #000;
    }

    i:hover {
        color: blue;
        cursor: pointer;
    }

    @media(max-width: 760px) {
        h1,h4 {
            color: #fff;
        }
    }

    @media(max-width: 426px) {
        h1 {
            font-size: 2rem;
        }

        .mb-5 {
            margin-bottom: .8rem!important;
        }
        
        p {
            padding: 0 2%;
        }

        i {
            font-size: 1.5rem;
        }
    }
`;