import { Box } from "@chakra-ui/react";
import { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/"); // redirect to login page
    }
  }, [user, history]);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
      display="flex"
      flexDirection="row" 
      justifyContent="space-between" 
      w="100%" 
      h="91.5vh" 
      p="10px" 
      gap="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
