import { app } from './firebaseApp';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export const history_firestore = async (uid) => {
    const history = []
    const db = getFirestore(app);

    const q = query(collection(db, "history"), where("userUid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        history.push({id: doc.id, ...doc.data()});
    });

    return history
}