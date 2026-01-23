# 🤖 Gemini Clone.

A modern, responsive web application that replicates the Google Gemini AI chat interface using React.js and the Google Generative AI API.

## 🌟 Features.

- **Interactive Chat Interface**: Clean and intuitive UI similar to Google Gemini
- **Real-time AI Responses**: Powered by Google's Generative AI API
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices,
- **Chat History**: Maintains conversation history with recent prompts
- **Collapsible Sidebar**: Toggle sidebar for better screen utilization
- **Typing Animation**: Smooth text animation for AI responses
- **Modern UI/UX**: Beautiful gradient text effects and hover animations.

## 🚀 Demo.

https://gemini-clone-11.onrender.com

## 🛠️ Technologies Used.

- **Frontend Framework**: React.js 18
- **Build Tool**: Vite
- **Styling**: CSS3 with modern flexbox and grid layouts
- **AI Integration**: Google Generative AI API
- **Font**: Google Fonts (Outfit)
- **Icons**: Custom SVG assets

## 📋 Prerequisites.

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Google Generative AI API key

## ⚡ Quick Start.

### 1. Clone the repository.

```bash
git clone https://github.com/mdashad0/Gemini-Clone.git
cd Gemini-Clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your Google Generative AI API key:

```env
VITE_GOOGLE_AI_API_KEY=your_api_key_here
```

**Note**: Currently, the API key is stored in the `src/config/gemini.js` file. For production use, move it to environment variables.

### 4. Start the development server,

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
gemini-clone/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── assets.js          # Asset exports
│   │   └── *.png             # UI icons and images
│   ├── components/
│   │   ├── Main/
│   │   │   ├── Main.jsx      # Main chat interface
│   │   │   └── Main.css      # Main component styles
│   │   └── Sidebar/
│   │       ├── Sidebar.jsx   # Navigation sidebar
│   │       └── Sidebar.css   # Sidebar styles
│   ├── config/
│   │   └── gemini.js         # Google AI API configuration
│   ├── context/
│   │   └── Context.jsx       # React Context for state management
│   ├── App.jsx               # Root component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Configuration

### Google Generative AI Setup

1. Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Update the API key in `src/config/gemini.js`:

```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

### Customization

- **Styling**: Modify CSS files in component folders
- **AI Model**: Change the model in `src/config/gemini.js`
- **UI Assets**: Replace icons in `src/assets/` folder

## 🎨 UI Components.

### Main Chat Interface
- Welcome message with gradient text
- Quick action cards for common prompts
- Message input with send functionality
- Response display with typing animation

### Sidebar Navigation
- Collapsible design
- Recent chat history
- Quick access buttons (Help, Activity, Settings)
- Responsive hamburger menu for mobile

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop**: Full sidebar and expanded layout
- **Tablet**: Collapsed sidebar with icons
- **Mobile**: Off-canvas sidebar with overlay

## 🧪 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🤝 Contributing.

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author.

**MD Ashad**
- GitHub: [@mdashad0](https://github.com/mdashad0)
- LinkedIn: [MD Ashad](https://linkedin.com/in/mdashad0)

## 🙏 Acknowledgments.

- Google Generative AI team for the powerful API
- React.js community for the excellent documentation
- Vite team for the lightning-fast build tool

## 📞 Support.

If you have any questions or need help, please open an issue on GitHub.

------------------------

⭐ Star this repository if you found it helpful!
