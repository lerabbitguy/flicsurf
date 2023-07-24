import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Facet2 from './Facet2';
import Row from 'react-bootstrap/esm/Row';

function Facets_container2({ facets, updateCategory, clearAllFacetValues}) {
    //Loop through all the facets and create a Facet component
    return (
        <Container className='ms-4'>
            {Object.entries(facets).map(([name, values]) =>
                <Row className='border m-3'>
                    <Facet2 name={name} values={values} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
                </Row>)}
        </Container>
    );
}

export default Facets_container2;