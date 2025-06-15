import VoiceInput from './VoiceInput'; // Add this at top

// Inside the return of ChatTerminal (after Send button):
<VoiceInput onCommand={(cmd) => {
  const userMsg = { from: 'user', text: cmd };
  setMessages(prev => [...prev, userMsg]);

  setTimeout(() => {
    const edithReply = {
      from: 'edith',
      text: `🎤 Received voice command: "${cmd}" (Functionality coming soon)`
    };
    setMessages(prev => [...prev, edithReply]);
  }, 800);
}} />
