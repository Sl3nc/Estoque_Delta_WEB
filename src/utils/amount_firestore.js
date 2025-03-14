import { app } from './firebaseApp';
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const amount_firestore = async (docUid) => {
    const db = getFirestore(app);
    const docRef = doc(db, "products", docUid);
    const docSnap = await getDoc(docRef);
    return docSnap.data().amount;
}