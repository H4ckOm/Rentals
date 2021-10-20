import { createStore } from "redux";
import { saveState, loadState } from "./localStorage";

const cards = [
    {
        address: "15 Cliff St., Manhattam, NY",
        availablefrom: "Oct 19",
        beds: 2,
        image: "https://i.picsum.photos/id/320/2689/1795.jpg?hmac=RbcHvJKkKfsAdlsQWzGT-F31XZcRP-O89MeKyDaeads",
        range: "$3985 - $6135",
        saveup: "6135",
        tags: ["Financial District", "Cats", "Big Dogs", "Small Dogs"],
    },
];

saveState(cards);

const persistedState = loadState();

const initialStore = {
    card: cards,
};

export const store = createStore(loadState);
