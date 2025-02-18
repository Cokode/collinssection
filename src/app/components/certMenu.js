

export default function CertMenu({ title, wrapperStyle, btnStyle, onpress }) {
  
  return (
    <>
      <div onClick={ onpress(title) }  className={ wrapperStyle }>
        <div type="button" className={ btnStyle }> { title } </div>
      </div>
    </>
  );
};
