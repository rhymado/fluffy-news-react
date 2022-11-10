import React, { useState, useEffect, useCallback, useRef } from "react";
// import axios from "axios";
// import withNavigate from "../helpers/withNavigate";

const Hooks = () => {
  // penggunaan Hooks
  // useState(initialization)
  // initialization: number, boolean, object, function, dll
  const [counter, setCounter] = useState(0);
  const [body, setBody] = useState({
    email: "",
    pwd: "",
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
  const onUpload = () => {
    // console.log(inputRef);
    // inputRef.current.click();
    onUpRef.current.click();
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
        <input
          type="email"
          value={body.email}
          onChange={(e) => {
            setBody({ ...body, email: e.target.value });
          }}
        />
        <input
          type="password"
          value={body.pwd}
          onChange={(e) => {
            setBody({ ...body, pwd: e.target.value });
          }}
        />
      </section>
      <section>
        {/* <img src={img || ""} alt="profile" width={200} height={200} /> */}
        <button onClick={onUpload}>upload</button>
        <input
          type="file"
          style={{ display: "none" }}
          //   onChange={(e) => {
          //     console.log(e.target.value);
          //     setImg(e.target.value);
          //   }}
          ref={inputRef}
        />
      </section>
    </section>
  );
};

export default Hooks;
// export default withNavigate(Hooks);
