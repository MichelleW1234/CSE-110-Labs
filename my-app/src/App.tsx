import './App.css';

function App() {
 return (
   <div className='app-container'>
     <div className="note-individual">
       <button>
        <form className="note-form">
          <div><input placeholder="Note Title"></input></div>

          <div><textarea></textarea></div>

          <div><button type="submit">Create Note</button></div>
        </form>
       </button>
       <h2> 1st Note Title </h2>
       <p> 1st Note Content </p>
       <p> 1st Note Label </p>
     </div>
   </div>

 );
}

export default App;
