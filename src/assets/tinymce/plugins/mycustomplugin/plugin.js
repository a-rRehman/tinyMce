//1
// Title Plugin

// tinymce.PluginManager.add("mycustomplugin", function (editor, url) {
//   // Add a button that opens a window
//   editor.ui.registry.addButton("mybutton", {
//     text: "My Button",
//     onAction: function () {
//       // Open a Dialog
//       editor.windowManager.open({
//         title: "Example plugin",
//         body: {
//           type: "panel",
//           items: [
//             {
//               type: "input",
//               name: "title",
//               label: "Title",
//             },
//           ],
//         },
//         buttons: [
//           {
//             text: "Close",
//             type: "cancel",
//             onclick: "close",
//           },
//           {
//             text: "Save",
//             type: "submit",
//             primary: true,
//             onclick: function (api) {
//               var data = api.getData();
//               // Insert content when the window form is submitted
//               editor.insertContent("Title: " + data.title);
//               api.close();
//             },
//           },
//         ],
//         onSubmit: function (api) {
//           var data = api.getData();
//           // Insert content when the window form is submitted
//           editor.insertContent("Title: " + data.title);
//           api.close();
//         },
//       });
//     },
//   });

//   // Adds a menu item
//   editor.ui.registry.addMenuItem("myMenuItem", {
//     text: "My Menu Item",
//     onAction: function () {
//       editor.insertContent("&nbsp;<em>You clicked my menu item!</em>&nbsp;");
//     },
//   });

//   // Return the metadata for the help plugin
//   return {
//     getMetadata: function () {
//       return {
//         name: "Example plugin",
//         url: "http://example.com",
//       };
//     },
//   };
// });

//2
// Simple Button Plugin

// tinymce.PluginManager.add("mycustomplugin", function (editor, url) {
//   // Add a button that opens a window
//   editor.ui.registry.addButton("mybutton", {
//     text: "My Button",
//     onAction: function () {
//       // Open a Dialog
//       editor.windowManager.open({
//         title: "Example plugin",
//         body: {
//           type: "panel",
//           items: [
//             {
//               type: "input",
//               name: "title",
//               label: "Button Text",
//             },
//             {
//               type: "input",
//               name: "url",
//               label: "Button URL",
//             },
//           ],
//         },
//         buttons: [
//           {
//             text: "Close",
//             type: "cancel",
//             onclick: "close",
//           },
//           {
//             text: "Save",
//             type: "submit",
//             primary: true,
//             onclick: function (api) {
//               var data = api.getData();
//               // Insert a button element when the form is submitted
//               editor.insertContent(
//                 "<button onclick=\"window.location.href='" +
//                   data.url +
//                   "'\">" +
//                   data.title +
//                   "</button>"
//               );
//               api.close();
//             },
//           },
//         ],
//         onSubmit: function (api) {
//           var data = api.getData();
//           // Insert a button element when the form is submitted
//           editor.insertContent(
//             "<button onclick=\"window.location.href='" +
//               data.url +
//               "'\">" +
//               data.title +
//               "</button>"
//           );
//           api.close();
//         },
//       });
//     },
//   });

//   // Adds a menu item
//   editor.ui.registry.addMenuItem("myMenuItem", {
//     text: "My Menu Item",
//     onAction: function () {
//       editor.insertContent("&nbsp;<em>You clicked my menu item!</em>&nbsp;");
//     },
//   });

//   // Return the metadata for the help plugin
//   return {
//     getMetadata: function () {
//       return {
//         name: "Example plugin",
//         url: "http://example.com",
//       };
//     },
//   };
// });

