tinymce.PluginManager.add("customButtonPlugin", function (editor) {
  editor.ui.registry.addButton("editButton", {
    text: "Edit Button",
    icon: "edit",
    onAction: function () {
      const node = editor.selection.getNode();
      if (node.nodeName === "BUTTON" && node.id === "customButton") {
        // Get current styles and attributes of the button
        const currentStyles = {
          backgroundColor: node.style.backgroundColor || "",
          borderColor: node.style.borderColor || "",
          borderRadius: node.style.borderRadius
            ? parseInt(node.style.borderRadius)
            : "",
          fontSize: node.style.fontSize ? parseInt(node.style.fontSize) : "",
          buttonWidth: node.style.width || "",
          buttonAlignment: node.style.cssFloat || "",
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
              node.style.backgroundColor = data.backgroundColor;
            if (data.borderColor) node.style.borderColor = data.borderColor;
            if (data.borderRadius)
              node.style.borderRadius = data.borderRadius + "px";
            if (data.fontSize) node.style.fontSize = data.fontSize + "px";
            if (data.buttonWidth) node.style.width = data.buttonWidth;
            if (data.buttonAlignment)
              node.style.cssFloat = data.buttonAlignment;
            api.close();
          },
        });
      } else {
        editor.notificationManager.open({
          text: "Please select a button to edit.",
          type: "info",
        });
      }
    },
  });

  editor.ui.registry.addContextToolbar("editButton", {
    predicate: function (node) {
      return node.nodeName === "BUTTON" && node.id === "customButton";
    },
    items: "editButton",
    scope: "node",
    position: "node",
  });
});
