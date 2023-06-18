import firebase_app from "../config";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app);
const colRef = collection(db, "cars");

const getData = async () => {
    try {
        const docsSnap = await getDocs(colRef);
        return docsSnap;
    } catch(error) {
        console.error(error);
    }
}
export default getData;