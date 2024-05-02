import React from "react";

const CarBrands =() => {
    const carList = ['Ford', 'BMW', 'Toyota', 'Cheverolet', 'Benz'];
    const brands = carList.map((item) => {
        return (
            <li key={(item)}>
                {item}
            </li>
        )
    })

    return(
        <div>
            <h3> Dealership Brands </h3>
            <ol>
                {brands}
            </ol>
        </div>
    )
}

export default CarBrands;