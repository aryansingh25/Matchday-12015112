import React, { useEffect, useState } from "react";
import Card from "./Card";

let crpn = 0;
let input2 = "";

function Landingpage() {
  const [matches, setmatches] = useState([]);
  const [input, setinput] = useState("");
  const [previousdata, setpreviousdata] = useState([])

  const getApigata = async (page) => {
    try {
      let url = `https://matchday.ai/referee/champ/fixture/dummy-matches?page=${page}`;
      const resp = await fetch(url);
      const data = await resp.json();
      let order = [];
      data.fixtures.forEach((p) => order.push(p));
      setpreviousdata((oldData=>[...oldData,...order]))
      setmatches((oldMatches) => [...oldMatches, ...order]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    if (input === "" && input2 !== "") {
      input2 = "";
      return;
    } else {
      const order = previousdata.filter((match) => {
        return (
          match.team1[0].name.toLowerCase() === input2.toLowerCase() ||
          match.team2[0].name.toLowerCase() === input2.toLowerCase() ||
          match.round.toLowerCase() === input2.toLowerCase()
        );
      });
      if (order.length !== 0) {
        setmatches(order);
      }
    }
  };

  const activescroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight &&
      crpn < 9
    ) {
      if (input2 === "") {
        crpn++;
        getApigata(crpn);
      }
    }
  };

  useEffect(() => {
    getApigata(crpn);
    window.addEventListener("scroll", activescroll);
  },[]);

  const handleChange = (e) => {
    setinput(e.target.value);
    input2 = e.target.value;
  };

  return (
    <>
      <div className="top">
        <h1>International Matches</h1>
          <form action="" id="form" onSubmit={handleSubmit}>
            <button type="submit">
              <i className="fa fa-search "></i>
            </button>
            <input
              value={input}
              type="text"
              name=""
              id="search"
              placeholder="Search for Matches"
              onChange={handleChange}
            />
          </form>
      </div>
      <main id="matches">
        {matches.map((element) => {
          return <Card match={element} />;
        })}
      </main>
    </>
  );
}

export default Landingpage;
