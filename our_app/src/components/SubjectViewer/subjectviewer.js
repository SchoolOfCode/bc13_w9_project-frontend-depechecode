import React, {useState, useEffect} from "react"

/**
 * Handles the fetch req and then renders the response.
 * @param {} displayList - Value from the input field.
 * @returns
 *  
 */

const SubjectViewer = ({ displayList }) => {
  const [data, setData] = useState("");

  /**
   * Sends the fetch to our api
   * @returns {promise <getSubject.getSubjectResponse}
   */


  useEffect(() => {
    const getSubject = async()=>{
      const response = await fetch(
        `http://localhost:3000/api/v1/subject?search=${displayList}`,
        { headers: { accept: "application/json" } }
      );
      const data = await response.json();
      setData(data.payload);
    }
    getSubject();
  }, [displayList]);
  return (
    <div className = "content">
      <h1 className = "subject-name">{data[0]?.subject_name}</h1>
      <br></br>
      <p>{data[0]?.definition}</p>
      <br></br>
      <h2>Useful Links</h2>

      <a href = {data[0]?.url}>{data[0]?.resource_name} </a>
      <br></br>
      <a href = {data[1]?.url}>{data[1]?.resource_name} </a>
      <br></br>
      <a href = {data[2]?.url}>{data[2]?.resource_name} </a>
    </div>
  );
};
 export default SubjectViewer