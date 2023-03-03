import { getDatabase, get, ref } from "firebase/database";

export const readFromDatabase = async () => {
  try {
    const db = getDatabase();
    const snapshot = await get(ref(db));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return "No data available";
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
}