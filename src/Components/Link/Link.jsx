import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 text-white hover:bg-white hover:text-black px-10 rounded-2xl"><a href={route.path}>{route.name} </a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;