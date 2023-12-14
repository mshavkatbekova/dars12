import { useEffect, useState } from "react";
import { db } from "../firebase/FirebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export function useCollection(col, ) {
  const [documents, setDocuments] = useState(null);
  // const q = query(collection(db, col), where(..._q));
  const c = collection(db, col)

  useEffect(() => {
    onSnapshot(c, (snapshot) => {
      const docs = [];
      snapshot.docs.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setDocuments(docs);
    });
  }, [col]);
  return { documents };
}
