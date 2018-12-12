import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as planetActions from 'store/modules/planet';

import 'css/planet.css';

class PlanetPopUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            info : {
                ...this.props.info
            },
        }
    }

    componentWillReceiveProps(nextProps){
        let number = nextProps.number;
        let popupAll = document.querySelectorAll('.planet_popup_wrap');
        
        for(let i = 0; i < popupAll.length; i++){
            let item = popupAll[i];
            let popup = document.querySelector('.planet_popup'+number);
            if(item === popup){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        }
    }

    closePopup=(num)=>{
        let popup = document.querySelector('.planet_popup'+num);
        popup.style.display = 'none';
        this.props.planet_num(0);
    }

    planetDataSet=(data)=>{
        this.props.planet_data(data);
        // this.context.router.history.push("/class");
    }

    render() {
        let info = this.state.info;
        let planet_name = '';
        let ground = 0;
        let ocean = 0;
        if(info.id === 1){
            planet_name = 'X';
            ground = 30;
            ocean = 65;
        }else if(info.id === 2){
            planet_name = 'Y';
            ground = 25;
            ocean = 70;
        }else{
            planet_name = 'Z';
            ground = 10;
            ocean = 50;
        }
        return (
            <div className={`planet_popup_wrap planet_popup${info.id} ${this.props.currentPlanet === info.id && `active`}`}>
                <p className='planet_name'>Planet {planet_name}</p>
                <button onClick={()=>this.closePopup(info.id)}>X</button>
                <p>ground : {ground}h</p>
                <p>ocean : {ocean}h</p>
                <p>plant : {info.plant / 100}m</p>
                <p>animal : {info.animal / 100}m</p>
                <p>people : {info.people / 100}m</p>
                <Link to={`/detail/`+info.id} onClick={()=>this.planetDataSet(info)}>Go to the planet!</Link>
            </div>
        );
    }
}

// PlanetPopUp.contextTypes={
//     router : React.PropTypes.object
// };

const mapStateToProps = (state) => ({
    number : state.planet.number
});

const mapDispatchToProps = (dispatch) => ({
    planet_num : (number = 0) => {
        dispatch(planetActions.planet_num(number));
    },
    planet_data : (data = {})=> {
        dispatch(planetActions.planet_data(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetPopUp);