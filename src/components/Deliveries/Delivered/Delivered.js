import React, { Component } from 'react';
import '../Delivered/Delivered.css';

class Delivered extends Component {
    render() {
        return (
            
          <div className='Delivered' onClick={this.openOffer} >
                <div className='row' >
                    <div className='col-md-6' >
                       <img className='Delivered__maker-img' src= 'https://randomuser.me/api/portraits/men/88.jpg' /> 
                        <span className='Delivered__maker-Name' >Ahmed</span>
                    </div>
                    <div className='col-md-6' >
                        <div className='Delivered__time' >
                            <div >
                                requested
                        
                                <span> 1 hour ago</span>
                            </div>
                      </div>
                    </div>
                </div>

                <div className='row' >
                    <div className='col-md-5' >
                         <div className='Delivered-image' >
                             <img className='Delivered-image__img' src={require('../../../Assets/img/iphone6s.jpg')} />
                        </div>
                    </div>
                    <div className='col-md-7' >
                         <div  className='Delivered-name'> Iphone 7s plus</div>

                         <div className='Delivered__details' >
                             <div className='Delivered__details__tfb' >
                                 <div>Deliver to </div>
                                 <span> Cairo, EG</span>
                             </div>
                             <div className='Delivered__details__tfb'>
                                 <div>Deliver from </div>
                                 <span> New York,US </span>
                             </div>
                             <div className='Delivered__details__tfb'>
                                 <div>Deliver before </div>
                                 <span> March 20, 2018</span>
                             </div>

 
                         </div>

                         <div className='row' >
                            <div className='col-md-7'>
                                <span className='span__color'>Traveler fee </span>
                                    <span> $25</span>
                                <div>
                                    <span className='span__color'>Item price: </span><span> $125</span>
                                </div>

                            </div>
                    
                </div>

                    </div>
                </div>

               
              
            </div>
            
            
        );
    }
}

export default Delivered;
