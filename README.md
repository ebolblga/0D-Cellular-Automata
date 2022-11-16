# 0D Cellular Automata (0D CA)
## Small website made to explore the smallest possible cell world.
https://ebolblga.github.io/0D-Cellular-Automata/  

![image](https://user-images.githubusercontent.com/82185066/201471738-71be6550-4f63-4578-b025-53081346dc1e.png)

Just like [1D ECA](https://en.wikipedia.org/wiki/Elementary_cellular_automaton) where we stack 1D states of the world one after another, representing a temporal dimension, this will be stacking 0D worlds, creatings 1D image in the end.

Again just like in 1D each cell has its "neighborhood", in 0D it consists of only 1 cell. For **n** states there exists **n^1** possible neighborhood states and **n^(n^1)** possible rules. So go and explore all of them I guess...?

## Properties:
Lambda (λ) is a number between 0 and 1 that corresponds to how chaotic the system is with given rules. With λ = 0 the system is stable, nothing is happening, with λ = 1 the system is totally chaotic. Somewhere between those lambdas there is a region called [edge of chaos](https://en.wikipedia.org/wiki/Edge_of_chaos). It is a place where the phase shift from order to disorder is happening - the only place where complex structures can exist.

Interestingly, most of the rules are considered a reversible cellular automaton just like [Critters](https://en.wikipedia.org/wiki/Critters_(cellular_automaton)) for example. There is only one state that led to the current state and there is only one state that will be next. This also means that all rules are periodic, it's like doing the same moves to the rubrics cube over and over, after some time you will get back to the exact same state.

It is also interesting to imagine what creature living in 0D will see. As you probably know, it seems like a rule that n dimensional being has a vision in n - 1. So we see in 2D, Mario in 1D and 0D creature will see -1D...? Although we can only speculate if that is even possible or makes sense, there exists a name for such objects: [nullitope](https://polytope.miraheze.org/wiki/Nullitope). 0D object - point, consists of infinitely many nullitopes. Nullitopes also have interesting properties, for example, they do not have coordinates.

## 2D time
https://ebolblga.github.io/0D-Cellular-Automata/2dtime  

![image](https://user-images.githubusercontent.com/82185066/202168586-d0df377a-cb6d-42f7-9333-7d6e18232b0b.png)  

Now that you familiar with 0+1D CA (meaning 0 spatial dimensions and 1 time dimension), it is time to play with 0+2D CA - 0 spatial dimensions and 2 time dimensions. One rule will act along -y axis, second one along the x axis and any point on the surface is basically a combination of going forward in one and another timeline. Here are the articles that inspired me:
- [CELLULAR AUTOMATA WITH 2 TEMPORAL DIMENSIONS](http://dmishin.blogspot.com/2014/06/cellular-automata-with-2-temporal.html?m=1)
- [Properties of reversible 1D automata (RU)](https://optozorax.github.io/p/invertible-1d-automata/)
- [What would the universe be like with additional temporal dimensions?](https://www.askamathematician.com/2012/06/q-what-would-the-universe-be-like-with-additional-temporal-dimensions/)

Considering that they are commutative (AB = BA) and AA is a valid pair, for **n** rules there exists **n * (n - 1) / 2 + n** possible rule combinations. The program finds sets of rules that are consistent with each other and displays them.

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
