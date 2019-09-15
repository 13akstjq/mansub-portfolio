import dotenv from "dotenv";
import axios from "axios";
import { async } from "q";
dotenv.config();
const WEB_TOKEN = process.env.REACT_APP_SLACK_WEB_TOKEN;
const USER_TOKEN = process.env.REACT_APP_SLACK_USER_TOKEN;
export const sendMessageToSlack = async (text, displayName, photoURL) => {
  const result = await axios({
    method: "post",
    url:
      "https://cors-anywhere.herokuapp.com/" +
      "https://slack.com/api/chat.postMessage",
    data: {
      text,
      channel: "CN1GFM2NR",
      username: displayName,
      icon_url: photoURL
    },
    headers: {
      "Content-type": "application/json",
      //
      Authorization: `Bearer ${WEB_TOKEN}`
    }
  });
  console.log(result);
};

export const getReply = async () => {
  //   const result = await axios({
  //     method: "get",
  //     url:
  //       "https://cors-anywhere.herokuapp.com/" +
  //       "https://slack.com/api/channels.replies",
  //     params: {
  //       channel: "CN1GFM2NR",
  //       thread_ts: "1568571906.000700",
  //       token: USER_TOKEN
  //     },
  //     headers: {
  //       "Content-type": "	application/x-www-form-urlencoded"
  //     }
  //   });
  //   console.log(result);
};
