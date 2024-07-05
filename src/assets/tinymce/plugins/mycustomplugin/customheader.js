// tinymce.PluginManager.add("customHeader", function (editor, url) {
//   function openDialog(headerData) {
//     headerData = headerData || {}; // Ensure headerData is an object
//     editor.windowManager.open({
//       title: "Create Header Section",
//       body: {
//         type: "panel",
//         items: [
//           {
//             type: "input",
//             name: "width",
//             label: "Width (e.g., 100%, 800px)",
//             value: headerData.width || "100%",
//           },
//           {
//             type: "input",
//             name: "height",
//             label: "Height (e.g., 300px)",
//             value: headerData.height || "300px",
//           },
//           {
//             type: "input",
//             name: "backgroundImage",
//             label: "Background Image URL",
//             value: headerData.backgroundImage || "",
//           },
//           {
//             type: "input",
//             name: "heading",
//             label: "Heading Text",
//             value: headerData.heading || "",
//           },
//           {
//             type: "input",
//             name: "subheading",
//             label: "Subheading Text",
//             value: headerData.subheading || "",
//           },
//           {
//             type: "input",
//             name: "buttonText",
//             label: "Button Text",
//             value: headerData.buttonText || "",
//           },
//           {
//             type: "input",
//             name: "buttonUrl",
//             label: "Button URL",
//             value: headerData.buttonUrl || "",
//           },
//         ],
//       },
//       buttons: [
//         {
//           text: "Close",
//           type: "cancel",
//           onclick: "close",
//         },
//         {
//           text: "Save",
//           type: "submit",
//           primary: true,
//           onclick: function (api) {
//             var data = api.getData();
//             var htmlContent = `<div style="width: ${data.width}; height: ${data.height}; background-image: url('${data.backgroundImage}'); text-align: center; padding: 20px;">
//                                     <h1>${data.heading}</h1>
//                                     <h2>${data.subheading}</h2>
//                                     <button onclick="window.location.href='${data.buttonUrl}'">${data.buttonText}</button>
//                                  </div>`;
//             editor.insertContent(htmlContent);
//             api.close();
//           },
//         },
//       ],
//     });
//   }

//   // Add a button that opens a window
//   editor.ui.registry.addButton("customHeaderButton", {
//     text: "Create Header",
//     onAction: function () {
//       openDialog({});
//     },
//   });

//   // Adds a menu item
//   editor.ui.registry.addMenuItem("customHeaderMenuItem", {
//     text: "Insert Header",
//     onAction: function () {
//       openDialog({});
//     },
//   });

//   return {
//     getMetadata: function () {
//       return {
//         name: "Custom Header Plugin",
//         url: "http://example.com",
//       };
//     },
//   };
// });

tinymce.PluginManager.add("customHeader", function (editor, url) {
  function openDialog(headerData) {
    headerData = headerData || {}; // Ensure headerData is an object
    editor.windowManager.open({
      title: "Create Header Section",
      body: {
        type: "panel",
        items: [
          {
            type: "input",
            name: "width",
            label: "Width (e.g., 100%, 800px)",
            value: headerData.width || "100%",
          },
          {
            type: "input",
            name: "height",
            label: "Height (e.g., 300px)",
            value: headerData.height || "300px",
          },
          {
            type: "input",
            name: "backgroundImage",
            label: "Background Image URL",
            value: headerData.backgroundImage || "",
          },
          {
            type: "input",
            name: "heading",
            label: "Heading Text",
            value: headerData.heading || "",
          },
          {
            type: "input",
            name: "subheading",
            label: "Subheading Text",
            value: headerData.subheading || "",
          },
          {
            type: "input",
            name: "buttonText",
            label: "Button Text",
            value: headerData.buttonText || "",
          },
          {
            type: "input",
            name: "buttonUrl",
            label: "Button URL",
            value: headerData.buttonUrl || "",
          },
        ],
      },
      buttons: [
        {
          text: "Close",
          type: "cancel",
          onclick: "close",
        },
        {
          text: "Save",
          type: "submit",
          primary: true,
        },
      ],
      onSubmit: function (api) {
        var data = api.getData();
        var htmlContent = `<div style="width: ${data.width}; height: ${data.height}; background-image: url('${data.backgroundImage}'); text-align: center; padding: 20px;">
                              <h1>${data.heading}</h1>
                              <h2>${data.subheading}</h2>
                              <button onclick="window.location.href='${data.buttonUrl}'">${data.buttonText}</button>
                           </div>`;
        editor.insertContent(htmlContent);
        api.close();
      },
    });
  }

  // Add a button that opens a window
  editor.ui.registry.addButton("customHeaderButton", {
    text: "Create Header",
    onAction: function () {
      openDialog({});
    },
  });

  // Adds a menu item
  editor.ui.registry.addMenuItem("customHeaderMenuItem", {
    text: "Insert Header",
    onAction: function () {
      openDialog({});
    },
  });

  return {
    getMetadata: function () {
      return {
        name: "Custom Header Plugin",
        url: "http://example.com",
      };
    },
  };
});