//3 Modified Button
// tinymce.PluginManager.add("mycustomplugin", function (editor, url) {
//   // Add a button that opens a window
//   editor.ui.registry.addButton("mybutton", {
//     text: "My Button",
//     onAction: function () {
//       // Open a Dialog
//       editor.windowManager.open({
//         title: "Button Creator",
//         body: {
//           type: "panel",
//           items: [
//             {
//               type: "input",
//               name: "title",
//               label: "Button Text",
//             },
//             {
//               type: "input",
//               name: "url",
//               label: "Button URL",
//             },
//             {
//               type: "colorinput",
//               name: "color",
//               label: "Text Color",
//             },
//             {
//               type: "colorinput",
//               name: "backgroundColor",
//               label: "Background Color",
//             },
//             {
//               type: "input",
//               name: "fontSize",
//               label: "Font Size (e.g., 14px, 1em)",
//             },
//             {
//               type: "input",
//               name: "padding",
//               label: "Padding (e.g., 10px 20px)",
//             },
//             {
//               type: "input",
//               name: "borderRadius",
//               label: "Border Radius (e.g., 5px)",
//             },
//           ],
//         },
//         buttons: [
//           {
//             text: "Close",
//             type: "cancel",
//             onclick: "close",
//           },
//           {
//             text: "Save",
//             type: "submit",
//             primary: true,
//             onclick: function (api) {
//               var data = api.getData();
//               // Construct the style attribute from user inputs
//               var style =
//                 "color:" +
//                 data.color +
//                 ";" +
//                 "background-color:" +
//                 data.backgroundColor +
//                 ";" +
//                 "font-size:" +
//                 data.fontSize +
//                 ";" +
//                 "padding:" +
//                 data.padding +
//                 ";" +
//                 "border-radius:" +
//                 data.borderRadius +
//                 ";";
//               // Insert the styled button element
//               editor.insertContent(
//                 '<button style="' +
//                   style +
//                   '" onclick="window.location.href=\'' +
//                   data.url +
//                   "'\">" +
//                   data.title +
//                   "</button>"
//               );
//               api.close();
//             },
//           },
//         ],
//         onSubmit: function (api) {
//           var data = api.getData();
//           // Construct the style attribute from user inputs
//           var style =
//             "color:" +
//             data.color +
//             ";" +
//             "background-color:" +
//             data.backgroundColor +
//             ";" +
//             "font-size:" +
//             data.fontSize +
//             ";" +
//             "padding:" +
//             data.padding +
//             ";" +
//             "border-radius:" +
//             data.borderRadius +
//             ";";
//           // Insert the styled button element
//           editor.insertContent(
//             '<button style="' +
//               style +
//               '" onclick="window.location.href=\'' +
//               data.url +
//               "'\">" +
//               data.title +
//               "</button>"
//           );
//           api.close();
//         },
//       });
//     },
//   });

//   // Adds a menu item
//   editor.ui.registry.addMenuItem("myMenuItem", {
//     text: "My Menu Item",
//     onAction: function () {
//       editor.insertContent("&nbsp;<em>You clicked my menu item!</em>&nbsp;");
//     },
//   });

//   // Return the metadata for the help plugin
//   return {
//     getMetadata: function () {
//       return {
//         name: "Example plugin",
//         url: "http://example.com",
//       };
//     },
//   };
// });

// tinymce.PluginManager.add("mycustomplugin", function (editor, url) {
//   // Function to open the dialog with pre-filled data for editing
//   function openDialog(button) {
//     var currentStyle = button ? button.getAttribute("style") : "";
//     var currentText = button ? button.innerText : "";
//     var currentUrl = button
//       ? button
//           .getAttribute("onclick")
//           .match(/window\.location\.href='([^']+)'/)[1]
//       : "";

//     // Extract styles if editing an existing button
//     var styles = currentStyle.split(";").reduce(function (acc, style) {
//       var parts = style.split(":");
//       if (parts.length === 2) {
//         acc[parts[0].trim()] = parts[1].trim();
//       }
//       return acc;
//     }, {});

//     editor.windowManager.open({
//       title: button ? "Edit Button" : "Create Button",
//       body: {
//         type: "panel",
//         items: [
//           {
//             type: "input",
//             name: "title",
//             label: "Button Text",
//             value: currentText,
//           },
//           {
//             type: "input",
//             name: "url",
//             label: "Button URL",
//             value: currentUrl,
//           },
//           {
//             type: "colorinput",
//             name: "color",
//             label: "Text Color",
//             value: styles["color"] || "",
//           },
//           {
//             type: "colorinput",
//             name: "backgroundColor",
//             label: "Background Color",
//             value: styles["background-color"] || "",
//           },
//           {
//             type: "input",
//             name: "fontSize",
//             label: "Font Size (e.g., 14px, 1em)",
//             value: styles["font-size"] || "",
//           },
//           {
//             type: "input",
//             name: "padding",
//             label: "Padding (e.g., 10px 20px)",
//             value: styles["padding"] || "",
//           },
//           {
//             type: "input",
//             name: "borderRadius",
//             label: "Border Radius (e.g., 5px)",
//             value: styles["border-radius"] || "",
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
//             var style =
//               "color:" +
//               data.color +
//               ";" +
//               "background-color:" +
//               data.backgroundColor +
//               ";" +
//               "font-size:" +
//               data.fontSize +
//               ";" +
//               "padding:" +
//               data.padding +
//               ";" +
//               "border-radius:" +
//               data.borderRadius +
//               ";";

