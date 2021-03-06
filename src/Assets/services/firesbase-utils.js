import firestore from "../services/firebase";
// https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8_6

//Collection
export const getCollection = async () => {
    let collection = firestore.collection("store-products");
    // promise for data
    const queryData = await collection.get();
    const documents = queryData.docs;
    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

//Item
export const getItem = async (id) => {
    const collection = firestore.collection("store-products");
    const ref = collection.doc(id);
    const doc = await ref.get();

    if (!doc.exists) {
        return;
    }

    return { id: doc.id, ...doc.data() };
};

// Cart

//Create
export const createCart = async (record) => {
    const col = firestore.collection("cart");
    await col.add(record);
};

// Read
export const getCartProducts = async () => {
    let col = firestore.collection("cart");
    // promise for data
    const queryData = await col.get();
    const documents = queryData.docs;
    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Update

export const updateCartItems = async (id, record) => {
    const ref = firestore.collection("cart").doc(id);
    await ref.update(record);
};

export const addCartProducts = async (record) => {
    const col = firestore.collection("cart");
    await col.add(record);
};

//Delete
export const deleteCartProduct = async (id) => {
    const col = firestore.collection("cart");
    await col.doc(id).delete();
};
