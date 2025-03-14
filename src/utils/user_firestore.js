import { app } from './firebaseApp';
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const user_firestore = async (uid) => {
    if (uid == undefined){
        return 'Usuário'
    }
    const db = getFirestore(app);
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? docSnap.data().name : 'Usuário';
}