import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/arrow-icon.svg';
import PropTypes from 'prop-types';
import { Container } from './styles';
import styled from 'styled-components';


export default function PageHeader({title, style, link}){
    return (
        <Container style={style}>
           <Link to={link}>
            <img src={arrow} alt="Voltar para home" />
            <span>Voltar</span>
           </Link>
            <h1>{title}</h1>
        </Container>

    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    link: PropTypes.string
}