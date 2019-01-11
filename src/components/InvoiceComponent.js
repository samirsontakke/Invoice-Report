import React,{Component} from 'react';
import {Card,CardText,CardBody,CardTitle} from 'reactstrap';
import  moment from 'moment';
import  clients from '../shared/client.js'

function searchingFor(searchText){
    return function(x){
        return x.status.toLowerCase().includes(searchText.toLowerCase()) || !searchText;
    }
}
class Invoice extends Component{
    constructor(props){
        super(props);
        this.state = {
            clients: clients,
            searchText:''
        }
        this.searchHandler=this.searchHandler.bind(this);
    }
       
    searchHandler(event){
        this.setState({searchText: event.target.value})
    }

    renderComments = (student) => {
        return (
            <div >
                { student.map((student) =>
                <div>
                    <div class="cellContainer">
                        { student.firstname} { student.lastname}
                    </div>
                    <div class="cellContainer">
                        {student.amount}
                    </div>
                </div>)}
            </div>
        );
    }
    render()
        {
            const clientList=this.state.clients.filter(searchingFor(this.state.searchText)).map((client) => {
                return(
                    <div key ={client.id} className="col-12 col-md-10 m-1">
                        <strong>
                            {client.status === "Pending" ?
                            <div className="pending-style">  
                                <div class="cellContainer">                              
                                    {client.status}
                                </div>
                                <div class="cellContainer">
                                    Due Date : {moment(client.duedate).format("YYYY/MM/DD") }
                                </div>
                            </div>
                            :   
                            <div className="paid-style">
                                {client.status}
                            </div>}
                        </strong>
                        <hr/>
                        <div class="card-block">
                            <div class="cellContainerheader">
                                <h1>Client : {client.firstname}{client.lastname}</h1>     
                            </div> 
                            <div class="cellContainerheader">
                                <h1>Invoice No.{client.invoiceno}</h1>        
                            </div>  
                            <div class="cellContainerheader">
                                <h1>Created Date :{moment(client.createddate).format("YYYY/MM/DD") }  </h1>
                            </div>     
                                {
                                    (client.students.constructor === Array)?
                                        <div>{
                                            this.renderComments(client.students)}
                                        </div>
                                    : null
                                }                                
                            <strong>
                                <div class="cellContainer">
                                 <hr />
                                    Total Value
                                </div>
                                <div class="cellContainer">
                                <hr />
                                    {client.totalvalue}
                                </div>   
                            </strong>                                
                        </div>
                    </div>
                );   
            });
            return ( 
                <div  className="container">
                    <div>Status:<input type="text" onChange={this.searchHandler} /></div>
                    <div className="row">            
                        {clientList} 
                    </div>   
                </div>                
            );
        }
}

export default Invoice;