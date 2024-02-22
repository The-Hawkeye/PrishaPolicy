function EmployeeView({ employee }) {
    return (
      <div>
        <h2>{employee.name}</h2>
        <ul>
          {employee.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    );
          }

          export default EmployeeView;