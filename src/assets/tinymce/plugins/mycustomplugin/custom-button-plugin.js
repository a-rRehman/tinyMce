function rgbToHex(rgb) {
  if (!rgb || !rgb.startsWith("rgb")) return rgb; // Return the input if it's not an RGB value
  let parts = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!parts) return rgb; // Return the input if it doesn't match RGB pattern
  return (
    "#" +
    parts
      .slice(1)
      .map((n) => parseInt(n).toString(16).padStart(2, "0").toUpperCase())
      .join("")
  );
}

function cleanColorInput(colorInput) {
  return colorInput.startsWith("some(") && colorInput.endsWith(")")
    ? colorInput.slice(5, -1)
    : colorInput;
}

function removeInlineStyles(node) {
  node.removeAttribute("style");
  node.removeAttribute("data-mce-style");
}

tinymce.PluginManager.add("customButtonPlugin", function (editor) {
  editor.ui.registry.addButton("editButton", {
    text: "Edit Button",
    icon: "edit",
    onAction: function () {
      const node = editor.selection.getNode();
      if (node.nodeName === "BUTTON") {
        const currentStyles = {
          backgroundColor:
            cleanColorInput(rgbToHex(node.style.backgroundColor)) || "",
          borderColor: cleanColorInput(rgbToHex(node.style.borderColor)) || "",
          borderRadius: node.style.borderRadius
            ? node.style.borderRadius.replace("px", "")
            : "",
          borderWidth: node.style.borderWidth
            ? node.style.borderWidth.replace("px", "")
            : "",
          borderStyle: node.style.borderStyle || "",
          fontSize: node.style.fontSize
            ? node.style.fontSize.replace("px", "")
            : "",
          buttonWidth: node.style.width
            ? node.style.width.replace("px", "")
            : "",
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
              },
              {
                type: "colorinput",
                name: "borderColor",
                label: "Border Color",
              },
              {
                type: "input",
                name: "borderRadius",
                label: "Border Radius (px)",
                inputMode: "numeric",
              },
              {
                type: "input",
                name: "borderWidth",
                label: "Border Width (px)",
                inputMode: "numeric",
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
              },
              {
                type: "input",
                name: "fontSize",
                label: "Font Size (px)",
                inputMode: "numeric",
              },
              {
                type: "input",
                name: "buttonWidth",
                label: "Button Width (px)",
                inputMode: "numeric",
              },
            ],
          },
          buttons: [
            { text: "Apply", type: "submit", primary: true },
            { text: "Cancel", type: "cancel" },
          ],
          initialData: currentStyles,
          onSubmit: function (api) {
            var data = api.getData();
            removeInlineStyles(node);
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
      return node.nodeName === "BUTTON";
    },
    items: "editButton",
    scope: "node",
    position: "node",
  });
});