//             // Update or insert the button
//             if (button) {
//               button.setAttribute("style", style);
//               button.setAttribute(
//                 "onclick",
//                 "window.location.href='" + data.url + "'"
//               );
//               button.innerText = data.title;
//             } else {
//               editor.insertContent(
//                 '<button style="' +
//                   style +
//                   '" onclick="window.location.href=\'' +
//                   data.url +
//                   "'\">" +
//                   data.title +
//                   "</button>"
//               );
//             }
//             api.close();
//           },
//         },
//       ],
//     });
//   }

//   // Add a button that opens a window
//   editor.ui.registry.addButton("mybutton", {
//     text: "My Button",
//     onAction: function () {
//       openDialog();
//     },
//   });

//   // Adds a menu item
//   editor.ui.registry.addMenuItem("myMenuItem", {
//     text: "My Menu Item",
//     onAction: function () {
//       editor.insertContent("&nbsp;<em>You clicked my menu item!</em>&nbsp;");
//     },
//   });

//   // Event listener for clicking buttons within the editor
//   editor.on("click", function (e) {
//     if (e.target.nodeName === "BUTTON") {
//       openDialog(e.target);
//     }
//   });

//   // Return the metadata for the help plugin
//   return {
//     getMetadata: function () {
//       return {
//         name: "Example plugin",
//         url: "http://example.com",
//       };
//     },
//   };
// });

// tinymce.PluginManager.add("mycustomplugin", function (editor, url) {
//   // Function to open the dialog with pre-filled data for editing
//   function openDialog(button) {
//     var currentStyle = button ? button.getAttribute("style") : "";
//     var currentText = button ? button.innerText : "";
//     var currentUrl = button
//       ? button
//           .getAttribute("onclick")
//           .match(/window\.location\.href='([^']+)'/)[1]
//       : "";

//     // Extract styles if editing an existing button
//     var styles = currentStyle.split(";").reduce(function (acc, style) {
//       var parts = style.split(":");
//       if (parts.length === 2) {
//         acc[parts[0].trim()] = parts[1].trim();
//       }
//       return acc;
//     }, {});

//     editor.windowManager.open({
//       title: button ? "Edit Button" : "Create Button",
//       body: {
//         type: "panel",
//         items: [
//           {
//             type: "input",
//             name: "title",
//             label: "Button Text",
//             value: currentText,
//           },
//           {
//             type: "input",
//             name: "url",
//             label: "Button URL",
//             value: currentUrl,
//           },
//           {
//             type: "colorinput",
//             name: "color",
//             label: "Text Color",
//             value: styles["color"] || "",
//           },
//           {
//             type: "colorinput",
//             name: "backgroundColor",
//             label: "Background Color",
//             value: styles["background-color"] || "",
//           },
//           {
//             type: "input",
//             name: "fontSize",
//             label: "Font Size (e.g., 14px, 1em)",
//             value: styles["font-size"] || "",
//           },
//           {
//             type: "input",
//             name: "padding",
//             label: "Padding (e.g., 10px 20px)",
//             value: styles["padding"] || "",
//           },
//           {
//             type: "input",
//             name: "borderRadius",
//             label: "Border Radius (e.g., 5px)",
//             value: styles["border-radius"] || "",
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
//             var style =
//               "color:" +
//               data.color +
//               ";" +
//               "background-color:" +
//               data.backgroundColor +
//               ";" +
//               "font-size:" +
//               data.fontSize +
//               ";" +
//               "padding:" +
//               data.padding +
//               ";" +
//               "border-radius:" +
//               data.borderRadius +
//               ";";

