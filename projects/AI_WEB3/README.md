# AI in Web3

On the POV os the arquitecture, the AI can adopte 3 components:

- TensorFlow.js : It enables machine learning models runnning and training inside browsers.
- Gradient descent : Smart contracts can implement Gradient.
- Close-form : Smart contracts can also solve the machine learning model parameters in close-form.

![AIarquitecture](https://raw.githubusercontent.com/RafaBlockDev/Personsal-Web3-Projects/main/Tools/images/Commun_Arquitecture.png)

## Algorithms

We can define 6 scenarios for AI adoption in Web3.0. The goal of this section is to figure out the theorical best practice among scenarios.

![AlrithmImage](https://raw.githubusercontent.com/RafaBlockDev/Personsal-Web3-Projects/main/projects/AI_WEB3/utils/AlgorithmImage.png)

We can execute the AI at the frontend or also in the blockchain using smart contracts, here we have both alternatives:

![Scenarios](https://raw.githubusercontent.com/RafaBlockDev/Personsal-Web3-Projects/main/projects/AI_WEB3/utils/Scenarios.png)

Costs: TensorFlow.js execute itself on frontend, (almost without costs). However, if using smart contracts to run AI algorithm, then for each user a new smart contract will be deployed and trianed. The deployment can costs a lot, but the training costs, which updates potentially huge number of parameters inside a contract for hundreds or thousands of times, can be unexpectedly high. It is true that one can train the model, find the optimal parameter before deploying a smart contract. However, that requires technical expertise, which is infeasible for consumer-based product. Let alone the still high deployment cost. So, Scenario 1 is clearly the winner in terms of cost.

Privacy-wise, keeping all the data inside your browser is clearly a more secure solution. In scenario 3, to train the smart contract, users might have to expose their personal data. And the trained models that live inside smart contracts are open, which also lead to privacy concerns. Therefore, Scenario 1 wins again.

Speed-wise, this is the part I am not so sure. I think the speed of Scenario 1 is acceptable for normal applications, as demonstrated in the last section of this article. For the speed of EVM, it is not.

But, here we have another altenative...

![Alternative]()

In the 4 scenario (as the 1 scenario) TensorFlow.js almost has not costs, and in the 5 scenario the smart contract can be deployed just 1 time.

Privacy-wise, since general purpose tasks normally do not require users’ data, both solutions are safe.

Speed-wise, the comparison is also identical to the previous section. Without concrete evidence.
