import React, { Component } from "react";
import AddTicket from "../AddTicket/AddTicket";

class ManageTickets extends Component {
    render() {
        return (
            
                <div className="row">
                <div className="col-12">
                ManageTickets
                <AddTicket 
                    state={this.props.state}
                    handleFormSubmit={this.props.handleFormSubmit}
                    handleInputChange={this.props.handleInputChange}
                />
                </div>

                </div>
           

        );
    }
}

export default ManageTickets;