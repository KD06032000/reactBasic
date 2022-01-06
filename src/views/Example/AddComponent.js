import React from "react";

class AddComponent extends React.Component {
    state = {
        title:'',
        salary:'',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert('click me')
    }

    render() {
        return(

            <form action="/action_page.php">
                <label htmlFor="fname">Title Job: </label><br />
                <input  
                type="text"  value={this.state.title}
                onChange={(event) => this.handleChangeTitleJob(event)}
                /><br />
                <label htmlFor="lname">Salary: </label><br />
                <input 
                type="text"  value= {this.state.salary}
                onChange={(event) => this.handleChangeSalary(event)}
                /><br />
                <input type="submit" value="Submit"
                onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}

export default AddComponent;