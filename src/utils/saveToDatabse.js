import { getDatabase, ref, set } from "firebase/database";

export const saveToDatabase = (title, author, code) => {
    const db = getDatabase();
    set(ref(db, 'pens'), {
      title: title,
      author: author,
      html: code.html,
      css: code.css,
      js : code.js
    });
}
