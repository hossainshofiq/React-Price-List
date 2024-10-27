import PropTypes from "prop-types";
import Feature from "../Feature/Feature";


const PriceOption = ({ option }) => {
    const { name, price, features } = option;

    return (
        <div className="pb-3 border p-5 bg-blue-500 text-black rounded-2xl flex flex-col">
            <h2>
                <span className="text-7xl font-extrabold">{price}$ </span>
                <span className="text-3xl">/monthly</span>
            </h2>

            <h4 className="text-3xl">{name} </h4>

            <div className="pl-6 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-5 bg-black text-white w-full p-2 rounded-lg hover:bg-green-400">Select Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;