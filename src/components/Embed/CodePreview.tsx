import React from 'react';
import { Copy, Check } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const CodePreview: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const codeString = `// Initialize AI Agent
const agent = new AIAgent({
  apiKey: 'your-api-key',
  model: 'premium-v2',
  voice: {
    style: 'professional',
    speed: 1.0,
    pitch: 1.0
  }
});

// Start conversation
agent.start();`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Integration Code</h3>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-4 py-2 bg-accent/20 rounded-lg hover:bg-accent/30 transition-all"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-accent-light" />
          )}
          <span className="text-white">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      
      <div className="relative">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            fontSize: '0.9rem',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};