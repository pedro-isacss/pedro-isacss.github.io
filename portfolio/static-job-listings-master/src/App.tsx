import React, { useEffect, useState } from "react";
import "./App.css";
import businessLogo from "./images/business-logo.png";

interface Data {
  id: string;
  company_logo: string;
  company: string;
  url: string;
  title: string;
  type: string;
  location: string;
  description: string;
  created_at?: string;
  company_url?: string;
  how_to_apply?: string;
}

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  let defaultTags = [
    "HTML",
    "CSS",
    "JavaScript",
    "Frontend",
    "Junior",
    "Senior",
    "Python",
    "Ruby",
    "C#",
    "Kotlin",
    "React",
    "Flutter",
    "React Native",
    "Vue",
    "Angular",
  ];

  useEffect(() => {
    fetch(
      "https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json"
    )
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  }, [tags]);

  function createJob(job: Data) {
    return (
      <div className="job-container" key={job["id"]}>
        <div className="job-info-container">
          <div className="job-img-container">
            <img
              src={
                job["company_logo"] !== null
                  ? job["company_logo"]
                  : businessLogo
              }
            />
          </div>
          <div className="job-info">
            <h2>{job["company"]}</h2>
            <a href={job["url"]}>
              <h1>{job["title"]}</h1>
            </a>
            <div>
              <span>{job["type"]}</span>
              <span className="divisor">-</span>
              <span>{job["location"]}</span>
            </div>
          </div>
        </div>
        <div className="hr-container">
          <canvas style={{ backgroundColor: "#555" }}></canvas>
        </div>
        <div className="job-tags">
          {defaultTags.map((tag) => {
            if (
              job["description"].toUpperCase().indexOf(tag.toUpperCase()) !== -1
            ) {
              return (
                <button
                  onClick={() => {
                    if (tags.indexOf(tag) === -1) {
                      setTags([...tags, tag]);
                    }
                  }}
                >
                  {tag}
                </button>
              );
            }
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.instagram.com/ss.pedroisac/#" target="_blank">
          Pedro Isac
        </a>
        .
      </div>
      <header className="header">
        <div className="search">
          <div className="search-tags">
            {tags.map((tag) => {
              return (
                <div>
                  <span>{tag}</span>
                  <button
                    onClick={() => {
                      setTags(tags.filter((item) => item !== tag));
                    }}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
          <div className="btn-clear-container">
            <button
              onClick={() => {
                setTags([]);
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </header>
      <div className="jobs-list-container">
        {tags.length === 0
          ? data.map((job) => createJob(job))
          : data
              .filter((job) => {
                let tag;
                let is = true;
                for (tag of tags) {
                  if (
                    job["description"]
                      .toUpperCase()
                      .indexOf(tag.toUpperCase()) === -1
                  ) {
                    is = false;
                  }
                  console.log(tag);
                }
                return is;
              })
              .map((item) => createJob(item))}
      </div>
    </div>
  );
}

export default App;
