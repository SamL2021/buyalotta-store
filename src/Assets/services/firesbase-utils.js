import firestore from "../services/firebase";
// https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8_6

//Collection
export const getCollection = async (limit) => {
    //defining collection to get data from
    let col = firestore.collection("store-products");
    // setting statements for if a limit
    col = limit ? col.limit(limit) : col;
    // promise for data
    const queryData = await col.get();
    //
    const documents = queryData.docs;
    // console.log(documents);

    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

//Item
export const getItem = async (id) => {
    const col = firestore.collection("store-products");
    const ref = col.doc(id);
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
    //defining collection to get data from
    let col = firestore.collection("cart");
    // promise for data
    const queryData = await col.get();
    //
    const documents = queryData.docs;
    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Update

export const addCartProducts = async (record) => {
    const col = firestore.collection("cart");
    await col.add(record);
};

//Delete
export const deleteCartProduct = async (id) => {
    const col = firestore.collection("cart");
    await col.doc(id).delete();
};
