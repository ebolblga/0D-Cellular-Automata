<script setup lang="ts">
useHead({ title: "0D Cellular Automata with 2D time" });
const stateCount = ref(2);
const maxTime = ref(3);
const ruleCount = ref(2);
const ruleUrls = ref<ruleSet[]>();
let worldIndex = 0;

type ruleSet = {
    rule1: number,
    rule2: number,
    img: string
};

const colorPalette = [
    [25, 0, 0],         // #190000
    [86, 9, 9],         // #560909
    [173, 32, 32],      // #AD2020
    [242, 230, 230]     // #F2E6E6
]

onMounted(async ()=>{
    onChange();
});

const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');

function Draw2(rule1: number, rule2: number) {
    let size: number = maxTime.value;
    size++;
    const rule1Str = zeroPad(rule1, 4);
    const rule2Str = zeroPad(rule2, 4);

    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx!.fillStyle="rgb(0, 0, 0)"
    ctx!.fillRect(0, 0, canvas.width, canvas.height);
    let RGGData = ctx!.getImageData(0, 0, canvas.width, canvas.height);

    RGGData.data[0] = colorPalette[worldIndex][0];
    RGGData.data[1] = colorPalette[worldIndex][1];
    RGGData.data[2] = colorPalette[worldIndex][2];

    for (let i = 4 * size; i < RGGData.data.length; i += (4 * size)) {
        const pos = i - 4 * size;
        if (RGGData.data[pos] === colorPalette[0][0]) {
            if (String(rule1Str).charAt(3) === "0") {
                RGGData.data[i] = colorPalette[0][0];
                RGGData.data[i + 1] = colorPalette[0][1];
                RGGData.data[i + 2] = colorPalette[0][2];
            } else if (String(rule1Str).charAt(3) === "1") {
                RGGData.data[i] = colorPalette[1][0];
                RGGData.data[i + 1] = colorPalette[1][1];
                RGGData.data[i + 2] = colorPalette[1][2];
            } else if (String(rule1Str).charAt(3) === "2") {
                RGGData.data[i] = colorPalette[2][0];
                RGGData.data[i + 1] = colorPalette[2][1];
                RGGData.data[i + 2] = colorPalette[2][2];
            } else if (String(rule1Str).charAt(3) === "3") {
                RGGData.data[i] = colorPalette[3][0];
                RGGData.data[i + 1] = colorPalette[3][1];
                RGGData.data[i + 2] = colorPalette[3][2];
            }
        }
        else if (RGGData.data[pos] === colorPalette[1][0]) {
            if (String(rule1Str).charAt(2) === "0") {
                RGGData.data[i] = colorPalette[0][0];
                RGGData.data[i + 1] = colorPalette[0][1];
                RGGData.data[i + 2] = colorPalette[0][2];
            } else if (String(rule1Str).charAt(2) === "1") {
                RGGData.data[i] = colorPalette[1][0];
                RGGData.data[i + 1] = colorPalette[1][1];
                RGGData.data[i + 2] = colorPalette[1][2];
            } else if (String(rule1Str).charAt(2) === "2") {
                RGGData.data[i] = colorPalette[2][0];
                RGGData.data[i + 1] = colorPalette[2][1];
                RGGData.data[i + 2] = colorPalette[2][2];
            } else if (String(rule1Str).charAt(2) === "3") {
                RGGData.data[i] = colorPalette[3][0];
                RGGData.data[i + 1] = colorPalette[3][1];
                RGGData.data[i + 2] = colorPalette[3][2];
            }
        }
        else if (RGGData.data[pos] === colorPalette[2][0]) {
            if (String(rule1Str).charAt(1) === "0") {
                RGGData.data[i] = colorPalette[0][0];
                RGGData.data[i + 1] = colorPalette[0][1];
                RGGData.data[i + 2] = colorPalette[0][2];
            } else if (String(rule1Str).charAt(1) === "1") {
                RGGData.data[i] = colorPalette[1][0];
                RGGData.data[i + 1] = colorPalette[1][1];
                RGGData.data[i + 2] = colorPalette[1][2];
            } else if (String(rule1Str).charAt(1) === "2") {
                RGGData.data[i] = colorPalette[2][0];
                RGGData.data[i + 1] = colorPalette[2][1];
                RGGData.data[i + 2] = colorPalette[2][2];
            } else if (String(rule1Str).charAt(1) === "3") {
                RGGData.data[i] = colorPalette[3][0];
                RGGData.data[i + 1] = colorPalette[3][1];
                RGGData.data[i + 2] = colorPalette[3][2];
            }
        }
        else if (RGGData.data[pos] === colorPalette[3][0]) {
            if (String(rule1Str).charAt(0) === "0") {
                RGGData.data[i] = colorPalette[0][0];
                RGGData.data[i + 1] = colorPalette[0][1];
                RGGData.data[i + 2] = colorPalette[0][2];
            } else if (String(rule1Str).charAt(0) === "1") {
                RGGData.data[i] = colorPalette[1][0];
                RGGData.data[i + 1] = colorPalette[1][1];
                RGGData.data[i + 2] = colorPalette[1][2];
            } else if (String(rule1Str).charAt(0) === "2") {
                RGGData.data[i] = colorPalette[2][0];
                RGGData.data[i + 1] = colorPalette[2][1];
                RGGData.data[i + 2] = colorPalette[2][2];
            } else if (String(rule1Str).charAt(0) === "3") {
                RGGData.data[i] = colorPalette[3][0];
                RGGData.data[i + 1] = colorPalette[3][1];
                RGGData.data[i + 2] = colorPalette[3][2];
            }
        }
    }

    // height
    for (let i = 0; i < size; i ++) {
        // width
        for (let j = 1; j < size; j++) {
            const currenctPos = (i * 4 * size) + (j * 4);
            const previousPos = (i * 4 * size) + (j * 4) - 4;

            if (RGGData.data[previousPos] === colorPalette[0][0]) {
                if (String(rule2Str).charAt(3) === "0") {
                    RGGData.data[currenctPos] = colorPalette[0][0];
                    RGGData.data[currenctPos + 1] = colorPalette[0][1];
                    RGGData.data[currenctPos + 2] = colorPalette[0][2];
                } else if (String(rule2Str).charAt(3) === "1") {
                    RGGData.data[currenctPos] = colorPalette[1][0];
                    RGGData.data[currenctPos + 1] = colorPalette[1][1];
                    RGGData.data[currenctPos + 2] = colorPalette[1][2];
                } else if (String(rule2Str).charAt(3) === "2") {
                    RGGData.data[currenctPos] = colorPalette[2][0];
                    RGGData.data[currenctPos + 1] = colorPalette[2][1];
                    RGGData.data[currenctPos + 2] = colorPalette[2][2];
                } else if (String(rule2Str).charAt(3) === "3") {
                    RGGData.data[currenctPos] = colorPalette[3][0];
                    RGGData.data[currenctPos + 1] = colorPalette[3][1];
                    RGGData.data[currenctPos + 2] = colorPalette[3][2];
                }
            }
            else if (RGGData.data[previousPos] === colorPalette[1][0]) {
                if (String(rule2Str).charAt(2) === "0") {
                    RGGData.data[currenctPos] = colorPalette[0][0];
                    RGGData.data[currenctPos + 1] = colorPalette[0][1];
                    RGGData.data[currenctPos + 2] = colorPalette[0][2];
                } else if (String(rule2Str).charAt(2) === "1") {
                    RGGData.data[currenctPos] = colorPalette[1][0];
                    RGGData.data[currenctPos + 1] = colorPalette[1][1];
                    RGGData.data[currenctPos + 2] = colorPalette[1][2];
                } else if (String(rule2Str).charAt(2) === "2") {
                    RGGData.data[currenctPos] = colorPalette[2][0];
                    RGGData.data[currenctPos + 1] = colorPalette[2][1];
                    RGGData.data[currenctPos + 2] = colorPalette[2][2];
                } else if (String(rule2Str).charAt(2) === "3") {
                    RGGData.data[currenctPos] = colorPalette[3][0];
                    RGGData.data[currenctPos + 1] = colorPalette[3][1];
                    RGGData.data[currenctPos + 2] = colorPalette[3][2];
                }
            }
            else if (RGGData.data[previousPos] === colorPalette[2][0]) {
                if (String(rule2Str).charAt(1) === "0") {
                    RGGData.data[currenctPos] = colorPalette[0][0];
                    RGGData.data[currenctPos + 1] = colorPalette[0][1];
                    RGGData.data[currenctPos + 2] = colorPalette[0][2];
                } else if (String(rule2Str).charAt(1) === "1") {
                    RGGData.data[currenctPos] = colorPalette[1][0];
                    RGGData.data[currenctPos + 1] = colorPalette[1][1];
                    RGGData.data[currenctPos + 2] = colorPalette[1][2];
                } else if (String(rule2Str).charAt(1) === "2") {
                    RGGData.data[currenctPos] = colorPalette[2][0];
                    RGGData.data[currenctPos + 1] = colorPalette[2][1];
                    RGGData.data[currenctPos + 2] = colorPalette[2][2];
                } else if (String(rule2Str).charAt(1) === "3") {
                    RGGData.data[currenctPos] = colorPalette[3][0];
                    RGGData.data[currenctPos + 1] = colorPalette[3][1];
                    RGGData.data[currenctPos + 2] = colorPalette[3][2];
                }
            }
            else if (RGGData.data[previousPos] === colorPalette[3][0]) {
                if (String(rule2Str).charAt(0) === "0") {
                    RGGData.data[currenctPos] = colorPalette[0][0];
                    RGGData.data[currenctPos + 1] = colorPalette[0][1];
                    RGGData.data[currenctPos + 2] = colorPalette[0][2];
                } else if (String(rule2Str).charAt(0) === "1") {
                    RGGData.data[currenctPos] = colorPalette[1][0];
                    RGGData.data[currenctPos + 1] = colorPalette[1][1];
                    RGGData.data[currenctPos + 2] = colorPalette[1][2];
                } else if (String(rule2Str).charAt(0) === "2") {
                    RGGData.data[currenctPos] = colorPalette[2][0];
                    RGGData.data[currenctPos + 1] = colorPalette[2][1];
                    RGGData.data[currenctPos + 2] = colorPalette[2][2];
                } else if (String(rule2Str).charAt(0) === "3") {
                    RGGData.data[currenctPos] = colorPalette[3][0];
                    RGGData.data[currenctPos + 1] = colorPalette[3][1];
                    RGGData.data[currenctPos + 2] = colorPalette[3][2];
                }
            }
        }
    }

    ctx!.putImageData(RGGData, 0, 0);
    return {
        url: canvas.toDataURL(),
        data: RGGData.data
    };
}

