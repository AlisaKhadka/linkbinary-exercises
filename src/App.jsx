import ProfileCard from "./components/ProfileCard";
import SimpleCounter from "./components/SimpleCounter";
import LoginForm from "./components/LoginForm";
function App() {

  return (
    <div>
    
      <ProfileCard
        name="Alisa Khadka"
        title="Software Engineering Intern"
        address="mechinagar-07"
        email="alisaakhadka@gmail.com"
      />

      <SimpleCounter/>


      <h3> Login Form</h3>
      <LoginForm/>

    </div>
  )
}

export default App
