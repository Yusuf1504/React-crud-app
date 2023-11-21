import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom';
import './Home.css';

function Home() {

    let history = useNavigate();

    const handleEdit = (id, name, age, salary) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Salary',salary);
        localStorage.setItem('Id',id);

    }


    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/');
    }
    return(
        <Fragment>
           
            <div style={{margin: "10rem"}}>
            <h1>Employees Data</h1>
                <Table striped bordered hover size="sm"> 
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Salary
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) =>{
                                return(
                                    <tr key={item.id}> 
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            {item.Salary}
                                        </td>
                                        <td>
                                            <Link to={`/edit`}>
                                            <Button onClick={() => handleEdit(item.id, item.Name, item.Age, item.Salary)}>Edit</Button>
                                            </Link>
                                             
                                            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to ="/create">
                    <Button size="lg">Create</Button>
                    </Link>  
            </div>
        </Fragment>
    )
}
export default Home;