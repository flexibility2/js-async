const styleFn = function (template, ...args) {
  console.log("template: ", template);
  console.log("args: ", args);
  let css = template.reduce((acc, cur, i) => acc + cur + (args[i] ?? ""), "");

  const className = "test-style";
  const styleTag = document.createElement("style");
  styleTag.textContent = `.${className} { ${css}}`;
  document.head.appendChild(styleTag);

  const div = document.createElement("div");
  div.className = className;
  div.textContent = "AAA";
  document.body.appendChild(div);

  return css;
};

const style = {
  div: styleFn,
};

const styledDiv = style.div`
width: 100px;
height: 100px;
background-color: red;
color: pink;
`;
console.log("styledDiv: ", styledDiv);
