import ProfileCard from "./components/ProfileCard";
import SimpleCounter from "./components/SimpleCounter";
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

    </div>
  )
}

export default App
