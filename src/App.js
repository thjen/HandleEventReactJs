import React, { Component } from 'react';
import Product from "./components/Product";

class App extends Component {

    eventClick() {
        console.log("This is onclick");
    }

    render() {
        var product = [{
                id: 0,
                name: "qthjen",
                price: "15000000",
                image: "https://www.t-mobile.com/images/png/products/phones/Apple-iPhone-X-Silver/250x270_1.png",
                status: true,
            }, {
                id: 1,
                name: "thjenit98",
                price: "15000000",
                image: "https://staticshop.o2.co.uk/product/images/iphone6s-plus-rsgld-sku-header.png?cb=0c25ff5af69f144e2712d04e1c9c6631",
                status: false,
            }, {
                id: 2,
                name: "bo thjen",
                price: "15000000",
                image: "https://clickbuy.com.vn/wp-content/uploads/2016/09/iphone-7-jet-black_Clickbuy.png",
                status: true,
            }
        ];

        let element = product.map((product, index) => {
            let result = '';
            if (product.status)
                result =<Product key={product.id}
                            price={product.price}
                            name={product.name}
                            image={product.image}
                        />  
            return result;           
        });

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand">Props</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {element}
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <button type="button" className="btn btn-info"
                                    onClick={this.eventClick}>Click</button>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>               
        );
    }
}

export default App;
