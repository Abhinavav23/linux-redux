import { useEffect } from "react";
import { Component, memo } from "react";
import { connect } from "react-redux";
import { login } from "../ReduxFolder/auth/authAction";

class CountClass extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // useEffect(() => {

        // }, [])
        console.log('from class comp did mount');
        console.log(this.props);
    }

    login = () => {
        // this.props.loginUser('Virat kohli')
        this.props.dispatch(login('Rohit Sharma'))
    }

    render(){
        return(
            <>
                <h3>Count: {this.props.myCount}</h3>
                <button onClick={this.login}>login from class</button>
            </>
        )
    }
}

const mapStoreToProps = (myState) => {
    console.log(myState);
    return {
        myCount: myState.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loginUser: (name) => dispatch(login(name))
//     }
// }

// export default connect(mapStoreToProps, mapDispatchToProps)(CountClass)
export default connect(mapStoreToProps)(CountClass)


// memo(CountClass)

// function connectV2(name){
//     //////
//     console.log('calling test', name);
//     function test2(address){
//         console.log('calling function returned by test', address);
//     }
//     test2();
//     return test2
// }

// connectV2('Abhinav')('Delhi'); //shorthand invocation of function immidiately

// const returnedValue = test();
// returnedValue();

// function test() {

// }
// const test = function(){

// }

// const test1 = function test(){
//     console.log(test);
//     console.log('calling tst ');
// }

// test1()



