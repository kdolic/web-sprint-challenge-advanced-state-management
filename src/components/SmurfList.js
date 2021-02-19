import React from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux';

 const SmurfList = (props)=> {
     
     //2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
     //3. Replace the static isLoading variable with the state loading variable.
    return(
    <div className="listContainer">
        {props.isLoading === true ? <p>Please Wait Loading...</p> : props.smurfs.map(smurf => {
            return <Smurf key={smurf.id} smurf={smurf} />
        })}
    </div>);
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
export default connect(mapStateToProps, {})(SmurfList);
