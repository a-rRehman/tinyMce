import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EditorComponent } from '@tinymce/tinymce-angular';

declare var tinymce: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EditorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dynamicContentContainer', { static: false }) container:
    | ElementRef
    | undefined;

  @ViewChild('dynamicContentContainer1', { static: false }) container1:
    | ElementRef
    | undefined;

  @ViewChild('dynamicContentContainer2', { static: false }) container2:
    | ElementRef
    | undefined;

  content = `
    <style>
    button{
    cursor:pointer;
    }
     body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
}
#header1 {
  min-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-image: url("https://template1.lincsell.com/wp-content/uploads/2020/10/h-slider-01.jpg");
  background-image: url("/assets/header.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
#header1 h1 {
  text-align: center;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 147px;
  font-family: "EB Garamond";
}
#header1 p {
  text-align: center;
  width: 60%;
  font-weight: 600;
  color: white;
  font-size: 22px;
  font-family: "EB Garamond";
}
#header1 button {
  font-family: "Catamaran", Sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 1.2px;
  color: #ffffff;
  border: none;
  padding: 13px 28px 12px 28px;
  background-color: black;
}

    </style>
    <header id="header1">
      <h1 style="color:white;">A Slice of Heaven</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <a href="https://www.google.com">
        <button id="customButton">More About Sweets</button>
      </a>
    </header>
  `;

  content1 = `
   <div class="services-section" style="padding-top:100px;padding-bottom:100px;width:100%;">
      <div class="service">
        <img
          style="width:64px;height:72px"
          src="https://template3.lincsell.com/wp-content/uploads/2020/04/med-home-icon-1.png"
          alt="Service 1"
        />
        <h3>Custom Formulations</h3>
        <p>
          Create bespoke CBD blends with our expert formulation services
          tailored to your needs.
        </p>
      </div>
      <div class="service">
        <img
          style="width:64px;height:72px"
          src="https://template3.lincsell.com/wp-content/uploads/2020/04/med-home-icon-2.png"
          alt="Service 2"
        />
        <h3>Third-Party Testing</h3>
        <p>
          Ensure product safety and efficacy with rigorous testing from
          accredited third-party labs.
        </p>
      </div>
      <div class="service">
        <img
          style="width:64px;height:72px"
          src="https://template3.lincsell.com/wp-content/uploads/2020/04/med-home-icon-3.png"
          alt="Service 3"
        />
        <h3>Educational Workshops</h3>
        <p>
          Learn everything about CBD products through our detailed workshops and
          training sessions.
        </p>
      </div>
   
        <div class="service">
          <img
            style="width:64px;height:72px"
            src="https://template3.lincsell.com/wp-content/uploads/2020/04/med-home-icon-1.png"
            alt="Service 1"
          />
          <h3>Custom Formulations</h3>
          <p>
            Create bespoke CBD blends with our expert formulation services
            tailored to your needs.
          </p>
        </div>
        <style>
        .services-section {
  display: flex;
  flex-wrap: nowrap;
  justify-content:center;
  background-color: #fff;
}
.service {
  width: 20%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 15px;
  padding: 20px;
  text-align: center;
  background-color: #b8e61134;
  border: 1px solid rgba(0, 0, 0, 0.169);
  border-radius: 20px;
}
.service img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.service h3 {
  color: #333;
  font-size: 20px;
  margin-top: 15px;
}
.service p {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
}

        </style>
  `;

  content2 = `
   <div class="greetings-section" style="margin-top: 100px; margin-bottom: 100px">
  <p>GET TO KNOW US</p>
  <h1>Greetings From Lincsell</h1>
  <a href="www.google.com"
    ><button class="greetButton">More About Us</button></a
  >
</div>

<style>
  .greetButton {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #010000;
    border-radius: 0px 0px 0px 0px;
    padding: 12px 28px 12px 28px;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
  }
  .greetings-section {
    background-image: url("https://template1.lincsell.com/wp-content/uploads/2020/10/h-img-05.jpg");
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 95%;
    margin: 50px auto;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .greetings-section h1 {
    font-size: 70px;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .greetings-section p {
    font-size: 1.2em;
    color: #ffffff;
    line-height: 1.6;
  }
</style>

  `;

  cssContent = `
<style>
 button{
 cursor:pointer;
 }
 body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
}
#header1 {
  min-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/assets/header.jpg");
  background-repeat: no-repeat;
   background-size: cover;
}
#header1 h1 {
  text-align: center;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 147px;
  font-family: "EB Garamond";
}
#header1 p {
  text-align: center;
  width: 60%;
  font-weight: 600;
  color: white;
  font-size: 22px;
  font-family: "EB Garamond";
}
#header1 button {
  font-family: "Catamaran", Sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 1.2px;
  color: #ffffff;
  border: none;
  padding: 13px 28px 12px 28px;
  background-color: black;
  }
  </style>
  `;

  cssContent1 = `
 <style>
        .services-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #fff;
}
.service {
  width: 20%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 15px;
  padding: 20px;
  text-align: center;
  background-color: #b8e61134;
  border: 1px solid rgba(0, 0, 0, 0.169);
  border-radius: 20px;
}
.service img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.service h3 {
  color: #333;
  font-size: 20px;
  margin-top: 15px;
}
.service p {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
}

        </style>
  `;

  cssContent2 = `
 
<style>
  .greetButton {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #010000;
    border-radius: 0px 0px 0px 0px;
    padding: 12px 28px 12px 28px;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
  }
  .greetings-section {
    background-image: url("https://template1.lincsell.com/wp-content/uploads/2020/10/h-img-05.jpg");
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 95%;
    margin: 50px auto;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .greetings-section h1 {
    font-size: 70px;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .greetings-section p {
    font-size: 1.2em;
    color: #ffffff;
    line-height: 1.6;
  }
</style>

  `;

  constructor(private renderer: Renderer2) {}

  showEditButton = false;
  showEditButton1 = false;
  isEditing = false;
  isEditing1 = false;
  isEditing2 = false;

  init: EditorComponent['init'] = {
    base_url: '/tinymce',
    suffix: '.min',
    selector: 'textarea#default',
    menubar: false,
    resize: 'both',
    min_height: 760,
    context_toolbar: true,
    plugins: [
      'customButtonPlugin',
      'autosave',
      'charmap',
      'code',
      'codesample',
      'fullscreen',
      'image',
      'link',
      'nonbreaking',
      'preview',
      'save',
      'wordcount',
      'backgroundImageChanger',
      'contextmenu',
    ],
    toolbar:
      'customButton fontselect | undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' +
      'bullist numlist outdent indent | link image | print preview media fullscreen |' +
      'forecolor backcolor emoticons | code | backgroundImageChanger ',
    contextmenu: 'link image table',
    external_plugins: {
      customButtonPlugin:
        '/assets/tinymce/plugins/mycustomplugin/custom-button-plugin.js',
      backgroundImageChanger:
        '/assets/tinymce/plugins/mycustomplugin/backgroundImageChanger.js',
    },
    menu: {
      favs: {
        title: 'Menu',
        items: 'code visualaid | searchreplace | emoticons',
      },
    },
    content_css: '/assets/tinymce/css/header.css',
    image_title: true,
    automatic_uploads: true,
    file_picker_types: 'image',
    file_picker_callback: (cb: any, value: any, meta: any) => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');

      input.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          const file = target.files[0];

          const reader = new FileReader();
          reader.addEventListener('load', () => {
            const id = 'blobid' + new Date().getTime();
            const blobCache = tinymce.activeEditor.editorUpload.blobCache;
            const base64 = (reader.result as string).split(',')[1];
            const blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);

            /* Call the callback and populate the Title field with the file name */
            cb(blobInfo.blobUri(), { title: file.name });
            console.log({
              id,
              blobUri: blobInfo.blobUri(),
              fileName: file.name,
            });
          });
          reader.readAsDataURL(file);
        }
      });

      input.click();
    },
    setup: (editor) => {
      editor.on('init', () => {
        editor.setContent(this.content);
      });
      editor.ui.registry.addContextToolbar('imagealignment', {
        predicate: (node) => node.nodeName.toLowerCase() === 'img',
        items: 'alignleft aligncenter alignright',
        position: 'node',
        scope: 'node',
      });
      editor.ui.registry.addContextToolbar('textselection', {
        predicate: (node) => !editor.selection.isCollapsed(),
        // items: 'bold italic | blockquote |alignleft aligncenter alignright ',
        items:
          'bold italic underline | alignleft aligncenter alignright | bullist numlist | blockquote | code',
        position: 'selection',
        scope: 'node',
      });
    },
  };

  init1: EditorComponent['init'] = {
    base_url: '/tinymce',
    suffix: '.min',
    selector: 'textarea#default',
    menubar: false,
    height: 500,
    plugins: [
      // 'advlist',
      // 'anchor',
      // 'autolink',
      'autosave',
      'charmap',
      'code',
      'codesample',
      // 'directionality',
      // 'emoticons',
      'fullscreen',
      // 'help',
      'image',
      // 'importcss',
      // 'insertdatetime',
      'link',
      // 'lists',
      // 'media',
      'nonbreaking',
      // 'pagebreak',
      'preview',
      // 'quickbars',
      'save',
      // 'searchreplace',
      // 'table',
      // 'visualblocks',
      // 'visualchars',
      'wordcount',
    ],
    toolbar:
      'undo redo| styles fontsize | bold italic underline | alignleft aligncenter alignright alignjustify |' +
      'bullist numlist outdent indent | link image | print preview media fullscreen |' +
      'forecolor backcolor emoticons | code | customTextButton',
    //  | mybutton | customHeaderButton',
    content_css: '/assets/tinymce/css/editor.css',
    external_plugins: {
      backgroundImageChanger:
        '/assets/tinymce/plugins/mycustomplugin/backgroundImageChanger.js',
      //  mycustomplugin: '/assets/tinymce/plugins/mycustomplugin/plugin.js',
      //  customHeader: '/assets/tinymce/plugins/mycustomplugin/customheader.js',
    },
    menu: {
      favs: {
        title: 'Menu',
        items: 'code visualaid | searchreplace | emoticons',
      },
    },

    // menubar: 'favs file edit view insert format tools table',
    content_style:
      'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
    image_title: true,
    automatic_uploads: true,
    file_picker_types: 'image',
    image_dimensions: false,
    file_picker_callback: (cb: any, value: any, meta: any) => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');

      input.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          const file = target.files[0];

          const reader = new FileReader();
          reader.addEventListener('load', () => {
            const id = 'blobid' + new Date().getTime();
            const blobCache = tinymce.activeEditor.editorUpload.blobCache;
            const base64 = (reader.result as string).split(',')[1];
            const blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);

            /* call the callback and populate the Title field with the file name */
            cb(blobInfo.blobUri(), { title: file.name });
            console.log({
              id,
              blobUri: blobInfo.blobUri(),
              fileName: file.name,
            });
            // Add a notification here
            tinymce.activeEditor.notificationManager.open({
              text: 'Image successfully uploaded!',
              type: 'success',
              timeout: 3000,
            });
          });
          reader.readAsDataURL(file);
        }
      });

      input.click();
    },
    setup: (editor) => {
      editor.ui.registry.addButton('customTextButton', {
        text: 'Icon Width:64px Height:72px',
        onAction: function (_) {
          // editor.notificationManager.open({
          //   text: 'Button Clicked!',
          //   type: 'info',
          //   timeout: 3000,
          // });
        },
      });

      editor.on('init', () => {
        editor.setContent(this.content1);
      });

      editor.on('NodeChange', function (e) {
        if (e.element.nodeName === 'IMG') {
          const imgElement = e.element as HTMLElement;
          imgElement.style.width = '64px';
          imgElement.style.height = '72px';
        }
      });
      editor.ui.registry.addContextToolbar('imagealignment', {
        predicate: (node) => node.nodeName.toLowerCase() === 'img',
        items: 'alignleft aligncenter alignright',
        position: 'node',
        scope: 'node',
      });
      editor.ui.registry.addContextToolbar('textselection', {
        predicate: (node) => !editor.selection.isCollapsed(),
        // items: 'bold italic | blockquote |alignleft aligncenter alignright ',
        items: 'bold italic underline  | bullist numlist | blockquote | code',
        position: 'selection',
        scope: 'node',
      });
    },
  };

  init2: EditorComponent['init'] = {
    base_url: '/tinymce',
    suffix: '.min',
    selector: 'textarea#default',
    menubar: false,
    resize: 'both',
    min_height: 760,
    plugins: [
      'autosave',
      'charmap',
      'code',
      'codesample',
      'fullscreen',
      'image',
      'link',
      'nonbreaking',
      'preview',
      'save',
      'wordcount',
      'backgroundImageChanger', // Custom plugin
    ],
    toolbar:
      'fontselect | undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' +
      'bullist numlist outdent indent | link image | print preview media fullscreen |' +
      'forecolor backcolor emoticons | code | backgroundImageChanger',
    contextmenu: 'link image table',
    external_plugins: {
      backgroundImageChanger:
        '/assets/tinymce/plugins/mycustomplugin/backgroundImageChanger.js',
    },
    menu: {
      favs: {
        title: 'Menu',
        items: 'code visualaid | searchreplace | emoticons',
      },
    },
    content_css: '/assets/tinymce/css/greeting.css',
    image_title: true,
    automatic_uploads: true,
    file_picker_types: 'image',
    file_picker_callback: (cb: any, value: any, meta: any) => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');

      input.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          const file = target.files[0];

          const reader = new FileReader();
          reader.addEventListener('load', () => {
            const id = 'blobid' + new Date().getTime();
            const blobCache = tinymce.activeEditor.editorUpload.blobCache;
            const base64 = (reader.result as string).split(',')[1];
            const blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);

            /* Call the callback and populate the Title field with the file name */
            cb(blobInfo.blobUri(), { title: file.name });
            console.log({
              id,
              blobUri: blobInfo.blobUri(),
              fileName: file.name,
            });
          });
          reader.readAsDataURL(file);
        }
      });

      input.click();
    },
    setup: (editor) => {
      editor.on('init', () => {
        editor.setContent(this.content2);
      });
      editor.ui.registry.addContextToolbar('imagealignment', {
        predicate: (node) => node.nodeName.toLowerCase() === 'img',
        items: 'alignleft aligncenter alignright',
        position: 'node',
        scope: 'node',
      });
      editor.ui.registry.addContextToolbar('textselection', {
        predicate: (node) => !editor.selection.isCollapsed(),
        // items: 'bold italic | blockquote |alignleft aligncenter alignright ',
        items: 'bold italic underline | bullist numlist | blockquote | code',
        position: 'selection',
        scope: 'node',
      });
    },
  };

  ngAfterViewInit(): void {
    this.onChange();
    this.onChange1();
  }

  onChange() {
    this.loadDynamicContent();
  }

  onChange1() {
    this.loadDynamicContent1();
  }
  onChange2() {
    this.loadDynamicContent2();
  }

  loadDynamicContent() {
    const div = this.renderer.createElement('div');
    this.renderer.setProperty(div, 'innerHTML', this.content);
    this.renderer.appendChild(this.container?.nativeElement, div);
  }
  loadDynamicContent1() {
    const div = this.renderer.createElement('div');
    this.renderer.setProperty(div, 'innerHTML', this.content1);
    this.renderer.appendChild(this.container1?.nativeElement, div);
  }
  loadDynamicContent2() {
    const div = this.renderer.createElement('div');
    this.renderer.setProperty(div, 'innerHTML', this.content2);
    this.renderer.appendChild(this.container2?.nativeElement, div);
  }

  toggleEditor() {
    this.isEditing = !this.isEditing;
  }

  toggleEditor1() {
    this.isEditing1 = !this.isEditing1;
  }

  toggleEditor2() {
    this.isEditing2 = !this.isEditing2;
  }

  saveContent() {
    const htmlContent = tinymce.activeEditor.getContent();
    this.content = `${this.cssContent}${htmlContent}`;
    this.toggleEditor();
    setTimeout(() => {
      this.loadDynamicContent();
    }, 500);
  }

  saveContent1() {
    const htmlContent = tinymce.activeEditor.getContent();
    this.content1 = `${this.cssContent1}${htmlContent}`;
    this.toggleEditor1();
    setTimeout(() => {
      this.loadDynamicContent1();
    }, 500);
  }

  saveContent2() {
    const htmlContent = tinymce.activeEditor.getContent();
    this.content2 = `${this.cssContent2}${htmlContent}`;

    this.toggleEditor2();
    setTimeout(() => {
      this.loadDynamicContent2();
    }, 500);
  }
}
