import React, { useEffect } from "react";
import Project from "../Project";
import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_PROJECTS } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
// import { QUERY_PROJECTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif"

function Marker() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

//   const { loading, data } = useQuery(QUERY_PROJECTS);

  useEffect(() => {
    if(data) {
      dispatch({
          type: UPDATE_PROJECTS,
          projects: data.projects,
        });
        data.projects.forEach((project) => {
          idbPromise('projects', 'put', project);
        });
    } else if (!loading) {
      idbPromise('projects', 'get').then((projects) => {
        dispatch({
          type: UPDATE_PROJECTS,
         projects: projects
       });
      });
    }
  }, [data, loading, dispatch]);

  function filterProjects() {
    if (!currentCategory) {
      return state.projects;
    }

    return state.projects.filter(project => project.category._id === currentCategory);
  }

  return (
    <div className="">
      {/* <h2>Projects</h2> */}
      {state.projects.length ? (
        <div className="">
            {filterProjects().map(project => (
                <Project
                  key= {project._id}
                  _id={project._id}
                  image={project.image}
                  name={project.name}
                  price={project.price}
                  quantity={project.quantity}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any projects yet!</h3>
      )}
      { loading ? 
      <img src={spinner} alt="loading" />: null}
    </div>
  );
}

export default Marker;