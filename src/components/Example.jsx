import styles from "../styles/Example.module.css";
import frogImg from "../assets/images/frog-green-md.png";
// import axios from "axios";
//--------------------
// const instanceBacEnd = axios.create({
//   baseURL: "https://6449944db88a78a8f00b5309.mockapi.io",
// });
// const fetchCurrentUsers = async () => {
//   try {
//     const { data } = await instanceBacEnd.get(`/currentUser/${currentUser}`);
//     return data;
//   } catch (err) {
//     return err.response.data.message;
//   }
// };

// // fetch all tweets
// const fetchAllUsers = async () => {
//   try {
//     const { data } = await instanceBacEnd.get(`/users`);
//     return data;
//   } catch (err) {
//     return err.response.data.message;
//   }
// };
//then
//  useEffect(() => {
//     const response = queryBackEnd.fetchCurrentUsers();
//     response
//       .then((result) => {
//         const arr = result.followings.sort((a, b) => a - b);

const Example = () => {
  return (
    <div className={styles.exampleDiv}>
      <h1>Good luck with the project!</h1>
      <img src={frogImg} alt="Frog" />
    </div>
  );
};

export default Example;
