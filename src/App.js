import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div align="center">
              <div id="pick_gen"></div>
              <button onClick="Main_call();"> Roll the dice!</button>

              <script src="src/app/random_vlaue.js"></script>
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
                  <td> <div id="get_1s_sum"> </div> </td>
              </tr>

              <tr>
                  <td>2</td>
                  <td>Anytime</td>
                  <td>The sum of 2nd only</td>
                  <td> <div id="show_the_array2"> </div></td>
                  <td> <div id="get_2nd_sum"> </div> </td>
              </tr>

              <tr>
                  <td>3</td>
                  <td>Anytime</td>
                  <td>The sum of 3rd only</td>
                  <td> <div id="show_the_array3"> </div> </td>
                  <td> <div id="get_3ed_sum"> </div> </td>
              </tr>

              <tr>
                  <td>4</td>
                  <td>Anytime</td>
                  <td>The sum of 4th only</td>
                  <td> <div id="show_the_array4"> </div> </td>
                  <td> <div id="get_4th_sum"> </div> </td>
              </tr>

              <tr>
                  <td>5</td>
                  <td>Anytime</td>
                  <td>The sum of 5th only</td>
                  <td> <div id="show_the_array5"> </div> </td>
                  <td> <div id="get_5th_sum"> </div> </td>
              </tr>

              <tr>
                  <td>6</td>
                  <td>Anytime</td>
                  <td>The sum of 6th only</td>
                  <td> <div id="show_the_array6"> </div> </td>
                  <td> <div id="get_6th_sum"> </div> </td>
              </tr>

              <tr>
                  <td>3 of a Kind	</td>
                  <td>At Least 3 Dice The Same</td>
                  <td>The Total Of All Dice</td>
                  <td> <div id="show_the_array7"> </div> </td>
                  <td> <div id="get_3of_a_same"> </div> </td>
              </tr>

              <tr>
                  <td>4 of a kind	</td>
                  <td>At Least 4 Dice The Same</td>
                  <td>The Total Of All Dice</td>
                  <td> <div id="show_the_array8"> </div> </td>
                  <td> <div id="get_4of_a_same"> </div> </td>
              </tr>

              <tr>
                  <td>Full house </td>
                  <td>3 The Same And 2 The Same</td>
                  <td>25</td>
                  <td> <div id="show_the_array9"> </div> </td>
                  <td> <div id="Full_House"> </div> </td>
              </tr>

              <tr>
                  <td>Small Straight </td>
                  <td>4 in A Row</td>
                  <td>30</td>
                  <td> <div id="show_the_array10"> </div> </td>
                  <td> <div id="Small_Straight"> </div> </td>
              </tr>

              <tr>
                  <td>Large Straight </td>
                  <td>5 in A Row</td>
                  <td>40</td>
                  <td> <div id="show_the_array11"> </div> </td>
                  <td> <div id="Large_Straight"> </div> </td>
              </tr>

              <tr>
                  <td>Yahtzee </td>
                  <td>5 The Same</td>
                  <td>50</td>
                  <td> <div id="show_the_array12"> </div> </td>
                  <td> <div id="Yahtzee"> </div> </td>
              </tr>

              <tr>
                  <td>Chance </td>
                  <td>Anytime</td>
                  <td>The Total Of All Dice</td>
                  <td> <div id="show_the_array13"> </div> </td>
                  <td> <div id="Chance"> </div> </td>
              </tr>

          </table>

          <script src="src/app/game_component.js"></script>
      </div>
    );
  }
}

export default App;
