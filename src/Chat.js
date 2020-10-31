import React, { useEffect, useState } from 'react';
import "./Chat.css";
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";


function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId)
            .onSnapshot((snapshot) => 
                setRoomDetails(snapshot.data()));

        }   

            db.collection('rooms').doc(roomId)
            .collection('messages')
            .orderBy('timestamp','asc')
            .onSnapshot((snapshot) =>
                setRoomMessages(
                    snapshot.docs.map((doc) => doc.data())
                )
            );
    
    }, [roomId]);
    console.log(roomDetails);
    console.log("Messages are >>>", roomMessages);
    return (
        <div className="chat">
            
            <div className="chat__header">
                <div className="chat__headerleft">
                    <h4 className="chat__channelname">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>    
                </div>
                <div className="chat__headerright">
                    <p>
                       <InfoOutlinedIcon />Details
                    </p>

                </div>
            </div>
            <div className="chat__messages">
               {roomMessages?.map(({ message, user, timestamp, userimage }) => (
               <Message
                    message={message}
                    user={user}
                    userimage={userimage}
                    timestamp={timestamp}
                />
            ))}
           </div>
           <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat;
