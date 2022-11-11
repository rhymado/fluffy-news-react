import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import withNavigate from "../helpers/withNavigate";
import useLocalStorage from "../hooks/useLocalStorage";
import counterActions from "../redux/actions/counter";

import withTemplate from "../helpers/withTemplate";

const Hooks = () => {
  // penggunaan Hooks
  // useState(initialization)
  // initialization: number, boolean, object, function, dll
  const [counter, setCounter] = useState(0);
  const [body, setBody] = useState({
    email: "",
    pwd: "",
    img: "",
  });
  //   const [refresh, setRefresh] = useState(false);
  //   const [isPending, setIsPending] = useState(false);
  //   const subtotal = useMemo(() => counter * 12000, []);
  //   const subtotal = useMemo(() => counter * 12000, [refresh]);
  const onUp = useCallback(() => setCounter(counter + 1), [counter]);
  const onDown = () => setCounter(counter - 1);
  const onReset = () => setCounter(0);

  const onUpRef = useRef();
  const inputRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();

  const [persistedValue, setPersistedValue] = useLocalStorage("custom", () => {
    if (counter !== 0) return "2";
    return "5";
  });

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [urlParams, setUrlParams] = useSearchParams();
  // console.log(urlParams.toString());
  useEffect(() => {
    //get
    console.log(urlParams.toString());
  }, [urlParams]);

  const counterStore = useSelector((state) => state.counter);
  const booksStore = useSelector((state) => state.books);
  // console.log(counterStore);
  const dispatch = useDispatch();

  const onUpload = () => {
    // console.log(inputRef);
    inputRef.current.click();
    // onUpRef.current.click();
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const pwd = e.target["pwd"].value;
    // // validasi
    // if (pwd.length < 10)
    //   return console.log("password harus lebih dari 10 karakter");
    // const body = {
    //   email: e.target["email"].value,
    //   pwd,
    // };
    console.log(body);
  };

  const onChangeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  // useEffect(cb, deps)
  // deps = [] => behaviour mirip cdm
  // deps = [variable] => behaviour mirip cdu (hanya ketika variabel didalam deps berubah)
  // jika ada return di cb => behaviour mirip cwu
  // no deps = cdu (setiap rerender akan jalan)

  //   useEffect(() => {
  //     // setIsPending(true);
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => {
  //         console.log(res);
  //         // setIsPending(false);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  //   useEffect(() => {
  //     console.log("hello");
  //   });

  //   useEffect(() => {
  //     console.log(`counter berubah`);
  //   }, [counter]);

  //   useEffect(() => {
  //     console.log(`body berubah`);
  //   }, [body]);

  //   useEffect(() => {
  //     console.log(isPending);
  //   }, [isPending]);

  //   useEffect(() => {
  //     console.log("subtotal berubah");
  //   }, [subtotal]);
  //   console.log(inputRef);
  return (
    <section>
      <section>{counter}</section>
      <section>
        <button onClick={onUp} ref={onUpRef}>
          up
        </button>
        <button onClick={onDown}>down</button>
        <button onClick={onReset}>reset</button>
      </section>
      {/* <section>
        <div>price 12.000</div>
        <div>subtotal {subtotal}</div>
        <button onClick={() => setRefresh(!refresh)}>Count Subtotal</button>
      </section> */}
      <section>
        <form onSubmit={onSubmitHandler}>
          <input
            type="email"
            onChange={onChangeHandler}
            name="email"
            // ref={emailRef}
            // value={body.email}
            // onChange={(e) => {
            //   setBody({ ...body, email: e.target.value });
            // }}
          />
          <input
            type="password"
            onChange={onChangeHandler}
            name="pwd"
            // ref={pwdRef}
            // value={body.pwd}
            // onChange={(e) => {
            //   setBody({ ...body, pwd: e.target.value });
            // }}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        {/* <img src={img || ""} alt="profile" width={200} height={200} /> */}
        <button onClick={onUpload}>upload</button>
        <input
          type="file"
          style={{ display: "none" }}
          name="img"
          //   onChange={(e) => {
          //     console.log(e.target.value);
          //     setImg(e.target.value);
          //   }}
          onChange={onChangeHandler}
          ref={inputRef}
        />
      </section>
      <section>
        <input
          type="text"
          name="ls"
          value={persistedValue}
          onChange={(e) => setPersistedValue(e.target.value)}
        />
      </section>
      <section>
        <input
          type="text"
          name="search"
          onKeyDown={(e) => {
            if (e.key === "Enter")
              setUrlParams({
                [e.target.name]: e.target.value,
              });
          }}
        />
      </section>
      <button onClick={() => dispatch(counterActions.counterUp())}>
        Up Counter Redux
      </button>
      <button onClick={() => navigate("/")}>Home</button>
    </section>
  );
};

export default withTemplate(Hooks);
// export default withNavigate(Hooks);
