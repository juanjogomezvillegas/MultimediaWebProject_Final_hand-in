# MultimediaWebProject_Final_hand-in

## Author

Juan José Gómez Villegas (u1987338@campus.udg.edu)

## Technical report

### Description of the page structure (wireframe)

Access to the figma project with the wireframe of the website: [link](https://www.figma.com/design/eOtc2I2FOZvaaKRcfUL9fC/Final-hand-in?node-id=0-1&t=j0sYyAlfZ1NQ3uiQ-1).

All the content of the website is structured on a single page: The first section is the header and navigation bar that a sticky position in the top; then we see the slider with QR code, which must be scanned with the mobile phone camera in order to access a augmented reality application; then we find two sections, one for welcome and another that indicates the distances from the city of Figueres to other places of interest; then find information about Figueres; and below the *activity shop*, allows the user to add/remove available activities from the cart; Finally, we find an application where the user can see how the map of Figueres has changed over the years, *you can see all of Catalonia*, and the Figueres history section; Below the website of the footer. And to return the top, just click on the button with the up arrow.

### Description of the implemented features and multimedia elements

The implemented features and multimedia elements in each component are as follows:

- **App**. Features implemented: handleThemeChange, change background and text color theme of the website (it can be, default, blood and dark); handleFontChange, change font family the texts of the website (it can be, Arial, OldNewspaperTypes, Royal and Olivetti); handleLangChange change language of the website (it can be, catalan, spanish, english and french); slaiderImageChange, allows the user to change the slider image.

- **Header**. Only contains the structure of the navigation bar and the header, and contains three selects for modify language, font family and theme of the website.

- **Slider**. Contains a two buttons (previous image and next image), and contains a image where is it seen the Rambla of Figueres next to the museum Dalí the Figueres and in the middle the image contains a QR code that access to reality augmented application with **Web AR**, the image of the slaider has been edited with **Gimp** software. And by clicking on next image or previous image, the image is changed to an autoplaying video, editting with **Blender** software. The video editting shows a header image, to then show the earth from space, and as we approach the city of Figueres, the Empordà song by Sopa de Cabra plays in the background, at the end of the video, and the cut of the song, a final image is shown. To cut a piece of the entire original song, it was used **Audacity** software.

- **Presentation**. A simple div with title and description defined in the json object.

- **Distances**. A simple div with heading two titles and image editting with **Gimp** software to change the color of the icons from black to white.

- **AboutInfo**. A definition list the DtAndDd list component, what are key the definitions list of the definitions list. the first level of dl they are title, the second level of dl they are field, the third level of dl they are a data with the second level fiels.

- **Activities**. Responsible for all management of the *activity store*, the code is similar to what I did in the React exercise (udg-shop), but changing products by activities and prices by hours. An audio sound has been added to the code when clicking on addProduct and delProduct.

- **Location**. To add more interactivity for the user, in this section you will see a map of the city of Figueres, where you can also change the year on the map and see how the city has changed over the years. To achieve this, just add an iframe in this component with the link to website [Ull del temps](https://visors.icgc.cat/ulldeltemps/?layer=ortofoto_color_2000-2003#16.39/42.267125/2.961398).

- **History**. First it shows the explanation of what has happened in recent times (since of 1976), and then the user can navigate through the other eras with the buttons (next time and previous time). The definition of how an era is displayed is in the TimeHistory component, it is just a title, a paragraph and two buttons (next time and previous time), that the function which will be executed on click to the button are declared in the History component. To change the period simply modify the constant currTime, which is a position in the list of all times, where each position is also a list of two positions: position 0 contains the title; position 1 contains the paragraph.

- **BtnTop**. A simple definition of the button to return to the top of the website.

- **Footer**. A simple footer of the website, contains the name of the author and the four flags.

Multimedia elements are located in the public/multimedia_files directory, where there are directories for audios, fonts, images and videos.

### Brief explanation of the development process

The development process has been done component by component, that is, starting from the wireframe and in App.js we defined the structure of the web page in components (Header, Slider, Presentation, Distances, AboutInfo, Activities, Location, History, BtnTop and Footer). Then develop each component separately, so that each component is like an island, the only thing that all the components share is the json object with the data of each section, and some functions to modify the font family, language and theme, and to change the language in the json object each section appears with the four available languages, therefore, each component will have an attribute where you need to put data[lang]["sections"][section], where lang is the selected language and where section is the defined section in json object. Thanks to each component being like an island, the code is more modular and easier to understand, read and modify in a future version.

Within the development process we also had to define the json object with the data, but this was done in parallel with the development of the web. And also in parallel with the development process, the augmented reality application has been developed with WebAR, and the different multimedia files with Gimp, Blender and Audacity.

### Instructions to local run the website

In the project directory, you can run:

- `npm start`. Runs the app in the development mode; Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

or

- `npm run build`. Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

## The Code

[Link to the code](https://github.com/juanjogomezvillegas/MultimediaWebProject_Final_hand-in).
