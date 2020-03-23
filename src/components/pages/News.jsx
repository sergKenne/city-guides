import React, { Component } from 'react';
import NewsCard from '../../NewsCard';
import { UseContext } from '../../context';


class News extends Component {
    render() {
        return (
            <div className="container mt-5">
                <UseContext.Consumer>
                    {
                        data => {
                            return data.news.map( item => {
                                return <NewsCard item={item} />
                            })
                        }    
                    }
                </UseContext.Consumer>
            
            </div>
        )
    }
}

export default News