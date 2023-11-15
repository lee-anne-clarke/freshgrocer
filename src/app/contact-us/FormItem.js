
export default function FormItem(props) {
	return (
	    <div className="form__group">
	      <label className="form__label" htmlFor={props.inputName}>
	      	{props.labelText}: {props.inputIsRequired ? (
	      		<span className="form__asterisk">*</span>
	      		) : (``)}
	      </label>

	      <input 
	      	className="form__input" 
	      	type={props.inputType} 
	      	name={props.inputName} 
	      	value={props.inputValue} 
	      	required={props.inputIsRequired}
	      	onChange={props.changeHandler} 
	      />
	    </div>
	);
}