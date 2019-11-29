import React, { createContext, useState } from "react";
import gdg from "../assets/image/gdg.png";
import feconf2019 from "../assets/image/feconf2019.png";
//컨텍스트 생성
export const ConferenceContext = createContext();

const ConferenceContextProvider = ({ children }) => {
  const [selectedConference, setSelectedConference] = useState(1);
  const localConferences = [
    {
      id: 1,
      title: "FE CONF 2019 ",
      name: "Han ManSub",
      date: "2019년 10월 26일",
      address: "롯데월드타워 SKY 31",
      photo: feconf2019,
      color: "#512772"
    },
    {
      id: 2,
      title: "Google I/O Extended 2019 Daejeon ",
      name: "Han ManSub",
      date: "2019년 7월 20일",
      address: "청춘광장 - 청춘 두두두",
      photo: gdg,
      color: "#512772"
    }
  ];

  const [conferences, setConferences] = useState(localConferences);
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <ConferenceContext.Provider
      value={{
        scrollIndex,
        setScrollIndex,
        selectedConference,
        setSelectedConference,
        conferences,
        setConferences
      }}
    >
      {children}
    </ConferenceContext.Provider>
  );
};

export default ConferenceContextProvider;
