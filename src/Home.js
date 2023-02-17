import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Api from './Api';

const Home = () => {
  const [inp, setInp] = React.useState('')
  const [data,setData] = React.useState('')

function handleSearch(){
  setData(inp)
}
  return (
    <div>
      <h1 className='heading'>SnapShot</h1>
      <div className='search' >
        <input onChange={(e)=>{setInp(e.target.value)}} className='search-input' type="text" placeholder="Search Photos here....!" />
        <button onClick={handleSearch} className='search-button' ><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <div className='quick'>
        <Link to='/Mountain' ><button>Mountains</button></Link>
        <Link to='/Beaches'><button>Beaches</button></Link>
        <Link to='/Birds' ><button>Birds</button></Link>
        <Link to='/Food'><button>Food</button></Link>
      </div>
      <h3 className='search-heading'>{data} Pictures</h3>
      <Api pro = {data}/>
    </div>
  );
};

export default Home;