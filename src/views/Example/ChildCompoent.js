
import React from 'react';

class ChildComponent extends React.Component {
   
   state = {
       showJobs: false
   }
   handleShowHide = (status) => {
       this.setState({
           showJobs:!this.state.showJobs
       })
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
                        <button onClick={ () => this.handleShowHide() }>show</button>
                    </div> 
                
                :
                    <>
                        <div className='job-list'>
                            {
                                arrJobs.map((item,index) => {
                                    return(
                                        <div key = {item.id}>
                                            {item.title} - {item.salary}
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