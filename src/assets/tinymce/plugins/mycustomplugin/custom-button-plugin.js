tinymce.PluginManager.add("customButtonPlugin", function (editor) {
  editor.on("dblclick", function (e) {
    if (e.target.nodeName === "BUTTON" && e.target.id === "customButton") {
      // Get current styles and attributes of the button
      const currentStyles = {
        backgroundColor: e.target.style.backgroundColor || "",
        borderColor: e.target.style.borderColor || "",
        borderRadius: e.target.style.borderRadius
          ? parseInt(e.target.style.borderRadius)
          : "",
        fontSize: e.target.style.fontSize
          ? parseInt(e.target.style.fontSize)
          : "",
        buttonWidth: e.target.style.width || "",
        buttonAlignment: e.target.style.cssFloat || "",
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
            e.target.style.backgroundColor = data.backgroundColor;
          if (data.borderColor) e.target.style.borderColor = data.borderColor;
          if (data.borderRadius)
            e.target.style.borderRadius = data.borderRadius + "px";
          if (data.fontSize) e.target.style.fontSize = data.fontSize + "px";
          if (data.buttonWidth) e.target.style.width = data.buttonWidth;
          if (data.buttonAlignment)
            e.target.style.cssFloat = data.buttonAlignment;
          api.close();
        },
      });
    }
  });
});
