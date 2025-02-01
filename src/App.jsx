import Resume from "./components/Resume";
import img1 from "./images/Profile.jpg";
function App() {

  return (
      <Resume
        img1={img1}
        name="ALexander James M. Persia"
        id="1001"
        description="An 2nd year IT students"
        email="ajmp@gmail.com"
        phone="0912345676"
        address="Pilar, Sorsogon"

        skill1="C++"
        skill2="HTML"
        skill3="CSS"
        skill4="Javascript"
        skill5="Node.js"
        skill6="Video Editing"

        elem="Lungib Elementary School"
        high="Lungib National High School"
        college="Computer Arts & Technological College"
        year1="2010-2016"
        year2="2016-2023"

        achv1="Football Player 1"
        achv2="Graduate With Honors in Junior High"
        achv3="Graduate With Honors in Senior High"
        achv4="Dean Listers on 1st year"
        achv5="Developer"

        hb1="Playing Online Games"
        hb2="Designing Website"
        hb3="Listening to Music"
        hb4="Creating Website"
        hb5="Work out"
        hb6="Dancing"
        hb7="Programming"
        hb8="Football"
        hb9="Watching Anime"
        hb10="Learning New things"

        in1="Web Developing"
        in2="Game Developing"
        in3="Designing"

        l1="Filipino"
        l2="English"
        l3="Japanese"
      />
  )
}
export default App