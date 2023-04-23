import React, {Component} from "react";
import Hotel from './Hotel/Hotel.js';

class Hotels extends Component{
    render(){
        return (
            <div>
                 Hotels
                 <Hotel/>
            </div>
        );
    }
}
// function Hotels(){
//     return (
//     <div>
//             Hotels
//     </div>
//     );
// }

export default Hotels;