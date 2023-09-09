// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
marked.setOptions({
  // gfm: true,
  // tables: true,
  breaks: true
  // pedantic: false,
  // sanitize: true,
  // smartLists: true,
  // smartypants: false
});



const Editor = ({ content, handleTextareaChange }) => /*#__PURE__*/
React.createElement("textarea", { autofocus: true, value: content, onChange: handleTextareaChange, id: "editor" });

const Previewer = ({ content }) => /*#__PURE__*/
React.createElement("div", { id: "preview",
  dangerouslySetInnerHTML: {
    __html: marked.parse(content) } });



/* a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text*/

const App = () => {
  const [content, setContent] = React.useState(`
  # H1
  ## H2
  [title](https://www.example.com)
 \`code\`
 \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item
	> blockquote
  ![alt text](image.jpg)
  **bold text**
  `);

  const handleTextareaChange = event => {
    setContent(event.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, "My Previewer"), /*#__PURE__*/
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement(Editor, { content: content, handleTextareaChange: handleTextareaChange }), /*#__PURE__*/
    React.createElement(Previewer, { content: content }))));


};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));