import React, { Component } from 'react';

import 'css/DataView.css';

class DataView extends Component{
    constructor(props){
        super(props);

        this.state = {
            data : this.props.data
        }
    }

    render(){
        let data = this.state.data;

        return(
            <div className='dataContainer'>
                {data.people}<br/>
                {data.animal}<br/>
                {data.plant}<br/>
                {data.trash}
            </div>
        )
    }

}

export default DataView;