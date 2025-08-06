import { app } from './firebaseApp';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export const history_firestore = async (uid) => {
    const history = []
    const db = getFirestore(app);

    const q = query(
        collection(db, "history"),
        where("userUid", "==", uid),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        history.push({ id: doc.id, ...doc.data() });
    });
    
    history.sort((a, b) => {
        const dateA = a.purchaseDateTime
        const dateB = b.purchaseDateTime

        if (dateA > dateB) {
            return -1;
        }
        if (dateA < dateB) {
            return 1;
        }

        return 0;
    });

    return history
}