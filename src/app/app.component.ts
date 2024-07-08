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

  content = `
    <style>
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
  background-image: url("https://template1.lincsell.com/wp-content/uploads/2020/10/h-slider-01.jpg");
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
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 1.2px;
  color: #ffffff;
  border: none;
  padding: 13px 28px 12px 28px;
  background-color: rgba(255, 255, 255, 0.519);
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
        <button>More About Sweets</button>
      </a>
    </header>
  `;

  cssContent = `
<style>

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
  background-image: url("https://template1.lincsell.com/wp-content/uploads/2020/10/h-slider-01.jpg");
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
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 1.2px;
  color: #ffffff;
  border: none;
  padding: 13px 28px 12px 28px;
  background-color: rgba(255, 255, 255, 0.519);
  }
  </style>
  `;

  constructor(private renderer: Renderer2) {}

  isEditing = false;

  init: EditorComponent['init'] = {
    base_url: '/tinymce',
    suffix: '.min',
    selector: 'textarea#default',
    menubar: false,
    height: 780,
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
    },
  };

  ngAfterViewInit(): void {
    this.onChange();
  }

  onChange() {
    this.loadDynamicContent();
  }

  loadDynamicContent() {
    const div = this.renderer.createElement('div');
    this.renderer.setProperty(div, 'innerHTML', this.content);
    this.renderer.appendChild(this.container?.nativeElement, div);
  }

  toggleEditor() {
    this.isEditing = !this.isEditing;
  }

  saveContent() {
    const htmlContent = tinymce.activeEditor.getContent();
    this.content = `${this.cssContent}${htmlContent}`;
    console.log(this.content);
    this.toggleEditor();
    setTimeout(() => {
      this.loadDynamicContent();
    }, 500);
  }
}
