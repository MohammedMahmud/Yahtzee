import React, { Component } from 'react';
import './App.css';
import DiceRoller from "./DiceRoller";


class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            scores: {
                ones: 0,
                twos: 0,
                threes: 0,
                fours: 0,
                fives: 0,
                sixes: 0,
                threeOfAKind: 0,
                fourOfAKind: 0,
                fullHouse: 0,
                smallStraight: 0,
                largeStraight: 0,
                yahtzee: 0,
                chance: 0,
            },
        };

        
    }

    handleRoll = (diceValues) => {
        const countDice = (value) => diceValues.filter(v => v === value).length;

        const ones = countDice(1);
        const twos = countDice(2) * 2;
        const threes = countDice(3) * 3;
        const fours = countDice(4) * 4;
        const fives = countDice(5) * 5;
        const sixes = countDice(6) * 6;

        const counts = [0, ones, twos / 2, threes / 3, fours / 4, fives / 5, sixes / 6];
        const threeOfAKind = counts.some(c => c >= 3) ? diceValues.reduce((sum, value) => sum + value, 0) : 0;
        const fourOfAKind = counts.some(c => c >= 4) ? diceValues.reduce((sum, value) => sum + value, 0) : 0;

        const fullHouse = counts.some(c => c === 3) && counts.some(c => c === 2) ? 25 : 0;

        const smallStraight = [1, 2, 3, 4].every(n => diceValues.includes(n)) || [2, 3, 4, 5].every(n => diceValues.includes(n)) || [3, 4, 5, 6].every(n => diceValues.includes(n)) ? 30 : 0;

        const largeStraight = [1, 2, 3, 4, 5].every(n => diceValues.includes(n)) || [2, 3, 4, 5, 6].every(n => diceValues.includes(n)) ? 40 : 0;

        const yahtzee = counts.some(c => c === 5) ? 50 : 0;
        const chance = diceValues.reduce((sum, value) => sum + value, 0);

        this.setState((prevState) => ({
            scores: {
                ...prevState.scores,
                ones,
                twos,
                threes,
                fours,
                fives,
                sixes,
                threeOfAKind,
                fourOfAKind,
                fullHouse,
                smallStraight,
                largeStraight,
                yahtzee,
                chance,
            },
        }));
    };


    handleStateUpdated = (diceState) => {
        if (diceState.rollsLeft === 0)
        {
            this.handleRoll(diceState.dice);
        }
        else
        {
            setTimeout(() => this.handleRoll(diceState.dice), 1000);
        }
    };
    


    render() {
        return (
            <div className="App">
                <div align="center">
                    <div id="pick_gen"></div>
                    {/* <DiceRoller onRoll={this.handleRoll} /> */}
                    <DiceRoller onRoll={this.handleRoll} onStateUpdated={this.handleStateUpdated} />

                </div>
                <table>
                    <tr>
                        <th>Row</th>
                        <th>When</th>
                        <th>Scoring</th>
                        <th>Example</th>
                        <th>Score</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Anytime</td>
                        <td>The sum of 1's only</td>
                        <td> <div id="show_the_array1"> </div> </td>
                        {/* <td> <div id="get_1s_sum"> </div> </td> */}
                        <td> <div id="get_1s_sum"> {this.state.scores.ones} </div> </td>


                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Anytime</td>
                        <td>The sum of 2nd only</td>
                        <td> <div id="show_the_array2"> </div></td>
                        {/* <td> <div id="get_2nd_sum"> </div> </td> */}
                        <td> <div id="get_2nd_sum"> {this.state.scores.twos} </div> </td>

                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Anytime</td>
                        <td>The sum of 3rd only</td>
                        <td> <div id="show_the_array3"> </div> </td>
                        {/* <td> <div id="get_3ed_sum"> </div> </td> */}
                        <td> <div id="get_3ed_sum"> {this.state.scores.threes} </div> </td>

                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Anytime</td>
                        <td>The sum of 4th only</td>
                        <td> <div id="show_the_array4"> </div> </td>
                        {/* <td> <div id="get_4th_sum"> </div> </td> */}
                        <td> <div id="get_4th_sum"> {this.state.scores.fours} </div> </td>

                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Anytime</td>
                        <td>The sum of 5th only</td>
                        <td> <div id="show_the_array5"> </div> </td>
                        {/* <td> <div id="get_5th_sum"> </div> </td> */}
                        <td> <div id="get_5th_sum"> {this.state.scores.fives} </div> </td>

                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Anytime</td>
                        <td>The sum of 6th only</td>
                        <td> <div id="show_the_array6"> </div> </td>
                        {/* <td> <div id="get_6th_sum"> </div> </td> */}
                        <td> <div id="get_6th_sum"> {this.state.scores.sixes} </div> </td>

                    </tr>

                    <tr>
                        <td>3 of a Kind	</td>
                        <td>At Least 3 Dice The Same</td>
                        <td>The Total Of All Dice</td>
                        <td> <div id="show_the_array7"> </div> </td>
                        {/* <td> <div id="get_3of_a_same"> </div> </td> */}
                        <td> <div id="get_3of_a_same"> {this.state.scores.threeOfAKind} </div> </td>

                    </tr>

                    <tr>
                        <td>4 of a kind	</td>
                        <td>At Least 4 Dice The Same</td>
                        <td>The Total Of All Dice</td>
                        <td> <div id="show_the_array8"> </div> </td>
                        {/* <td> <div id="get_4of_a_same"> </div> </td> */}
                        <td> <div id="get_4of_a_same"> {this.state.scores.fourOfAKind} </div> </td>

                    </tr>

                    <tr>
                        <td>Full house </td>
                        <td>3 The Same And 2 The Same</td>
                        <td>25</td>
                        <td> <div id="show_the_array9"> </div> </td>
                        {/* <td> <div id="Full_House"> </div> </td> */}
                        <td> <div id="Full_House"> {this.state.scores.fives} </div> </td>

                    </tr>

                    <tr>
                        <td>Small Straight </td>
                        <td>4 in A Row</td>
                        <td>30</td>
                        <td> <div id="show_the_array10"> </div> </td>
                        {/* <td> <div id="Small_Straight"> </div> </td> */}
                        <td> <div id="Small_Straight"> {this.state.scores.smallStraight} </div> </td>

                    </tr>

                    <tr>
                        <td>Large Straight </td>
                        <td>5 in A Row</td>
                        <td>40</td>
                        <td> <div id="show_the_array11"> </div> </td>
                        {/* <td> <div id="Large_Straight"> </div> </td> */}
                        <td> <div id="Large_Straight"> {this.state.scores.largeStraight} </div> </td>

                    </tr>

                    <tr>
                        <td>Yahtzee </td>
                        <td>5 The Same</td>
                        <td>50</td>
                        <td> <div id="show_the_array12"> </div> </td>
                        {/* <td> <div id="Yahtzee"> </div> </td> */}
                        <td> <div id="Yahtzee"> {this.state.scores.yahtzee} </div> </td>

                    </tr>

                    <tr>
                        <td>Chance </td>
                        <td>Anytime</td>
                        <td>The Total Of All Dice</td>
                        <td> <div id="show_the_array13"> </div> </td>
                        {/* <td> <div id="Chance"> </div> </td> */}
                        <td> <div id="Chance"> {this.state.scores.chance} </div> </td>

                    </tr>

                </table>

            </div>
        );
    }
}

export default App;
