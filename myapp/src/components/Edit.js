import React, {useEffect, useState} from 'react';
import { Button,Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function Edit() {
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[salary, setSalary] = useState("");
    const[id, setId] = useState("");

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit =(e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        a.Salary = salary;

        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setSalary(localStorage.getItem('Salary'))
        setId(localStorage.getItem('Id'))
    },[]);

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="forName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="forAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="forSalary">
                    <Form.Control type="text" placeholder="Enter Salary" value={salary} required onChange={(e) => setSalary(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )




}

export default Edit;