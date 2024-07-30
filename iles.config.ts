import { defineConfig } from 'iles'
import remarkExample from './src/remark/remarkExample'

export default defineConfig({
    markdown:{
        remarkPlugins:[remarkExample]
    }
})
