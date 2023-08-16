import React from "react";

const VsCodeInstall = () => {
  return (
    <div>
      <h2 className="html_h2">VS Code Installation</h2>
      <p className="p_html">
        To run JavaScript with Visual Studio Code (VS Code), you will need to
        follow these steps:
        <br />
        1. Install VS Code: If you don't already have it, you can download and
        install VS Code from the official website
        (https://code.visualstudio.com/).
        <br />
        2. Create a new JavaScript file: Open VS Code and create a new file with
        a .js extension. You can do this by going to File &gt; New File or by
        using the shortcut Ctrl + N.
        <br />
        3. Write your JavaScript code: Type your JavaScript code into the file
        and save it.
        <br />
        4. Open the Command Palette: You can open the Command Palette by
        pressing Ctrl + Shift + P or by going to View &gt; Command Palette.
        <br />
        5. Run the JavaScript file: In the Command Palette, type "Run
        JavaScript" and select "Run JavaScript file in the terminal" from the
        list of options. This will open a terminal window and run your
        JavaScript file.
        <br />
        6. View the output: The output of your JavaScript code will be displayed
        in the terminal window.
        <br />
        Alternatively, you can also run JavaScript code directly in the terminal
        by using a command-line interpreter such as Node.js. To do this, you
        will need to install Node.js and then run your JavaScript file using the
        "node" command, followed by the name of the file. For example:
        <br />
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://sebhastian.com/vscode-guide/vscode-site.png"
        alt=""
      />
    </div>
  );
};

export default VsCodeInstall;
