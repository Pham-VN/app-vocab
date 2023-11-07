import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample({index,id,title,content,time}) {
    return (
      <Container>
        <Row>
         <Col className='col-sm'  id={index} key={id}>
         <div className="card" >
             <div className="card-body">
                 <h2 className="card-title">{title}</h2>
                <div className='cart-list-todo'>
                 <ol>
                    <li id={id} key={index}>{content} {time}</li>
                  </ol> 
                </div>
             </div>
             </div>
            </Col>
          </Row>
      </Container>
    );
  }
  
export default ContainerExample;