//             // Update or insert the button
//             if (button) {
//               button.setAttribute("style", style);
//               button.setAttribute(
//                 "onclick",
//                 "window.location.href='" + data.url + "'"
//               );
//               button.innerText = data.title;
//             } else {
//               editor.insertContent(
//                 '<button style="' +
//                   style +
//                   '" onclick="window.location.href=\'' +
//                   data.url +
//                   "'\">" +
//                   data.title +
//                   "</button>"
//               );
//             }
//             api.close();
//           },
//         },
//       ],
//       onSubmit: function (api) {
//         var data = api.getData();
//         var style =
//           "color:" +
//           data.color +
//           ";" +
//           "background-color:" +
//           data.backgroundColor +
//           ";" +
//           "font-size:" +
//           data.fontSize +
//           ";" +
//           "padding:" +
//           data.padding +
//           ";" +
//           "border-radius:" +
//           data.borderRadius +
//           ";";

//         // Update or insert the button
//         if (button) {
//           button.setAttribute("style", style);
//           button.setAttribute(
//             "onclick",
//             "window.location.href='" + data.url + "'"
//           );
//           button.innerText = data.title;
//         } else {
//           editor.insertContent(
//             '<button style="' +
//               style +
//               '" onclick="window.location.href=\'' +
//               data.url +
//               "'\">" +
//               data.title +
//               "</button>"
//           );
//         }
//         api.close();
//       },
//     });
//   }

//   // Add a button that opens a window
//   editor.ui.registry.addButton("mybutton", {
//     text: "My Button",
//     onAction: function () {
//       openDialog();
//     },
//   });

//   // Adds a menu item
//   editor.ui.registry.addMenuItem("myMenuItem", {
//     text: "My Menu Item",
//     onAction: function () {
//       editor.insertContent("&nbsp;<em>You clicked my menu item!</em>&nbsp;");
//     },
//   });

//   // Event listener for clicking buttons within the editor
//   editor.on("click", function (e) {
//     if (e.target.nodeName === "BUTTON") {
//       openDialog(e.target);
//     }
//   });

//   // Return the metadata for the help plugin
//   return {
//     getMetadata: function () {
//       return {
//         name: "Example plugin",
//         url: "http://example.com",
//       };
//     },
//   };
// });

// tinymce.PluginManager.add("mycustomplugin", function (editor, url) {
//   function openDialog(buttonData) {
//     editor.windowManager.open({
//       title: "Button Creator",
//       body: {
//         type: "panel",
//         items: [
//           {
//             type: "input",
//             name: "title",
//             label: "Button Text",
//             value: buttonData.title || "",
//           },
//           {
//             type: "input",
//             name: "url",
//             label: "Button URL",
//             value: buttonData.url || "",
//           },
//           {
//             type: "colorinput",
//             name: "color",
//             label: "Text Color",
//             value: buttonData.color || "",
//           },
//           {
//             type: "colorinput",
//             name: "backgroundColor",
//             label: "Background Color",
//             value: buttonData.backgroundColor || "",
//           },
//           {
//             type: "input",
//             name: "fontSize",
//             label: "Font Size (e.g., 14px, 1em)",
//             value: buttonData.fontSize || "",
//           },
//           {
//             type: "input",
//             name: "padding",
//             label: "Padding (e.g., 10px 20px)",
//             value: buttonData.padding || "",
//           },
//           {
//             type: "input",
//             name: "borderRadius",
//             label: "Border Radius (e.g., 5px)",
//             value: buttonData.borderRadius || "",
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
//             var style =
//               "color:" +
//               data.color +
//               ";" +
//               "background-color:" +
//               data.backgroundColor +
//               ";" +
//               "font-size:" +
//               data.fontSize +
//               ";" +
//               "padding:" +
//               data.padding +
//               ";" +
//               "border-radius:" +
//               data.borderRadius +
//               ";";
//             if (buttonData.element) {
//               // Update existing button
//               buttonData.element.setAttribute("style", style);
//               buttonData.element.setAttribute(
//                 "onclick",
//                 "window.location.href='" + data.url + "'"
//               );
//               buttonData.element.innerHTML = data.title;
//             } else {
//               // Insert new button
//               editor.insertContent(
//                 '<button style="' +
//                   style +
//                   '" onclick="window.location.href=\'' +
//                   data.url +
//                   "'\">" +
//                   data.title +
//                   "</button>"
//               );
//             }
//             api.close();
//           },
//         },
//       ],
//     });
//   }

