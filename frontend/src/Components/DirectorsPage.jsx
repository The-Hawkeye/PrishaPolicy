import EmployeeTable from "./EmployeeTable"
import { SidePanel } from "./SidePanel";
import { NavLink} from "react-router-dom";
import "./Main.css"
function DirectorsPage() {
    const employees = [
      {
        id: 1,
        name: 'Albert Flores',
        role: 'Employee',
        status: 'Active',
        movies: ['Movie 1', 'Movie 2']
      },
      {
        id: 2,
        name: 'Esther Howard',
        role: 'Employee',
        status: 'Active',
        movies: ['Movie 3', 'Movie 4']
      },
      {
        id: 3,
        name: 'Cameron Williamson',
        role: 'Employee',
        status: 'Pending',
        movies: []
      }
    ];

    const handleClick = ()=>{
      <NavLink to ="/upload"/>
    }
  
    return (
        <>
            <SidePanel/>
            <div className="containerEmp">
            <div className="navbar">
                <div>
                    <h1>Employees</h1>
                    <h4>Manage all employees from here</h4>
                </div>
                <div>
                    <button>Reports</button>
                    <NavLink to = "/upload"><button onClick={handleClick}>Add Employees</button></NavLink>
                </div>
               
            </div>
            <EmployeeTable employees={employees} />
            </div>
        </>
    )
    
  }
  
  export default DirectorsPage;