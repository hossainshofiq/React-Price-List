import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 20,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 40,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "Access to group classes",
                "One personal training session per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 60,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "Access to group classes",
                "Four personal training sessions per month",
                "Access to spa and sauna"
            ]
        },
        {
            "id": 4,
            "name": "VIP Membership",
            "price": 100,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "Unlimited group classes",
                "Eight personal training sessions per month",
                "Access to spa and sauna",
                "Diet and fitness consultation"
            ]
        }
    ]


    return (
        <div className="mx-5 my-10">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid mx-8 md:grid-cols-3 gap-5 mt-5">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {

}

export default PriceOptions;