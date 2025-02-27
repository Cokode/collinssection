

export default function CertMenu({ title, wrapperStyle, btnStyle, onpress, data }) {
 
  return (
    <>
      <div onClick={() => onpress(data.fileName) }  className={ wrapperStyle }>
        <div className={ btnStyle }> { title } </div>
      </div>
    </>
  );
};
