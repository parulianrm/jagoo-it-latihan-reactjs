import { Container, Row,Col } from 'react-bootstrap';

const HeadBar = () =>{
  return (
    <div className='intro'>
        <Container className='text-white d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
            <div className='title'>FilmJagoo </div>
            </Col>
          </Row>
        </Container>
      </div>

  )
}

export default HeadBar