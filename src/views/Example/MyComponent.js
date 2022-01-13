
import React from 'react';
import ChildComponent from './ChildCompoent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
   
    //key:value,state => object
    state = {
        
        arrJobs:[
            { id:'id1',title:'developer',salary:'500$' },
            { id:'id2', title:'tester', salary:'400$' },
            { id:'id3', title:'BA', salary:'500$' },
        ]
    }

    addNewJob = (job) => {
        console.log('check job', job)
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            //arrJobs: currentJobs
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs:currentJobs
        })
    }



    render() {
        
        return (
            <>
                <div>
                    <AddComponent 
                        addNewJob = { this.addNewJob }
                    />
                    <ChildComponent  
                        arrJobs = { this.state.arrJobs }
                        deleteJob = {this.deleteJob}
                    />
                    
                </div>
            </>
            
        )
    }
}

export default MyComponent;