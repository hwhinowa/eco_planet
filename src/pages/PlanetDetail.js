import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as planetActions from 'store/modules/planet';

import PlanetGroundContainer from 'containers/PlanetGroundContainer';
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

    componentWillMount() {
        const planetInfo = localStorage.planetInfo;   
        const nextId = localStorage.nextId;
        if(this.state.planetInfo.id !== 0){
            localStorage.setItem('planetInfo', JSON.stringify(this.state.planetInfo));
        }else{
            this.setState({
                planetInfo : JSON.parse(planetInfo),
                nextId
            }, function(){this.props.planet_data(JSON.parse(planetInfo)); console.log(this.state);});
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(JSON.stringify(prevState.planetInfo) !== JSON.stringify(this.state.planetInfo)) {
            localStorage.planetInfo = JSON.stringify(this.state.planetInfo);
        }

        if(prevState.nextId !== this.state.nextId){
            localStorage.nextId = this.state.nextId;
        }
    }

    render(){
        return(
            <div>
                {/* {this.state.planetInfo.id !== 0 ? */}
                <div>
                    <Link to='/' className='goHome'>
                    <div>Home</div>
                    </Link>
                    <h1>{this.state.planetName} Ecosystem</h1>

                    <PlanetGroundContainer
                        data = {this.state.planetInfo}
                    />

                    <DataView
                        data = {this.state.planetInfo}
                    />
                </div>
                {/* <div>
                    불시착하여 우주 미아가 되었습니다. 다음 생애 다시 오시기 바랍니다.
                </div>
                } */}
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