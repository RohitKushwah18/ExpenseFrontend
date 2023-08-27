import React,{useState} from 'react'
import  { useGlobalContext }  from '../context/context'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Incomes = () => {
    const {addIncome,incomes} = useGlobalContext()

  console.log(incomes)
       const [state, setState] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
        description: "",
        
      })
      const { title, amount, date, category,description } = state;

      const handleInputChange = (e) => { 
        const { name, value } = e.target;
        setState({
          ...state,
          [name]: value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(state)
        addIncome(state)
      };
  return (
        <form onSubmit={handleSubmit} className='forms' >
        <div className="input-control">
        <input type="text" value={title} name={'title'}  placeholder="Salary Title" onChange={handleInputChange}/>
        </div>
        <div className="input-control">
        <input type="number" value={amount} name={'amount'}  placeholder="amount" onChange={handleInputChange}/>
        </div>
        <div className="input-control">
        <DatePicker id='date' selected={date} dateFormat="dd/MM/yyyy"  placeholderText="Enter-a-date" onChange={(date) => {
                        setState({...state, date: date})
                    }}/>
        </div>
        <div className="input-control">
        <select required value={category} name="category" id="category" onChange={handleInputChange}>
              <option value=""  disabled >Select Option</option>
              <option value="salary">Salary</option>
              <option value="freelancing">Freelancing</option>
              <option value="investments">Investiments</option>
              <option value="stocks">Stocks</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="bank">Bank Transfer</option>  
              <option value="other">Other</option>  
        </select>
        </div>
        
        <div>
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="40" rows="6" onChange={handleInputChange}></textarea>
            </div>
        <div className="submit-btn">
        <button type="submit"> AddIncome </button>
        </div>
        </form>
  )
}

export default Incomes

