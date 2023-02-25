import { useRef } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";

const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (e) => {
    // 브라우저가 기본값으로 http 요청을 전송하지 않도록 해야 함
    // preventDefault하지 않을 경우, 페이지가 새로고침 되면서
    // 가지고 있던 state 값들이 초기화 됨
    e.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year"></label>
            <select id="year" ref={yearInputRef}>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select id="month" ref={monthInputRef}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>
        <Button>Find Events</Button>
      </form>
    </>
  );
};

export default EventsSearch;
