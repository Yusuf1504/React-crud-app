import React, {useState} from 'react';
import { Button,Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form'; 

function Add() {

    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[salary, setSalary] = useState("");

    let history = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age,
        c = salary;

        Employees.push({id: uniqueId, Name : a, Age : b, Salary : c});

        history("/");
    }
    return(
        
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="forName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="forAge">
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="forSalary">
                    <Form.Control type="text" placeholder="Enter Salary" required onChange={(e) => setSalary(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        
        </div>

    )
}

export default Add;