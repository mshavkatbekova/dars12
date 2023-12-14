import { useRef } from "react";
import { collection, doc, addDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

function Create() {
  const title = useRef();
  const ingredients = useRef();
  const time = useRef();
  const method = useRef();
  const url = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title.current.value,
      method: method.current.value,
      url: url.current.value,
      ingredients: ingredients.current.value,
      time: time.current.value,
    };

    const docRef = await addDoc(collection(db, "cook"), {
      ...data,
    });
    console.log("Document written with ID: ", docRef.id);

    title.current.value = "";
    ingredients.current.value = "";
    time.current.value = "";
    method.current.value = "";
    url.current.value = "";
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h2 className="font-bold text-lg text-center">Create New Recipe!</h2>

        <div>
          <form onSubmit={handleSubmit} method="dialog">
            <div className="flex flex-col gap-5">
              <h2>Title:</h2>
              <input
                type="text"
                placeholder="Type Title"
                className="input input-bordered w-full max-w-xs"
                required
                ref={title}
              />
              <h2>Ingredients:</h2>
              <input
                type="text"
                placeholder="Type Title"
                className="input input-bordered w-full max-w-xs"
                required
                ref={ingredients}
              />
              <h2>Time:</h2>
              <input
                type="number"
                placeholder="Type Minutes"
                className="input input-bordered w-full max-w-xs"
                required
                ref={time}
              />
              <h2>Images URL:</h2>
              <input
                type="url"
                placeholder="Type Images"
                className="input input-bordered w-full max-w-xs"
                required
                ref={url}
              />
              <h2>Method:</h2>
              <input
                type="text"
                placeholder="Type Method"
                className="input input-bordered w-full max-w-xs"
                required
                ref={method}
              />
            </div>
            <br />
            <button className="btn btn-success">Create</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Create;
