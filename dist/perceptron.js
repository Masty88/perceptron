// class Perceptron{
//     constructor(n,lr) {
//         //Array of weights for inputs
//         this.weights = new Array(n)
//         //start with random weights
//         for (let i = 0; i < n; i ++){
//             this.weights[i] = random(-1,1);
//         }
//         this.lr = 0.1; // learning rate/constan
//     }
//
//     feedforward(inputs){
//         let sum = 0;
//         for (let i =0; i<this.weights.length;i++){
//             sum +=inputs[i] * this.weights[i]
//             console.log("weights",this.weights[i])
//         }
//         console.table("inputs",inputs)
//         return this.activation(sum)
//      }
//
//      //Activation function
//      activation(sum){
//         if (sum > 0) return 1;
//         else return -1;
//      }
//
//      train(inputs,target){
//         this.guess= this.feedforward(inputs);
//         this.error = target - this.guess;
//
//         //GRADIENT DESCENT
//         for( let i=0; i< this.weights.length; i++ ){
//             this.weights[i] += this.error * inputs[i] * this.lr;
//         }
//      }
// }


// Perceptron is created with n weights and learning constant
class Perceptron {
    constructor(n, c) {
        // Array of weights for inputs
        this.weights = new Array(n);
        // this.weights=[-203.19313423823831, 199.8031885848072]
        // Start with random weights
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1);
        }
        console.log("starting", this.weights)
        this.c = c; // learning rate/constant
    }

    // Function to train the Perceptron
    // Weights are adjusted based on "desired" answer
    train(inputs, desired) {
        // Guess the result
        let guess = this.feedforward(inputs);
        // Compute the factor for changing the weight based on the error
        // Error = desired output - guessed output
        // Note this can only be 0, -2, or 2
        // Multiply by learning constant
        let error = desired - guess;
        console.log(error)
        // Adjust weights based on weightChange * input
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += this.c * error * inputs[i];
        }
        console.table("trained",this.weights)
    }

    // Guess -1 or 1 based on input values
    feedforward(inputs) {
        // Sum all values
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
            // console.log(this.weights[i])
        }
        // Result is sign of the sum, -1 or 1
        return this.activate(sum);
    }

    activate(sum) {
        if (sum > 0) return 1;
        else return -1;
    }

    // Return weights
    getWeights() {
        return this.weights;
    }
}
