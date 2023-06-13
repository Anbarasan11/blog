import { useLocation } from 'react-router-dom';
import './Postdetail.css';

export const Postdetail = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="container outer">
          <div className="jumbotron">
        <h1 className="display-4">{state.title}</h1>
        <p className="lead">{state.body}</p>
        <div className="float-end">
          <button type="button" className="btn btn-primary">
            Delete
          </button>

          <div className="float-end"></div>
          <button type="button" className="btn btn-primary">
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}
