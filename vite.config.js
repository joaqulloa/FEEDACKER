import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
      define: {
          'process.env.VITE_OPENAI_API_KEY': JSON.stringify(process.env.VITE_OPENAI_API_KEY),
          'process.env.VITE_TEST': JSON.stringify(process.env.VITE_TEST)
          // If you want to exposes all env variables, which is not recommended
          // 'process.env': env
      },
  };
});






// dotenv.config();

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define:{
//     __VITE_OPENAI_API_KEY__: `"${process.env.VITE_OPENAI_API_KEY}"`
//   }
// })
