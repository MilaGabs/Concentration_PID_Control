import FormComponent from './FormComponent'
import ReactorComponent from './ReactorComponent'
import ChartComponent from './ChartComponent'

function App() {
  return (
    <div className="AppWrapper">
      <FormComponent/>
      <div className="GraphicalWrapper">
        <ReactorComponent/>
        <ChartComponent/>
      </div>
      
    </div>
    
  );
}

export default App
