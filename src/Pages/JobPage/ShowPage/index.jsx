import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get, post, destroy } from "../../../services/backend";
import Card from "../../../components/Card";

const ProjectDetails = (props) => {
  let params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    get(`/jobs/${params.id}`).then((data) => {
      console.log("data.data", data.data);
      setData(data.data);
    });
  }, [params]);

  const handleFavorite = (e, jobId) => {
    if (e.target.checked) {
      post("/favorites", {
        job_id: jobId,
      });
    } else {
      destroy(`/favorites/${jobId}`).then((data) => {});
    }
  };

  return (
    <div>
      {data ? (
        <div>
          <div>
            <div>Job category: {data.category.name}</div>
            <div>Job type: {data.job_type.name}</div>
            <div>Location: {data.location.name}</div>
            <div>Recruiter name: {data.recruiter.name}</div>
          </div>
          <Card
            id={data.id}
            title={data.title}
            shortDescription={data.short_description}
            longDescription={data.long_description}
            date={data.created_at}
            maxWidth={"100%"}
            isFavorite={data.favorites}
            handleFavoriteCallback={handleFavorite}
          />
          <div>
            <h3>Company name:</h3> {data.company.name}
          </div>
          <div>
            <h3>Company description:</h3> {data.company.description}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectDetails;
