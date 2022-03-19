// ActionProvider starter code
class ActionProvider {
   constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  mirrorchat = (message)=>{
    const botMessage = this.createChatBotMessage(message);
    this.addMesageToState(botMessage);
  }

  addMesageToState = (botMessage) =>{
    this.setState(prevState=>({
      ...prevState,
      messages:[...prevState.messages, botMessage],
    }))
  }

}

export default ActionProvider;