//   // Add a button that opens a window
//   editor.ui.registry.addButton("mybutton", {
//     text: "My Button",
//     onAction: function () {
//       openDialog({});
//     },
//   });

//   // Adds a menu item
//   editor.ui.registry.addMenuItem("myMenuItem", {
//     text: "My Menu Item",
//     onAction: function () {
//       editor.insertContent("&nbsp;<em>You clicked my menu item!</em>&nbsp;");
//     },
//   });

//   // Handle clicking on a button within the editor
//   editor.on("click", function (e) {
//     if (e.target.tagName === "BUTTON") {
//       var buttonElement = e.target;
//       var style = buttonElement.getAttribute("style");
//       var onclick = buttonElement.getAttribute("onclick");
//       var urlMatch = onclick
//         ? onclick.match(/window\.location\.href='([^']+)'/)
//         : null;
//       openDialog({
//         element: buttonElement,
//         title: buttonElement.innerHTML,
//         url: urlMatch ? urlMatch[1] : "",
//         color: style.match(/color:([^;]+)/)
//           ? style.match(/color:([^;]+)/)[1].trim()
//           : "",
//         backgroundColor: style.match(/background-color:([^;]+)/)
//           ? style.match(/background-color:([^;]+)/)[1].trim()
//           : "",
//         fontSize: style.match(/font-size:([^;]+)/)
//           ? style.match(/font-size:([^;]+)/)[1].trim()
//           : "",
//         padding: style.match(/padding:([^;]+)/)
//           ? style.match(/padding:([^;]+)/)[1].trim()
//           : "",
//         borderRadius: style.match(/border-radius:([^;]+)/)
//           ? style.match(/border-radius:([^;]+)/)[1].trim()
//           : "",
//       });
//     }
//   });

//   // Return the metadata for the help plugin
//   return {
//     getMetadata: function () {
//       return {
//         name: "Example plugin",
//         url: "http://example.com",
//       };
//     },
//   };
// });

// tinymce.PluginManager.add("mycustomplugin", function (editor, url) {
//   function openDialog(buttonData) {
//     editor.windowManager.open({
//       title: "Button Creator",
//       body: {
//         type: "panel",
//         items: [
//           {
//             type: "input",
//             name: "title",
//             label: "Button Text",
//             value: buttonData.title || "",
//           },
//           {
//             type: "input",
//             name: "url",
//             label: "Button URL",
//             value: buttonData.url || "",
//           },
//           {
//             type: "colorinput",
//             name: "color",
//             label: "Text Color",
//             value: buttonData.color || "",
//           },
//           {
//             type: "colorinput",
//             name: "backgroundColor",
//             label: "Background Color",
//             value: buttonData.backgroundColor || "",
//           },
//           {
//             type: "input",
//             name: "fontSize",
//             label: "Font Size (e.g., 14px, 1em)",
//             value: buttonData.fontSize || "",
//           },
//           {
//             type: "input",
//             name: "padding",
//             label: "Padding (e.g., 10px 20px)",
//             value: buttonData.padding || "",
//           },
//           {
//             type: "input",
//             name: "borderRadius",
//             label: "Border Radius (e.g., 5px)",
//             value: buttonData.borderRadius || "",
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
//             console.log("Dialog data:", data); // Debugging log

//             var style =
//               "color:" +
//               data.color +
//               ";" +
//               "background-color:" +
//               data.backgroundColor +
//               ";" +
//               "font-size:" +
//               data.fontSize +
//               ";" +
//               "padding:" +
//               data.padding +
//               ";" +
//               "border-radius:" +
//               data.borderRadius +
//               ";";

