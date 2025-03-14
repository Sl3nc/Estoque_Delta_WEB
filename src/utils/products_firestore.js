import { app } from './firebaseApp';
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const products_firestore = async () => {
    const products = []
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        products.push({id: doc.id, ...doc.data()});
    });

    return products
}