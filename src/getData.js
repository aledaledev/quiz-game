import { Question } from "./models/Question.js";
export const getData = async () => {
    const data = await axios.get("../data/data.json").then((res) => res.data);
    return data.map((item) => new Question(item));
} 