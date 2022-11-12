# 0D Cellular Automata (0D CA)
## Small website made to explore the smallest possible cell world.
https://ebolblga.github.io/0D-Cellular-Automata/  

![image](https://user-images.githubusercontent.com/82185066/201471738-71be6550-4f63-4578-b025-53081346dc1e.png)

Just like [1D ECA](https://en.wikipedia.org/wiki/Elementary_cellular_automaton) where we stack 1D states of the world one after another, representing a temporal dimension, this will be stacking 0D worlds, creatings 1D image in the end.

Again just like in 1D each cell has its "neighborhood", in 0D it consists of only 1 cell. For **n** states there exists **n^1** possible neighborhood states and **n^(n^1)** possible rules. So go and explore all of them I guess...?

## Properties:
Lambda (λ) is a number between 0 and 1 that corresponds to how chaotic the system is with given rules. With λ = 0 the system is stable, nothing is happening, with λ = 1 the system is totally chaotic. Somewhere between those lambdas there is a region called [edge of chaos](https://en.wikipedia.org/wiki/Edge_of_chaos). It is a place where the phase shift from order to disorder is happening - the only place where complex structures can exist.

Interestingly, most of the rules are considered a reversible cellular automaton just like [Critters](https://en.wikipedia.org/wiki/Critters_(cellular_automaton)) for example. There is only one state that led to the current state and there is only one state that will be next. This also means that all rules are periodic, it's like doing the same moves to the rubrics cube over and over, after some time you will get back to the exact same state.

## Useful resources:
- [Elementary cellular automaton - Wikipedia](https://en.wikipedia.org/wiki/Elementary_cellular_automaton)
- [1D Cellular Automata and the Edge of Chaos](https://math.hws.edu/eck/js/edge-of-chaos/CA-info.html)
- [Properties of reversible 1D automata (RU)](https://optozorax.github.io/p/invertible-1d-automata/)
- [Wolfram code - Wikipedia](https://en.wikipedia.org/wiki/Wolfram_code)

## How to launch yourself using [Node.js](https://nodejs.org/en/) and [Visual Studio Code](https://code.visualstudio.com/download)

```bash
# install yarn
npm install --global yarn

# now install all modules
yarn

# now start project
yarn dev

# build ssg version
yarn generate
```

## License
This program is licensed under the MIT License. Please read the License file to know about the usage terms and conditions.
