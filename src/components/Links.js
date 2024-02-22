

const Links = (props) => {
    return (
        <>
    <div className="links  mt-4">
  <div className="link font-vsm font-light d-block ms-2 text-decoration-none text-color">
    {props.title}
  </div>
  <hr className="my-2 w-100" />
</div>

        </>
    );
};

export default Links;