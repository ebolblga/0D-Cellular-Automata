<script setup lang="ts">
useHead({ title: "0D Cellular Automata" });
const stateCount = ref(2);
const maxTime = ref(15);
const ruleCount = ref(2);
const ruleUrls = ref<string[]>();
let worldIndex = 0;

const colorPalette = [
    [102, 41, 89],  // #662959
    [165, 99, 104], // #A56368
    [191, 177, 162],// #BFB1A2
    [240, 235, 216] // #F0EBD8
]

onMounted(async ()=>{
    onChange();
});

async function Draw(rule: number) {
    let height: number = maxTime.value;
    height++;
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx!.fillStyle="rgb(0, 0, 0)"
    ctx!.fillRect(0, 0, canvas.width, canvas.height);
    let RGGData = ctx!.getImageData(0, 0, canvas.width, canvas.height);

    RGGData.data[0] = colorPalette[worldIndex][0];
    RGGData.data[1] = colorPalette[worldIndex][1];
    RGGData.data[2] = colorPalette[worldIndex][2];

    for (let i = 4; i < RGGData.data.length; i += 4) {
        if (RGGData.data[i - 4] === 102) {
            if ((rule & 1) === 1) {
                RGGData.data[i] = colorPalette[1][0];
                RGGData.data[i + 1] = colorPalette[1][1];
                RGGData.data[i + 2] = colorPalette[1][2];
            }
            else {
                RGGData.data[i] = colorPalette[0][0];
                RGGData.data[i + 1] = colorPalette[0][1];
                RGGData.data[i + 2] = colorPalette[0][2];
            }
        }
        else if (RGGData.data[i - 4] === 165) {
            if ((rule & 1) === 1) {
                RGGData.data[i] = colorPalette[0][0];
                RGGData.data[i + 1] = colorPalette[0][1];
                RGGData.data[i + 2] = colorPalette[0][2];
            }
            else {
                RGGData.data[i] = colorPalette[1][0];
                RGGData.data[i + 1] = colorPalette[1][1];
                RGGData.data[i + 2] = colorPalette[1][2];
            }
        }
        else if (RGGData.data[i - 4] === 191) {
            
        }
        else if (RGGData.data[i - 4] === 240) {
            
        }
    }

    ctx!.putImageData(RGGData, 0, 0);
    return canvas.toDataURL();
}

async function onChange() {
    ruleCount.value = factorial(Math.pow(stateCount.value, 1));
    ruleUrls.value = [];
    worldIndex = Math.floor(Math.random() * stateCount.value);
    for (let i = 0; i < ruleCount.value; i++) {
        ruleUrls.value.push(await Draw(i));
    }

    // console.log(ruleUrls.value);
}

function factorial(n: number): number {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
</script>
<template>
    <div class="h-screen flex flex-row flex-wrap">
        <div class="h-full w-[50vw] p-2 overflow-auto">
            <p class="text-2xl font-bold">0D Cellular Automata (0D CA)</p>
            <p>Small website made to explore the smallest possible cell world.</p>
            <p class="mt-10">Just like <a class="underline" href="https://en.wikipedia.org/wiki/Elementary_cellular_automaton" target="_blank" rel="noopener noreferrer">1D ECA</a> where we stack 1D states of the world one after another, representing a temporal dimension, this will be stacking 0D worlds, creatings 1D image in the end.</p>
            <p class="mt-10">Select amount of states:</p>
            <select v-model="stateCount" class="w-full rounded-lg h-7 bg-[#f44e38] text-[#1d0f44] outline-none" @change="onChange()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">[WIP] 3</option>
                <option value="4">[WIP] 4</option>
            </select>
            <p class="mt-5">Run for steps: <b>{{  maxTime }}</b></p>
            <input aria-label="For how many steps should it be ran?" v-model="maxTime" type="range" min="0" max="63" class="w-full h-2 rounded-lg appearance-none cursor-ew-resize bg-[#f44e38] accent-white" @change="onChange()">
            <p class="mt-5">Again just like in 1D each cell has its "neighborhood", in 0D it consists of only 1 cell. For <b>{{ stateCount }}</b> states there exists <b>{{ stateCount }}<sup>1</sup> = {{ Math.pow(stateCount, 1) }}</b> possible neighborhood states and <b>{{ stateCount }}<sup>1</sup>! = {{ factorial(Math.pow(stateCount, 1)) }}</b> possible rules. Let's explore all of them!</p>
            <p class="mt-10 text-lg">Properties:</p>
            <p>Lambda (λ) is a number between 0 and 1 that corresponds to how chaotic the system is with given rules. With λ = 0 the system is stable, nothing is happening, with λ = 1 the system is totally chaotic. Somewhere between those lambdas there is a region called <a class="underline" href="https://en.wikipedia.org/wiki/Edge_of_chaos" target="_blank" rel="noopener noreferrer">edge of chaos</a>. It is a place where the phase shift from order to disorder is happening - the only place where complex structures can exist.</p>
            <p>Interestingly, all of the rules are considered a reversible cellular automaton just like <a class="underline" href="https://en.wikipedia.org/wiki/Critters_(cellular_automaton)" target="_blank" rel="noopener noreferrer">Critters</a> for example. There is only one state that led to the current state and there is only one state that will be next. This also means that all rules are periodic, it's like doing the same moves to the rubrics cube over and over, after some time you will get back to the exact same state.</p>
            <p><a class="underline text-xs" href="https://github.com/ebolblga/0D-Cellular-Automata" target="_blank" rel="noopener noreferrer">Source code</a></p>
            <button class="mt-10 bg-[#f44e38] text-[#1d0f44] p-1 px-2 rounded-full font-bold active:bg-[#1d0f44] active:text-[#f44e38]" @click="onChange()">Generate random world</button>
        </div>
        <div class="h-full w-[50vw] p-2 bg-[#f44e38] text-[#1d0f44] flex flex-row overflow-auto">
            <div v-for="(url, i) in ruleUrls"  class="min-w-[50px] h-full mr-3 text-center">
                <p class="font-bold">Rule {{ i }}</p>
                <p v-if="ruleCount != 1" class="font-bold mb-1 text-xs">λ = {{ Math.round((i / (ruleCount - 1)) * 100) / 100 }}</p>
                <p v-else class="font-bold mb-1 text-xs">λ = 0</p>
                <img :src="url" class="w-full" style="image-rendering: pixelated" />
            </div>
        </div>
    </div>
</template>