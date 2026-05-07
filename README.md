# ApiSorcery - Vue3 Example

This is a Vue 3 + TypeScript + Vite example application that demonstrates API integration using AutoAPI.

## Features

- ✅ User Management (CRUD operations)
- ✅ Search and Filter
- ✅ Pagination
- ✅ Form Validation
- ✅ Image Upload
- ✅ Status Management
- ✅ Type-safe API calls with AutoAPI

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Ant Design Vue** - UI component library
- **Castor UI** - Enhanced Ant Design components
- **Axios** - HTTP client
- **AutoAPI** - API code generation

## Prerequisites

- Node.js >= 22.0.0
- npm >= 10.0.0

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Generate API Client Code

```bash
npm run swagger
```

This will generate TypeScript API client code from the OpenAPI specification.

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at: http://localhost:9527/vue3/

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run Vue TypeScript type checking
- `npm run lint` - Run ESLint and Oxlint
- `npm run format` - Format code with Prettier
- `npm run swagger` - Generate API client code

## Project Structure

```
autoapi-example-vue3/
├── src/
│   ├── apis/
│   │   └── auto/          # Auto-generated API code
│   ├── components/
│   │   └── registerGlobComp.ts  # Global component registration
│   ├── hooks/
│   │   └── useModal.ts    # Modal utilities
│   ├── views/
│   │   └── user/          # User management module
│   │       ├── index.vue  # Main user page
│   │       └── hooks/     # Composable functions
│   ├── utils/
│   │   └── dayjs.ts       # Date utility
│   ├── App.vue            # Root component
│   └── main.ts            # Application entry
├── .autoapirc.json        # AutoAPI configuration
├── .env                   # Environment variables
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## API Configuration

The application uses AutoAPI to generate type-safe API client code. Configuration is in `.autoapirc.json`:

```json
{
  "application": {
    "language": "ts",
    "outputDir": "./src/apis/auto"
  },
  "servers": [
    {
      "code": "demo",
      "token": "72735b33815c4e5c9c2a924a8f4907ef",
      "version": 3,
      "enabled": true,
      "source": "https://apisorcery.com/demo-api/swagger-json",
      "returnLevel": "second",
      "returnSecondField": "data",
      "baseStrategy": "always",
      "httpClientStrategy": "once"
    }
  ]
}
```

## Environment Variables

- `VITE_PORT` - Development server port (default: 9527)
- `VITE_GLOB_PUBLIC_PATH` - Application base path (default: /vue3/)
- `VITE_GLOB_BASE_API` - API base path (default: /demo-api)

## Development

### Vue 3 Composition API

This project uses Vue 3's Composition API with `<script setup>` syntax:

```vue
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

const count = ref(0);
const state = reactive({ name: 'Vue 3' });
</script>
```

### Castor UI Components

The project uses Castor UI for enhanced Ant Design Vue components:

- `ca-common-query` - Pre-built search/filter component
- `ca-common-table` - Pre-built data table component
- `ca-common-form` - Pre-built form component

These components reduce boilerplate code and provide consistent UI patterns.

### Adding New Features

1. Generate/update API client code: `npm run swagger`
2. Create composable functions in `src/hooks/`
3. Create views in `src/views/`
4. Register global components in `src/components/registerGlobComp.ts`

### Code Style

- Follow Vue 3 best practices
- Use Composition API with `<script setup>`
- Use TypeScript for type safety
- Format code with Prettier before committing

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

Use the provided deployment script:

```bash
./deploy_prod.sh
```

## Version Information

- Node version: >= 22.0.0
- npm version: >= 10.0.0
- Vue version: 3.5.13
- Vite version: 6.2.4
- AutoAPI version: Latest

## License

MIT
