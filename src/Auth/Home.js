import React,{useState} from 'react';
import Incomesoutput from '../components/Incomesoutput';
import Expense from '../components/Expense';
import Navbar from '../components/Navigation';
import Dashboard from '../components/Dashboard';
// import Logout from './Logout';
const Home = () => {

    const [currentSection, setCurrentSection] = useState('Dashboard');

  
    const handleSectionChange = (section) => {
      setCurrentSection(section);
    };

    let content = null;
    if (currentSection === 'Income') {
      content = <Incomesoutput/>;
    }else if (currentSection === 'Expense') {
      content = <Expense/>;
    }else if (currentSection === 'Dashboard'){
      content = <Dashboard/>;
    }
    // else if (currentSection === 'Logout'){
    // content = <Logout/>;
    // }
    return  (
        <div className='page'>
      <Navbar onSectionChange={handleSectionChange} />
      <main>{content}</main>
        </div>
    ) 
}
export default Home