import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLast,
    isValid: lastIsValid,
    hasError: lastError,
    valueChangeHandler: lastChangeHandler,
    valueBlurHandler: lastBlurHandler,
    reset: lastReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  let formIsvalid = false;
  if(nameIsValid && lastIsValid && emailIsValid){
    formIsvalid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();
    nameReset();
    emailReset();
    lastReset();
  };
  const nameValidCss = nameError ? "form-control invalid" : "form-control";
  const lastValidCss = lastError ? "form-control invalid" : "form-control";
  const emailValidCss = emailError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameValidCss}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
        </div>
        {nameError && <p className="error-text">Please enter a name</p>}
        <div className={lastValidCss}>
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={enteredLast} />
        </div>
        {lastError && <p className="error-text">Please enter a lastname</p>}
      </div>
      <div className={emailValidCss}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailError && <p className="error-text">Please write a valid email</p>}
      <div className="form-actions">
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
