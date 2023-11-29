import { paper, rock, scissors } from "./hands.js";

const aiHands = () => {
  const hands = [scissors, rock, paper];
  const randomIndex = Math.round(Math.random() * (hands.length - 1));
  return hands[randomIndex];
};

export default aiHands;
