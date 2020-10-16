import React, { useEffect, useState } from 'react';
import './App.css'
import businessLogo from './images/business-logo.png'

function App() {
  const [data, setData] = useState([
    {
      id: "",
      company_logo: "",
      company: "",
      url: "",
      title: "",
      type: "",
      location: "",
      description: "",
    }
  ])
  const [tags, setTags] = useState<String[]>([])
  let defaultTags = ["HTML", "CSS", "JavaScript", "Frontend", "Junior", "Senior", "Python",
   "Ruby", "C#", "Kotlin", "React", "Flutter", "React Native", "Vue", "Angular"]

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json").
    then(response => response.json()).
    then((res) => {
      setData(res)
    })
    if(tags !== []){
      setData([])
      let i: String
      for(i of tags){
        data.map(job => {
          if(job["description"].toUpperCase().indexOf(i.toUpperCase()) !== -1){
            setData([...data, job])
          }
        })
      }
    }
  }, [tags])

  return (
    <div className="App">
      <header className="header">
        <div className="search">
          <div className="search-tags">
          {tags.map(tag => {
            return(
            <div>
              <span>{tag}</span>
              <button>x</button>
            </div>
            )
          })}
          </div>
          <div className="btn-clear-container">
            <button>Clear</button>
          </div>
        </div>
      </header>
      <div className="jobs-list-container">
        {
        data.map(job => {
          return(
            <div className="job-container" key={job["id"]}>
              <div className="job-info-container">
                <div className="job-img-container">
                  <img src={job["company_logo"] !== null?job["company_logo"]:businessLogo} />
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
              <div className="job-tags">
                {defaultTags.map(tag => {
                  if(job["description"].toUpperCase().indexOf(tag.toUpperCase()) !== -1){
                    return(
                    <button onClick={()=> {
                      if(tags.indexOf(tag) === -1){
                        setTags([...tags, tag])
                      }
                    }}>{tag}</button>
                    )
                  }
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
