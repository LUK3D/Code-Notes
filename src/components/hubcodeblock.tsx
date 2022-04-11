import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as codestyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
function HubCodeBlock(args:{code:string, language:string}) {

  return (
    <SyntaxHighlighter  language={args.language} style={codestyle }   showLineNumbers={true} >
      {args.code}
    </SyntaxHighlighter>
  );
};

export default HubCodeBlock;