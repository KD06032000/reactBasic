
import React from 'react';
import ChildComponent from './ChildCompoent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
   
    //key:value,state => object
    state = {
        firstName:'',
        lastName:'',
        arrJobs:[
            { id:'id1',title:'developer',salary:'500$' },
            { id:'id2', title:'tester', salary:'400$' },
            { id:'id3', title:'BA', salary:'500$' },
        ]
    }


    render() {
        
        return (
            <>
                <div>
                    <AddComponent />
                    <ChildComponent  
                        name={'child one'}
                        age = {'25'}
                        adress ={'vinh phuc'}
                        arrJobs = { this.state.arrJobs }
                    />
                    
                </div>
            </>
            
        )
    }
}

export default MyComponent;