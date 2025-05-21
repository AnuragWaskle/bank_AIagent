
// import { Vapi } from "https://cdn.jsdelivr.net/npm/@vapi-ai/web/dist/index.mjs";

// const vapi = new Vapi({
//   apiKey: import.meta.env.VITE_VAPI_API_KEY, // Vite-compatible env var
// });

// export const initiateVoiceCall = async () => {
//   try {
//     await vapi.start({
//       assistant: 'db3f65f7-6b37-463a-95bf-e80933727560',
//       phoneNumber: null, // Web-based call
//       name: 'SmartBank Voice Assistant',
//       model: 'gpt-4o-realtime-preview-2024-12-17',
//       voice: 'coral', // You can try shimmer/echo if you want more natural tone
//     });
//     console.log('Voice call initiated');
//   } catch (error) {
//     console.error('Vapi.ai error:', error);
//     alert('Failed to start voice call. Please try again.');
//   }
// };



import Vapi from '@vapi-ai/web';

const vapi = new Vapi({
  apiKey: "d89ac8ed-1b07-4a87-bc46-4a049b7551cb",
});

export const initiateVoiceCall = async () => {
  try {
    await vapi.start({
      assistant: 'db3f65f7-6b37-463a-95bf-e80933727560', // Replace with your Assistant ID
      phoneNumber: null, // Web-based call
      name: 'SmartBank Voice Assistant',
      model: 'gpt-4o-realtime-preview-2024-12-17',
      voice: 'coral',
    });
    console.log('Voice call initiated');
  } catch (error) {
    console.error('Vapi.ai error:', error);
    alert('Failed to start voice call. Please try again.');
  }
};