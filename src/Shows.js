import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { data } from "./shows_data"
import Show from './show';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Facets_container from './Facets_container';

const Shows = () => {

    const build_categorical_facet_values = (name) => {
        const values = [...new Set(data?.map(item => item[name]))];
        return values.map(value => ({ 'name': value, 'checked': false }));
    }

    // Initial state
    const [state, setState] = useState({
        all_shows: data,
        shown_shows: data,
        facets: {
            genre: build_categorical_facet_values('genre'),
        }
    });

    //Updates state.shown_shows whenever state.facets changes
  useEffect(() => {
    const facets = {}
    // Get all the facet values that are true/active/selected.
    Object.entries(state.facets).forEach(([name, values]) => {
      facets[name] = []
      values.forEach(value => {
        if (value.checked) {
          facets[name].push(value.name)
        }
      })
    });

    // If there are no facets selected, show all shows
    if (Object.values(facets).every(arr => arr.length === 0)) {
      setState({ ...state, shown_shows: state.all_shows });
      return;
    }

    // Getting the number of active facet (Not facet_values)
    const number_of_active_facets = Object.values(facets).filter(x => x.length).length

    // Double loop through all shows and all active facets
    // Keep only the shows that match the active facets
    const to_show = state.all_shows?.map(show =>
      Object.entries(facets).map(([name, values]) =>
        values.includes(show[name])).filter(Boolean).length == number_of_active_facets ? show : undefined
    ).filter(Boolean)

    setState({ ...state, shown_shows: to_show })
  }, [state.facets])

  function clearAllFacetValues(facet) {
    const new_facet = state.facets[facet].map(facet_value => ({
      ...facet_value, checked: false
    }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

  function updateCategory(facet, value, newChecked) {
    const new_facet = state.facets[facet].map(({ name, checked }) => ({ name: name, checked: name == value ? newChecked : checked }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

    

    return (
        <div className="shows">
            <h1 className="text-center">TV Shows</h1>
            <Row>
                <Col className='border-end' md={3}>
                    <Facets_container facets={state.facets} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
                </Col>
                <Col>
                    <Container className='d-flex flex-wrap'>
                        {state.shown_shows?.map(x => <Show {...x} />)}
                    </Container>
                </Col>
            </Row>
        </div>
        
        
    );
}
 
export default Shows;