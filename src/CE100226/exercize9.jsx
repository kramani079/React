import React, { Component } from "react";
import "./cart.css";

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            Itemname: "",
            Itemquantity: "",
            Itemprice: "",
        };
    }

    handleItemnameChange = (e) => {
        this.setState({ Itemname: e.target.value });
    };
    handleItemquantityChange = (e) => {
        this.setState({ Itemquantity: e.target.value });
    };
    handleItempriceChange = (e) => {
        this.setState({ Itemprice: e.target.value });
    };

    addtocart = () => {
        if (
            this.state.Itemname.trim() === "" ||
            this.state.Itemquantity.trim() === "" ||
            this.state.Itemprice.trim() === ""
        ) {
            return;
        }
        const quantity = parseInt(this.state.Itemquantity, 10);
        const price = parseFloat(this.state.Itemprice);
        const newCart = {
            id: Date.now(),
            Itemname: this.state.Itemname,
            Itemquantity: isNaN(quantity) ? 0 : quantity,
            Itemprice: isNaN(price) ? 0 : price,
            visible: false,
            update: false,
        };

        this.setState((prevState) => ({
            cart: [newCart, ...prevState.cart],
            Itemname: "",
            Itemquantity: "",
            Itemprice: "",
        }));
    };

    toggleDisplay = (id) => {
        this.setState((prevState) => ({
            cart: prevState.cart.map((y) =>
                y.id === id ? { ...y, visible: !y.visible } : y
            ),
        }));
    };

    deleteCart = (id) => {
        this.setState((prevState) => ({
            cart: prevState.cart.filter((y) => y.id !== id),
        }));
    };

    clearCart = () => {
        this.setState({ cart: [] });
    };

    handleUpdateChange = (id, field, value) => {
        this.setState((prevState) => ({
            cart: prevState.cart.map((c) =>
                c.id === id ? { ...c, [field]: value } : c
            ),
        }));
    };

    savecart = (id) => {
        this.setState((prevState) => ({
            cart: prevState.cart.map((c) =>
                c.id === id ? { ...c, update: false } : c
            ),
        }));
    };

    updateCart = (id) => {
        this.setState((prevState) => ({
            cart: prevState.cart.map((c) =>
                c.id === id ? { ...c, update: true } : c
            ),
        }));
    };

    render() {
        const { cart } = this.state;
        const subtotal = cart.reduce(
            (acc, item) => acc + Number(item.Itemprice) * Number(item.Itemquantity),
            0
        );
        const gst = subtotal * 0.1;
        const total = subtotal + gst;
        return (
            <>
                <div className="cart-container">
                    <h1>Shopping Cart</h1>

                    <input
                        type="text"
                        className="cart-input"
                        value={this.state.Itemname}
                        placeholder="Item Name"
                        onChange={this.handleItemnameChange}
                    />
                    <br />
                    <input
                        type="number"
                        className="cart-input"
                        value={this.state.Itemquantity}
                        placeholder="Quantity"
                        onChange={this.handleItemquantityChange}
                        min="1"
                    />
                    <br />
                    <input
                        type="number"
                        className="cart-input"
                        value={this.state.Itemprice}
                        placeholder="Price"
                        onChange={this.handleItempriceChange}
                        step="0.01"
                        min="0"
                    />
                    <br />
                    <div style={{ display: "flex", gap: 8 }}>
                        <button className="cart-button" onClick={this.addtocart}>Add to Cart</button>
                        <button className="cart-button" onClick={this.clearCart} style={{ background: "#e53935" }}>Clear Cart</button>
                    </div>
                    <br />

                    <ul className="cart-list">
                        {cart.map((y) => (
                            <li key={y.id} className="cart-item">
                                {y.update ? (
                                    <>
                                        <input
                                            value={y.Itemname}
                                            onChange={(e) =>
                                                this.handleUpdateChange(y.id, "Itemname", e.target.value)
                                            }
                                        />
                                        <input
                                            value={y.Itemquantity}
                                            onChange={(e) =>
                                                this.handleUpdateChange(y.id, "Itemquantity", e.target.value)
                                            }
                                        />
                                        <input
                                            value={y.Itemprice}
                                            onChange={(e) =>
                                                this.handleUpdateChange(y.id, "Itemprice", e.target.value)
                                            }
                                        />
                                        <button onClick={() => this.savecart(y.id)}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <div>
                                                <strong>{y.Itemname}</strong>
                                            </div>
                                            <div className="actions">
                                                <button onClick={() => this.toggleDisplay(y.id)}>View</button>
                                                <button onClick={() => this.updateCart(y.id)}>Update</button>
                                                <button onClick={() => this.deleteCart(y.id)}>Delete</button>
                                            </div>
                                            <div style={{ display: y.visible ? "block" : "none", marginTop: 8 }}>
                                                Quantity: {y.Itemquantity} - Price: {Number(y.Itemprice).toFixed(2)} - Total: {(Number(y.Itemprice) * Number(y.Itemquantity)).toFixed(2)}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="cart-totals" style={{ marginTop: 16 }}>
                        <div>Subtotal: {subtotal.toFixed(2)}</div>
                        <div>GST (10%): {gst.toFixed(2)}</div>
                        <div className="cart-total-amount">Total: {total.toFixed(2)}</div>
                    </div>
                </div>
            </>
        );
    }
}

export default ShoppingCart;
