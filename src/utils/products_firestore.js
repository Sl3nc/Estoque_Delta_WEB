import { app } from './firebaseApp';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export const products_firestore = async () => {
    const products = [];
    const db = getFirestore(app);
    const querySnapshot = await getDocs(
        query(collection(db, "products"), where("amount", ">", 0))
    );
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });

    return products
}