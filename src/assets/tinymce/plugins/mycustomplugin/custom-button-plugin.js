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
          borderWidth: node.style.borderWidth
            ? parseInt(node.style.borderWidth)
            : "",
          borderStyle: node.style.borderStyle || "",
          fontSize: node.style.fontSize ? parseInt(node.style.fontSize) : "",
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
                name: "borderWidth",
                label: "Border Width (px)",
                inputMode: "numeric",
                value: currentStyles.borderWidth,
              },
              {
                type: "listbox",
                name: "borderStyle",
                label: "Border Style",
                items: [
                  { text: "None", value: "none" },
                  { text: "Solid", value: "solid" },
                  { text: "Dotted", value: "dotted" },
                  { text: "Dashed", value: "dashed" },
                  { text: "Double", value: "double" },
                  { text: "Groove", value: "groove" },
                  { text: "Ridge", value: "ridge" },
                  { text: "Inset", value: "inset" },
                  { text: "Outset", value: "outset" },
                ],
                value: currentStyles.borderStyle,
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
                label: "Button Width (px)",
                inputMode: "numeric",
                value: currentStyles.buttonWidth,
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
            if (data.borderWidth)
              node.style.borderWidth = data.borderWidth + "px";
            if (data.borderStyle) node.style.borderStyle = data.borderStyle;
            if (data.fontSize) node.style.fontSize = data.fontSize + "px";
            if (data.buttonWidth) node.style.width = data.buttonWidth + "px";

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