//             if (buttonData.element) {
//               // Update existing button
//               buttonData.element.setAttribute("style", style);
//               buttonData.element.setAttribute(
//                 "onclick",
//                 "window.location.href='" + data.url + "'"
//               );
//               buttonData.element.innerHTML = data.title;
//             } else {
//               // Insert new button
//               editor.insertContent(
//                 '<button style="' +
//                   style +
//                   '" onclick="window.location.href=\'' +
//                   data.url +
//                   "'\">" +
//                   data.title +
//                   "</button>"
//               );
//             }
//             api.close();
//           },
//         },
//       ],
//       onSubmit: function (api) {
//         var data = api.getData();
//         console.log("Submit data:", data); // Debugging log

//         var style =
//           "color:" +
//           data.color +
//           ";" +
//           "background-color:" +
//           data.backgroundColor +
//           ";" +
//           "font-size:" +
//           data.fontSize +
//           ";" +
//           "padding:" +
//           data.padding +
//           ";" +
//           "border-radius:" +
//           data.borderRadius +
//           ";";

//         if (buttonData.element) {
//           // Update existing button
//           buttonData.element.setAttribute("style", style);
//           buttonData.element.setAttribute(
//             "onclick",
//             "window.location.href='" + data.url + "'"
//           );
//           buttonData.element.innerHTML = data.title;
//         } else {
//           // Insert new button
//           editor.insertContent(
//             '<button style="' +
//               style +
//               '" onclick="window.location.href=\'' +
//               data.url +
//               "'\">" +
//               data.title +
//               "</button>"
//           );
//         }
//         api.close();
//       },
//     });
//   }

//   // Add a button that opens a window
//   editor.ui.registry.addButton("mybutton", {
//     text: "My Button",
//     onAction: function () {
//       openDialog({});
//     },
//   });

//   // Adds a menu item
//   editor.ui.registry.addMenuItem("myMenuItem", {
//     text: "My Menu Item",
//     onAction: function () {
//       editor.insertContent("&nbsp;<em>You clicked my menu item!</em>&nbsp;");
//     },
//   });

//   // Handle clicking on a button within the editor
//   editor.on("click", function (e) {
//     if (e.target.tagName === "BUTTON") {
//       var buttonElement = e.target;
//       var style = buttonElement.getAttribute("style");
//       var onclick = buttonElement.getAttribute("onclick");
//       var urlMatch = onclick
//         ? onclick.match(/window\.location\.href='([^']+)'/)
//         : null;
//       openDialog({
//         element: buttonElement,
//         title: buttonElement.innerHTML,
//         url: urlMatch ? urlMatch[1] : "",
//         color: style.match(/color:([^;]+)/)
//           ? style.match(/color:([^;]+)/)[1].trim()
//           : "",
//         backgroundColor: style.match(/background-color:([^;]+)/)
//           ? style.match(/background-color:([^;]+)/)[1].trim()
//           : "",
//         fontSize: style.match(/font-size:([^;]+)/)
//           ? style.match(/font-size:([^;]+)/)[1].trim()
//           : "",
//         padding: style.match(/padding:([^;]+)/)
//           ? style.match(/padding:([^;]+)/)[1].trim()
//           : "",
//         borderRadius: style.match(/border-radius:([^;]+)/)
//           ? style.match(/border-radius:([^;]+)/)[1].trim()
//           : "",
//       });
//     }
//   });

//   // Return the metadata for the help plugin
//   return {
//     getMetadata: function () {
//       return {
//         name: "Example plugin",
//         url: "http://example.com",
//       };
//     },
//   };
// });

// tinymce.PluginManager.add("mycustomplugin", function (editor, url) {
//   function openDialog(buttonData) {
//     editor.windowManager.open({
//       title: "Button Creator",
//       body: {
//         type: "panel",
//         items: [
//           {
//             type: "input",
//             name: "title",
//             label: "Button Text",
//             value: buttonData.title || "",
//           },
//           {
//             type: "input",
//             name: "url",
//             label: "Button URL",
//             value: buttonData.url || "",
//           },
//           {
//             type: "colorinput",
//             name: "color",
//             label: "Text Color",
//             value: buttonData.color || "",
//           },
//           {
//             type: "colorinput",
//             name: "backgroundColor",
//             label: "Background Color",
//             value: buttonData.backgroundColor || "",
//           },
//           {
//             type: "input",
//             name: "fontSize",
//             label: "Font Size (e.g., 14px, 1em)",
//             value: buttonData.fontSize || "",
//           },
//           {
//             type: "input",
//             name: "padding",
//             label: "Padding (e.g., 10px 20px)",
//             value: buttonData.padding || "",
//           },
//           {
//             type: "input",
//             name: "borderRadius",
//             label: "Border Radius (e.g., 5px)",
//             value: buttonData.borderRadius || "",
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
//             console.log("Dialog data:", data); // Debugging log

