import React, { Component } from "react";

class ProductDemo extends Component {
    constructor(props) {
        super(props);

        this.items = [
            { label: 'Apple', price: 100 },
            { label: 'Banana', price: 75 },
            { label: 'Orange', price: 125 },
            { label: 'Mango', price: 200 }
        ];

        this.state = {
            selectedItemIndex: 0,
            quantity: 1
        };
    }

    handleItemChange = (event) => {
        this.setState({ selectedItemIndex: event.target.value });
    };

    increment = () => {
        this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            quantity: Math.max(0, prevState.quantity - 1)
        }));
    };

    render() {
        const { selectedItemIndex, quantity } = this.state;
        const selectedItem = this.items[selectedItemIndex];
        const totalPrice = (selectedItem ? selectedItem.price : 0) * quantity;

        return (
            <>
                <h1>Product Demo</h1>
                <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '300px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>

                        <select value={selectedItemIndex} onChange={this.handleItemChange}>
                            {this.items.map((item, index) => (
                                <option key={index} value={index}>
                                    {item.label} (₹{item.price})
                                </option>
                            ))}
                        </select>


                        <button onClick={this.decrement} disabled={quantity === 0}>-</button>
                        <span>{quantity}</span>
                        <button onClick={this.increment}>+</button>
                    </div>


                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Total Price: ₹{totalPrice}
                    </div>
                </div>
            </>
        )
    }
}

export default ProductDemo;
