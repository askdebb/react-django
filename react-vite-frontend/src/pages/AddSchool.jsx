import AddSchoolComponent from "../components/AddSchoolComponent";

const AddSchool = () => {
  
  return (
    <div className="mx-5 my-3" style={{backgroundColor: "whitesmoke", borderRadius: "20px"}}>
      <h1 className="mt-5">Add a School</h1>
        <AddSchoolComponent />
    </div>
  );
}

export default AddSchool;