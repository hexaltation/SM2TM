# SlideMe2TheMoon
## or Slideshow Monitoring 2 Terminal Monitoring
Project of slideshow keynotes displayed in web browser while annotations are in terminal

This project requires NodeJS installed on your machine.

After cloning it, in the root folder of the project
```shell
npm install
```
Put your Slides in .PNG format in public/images
Put your notes in public/data

In config.json

```javascript
{
  notes:"NameOfYourText.File",
  separator:"YOUR SEPARATOR"
}
```

If separator is set to "" every linefeed \n will be considered by as separator.

To start

```shell
npm start
```
