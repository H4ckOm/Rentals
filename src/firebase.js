import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDiAdOvTuIFepDl8c_WnYxGn7VrQD2BKE8",
    authDomain: "cards-1e211.firebaseapp.com",
    projectId: "cards-1e211",
    storageBucket: "cards-1e211.appspot.com",
    messagingSenderId: "977911292628",
    appId: "1:977911292628:web:b6554c56196728aa095141",
    measurementId: "G-NQS2QD46S2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getInfo = async () => {
    const col = collection(db, "card");
    const snapshot = await getDocs(col);
    const list = snapshot.docs.map((doc) => doc.data());
    return list;
};

export default getInfo;
