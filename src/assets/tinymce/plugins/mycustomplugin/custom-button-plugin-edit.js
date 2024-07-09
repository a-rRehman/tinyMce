// CSS to add edit button on hover
const css = `
  #customButtonWrapper {
    position: relative;
    display: inline-block;
  }
  #customButton {
    position: relative;
    z-index: 1;
  }

  #customButtonEdit {
     margin-left: -14px;
    background-color: #ffffff00;
    text-decoration: underline;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    border: none;
    cursor: pointer;
    z-index: 2;
    text-align: center;
    line-height: inherit;
  }
  #customButtonWrapper:hover #customButtonEdit {
    display: block;
  }
`;
const style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);

// TinyMCE plugin
tinymce.PluginManager.add("customButtonPlugin", function (editor) {
  // Create a wrapper around the custom button to position the edit button
  editor.on("init", function () {
    editor
      .getBody()
      .querySelectorAll("#customButton")
      .forEach((button) => {
        const wrapper = document.createElement("div");
        wrapper.id = "customButtonWrapper";
        button.parentNode.insertBefore(wrapper, button);
        wrapper.appendChild(button);

        const editButton = document.createElement("button");
        editButton.id = "customButtonEdit";
        editButton.textContent = "Edit";
        wrapper.appendChild(editButton);
      });
  });

  // Handle click event on the edit button
  editor.on("click", function (e) {
    if (e.target.id === "customButtonEdit") {
      const button = e.target.previousSibling;
      // Get current styles and attributes of the button
      const currentStyles = {
        backgroundColor: button.style.backgroundColor || "",
        borderColor: button.style.borderColor || "",
        borderRadius: button.style.borderRadius
          ? parseInt(button.style.borderRadius)
          : "",
        fontSize: button.style.fontSize ? parseInt(button.style.fontSize) : "",
        buttonWidth: button.style.width || "",
        buttonAlignment: button.style.cssFloat || "",
      };

      editor.windowManager.open({
        title: "Set Button Attributes",
        body: {
          type: "panel",
          items: [
            {
              type: "colorinput",
              name: "backgroundColor",
              label: "Background Color",
              value: currentStyles.backgroundColor,
            },
            {
              type: "colorinput",
              name: "borderColor",
              label: "Border Color",
              value: currentStyles.borderColor,
            },
            {
              type: "input",
              name: "borderRadius",
              label: "Border Radius (px)",
              inputMode: "numeric",
              value: currentStyles.borderRadius,
            },
            {
              type: "input",
              name: "fontSize",
              label: "Font Size (px)",
              inputMode: "numeric",
              value: currentStyles.fontSize,
            },
            {
              type: "input",
              name: "buttonWidth",
              label: "Button Width (px or %)",
              inputMode: "text",
              value: currentStyles.buttonWidth,
            },
            {
              type: "selectbox",
              name: "buttonAlignment",
              label: "Button Alignment",
              items: [
                { text: "Default", value: "" },
                { text: "Left", value: "left" },
                { text: "Center", value: "center" },
                { text: "Right", value: "right" },
              ],
              value: currentStyles.buttonAlignment,
            },
          ],
        },
        buttons: [
          {
            text: "Apply",
            type: "submit",
            primary: true,
          },
          {
            text: "Cancel",
            type: "cancel",
          },
        ],
        onSubmit: function (api) {
          var data = api.getData();
          if (data.backgroundColor)
            button.style.backgroundColor = data.backgroundColor;
          if (data.borderColor) button.style.borderColor = data.borderColor;
          if (data.borderRadius)
            button.style.borderRadius = data.borderRadius + "px";
          if (data.fontSize) button.style.fontSize = data.fontSize + "px";
          if (data.buttonWidth) button.style.width = data.buttonWidth;
          if (data.buttonAlignment)
            button.style.cssFloat = data.buttonAlignment;
          api.close();
        },
      });
    }
  });
});
