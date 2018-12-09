import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as planetActions from 'store/modules/planet';

import DataView from 'containers/DataView';
import 'css/planetDetail.css';

class PlanetDetail extends Component{
    constructor(props){
        super(props);

        let name = '';
        switch(this.props.match.params.number){
            case('1') :
                name = 'X';
                break;
            case('2') :
                name = 'Y';
                break;
            case('3') :
                name = 'Z';
                break;
            default :
                name = '';
                return;
        }

        this.state = {
            planetName : 'Planet ' + name,
            planetInfo : {...this.props.data}
        }
    }

    render(){
        return(
            <div>
                <Link to='/' className='goHome'>
                    <div>Home</div>
                </Link>
                <h1>{this.state.planetName} Eco System</h1>

                <DataView
                    data = {this.state.planetInfo}
                />
                {/* {this.props.match.params.number} */}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data : state.planet.data
});

const mapDispatchToProps = (dispatch) => ({
    planet_num : (number = 0) => {
        dispatch(planetActions.planet_num(number));
    },
    planet_data : (data = {})=> {
        dispatch(planetActions.planet_data(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetail);