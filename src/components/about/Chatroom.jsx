import React, { useState, useRef, useEffect } from "react";
import {
	TextField,
	Button,
	Paper,
	List,
	ListItem,
	ListItemText,
	Avatar,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Chatroom = () => {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [sendIconColor, setSendIconColor] = useState("disabled");

	const chatContainerRef = useRef(null);

	const handleSendMessage = () => {
		if (newMessage.trim() !== "") {
			setMessages([...messages, newMessage]);
			setNewMessage("");
		}
	};

	const scrollToBottom = () => {
		chatContainerRef.current.scrollTop =
			chatContainerRef.current.scrollHeight;
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	useEffect(() => {
		if (newMessage.trim() === "") {
			setButtonDisabled(true);
			setSendIconColor("disabled");
		} else {
			setButtonDisabled(false);
			setSendIconColor("default");
		}
	}, [newMessage]);

	return (
		<div
			style={{
				backgroundColor: "#FFFFFF",
				padding: "1.5em 1.5em 0 1.5em",
				boxShadow: "3px 3px 20px rgba(0,0,0,.3)",
				borderRadius: "7px",
			}}
		>
			<h2 style={{ marginBottom: "1em" }}>Chat Room</h2>
			<Paper
				elevation={0}
				style={{
					width: "100%",
					height: 400,
					padding: "2px",
					overflowY: "auto",
					borderRadius: "3px",
				}}
				color="#898980"
			>
				<List ref={chatContainerRef}>
					{messages.map((message, index) => (
						<ListItem key={index}>
							<ListItemText
								primary={message}
								style={{
									textAlign: "right",
									margin: "0 10px 0 0",
								}}
							/>
							<Avatar>H</Avatar>
						</ListItem>
					))}
				</List>
			</Paper>
			<div
				style={{
					background: "white",
					display: "flex",
					alignItems: "center",
				}}
			>
				<TextField
					style={{ background: "white", padding: 10 }}
					label=""
					variant="outlined"
					fullWidth
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							handleSendMessage();
						}
					}}
					autoComplete="off"
				/>
				<Button
					variant="contained"
					color={buttonDisabled ? "primary" : "success"}
					onClick={handleSendMessage}
					style={{ margin: "10px" }}
					disabled={buttonDisabled} // 根据状态来禁用按钮
				>
					<SendIcon color={sendIconColor} />
				</Button>
			</div>
		</div>
	);
};

export default Chatroom;
