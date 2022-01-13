import React from "react";
import Color from "../HOC/Color";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import rootReducer from "../../store/reducers/rootReducers";


class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    //HOC: higher order component
    handleDeleteUser = (user) => {
        console.log('>>> check user detele',user);
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('>>> check props: ', this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world from Homepage with Eric & Hoi Dan IT
                </div>
                <div>
                    { listUsers && listUsers.length >0 &&


                    
                        listUsers.map((item,index) => {
                            return (
                                <div key={ item.id }>
                                    { index +1 } - { item.name } 
                                    &nbsp;<span onClick={() => this.handleDeleteUser(item)}>
                                       X 
                                    </span>
                                    
                                </div>
                            )
                        })
                    }

                    <button onClick={ () => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 

        dataRedux: state.users 
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', playload: userDelete }),
        addUserRedux: () => dispatch({ type:'CREATE_USER'}),
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));