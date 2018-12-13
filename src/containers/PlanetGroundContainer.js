import React, { Component } from 'react';

import 'css/PlanetGround.css';

class PlanetGroundContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            data : this.props.data
        }
    }

    render(){
        let data = this.state.data;
        
        return(
            <div className={`groundContainer ground`+(data.id+1)}>
                <svg viewBox='0 0 1000 600'>
                    <rect x='0' y='0' width='1000' height='600' stroke='white' fill='transparent' stroke-width='1'/>

                    {/* <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/> */}
                    {/* <circle cx='600' cy='300' r=''/> */}

                    {/* <circle cx='918' cy='155' r='54' stroke='#407668' strokeWidth='1' strokeDasharray='120 50' strokeDashoffset='120' fill='none' /> */}
                </svg>
                {/* <svg viewBox='0 0 1840 230' style={style_bottom}></svg> */}
            </div>
        )
    }

}

export default PlanetGroundContainer;