import React,{useEffect,useState} from 'react'
import  { useGlobalContext }  from '../context/context'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Expenseform = () => {
    const {addExpense} = useGlobalContext()

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
        addExpense(state)
      };
  return (
        <form onSubmit={handleSubmit} className='forms' >
        <div className="input-control">
        <input type="text" value={title} name={'title'}  placeholder="Expense  Title" onChange={handleInputChange}/>
        </div>
        <div>
        <input type="number" value={amount} name={'amount'}  placeholder="Expense-amount" onChange={handleInputChange}/>
        </div>
        <div>
        <DatePicker id='date' selected={date} dateFormat="dd/MM/yyyy"  placeholderText="Enter-a-date" onChange={(date) => {
                        setState({...state, date: date})
                    }}/>
        </div>
        <div>
        <select required value={category} name="category" id="category" onChange={handleInputChange}>
            <option value="" disabled >Select Option</option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>  
            <option value="travelling">Travelling</option>  
            <option value="other">Other</option>  
         </select>
        </div>
        
        <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="40" rows="6" onChange={handleInputChange}></textarea>
            </div>
        <div className="submit-btn">
        <button type="submit"> AddExpense </button>
        </div>
        </form>
  )
}

export default Expenseform
