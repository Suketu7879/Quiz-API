import { questions } from "../set/quiz.js";

export const getQuestion = async (req, res) => {
  try {
    const random = Math.ceil(Math.random() * 200);
    const result = questions[random];
    if (!result) {
      return res.status(400).json({ message: "something went wrong" });
    }
    res.send(result);
    res.status(200).json(result);
  } catch (error) {}
};
