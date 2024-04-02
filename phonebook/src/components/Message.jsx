const Message = ({message}) => <> { message[0] ? <div className={`${message[1]} message`}>{message[0]}</div> : null } </>

export default Message