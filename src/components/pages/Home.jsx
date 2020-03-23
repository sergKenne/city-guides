import React, { Component} from 'react'
import { UseContext } from '../../context'
import Info from '../Info';



class Home extends Component {
    render() {

        return (
            <div className="container py-5">
                <div className="row">
                    <UseContext.Consumer>
                        { 
                            user => {
                                return user.placeInfo.map( item => (
                                    <Info item={item}  key={item.id} showInfo={user.showInfo} />
                                    )

                                )
                            }
                        }
                    </UseContext.Consumer>
                </div>
            </div>
            
        )
    }
}

export default Home
