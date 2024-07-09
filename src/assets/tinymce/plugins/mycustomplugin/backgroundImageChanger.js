//Hard Coded Background code

tinymce.PluginManager.add("backgroundImageChanger", function (editor, url) {
  editor.ui.registry.addButton("backgroundImageChanger", {
    text: "Change Background Image [ Width:1125px Height: 790px ]",
    onAction: function () {
      var input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");

      input.onchange = function () {
        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function () {
          // Assuming the element to change background is always present
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

  // Add a menu item
  editor.ui.registry.addMenuItem("backgroundImageChanger", {
    text: "Change Background Image [ Width:1125px Height: 790px ]",
    onAction: function () {
      editor.execCommand("mcebackgroundImageChanger");
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

// Dynamic Background Changer

// tinymce.PluginManager.add("backgroundImageChanger", function (editor, url) {
//   editor.ui.registry.addButton("backgroundImageChanger", {
//     text: "Change Background Image [ Width:1125px Height: 790px ]",
//     onAction: function () {
//       var selector = prompt(
//         "Enter the selector of the element (e.g., #header1, .className, tagName):"
//       );
//       console.log(selector);
//       if (!selector) {
//         return; // Exit if no selector is provided
//       }

//       var input = document.createElement("input");
//       input.setAttribute("type", "file");
//       input.setAttribute("accept", "image/*");

//       input.onchange = function () {
//         var file = this.files[0];
//         var reader = new FileReader();

//         reader.onload = function () {
//           // Get the elements based on the provided selector
//           var elements = editor.dom.select(selector);
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

//Section Wise

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
//           // Select all section tags in the editor's content
//           var sections = editor.dom.select('section');
//           sections.forEach(function (section) {
//             editor.dom.setStyle(
//               section,
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
