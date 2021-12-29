import firestore from "../services/firebase";
// https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8_6

// Product

export const getProducts = async (limit) => {
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

export const getProduct = async (id) => {
    const col = firestore.collection("store-products");
    const ref = col.doc(id);
    const doc = await ref.get();

    if (!doc.exists) {
        return;
    }

    return { id: doc.id, ...doc.data() };
};

// Cart

export const getCartProducts = async () => {
    //defining collection to get data from
    let col = firestore.collection("cart");
    // promise for data
    const queryData = await col.get();
    //
    const documents = queryData.docs;
    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createCart = async (record) => {
    const col = firestore.collection("cart");
    await col.add(record);
};

export const updateCartProduct = async (product) => {
    const ref = firestore.collection("cart").doc(product.id);
    console.log("ref is ", ref);
    await ref.update(product);
};

export const addCartProduct = async (id) => {
    const col = firestore.collection("cart");
    await col.doc(id).set({
        count: 1,
    });
};
