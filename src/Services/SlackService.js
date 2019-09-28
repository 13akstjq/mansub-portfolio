import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const WEB_TOKEN = process.env.REACT_APP_SLACK_WEB_TOKEN;
const USER_TOKEN = process.env.REACT_APP_SLACK_USER_TOKEN;
export const sendMessageToSlack = async (text, displayName, photoURL) => {
  const { data } = await axios({
    method: "post",
    url:
      "https://cors-anywhere.herokuapp.com/" +
      "https://slack.com/api/chat.postMessage",
    data: {
      text,
      channel: "CNCSB34AH",
      username: displayName,
      icon_url: photoURL
    },
    headers: {
      "Content-type": "application/json",
      //
      Authorization: `Bearer ${WEB_TOKEN}`
    }
  });
  // console.log(result);
  return data;
};

export const getReply = async ts => {
  const {
    data: { messages }
  } = await axios({
    method: "get",
    url:
      "https://cors-anywhere.herokuapp.com/" +
      "https://slack.com/api/channels.replies",
    params: {
      channel: "CNCSB34AH",
      thread_ts: ts,
      token: USER_TOKEN
    },
    headers: {
      "Content-type": "	application/x-www-form-urlencoded"
    }
  });
  return messages;
};
