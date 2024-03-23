import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card";
import { get, post, destroy } from "../../services/backend";

const JobPage = (props) => {
  let params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    get(`/jobs`).then((data) => {
      setData(data.data);
    });
  }, [params]);

  const handleFavorite = (e, jobId) => {
    if (e.target.checked) {
      post(`/jobs/${jobId}/favorite`, {
        job_id: jobId,
      });
    } else {
      destroy(`/jobs/${jobId}/unfavorite`).then((data) => {});
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat( auto-fit, minmax(350px, 1fr) )",
      }}
    >
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          isFavorite={item.is_favorite}
          title={item.title}
          shortDescription={item.short_description}
          handleFavoriteCallback={handleFavorite}
        />
      ))}
    </div>
  );
};

export default JobPage;
