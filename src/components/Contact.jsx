import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import {FiPhoneCall} from 'react-icons/fi'
import {ImMobile} from 'react-icons/im'
import {AiOutlineMail} from 'react-icons/ai'
import src1 from '../images/farmhouse.jpg'
const Contact = () => {
  return (
    <>
    <Container style ={{marginTop:'50px'}}>
        <Row>
            <Col md={6} >
                <h1>Pizza Delicious</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, culpa dignissimos? Molestias unde accusantium recusandae est inventore esse illo, placeat itaque aliquid! Incidunt corporis praesentium fugiat, numquam ducimus quia tempora sit ex est recusandae culpa, repellendus nobis distinctio. A quod animi ullam possimus molestiae quidem perferendis unde debitis doloremque veniam accusamus omnis, ipsa deserunt voluptatum nesciunt ipsum optio qui placeat, veritatis facere perspiciatis. Amet ducimus ex dicta veritatis reiciendis beatae nisi temporibus nesciunt, cupiditate sapiente. Iste fugiat molestiae, quod quisquam eum veritatis, a expedita pariatur temporibus sit numquam sunt officia velit obcaecati eos, quasi architecto dolores corporis iusto quaerat harum.</p>
                <Table striped bordered hover size="sm">
  <thead>
  <tr>
      <td colSpan={3}>--NOS--Coordonnees--</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
         <FiPhoneCall/>
      </td>
      <td>Telephone</td>
      <td>01 23 45 67 89</td>
    </tr>
    <tr>
      <td>
          <ImMobile />
      </td>
      <td>Portable</td>
      <td>07 23 45 67 89</td>
    </tr>
    <tr>
      <td>
          <AiOutlineMail />
      </td>
      <td>Email</td>
      <td>Contact@gmail.com</td>
    </tr>
  </tbody>
</Table>
            </Col>
            <Col md={6} >
                <img src={src1} alt=""  style ={{height:'100%',width:'100%'}}/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Contact