//             var style =
//               "color:" +
//               data.color +
//               ";" +
//               "background-color:" +
//               data.backgroundColor +
//               ";" +
//               "font-size:" +
//               data.fontSize +
//               ";" +
//               "padding:" +
//               data.padding +
//               ";" +
//               "border-radius:" +
//               data.borderRadius +
//               ";";

//             if (buttonData.element) {
//               // Update existing button
//               buttonData.element.setAttribute("style", style);
//               buttonData.element.setAttribute(
//                 "onclick",
//                 "window.location.href='" + data.url + "'"
//               );
//               buttonData.element.innerHTML = data.title;
//             } else {
//               // Insert new button
//               editor.insertContent(
//                 '<button style="' +
//                   style +
//                   '" onclick="window.location.href=\'' +
//                   data.url +
//                   "'\">" +
//                   data.title +
//                   "</button>"
//               );
//             }
//             api.close();
//           },
//         },
//       ],
//       onSubmit: function (api) {
//         var data = api.getData();
//         console.log("Submit data:", data); // Debugging log

//         var style =
//           "color:" +
//           data.color +
//           ";" +
//           "background-color:" +
//           data.backgroundColor +
//           ";" +
//           "font-size:" +
//           data.fontSize +
//           ";" +
//           "padding:" +
//           data.padding +
//           ";" +
//           "border-radius:" +
//           data.borderRadius +
//           ";";

//         if (buttonData.element) {
//           // Update existing button
//           buttonData.element.setAttribute("style", style);
//           buttonData.element.setAttribute(
//             "onclick",
//             "window.location.href='" + data.url + "'"
//           );
//           buttonData.element.innerHTML = data.title;
//         } else {
//           // Insert new button
//           editor.insertContent(
//             '<button style="' +
//               style +
//               '" onclick="window.location.href=\'' +
//               data.url +
//               "'\">" +
//               data.title +
//               "</button>"
//           );
//         }
//         api.close();
//       },
//     });
//   }

//   // Add a button that opens a window
//   editor.ui.registry.addButton("mybutton", {
//     text: "My Button",
//     onAction: function () {
//       openDialog({});
//     },
//   });

//   // Adds a menu item
//   editor.ui.registry.addMenuItem("myMenuItem", {
//     text: "My Menu Item",
//     onAction: function () {
//       editor.insertContent("&nbsp;<em>You clicked my menu item!</em>&nbsp;");
//     },
//   });

//   // Handle clicking on a button within the editor
//   editor.on("click", function (e) {
//     if (e.target.tagName === "BUTTON") {
//       var buttonElement = e.target;
//       var style = buttonElement.getAttribute("style") || "";
//       var onclick = buttonElement.getAttribute("onclick") || "";
//       var urlMatch = onclick.match(/window\.location\.href='([^']+)'/);
//       openDialog({
//         element: buttonElement,
//         title: buttonElement.innerHTML,
//         url: urlMatch ? urlMatch[1] : "",
//         color: (style.match(/color:([^;]+)/) || [])[1] || "",
//         backgroundColor:
//           (style.match(/background-color:([^;]+)/) || [])[1] || "",
//         fontSize: (style.match(/font-size:([^;]+)/) || [])[1] || "",
//         padding: (style.match(/padding:([^;]+)/) || [])[1] || "",
//         borderRadius: (style.match(/border-radius:([^;]+)/) || [])[1] || "",
//       });
//     }
//   });

//   // Return the metadata for the help plugin
//   return {
//     getMetadata: function () {
//       return {
//         name: "Example plugin",
//         url: "http://example.com",
//       };
//     },
//   };
// });

