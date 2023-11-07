import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
<Row>
<Col>
  <Input style={{ margin : '2rem 0.5rem' }}
      id="todo"
      name = "typeTodo"
      type="radio"
      value="TODO"
  />
  <label>TODO</label>
</Col>

<Col>
<Input style={{ margin : '2rem 0.5rem' }}
  id="progresse"
  name = "typeTodo"
  type="radio"
  value="IN PROGRESS"
/>
<label>IN PROGRESS</label>
</Col>

<Col>
<Input style={{ margin : '2rem 0.5rem'}}
  id="done"
  name = "typeTodo"
  type="radio"
  value="DONE"
/>
      <label>DONE</label>
</Col>
</Row>