function checkIfCommute(img1: Uint8ClampedArray, img2: Uint8ClampedArray) {
    let size: number = maxTime.value;
    size++;

    // height
    for (let i = 1; i < size; i ++) {
        // width
        for (let j = 1; j < size; j++) {
            const currenctPos = (i * 4 * size) + (j * 4);
            if (img1[currenctPos] != img2[currenctPos]) {
                return false;
            }
        }
    }

    return true;
}

async function onChange() {
    ruleCount.value = Math.pow(stateCount.value, Math.pow(stateCount.value, 1));
    ruleUrls.value = [];
    worldIndex = Math.floor(Math.random() * stateCount.value);

    for (let i = 0; i < ruleCount.value; i++) {
        for (let j = 0; j < ruleCount.value; j++) {
            if (stateCount.value === "1" || stateCount.value === 1) {
                const val = Draw2(i, j);
                ruleUrls.value.push({rule1: i, rule2: j, img: val.url});
                return;
            }

            const rule1 = parseInt(i.toString(stateCount.value));
            const rule2 = parseInt(j.toString(stateCount.value));
            const val1 = Draw2(rule1, rule2);
            const val2 = Draw2(rule2, rule1);
            if (checkIfCommute(val1.data, val2.data)) {
                ruleUrls.value.push({rule1: i, rule2: j, img: val1.url});
            }
        }
    }
}
</script>
<template>
    <div class="h-screen flex flex-row flex-wrap">
        <div class="h-full w-[50vw] p-2 overflow-auto">
            <p class="text-2xl font-bold">0D Cellular Automata with 2 temporal dimensions (0+2D CA)</p>
            <p class="mb-3">Small website made to explore the smallest possible cell world.</p>
            <NuxtLink to="/" title="Switch to 2 temporal dimensions." class="bg-[#f44e38] text-[#1d0f44] p-1 px-2 rounded-full font-bold active:bg-[#1d0f44] active:text-[#f44e38]" @click="">Switch to 1D time</NuxtLink>
            <p class="mt-10">Now that you familiar with 0+1D CA (meaning 0 spatial dimensions and 1 time dimension), it is time to play with 0+2D CA - 0 spatial dimensions and 2 time dimensions. One rule will act along -y axis, second one along the x axis and any point on the surface is basically a combination of going forward in one and another timeline. Here are the articles that inspired me:</p>
            <p><a class="underline" href="http://dmishin.blogspot.com/2014/06/cellular-automata-with-2-temporal.html?m=1" target="_blank" rel="noopener noreferrer">CELLULAR AUTOMATA WITH 2 TEMPORAL DIMENSIONS</a></p>
            <p><a class="underline" href="https://optozorax.github.io/p/invertible-1d-automata/#2d-vremia" target="_blank" rel="noopener noreferrer">Properties of reversible 1D automata (RU)</a></p>
            <p><a class="underline" href="http://www.askamathematician.com/2012/06/q-what-would-the-universe-be-like-with-additional-temporal-dimensions/" target="_blank" rel="noopener noreferrer">What would the universe be like with additional temporal dimensions?</a></p>
            <p class="mt-10">Select amount of states:</p>
            <select v-model="stateCount" class="w-full rounded-lg h-7 bg-[#f44e38] text-[#1d0f44] outline-none" @change="onChange()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4 [Computationally heavy!]</option>
            </select>
            <p class="mt-5">Run for steps: <b>{{  maxTime }}</b></p>
            <input aria-label="For how many steps should it be ran?" v-model="maxTime" type="range" min="0" max="63" class="w-full h-2 rounded-lg appearance-none cursor-ew-resize bg-[#f44e38] accent-white" @change="onChange()">
            <p class="mt-5">We already learned that <b>{{ stateCount }}</b> states will have <b>{{ stateCount }}<sup>{{ stateCount }}<sup>1</sup></sup> = {{ Math.pow(stateCount, (Math.pow(stateCount, 1))) }}</b> possible rules. For 2D time we will look at all possible combinations of those rules. Considering that they are commutative (AB = BA) and AA is a valid pair, there exists <b>{{ Math.pow(stateCount, (Math.pow(stateCount, 1))) }} * ({{ Math.pow(stateCount, (Math.pow(stateCount, 1))) }} - 1) / 2 + {{ Math.pow(stateCount, (Math.pow(stateCount, 1))) }} = {{ Math.pow(stateCount, (stateCount)) * ((Math.pow(stateCount, (stateCount)) - 1) / 2) + Math.pow(stateCount, (stateCount))}}</b> possible rule combinations. The program finds sets of rules that are consistent with each other and displays them.</p>
            <p><a class="underline text-xs" href="https://github.com/ebolblga/0D-Cellular-Automata" target="_blank" rel="noopener noreferrer">Source code</a></p>
            <button class="mt-10 bg-[#f44e38] text-[#1d0f44] p-1 px-2 rounded-full font-bold active:bg-[#1d0f44] active:text-[#f44e38]" @click="onChange()">Generate random world</button>
        </div>
        <div class="h-full w-[50vw] p-2 bg-[#f44e38] text-[#1d0f44] flex flex-row overflow-auto">
            <div v-for="val in ruleUrls"  class="min-w-[400px] h-full mr-3">
                <p class="font-bold">Rules: {{ val.rule1 }} and {{ val.rule2 }}</p>
                <img :src="val.img" class="w-full" style="image-rendering: pixelated" />
            </div>
        </div>
    </div>
</template>