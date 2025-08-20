import './App.css'
import SearchBar from './components/SearchBar'
import RepoCard from './components/RepoCard'
// import { useEffect, useState } from 'react'
// import axios from "axios";
import { useTheme } from './context/ThemeContext';


function App() {
  // // const[repo,setRepo]=useState([]);
  // // const[query,setQuery]=useState("");
  // const[loading,setLoading] =useState(false);
  // // const[error,setError] =useState("");

  const {theme,toggleTheme} =useTheme();

  // useEffect(()=>{
  //     if(!query) return;
  //     const fetchRepos =async()=>{
  //       try {
  //         setLoading(true);
  //         setError("");
  //         const res=await axios.get(`https://api.github.com/users/${query}/repos`)
  //         console.log(res.data);
  //         setRepo(res.data)
  //       } catch (err) {
  //         setError("User Not found ")
  //         setRepo([]);
  //       }
  //       finally{
  //         setLoading(false);
  //       }
  //     }
  //     fetchRepos();
  // },[query]);
  const mockRepos =[
    {
      id:1,
      name:"react-app",
      desciption:"A Sigle Page Application for quick repo viewer demo",
      stargazers_count:42,
      forks_count:10,
    },
    {
      id:2,
      name:"hanuman",
      desciption:"Redux app",
      stargazers_count:32,
      forks_count:5,
    },
    {
      
      id:3,
      name:"Tommy",
      desciption:"AI Integration",
      stargazers_count:66,
      forks_count:9,
    },
    {
      
      id:4,
      name:"ML_project",
      desciption:"Machine Learning experiments done",
      stargazers_count:26,
      forks_count:7,
    }
  ]

  return (
    <>
      <div className={`app ${theme}`}>
      <h1>Quick Github repo viewer</h1>

      <button className="btn" onClick={toggleTheme}>Switch to {theme ==="light" ? "Dark" :"Light"} Mode</button>
      {/* <SearchBar onSearch={setQuery} /> */}
      <SearchBar onSearch={()=>{}}/>
      {/* {loading && <p>Loading....</p>}
      {error && <P style={{color:"red"}}>{error}</P>} */}

      <div className='repo-list'>
        {mockRepos.map((repo)=>(
          <RepoCard key={repo.id}
          name={repo.name} 
          description ={repo.desciption}
          stars={repo.stargazers_count}
          forks={repo.forks_count}
          />
        ))}

      </div>
    </div>
      
    </>
  )
};

export default App
