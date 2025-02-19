

export default function CertMenu({ title, wrapperStyle, btnStyle, onpress, data }) {
  const handlePress = () => {
    onpress(data.fileName); // Pass the unique value to the parent component
  };

  return (
    <>
      <div onClick={ handlePress }  className={ wrapperStyle }>
        <div type="button" className={ btnStyle }> { title } </div>
      </div>
    </>
  );
};
