import React, {useState, useEffect} from "react";
//import Layout from "./Layout";
import {getFilteredProducts} from "./apiCore";
import Card from "./Card";
import {prices} from './fixedPrices';
import RadioBox from './RadioBox';

const Shop = () => {

    const[myFilters, setMyFilters] = useState({
        filters: {price: []}
    });

    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState(0);

    const loadFilteredResults = newFilters => {
        //console.log(newFilters);
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    useEffect(() => {
        loadFilteredResults(skip, limit, myFilters.filters);
    }, []);

    const handleFilters = (filters, filterBy) => {
        const newFilters = {...myFilters};
        newFilters.filters[filterBy] = filters;

        if(filterBy == "price"){
            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }
        loadFilteredResults(myFilters.filters)
        setMyFilters(newFilters);
    };

    const handlePrice = value => {
        const data = prices;
        let array = []

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }
        }
        return array;
    };

    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5">
                    Load more
                </button>
            )
        );
    };


    return(
        <>
            <div className="container-fluid"> 
                <div className="row">
                    {/* <div className="col-4">
                        <h4>Filter By Price Range</h4>
                        <div>
                            <RadioBox
                                prices={prices}
                                handleFilters={filters =>
                                    handleFilters(filters, "price")
                                }/>
                        </div>
                    </div> */}
                    <div className="col-12">
                        {/* {JSON.stringify(filteredResults)} */}
                        <h2 className="mb-4">Products</h2>
                         <div className="row" style={{margin: "0% auto"}}>
                        {filteredResults.map((product, i) => (
                            <Card key={i} product={product} />
                        ))}
                    </div>
                    <hr />
                    {loadMoreButton()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;

