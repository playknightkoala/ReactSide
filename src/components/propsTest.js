function propTest(props) {
  return (
    <button className={classTest} onClick={props.handleClick}>
      {props.name}
    </button>
  );
}

const classTest = "abc";

export default propTest;
