import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EditorComponent, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

declare var tinymce: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EditorComponent],
  template: ` <editor [init]="init" /> `,
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class AppComponent {
  initialValue = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Online Store</title>
  </head>
  <body>
    <!-- About Us -->
    <section>
      <img
        src="https://template1.lincsell.com/wp-content/uploads/2024/03/glogo-2-2.png"
        alt=""
        width="10%"
      />
      <!-- <ul
        style="
          text-decoration: none;
          display: flex;
          gap: 20px;
          font-weight: 500;
        "
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button
        style="
          font-family: 'Catamaran', Sans-serif;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          font-style: normal;
          letter-spacing: 1.2px;
          color: #ffffff;
          border: none;
          padding: 13px 28px 12px 28px;
          background-color: rgba(255, 255, 255, 0.519);
        "
      >
        More About Sweets
      </button> -->
    </section>
    <header>
       <img
        src="https://template1.lincsell.com/wp-content/uploads/2020/10/h-slider-01.jpg"
        alt=""
      />
    </header">
      <header id="header1" style="margin-top:-650px;margin-bottom:500px; display:flex; flex-direction:column; align-items:center;">
      <h1
        style="
          text-align:center;
          padding: 0px;
          margin: 0px;
          color: white;
          font-size: 147px;
          font-family: 'EB Garamond';
        "
      >
        A Slice of Heaven
      </h1>
      <p
        style="
          text-align:center;
          width:60%;
          font-weight: 600;
          color: white;
          font-size: 22px;
          font-family: 'EB Garamond';
        "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <button
        style="
          
          font-family: 'Catamaran', Sans-serif;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          font-style: normal;
          letter-spacing: 1.2px;
          color: #ffffff;
          border: none;
          padding: 13px 28px 12px 28px;
          background-color: rgba(255, 255, 255, 0.519);
        "
      >
        More About Sweets
      </button>
    </header>
    <!-- Our Top Picks -->
    <h2 style="text-align: center; font-size: 60px">Our Top Picks For You</h2>
    <section id="top-picks" style="display: flex; flex-direction: row; align-items:center;justify-content:center;">
      <div class="product" style="display: flex; flex-direction: column; align-items:center;justify-content:center;">
        <img
          src="https://template1.lincsell.com/wp-content/uploads/2020/10/h-img-01.jpg"
          style="width: 80%"
          alt=""
          srcset=""
        />
        <h3>Walnut Cake</h3>
        <p>$25.00</p>
      </div>
      <div class="product" style="display: flex; flex-direction: column; align-items:center;justify-content:center;">
        <img
          src="https://template1.lincsell.com/wp-content/uploads/2020/10/h-img-02.jpg"
          style="width: 80%"
          alt=""
          srcset=""
        />
        <h3>Danish Pastry</h3>
        <p>$15.00</p>
      </div>
    </section>


  </body>
</html>

<style>
  li {
    text-decoration: none;
    list-style-type: none;
  }
  body {
    font-family: Arial, sans-serif;
  }

  header,
  section {
    padding: 20px;
    text-align: center;
  }
  #header1 {
    padding-top: 160px;
    padding-bottom: 160px;
    background-image: url('https://template1.lincsell.com/wp-content/uploads/2020/10/h-slider-01.jpg');
    background-size: cover;
  }

  header h1 {
    color: navy;
  }

  .product {
    display: inline-block;
    margin: 10px;
    padding: 10px;
  }

  .product h3 {
    color: darkred;
  }

  #about-us {
    background-color: lightgrey;
    color: darkslategray;
  }
</style>

    `;
  init: EditorComponent['init'] = {
    base_url: '/tinymce',
    suffix: '.min',
    selector: 'textarea#default',
    height: 630,
    plugins: [
      'advlist',
      'anchor',
      'autolink',
      'autosave',
      'charmap',
      'code',
      'codesample',
      'directionality',
      'emoticons',
      'fullscreen',
      'help',
      'image',
      'importcss',
      'insertdatetime',
      'link',
      'lists',
      'media',
      'nonbreaking',
      'pagebreak',
      'preview',
      'quickbars',
      'save',
      'searchreplace',
      'table',
      'visualblocks',
      'visualchars',
      'wordcount',
    ],
    toolbar:
      'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' +
      'bullist numlist outdent indent | link image | print preview media fullscreen |' +
      'forecolor backcolor emoticons | code',
    menu: {
      favs: {
        title: 'Menu',
        items: 'code visualaid | searchreplace | emoticons',
      },
    },

    menubar: 'favs file edit view insert format tools table',
    content_style:
      'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
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

            /* call the callback and populate the Title field with the file name */
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
        editor.setContent(this.initialValue);
      });
    },
  };
}
