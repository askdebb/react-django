import BottomLeftCard from "./BottomLeftCard"
import TopLeftCard from "./TopLeftCard"
import PropTypes from 'prop-types';



const LeftHomeSectionontainer = ( {schools, selectedSchool, setSelectedSchool }) => {

  
 
  return (

    <>
    <div>
      <TopLeftCard schools={schools} selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool}/>
      <BottomLeftCard />
    </div>
     
  </>

  )
}

LeftHomeSectionontainer.propTypes = {
  schools: PropTypes.array.isRequired,
  selectedSchool: PropTypes.object,
  setSelectedSchool: PropTypes.func.isRequired
};

export default LeftHomeSectionontainer;