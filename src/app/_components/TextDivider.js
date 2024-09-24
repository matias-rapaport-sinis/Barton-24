import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
    fontWeight : 1000,
    fontSize : 48,
}

export default function TextCut({title}){

    return (
        <Container fluid className='top-space'>
            <Row>
                <Col>
                    <p 
                        style={styles}
                        className='text-uppercase text-center text-darkness-barton'  >
                            {title}
                    </p>
                </Col>
            </Row>  
        </Container>  
    );
} 