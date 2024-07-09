// tinymce.PluginManager.add("backgroundImageChanger", function (editor, url) {
//   editor.ui.registry.addButton("backgroundImageChanger", {
//     text: "Change Background Image [ Width:1125px Height: 790px ]",
//     onAction: function () {
//       var input = document.createElement("input");
//       input.setAttribute("type", "file");
//       input.setAttribute("accept", "image/*");

//       input.onchange = function () {
//         var file = this.files[0];
//         var reader = new FileReader();

//         reader.onload = function () {
//           // Assuming the element to change background is always present
//           var elements = editor.dom.select("#header1");
//           elements.forEach(function (element) {
//             editor.dom.setStyle(
//               element,
//               "background-image",
//               "url(" + reader.result + ")"
//             );
//           });
//         };
//         reader.readAsDataURL(file);
//       };

//       input.click();
//     },
//   });

//   // Add a menu item
//   editor.ui.registry.addMenuItem("backgroundImageChanger", {
//     text: "Change Background Image [ Width:1125px Height: 790px ]",
//     onAction: function () {
//       editor.execCommand("mcebackgroundImageChanger");
//     },
//   });

//   return {
//     getMetadata: function () {
//       return {
//         name: "Background Image Changer",
//         url: "http://example.com",
//       };
//     },
//   };
// });

tinymce.PluginManager.add("backgroundImageChanger", function (editor) {
  // Register the button to change the background image
  editor.ui.registry.addButton("backgroundImageChanger", {
    text: "Change Background Image",
    onAction: function () {
      var input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");

      input.onchange = function () {
        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function () {
          // Change background image of the section with ID "header1"
          var elements = editor.dom.select("#header1");
          elements.forEach(function (element) {
            editor.dom.setStyle(
              element,
              "background-image",
              "url(" + reader.result + ")"
            );
          });
        };
        reader.readAsDataURL(file);
      };

      input.click();
    },
  });

  // Add the context toolbar for the section with ID "header1"
  editor.ui.registry.addContextToolbar("backgroundImageChanger", {
    predicate: function (node) {
      return node.id === "header1";
    },
    items: "backgroundImageChanger",
    scope: "node",
    position: "node",
  });

  // Add menu item for changing the background image
  editor.ui.registry.addMenuItem("backgroundImageChanger", {
    text: "Change Background Image",
    onAction: function () {
      editor.execCommand("backgroundImageChanger");
    },
  });

  return {
    getMetadata: function () {
      return {
        name: "Background Image Changer",
        url: "http://example.com",
      };
    },
  };
});
