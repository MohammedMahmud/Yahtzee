import React, { Component } from "react";

class DiceRoller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice: [1, 1, 1, 1, 1],
            held: [],
            rollsLeft: 3,
        };
    }

    

    randomDieValue = () => 1 + Math.floor(Math.random() * 6);

    rollDice = () => {
        const newDice = this.state.dice.map((die, idx) =>
            this.state.held.includes(idx) ? die : this.randomDieValue()
        );
        this.setState({ dice: newDice, rollsLeft: this.state.rollsLeft - 1 }, () => {
            if (this.props.onStateUpdated) {
                this.props.onStateUpdated(this.state);
            }
        });
    };

    toggleHeld = (idx) => {
        this.setState((prevState) => ({
            held: prevState.held.includes(idx)
                ? prevState.held.filter((i) => i !== idx)
                : [...prevState.held, idx],
        }));
    };

    render() {
        const diceImages = this.state.dice.map((die, idx) => {
            const imgSrc = `../pix/dice${die}.gif`;
            const isHeld = this.state.held.includes(idx);
            return (
                <img
                    key={idx}
                    src={imgSrc}
                    alt={`dice${die}`}
                    onClick={() => this.toggleHeld(idx)}
                    style={isHeld ? { opacity: "0.5" } : {}}
                />
            );
        });

        return (
            <div>
                <div id="pick_gen">{diceImages}</div>
                {this.state.rollsLeft > 0 ? (
                    <button onClick={this.rollDice}>Roll the dice! ({this.state.rollsLeft} left)</button>
                ) : (
                    <div>No rolls left</div>
                )}
            </div>
        );
    }
}

export default DiceRoller;
