import { Box, useTheme, TextField, IconButton } from "@mui/material";
import Header from "../../components/Header";
import SendIcon from "@mui/icons-material/Send";
import { tokens } from "../../theme";
import { useState } from "react";

const Chatbot = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Hello! How can I assist you?", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <Box m="20px">
      <Header title="Chatbot" subtitle="Ask me anything!" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "60vh",
          overflowY: "auto",
          backgroundColor: colors.primary[900],
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? colors.greenAccent[500] : colors.blueAccent[500],
              color: "white",
              padding: "10px 15px",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            {msg.text}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            color: "black",
            backgroundColor: "white smoke",
            borderRadius: "8px",
          }}
        />
        <IconButton onClick={handleSendMessage} sx={{ marginLeft: "10px", backgroundColor: colors.greenAccent[500], color: "black" }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chatbot;
