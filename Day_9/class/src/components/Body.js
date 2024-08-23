import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Looks like you're offline! Please check your internet connection
      </h1>
    );

  return (
    <div className="body">
      <h1>Main Body</h1>
    </div>
  );
};

export default Body;