tinymce.PluginManager.add("mycustomplugin", function (editor, url) {
  function openDialog(buttonData) {
    editor.windowManager.open({
      title: "Button Creator",
      body: {
        type: "panel",
        items: [
          {
            type: "input",
            name: "title",
            label: "Button Text",
            value: buttonData.title || "",
          },
          {
            type: "input",
            name: "url",
            label: "Button URL",
            value: buttonData.url || "",
          },
          {
            type: "colorinput",
            name: "color",
            label: "Text Color",
            value: buttonData.color || "",
          },
          {
            type: "colorinput",
            name: "backgroundColor",
            label: "Background Color",
            value: buttonData.backgroundColor || "",
          },
          {
            type: "input",
            name: "fontSize",
            label: "Font Size (e.g., 14px, 1em)",
            value: buttonData.fontSize || "",
          },
          {
            type: "input",
            name: "padding",
            label: "Padding (e.g., 10px 20px)",
            value: buttonData.padding || "",
          },
          {
            type: "input",
            name: "borderRadius",
            label: "Border Radius (e.g., 5px)",
            value: buttonData.borderRadius || "",
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
          onclick: function (api) {
            var data = api.getData();
            console.log("Dialog data:", data); // Debugging log

            var style =
              "color:" +
              data.color +
              ";" +
              "background-color:" +
              data.backgroundColor +
              ";" +
              "font-size:" +
              data.fontSize +
              ";" +
              "padding:" +
              data.padding +
              ";" +
              "border-radius:" +
              data.borderRadius +
              ";";

            if (buttonData.element) {
              // Update existing button
              buttonData.element.setAttribute("style", style);
              buttonData.element.setAttribute(
                "onclick",
                "window.location.href='" + data.url + "'"
              );
              buttonData.element.innerHTML = data.title;
            } else {
              // Insert new button
              editor.insertContent(
                '<button style="' +
                  style +
                  '" onclick="window.location.href=\'' +
                  data.url +
                  "'\">" +
                  data.title +
                  "</button>"
              );
            }
            api.close();
          },
        },
      ],
      onSubmit: function (api) {
        var data = api.getData();
        console.log("Submit data:", data); // Debugging log

        var style =
          "color:" +
          data.color +
          ";" +
          "background-color:" +
          data.backgroundColor +
          ";" +
          "font-size:" +
          data.fontSize +
          ";" +
          "padding:" +
          data.padding +
          ";" +
          "border-radius:" +
          data.borderRadius +
          ";";

        if (buttonData.element) {
          // Update existing button
          buttonData.element.setAttribute("style", style);
          buttonData.element.setAttribute(
            "onclick",
            "window.location.href='" + data.url + "'"
          );
          buttonData.element.innerHTML = data.title;
        } else {
          // Insert new button
          editor.insertContent(
            '<button style="' +
              style +
              '" onclick="window.location.href=\'' +
              data.url +
              "'\">" +
              data.title +
              "</button>"
          );
        }
        api.close();
      },
    });
  }

  // Add a button that opens a window
  editor.ui.registry.addButton("mybutton", {
    text: "My Button",
    onAction: function () {
      openDialog({});
    },
  });

  // Adds a menu item
  editor.ui.registry.addMenuItem("myMenuItem", {
    text: "My Menu Item",
    onAction: function () {
      editor.insertContent("&nbsp;<em>You clicked my menu item!</em>&nbsp;");
    },
  });

  // Handle clicking on a button within the editor
  editor.on("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      var buttonElement = e.target;
      var style = buttonElement.getAttribute("style") || "";
      var onclick = buttonElement.getAttribute("onclick") || "";
      var urlMatch = onclick.match(/window\.location\.href='([^']+)'/);
      openDialog({
        element: buttonElement,
        title: buttonElement.innerHTML,
        url: urlMatch ? urlMatch[1] : "",
        color: (style.match(/color:([^;]+)/) || [])[1] || "",
        backgroundColor:
          (style.match(/background-color:([^;]+)/) || [])[1] || "",
        fontSize: (style.match(/font-size:([^;]+)/) || [])[1] || "",
        padding: (style.match(/padding:([^;]+)/) || [])[1] || "",
        borderRadius: (style.match(/border-radius:([^;]+)/) || [])[1] || "",
      });
    }
  });

  // Return the metadata for the help plugin
  return {
    getMetadata: function () {
      return {
        name: "Example plugin",
        url: "http://example.com",
      };
    },
  };
});
