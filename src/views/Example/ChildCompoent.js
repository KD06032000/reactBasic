
import React from 'react';
import './Demo.scss';

class ChildComponent extends React.Component {
   
    state = {
        showJobs: false
    }
    handleShowHide = (status) => {
        this.setState({
            showJobs:!this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete:', job)
        this.props.deleteJob(job)
    }
    render() {
        console.log('>>> check data input:', this.props)
        
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional:', check)
        return (
            <>
                { showJobs === false ? 
                    <div>
                        <button className = 'btn-show'
                        onClick={ (job) => this.handleShowHide(job) }>show</button>
                    </div> 
                
                :
                    <>
                        <div className='job-list'>
                            {
                                arrJobs.map((item,index) => {
                                    return(
                                        <div key = {item.id}>
                                            {item.title} - {item.salary} <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button>hide</button></div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let {  arrJobs } = props;
//     return (
//                 <>
//                     <div className='job-list'>
//                         {
//                             arrJobs.map((item,index) => {
//                                 return(
//                                     <div key = {item.id}>
//                                         {item.title} - {item.salary}
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 </>
//             )
// }
export default ChildComponent;