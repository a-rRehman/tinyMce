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
