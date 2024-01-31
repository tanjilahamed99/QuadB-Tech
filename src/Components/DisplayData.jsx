import PropTypes from 'prop-types';

const DisplayData = ({ data }) => {

    const { name } = data

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

DisplayData.propTypes = {
    data: PropTypes.object
};

export default DisplayData;